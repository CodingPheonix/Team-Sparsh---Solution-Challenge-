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
                    <Link href="/About" className="text-gray-700 hover:text-green-600">About Us</Link>
                    <Link href="/Create_Polygon" className="text-gray-700 hover:text-green-600">Create Areas</Link>
                    <Link href="/All_Polygon" className="text-gray-700 hover:text-green-600">All Areas</Link>
                    <Link href="/Dashboard" className="text-gray-700 hover:text-green-600">Dashboard</Link>
                </nav>

                <div className="hidden lg:block pr-4">
                    <button disabled={true} className="hover:bg-green-500 bg-green-400 active:bg-green-600 py-2 px-4 rounded-md text-slate-300">Sign In</button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <nav id="mobile-menu" className={`lg:hidden fixed top-16 left-0 w-full bg-white shadow-md ${isHidden ? 'hidden' : 'block'}`}>
                <ul className="space-y-4 p-4 flex flex-col items-center">
                    <li><Link href="/" className="block text-gray-700 hover:text-green-600 hover:border hover:shadow-md">Home</Link></li>
                    <li><Link href="/About" className="block text-gray-700 hover:text-green-600 hover:border hover:shadow-md">About Us</Link></li>
                    <li><Link href="/Create_Polygon" className="block text-gray-700 hover:text-green-600 hover:border hover:shadow-md">Create Areas</Link></li>
                    <li><Link href="/All_Polygon" className="block text-gray-700 hover:text-green-600 hover:border hover:shadow-md">All Areas</Link></li>
                    <li><Link href="/Dashboard" className="block text-gray-700 hover:text-green-600 hover:border hover:shadow-md">Dashboard</Link></li>
                    <li><button className="hover:bg-green-500 bg-green-400 active:bg-green-600 py-2 px-4 rounded-md text-white">Sign In</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;