import Image from 'next/image';
import React from 'react';
import clouds from '../Assests/Clouds.png';

const CloudAnimate = () => {
  return (
    <div className='relative w-full h-52 bg-blue-900 overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full animate-move-cloud-slow opacity-50'>
        <Image src={clouds} alt="clouds" layout="fill" objectFit="cover" />
      </div>
      <div className='absolute top-0 left-0 w-full h-full animate-move-cloud-slow opacity-50' style={{ animationDelay: '60s' }}>
        <Image src={clouds} alt="clouds" layout="fill" objectFit="cover" />
      </div>

      <div className='absolute top-0 left-0 w-full h-full animate-move-cloud-medium opacity-70'>
        <Image src={clouds} alt="clouds" layout="fill" objectFit="cover" />
      </div>
      <div className='absolute top-0 left-0 w-full h-full animate-move-cloud-medium opacity-70' style={{ animationDelay: '45s' }}>
        <Image src={clouds} alt="clouds" layout="fill" objectFit="cover" />
      </div>

      <div className='absolute top-0 left-0 w-full h-full animate-move-cloud-fast opacity-80'>
        <Image src={clouds} alt="clouds" layout="fill" objectFit="cover" />
      </div>
      <div className='absolute top-0 left-0 w-full h-full animate-move-cloud-fast opacity-80' style={{ animationDelay: '30s' }}>
        <Image src={clouds} alt="clouds" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default CloudAnimate;
