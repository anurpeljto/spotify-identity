import Image from 'next/image'
import React from 'react'

const LoginBtn = async() => {
  return (
    <a href='api/login' className="flex gap-4 items-center flex-col sm:flex-row">
          <div
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            
          >
            <Image
              src="/spotify.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Log in with spotify
          </div>
        </a>
  )
}

export default LoginBtn
