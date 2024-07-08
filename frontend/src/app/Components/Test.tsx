"use client";
import React, { useEffect, useState } from "react";

const Test = () => {
  interface TestQuestion {
    question: string;
  }

  const [testQuestion, setTestQuestion] = useState<TestQuestion | null>(null);

  const [userTest, setUserTest] = useState("");
 
  const [testResult, setTestResult] = useState<{
    speed?: number;
    wrong_words?: string[];
    accuracy?: number;
  } | null>(null);

  const [startTime, setStartTime] = useState<number | null>(null);

  useEffect(() => {
    const fetchTestQuestion = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/");
        if (response.ok) {
          const data = await response.json();
          setTestQuestion(data);
          setStartTime(Date.now());
        } else {
          console.log("Error fetching Failed");
        }
      } catch (error) {
        console.log("Error fetching Data", error);
      }
    };
    fetchTestQuestion();
  }, []);

  const submitTest = async () => {
    if (testQuestion && userTest && startTime !== null) {
      const endTime = Date.now();
      const requestData = {
        paraTest: testQuestion.question,
        userTest,
        startTime: startTime / 1000,
        endTime: endTime / 1000,
      };

      try {
        const response = await fetch("http://127.0.0.1:8000/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestData),
        });

        if (response.ok) {
          const data = await response.json();
          setTestResult(data);
        } else {
          console.log("Error fetching Failed");
        }
      } catch (error) {
        console.log("Error fetching Data", error);
      }
    }
  };

  return (
    <>
      <div className="pt-28 text-center text-black">
        <h1 className="font-bold xl:text-9xl lg:text-8xl text-6xl tracking-tight leading-5 font-sans">
          Your Test:
        </h1>
      </div>
      <div className="mt-12 md:mt-20 mx-auto max-w-md md:max-w-2/5 bg-gray-200 border-gray-700 p-4 rounded-lg shadow-lg text-black">
        <p className="text-center">
          {testQuestion ? testQuestion.question : "Your test question"}
        </p>
      </div>
      <div className="mt-8 mx-auto max-w-md md:max-w-2/5 text-black">
        <textarea
          name="userTest"
          rows={4}
          className="border-2 border-gray-700 w-full p-2 rounded-md"
          placeholder="Type your text here..."
          value={userTest}
          onChange={(e) => setUserTest(e.target.value)}
        ></textarea>
      </div>
      <div className="mt-8 mx-auto max-w-md md:max-w-2/5 text-center text-lg text-black">
        <button
          className="py-3 px-6 md:px-12 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg"
          onClick={submitTest}
        >
          Submit
        </button>
        {testResult && (
          <>
            <p className="my-2">
              <span className="text-[#36bb91]">Words:</span> {testResult.speed} words per second
            </p>
            <p className="my-2">
              <span className="text-[#36bb91]">Wrong Words:</span> {testResult.wrong_words?.join(", ")}
            </p>
            <p className="my-2">
              <span className="text-[#36bb91]">Accuracy:</span> {testResult.accuracy}%
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default Test;
