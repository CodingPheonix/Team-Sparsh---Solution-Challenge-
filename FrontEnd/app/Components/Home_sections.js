import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Home_sections = ({ image, heading, paragraph, btn_text, btn_link, row }) => {
    return (
        <div className={`md:min-h-[calc(100vh-10rem)] flex ${row ? 'md:flex-row' : 'md:flex-row-reverse'} ${row ? 'flex-col' : 'flex-col-reverse'} justify-between items-center md:gap-0 gap-3`}>
            <div className='md:w-1/2 h-full flex justify-center items-center'>
                <Image
                    src={image}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className='rounded-md md:block hidden m-2'
                />
            </div>
            {/* <div className={`flex flex-col justify-around ${row ? 'md:items-start' : 'md:items-end'} md:w-1/2 w-[90%] gap-4`}>
                <h1 className='text-4xl text-green-300 md:text-left text-center'>heading</h1>
                <p className={`md:w-[95%] w-full ${row ? 'md:text-start' : 'md:text-end'}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque quas minus harum nobis reprehenderit excepturi qui quaerat corporis quam? Consequuntur, et. Reprehenderit, ex. Qui amet veritatis asperiores vel incidunt corrupti facere sed recusandae perferendis fugiat obcaecati magnam deserunt beatae ipsa accusamus quasi, expedita rem.</p>
                <Link href="#">
                    <button className='px-6 py-3 rounded-3xl bg-green-400 text-white hover:bg-green-500 active:bg-green-600 md:w-auto w-full'>/button text/</button>
                </Link>
            </div> */}
            <div className='flex flex-col justify-around items-start w-1/2 gap-4'>
                <h1 className='text-4xl text-green-300'>{heading}</h1>
                <p className='w-[95%]'>{paragraph}</p>
                <Link href={`${btn_link}`}>
                    <button className='px-6 py-3 rounded-3xl bg-green-400 text-white hover:bg-green-500 active:bg-green-600'>{btn_text}</button>
                </Link>
            </div>
            
        </div>
    )
}

export default Home_sections
