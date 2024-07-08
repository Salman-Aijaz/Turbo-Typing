import Image from 'next/image'
import React from 'react'
import logo from "../Assests/Typing logo.png"

const Navbar = () => {
  return (
    <div className='border-b border-blue-200 bg-blue-900'>
    <div className='flex h-16 items-center px-4'>
     <h1 className='flex-1 text-3xl font-bold tracking-tight'>Turbo Typing</h1>
     <Image src={logo} alt='Turbo Typing' className='w-20 h-20'/>
    </div>
    </div>
  )
}

export default Navbar