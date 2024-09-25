import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='md:w-2/3 w-full mx-auto p-5 flex flex-row items-center justify-start border-b-2 border-green-500'>
      <div className='flex flex-row gap-4 items-center'>
        <Image src='/spotify.svg' alt='spotify logo' height={50} width={50}/>
        <div className='flex flex-row'>
            <span className='font-bold text-2xl dark:text-white text-black'>Basically</span>
            <span className='font-bold text-2xl text-green-500'>Spotify</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
