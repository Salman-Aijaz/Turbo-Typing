from time import *
import random as r
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel



# print(time())

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TypingTestRequest(BaseModel):
    paraTest:str
    userTest:str
    startTime:float
    endTime:float

@app.get("/")
async def getStarted():
    testList=['The quick brown fox jumps over the lazy dog.','Your daily job listings for June 30, 2024','Internship Software Engineer']
    randomTest= r.choice(testList)
    return {"question":randomTest}    
    
@app.post("/")
async def result(request: TypingTestRequest):
    paraTest=request.paraTest
    userTest= request.userTest
    startTime = request.startTime
    endTime = request.endTime
    
    original_words = paraTest.split()
    typed_words = userTest.split()
    correct_words = 0
    incorrect_words = 0 
    wrong_words=[]
    for w1,w2 in zip(original_words,typed_words):
        if w1 == w2:
            correct_words+=1
        else:
            incorrect_words+=1
            wrong_words.append(w2)

    accuracy = (correct_words/len(original_words))*100

    time_delay= endTime-startTime
    speed =len(userTest.split())/time_delay 


    return {
        "speed":round(speed,2),
        "wrong_words":wrong_words,
        "accuracy":accuracy
    }        

