import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HomeSectionsProps {
    image: string;
    heading: string;
    paragraph: string;
    btn_text: string;
    btn_link: string;
    row?: boolean;
}

const HomeSections: React.FC<HomeSectionsProps> = ({ image, heading, paragraph, btn_text, btn_link, row = false }) => {
    return (
        <div className={`md:min-h-[calc(100vh-10rem)] flex ${row ? 'md:flex-row' : 'md:flex-row-reverse'} ${row ? 'flex-col' : 'flex-col-reverse'} justify-between items-center md:gap-0 gap-3`}>
            <div className='md:w-1/2 h-full flex justify-center items-center'>
                <Image
                    src={image}
                    width={500}
                    height={500}
                    alt="Section Image"
                    className='rounded-md md:block hidden m-2'
                />
            </div>
            <div className={`flex flex-col justify-around ${row ? 'items-start' : 'items-end'} w-1/2 gap-4`}>
                <h1 className='text-4xl font-semibold text-green-300'>{heading}</h1>
                <p className='p-5'>{paragraph}</p>
                <Link href={btn_link}>
                    <button className='px-6 py-3 rounded-3xl bg-green-400 text-white hover:bg-green-500 active:bg-green-600 font-semibold text-lg'>{btn_text}</button>
                </Link>
            </div>
        </div>
    );
};

export default HomeSections;
