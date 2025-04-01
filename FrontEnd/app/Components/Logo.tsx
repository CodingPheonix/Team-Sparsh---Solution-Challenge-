import React from 'react'
import Image from 'next/image'

const Logo = () => {
    return (
        <div className='flex justify-center items-center gap-2 h-10 w-auto'>
            <Image
                src="/website_logo.jpg"
                width={25}
                height={25}
                loading='lazy'
                alt="logo_image"
            />
            <div className='text-2xl font-mono font-bold text-green-700'>Aaranya</div>
        </div>
    )
}

export default Logo
