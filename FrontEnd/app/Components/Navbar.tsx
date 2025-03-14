"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar: React.FC = () => {
    const [isHidden, setIsHidden] = useState<boolean>(true);

    return (
        <header className="bg-white shadow-md fixed w-full z-50">
            <div className="mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-16">
                <Link href="/" className="flex items-center">
                    <Image src={'/logo.png'} width={500} height={500} loading='lazy' alt="Logo" className='h-10 w-auto' />
                </Link>

                {/* Mobile menu button */}
                <button
                    id="menu-toggle"
                    className="block lg:hidden text-gray-700 focus:outline-none"
                    onClick={() => setIsHidden(!isHidden)}
                >
                    {isHidden ? <GiHamburgerMenu className="text-2xl" /> : <RxCross1 className="text-2xl" />}
                </button>

                <nav className="hidden lg:flex space-x-6 items-center">
                    <Link href="/" className="text-gray-700 hover:text-green-600">Home</Link>
                    <Link href="/about" className="text-gray-700 hover:text-green-600">About Us</Link>
                    <Link href="/services" className="text-gray-700 hover:text-green-600">Our Services</Link>
                    <Link href="/testimonials" className="text-gray-700 hover:text-green-600">Testimonials</Link>
                    <Link href="/blog" className="text-gray-700 hover:text-green-600">Blog</Link>
                    <Link href="/contact" className="text-gray-700 hover:text-green-600">Contact</Link>
                </nav>

                <div className="hidden lg:block pr-4">
                    <button className="hover:bg-green-500 bg-green-400 active:bg-green-600 py-2 px-4 rounded-md text-white">Sign In</button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <nav id="mobile-menu" className={`lg:hidden fixed top-16 left-0 w-full bg-white shadow-md ${isHidden ? 'hidden' : 'block'}`}>
                <ul className="space-y-4 p-4 flex flex-col items-center">
                    <li><Link href="/" className="block text-gray-700 hover:text-green-600 hover:border hover:shadow-md">Home</Link></li>
                    <li><Link href="/about" className="block text-gray-700 hover:text-green-600 hover:border hover:shadow-md">About Us</Link></li>
                    <li><Link href="/services" className="block text-gray-700 hover:text-green-600 hover:border hover:shadow-md">Our Services</Link></li>
                    <li><Link href="/testimonials" className="block text-gray-700 hover:text-green-600 hover:border hover:shadow-md">Testimonials</Link></li>
                    <li><Link href="/blog" className="block text-gray-700 hover:text-green-600 hover:border hover:shadow-md">Blog</Link></li>
                    <li><Link href="/contact" className="block text-gray-700 hover:text-green-600 hover:border hover:shadow-md">Contact</Link></li>
                    <li><button className="hover:bg-green-500 bg-green-400 active:bg-green-600 py-2 px-4 rounded-md text-white">Sign In</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;