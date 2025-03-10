"use client"
import React, { useState } from 'react'
import Image from 'next/image'

import logo from '../../public/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <header className="bg-white shadow-md fixed w-full z-50">
            <div className="mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-16">
                <a href="index.html" className="flex items-center">
                    <Image src={logo} width={500} height={500} loading='lazy' alt="Logo" className='h-10 w-auto' />
                </a>

                {/* Mobile menu button */}
                <button
                    id="menu-toggle"
                    className="block lg:hidden text-gray-700 focus:outline-none"
                    onClick={() => setIsHidden(!isHidden)}
                >
                    {isHidden ? <GiHamburgerMenu className="text-2xl" /> : <RxCross1 className="text-2xl" />}
                </button>

                <nav className="hidden lg:flex space-x-6 items-center">
                    <a href="/" className="text-gray-700 hover:text-green-600">Home</a>
                    <a href="/About" className="text-gray-700 hover:text-green-600">About Us</a>
                    <a href="services.html" className="text-gray-700 hover:text-green-600">Our Services</a>
                    <a href="testimonials.html" className="text-gray-700 hover:text-green-600">Testimonials</a>
                    <a href="blog.html" className="text-gray-700 hover:text-green-600">Blog</a>
                    {/* <div className="relative group">
                        <button className="text-gray-700 hover:text-green-600 flex items-center">Dropdown <i className="bi bi-chevron-down ml-1"></i></button>
                        <ul className="absolute hidden group-hover:block bg-white shadow-md w-48 mt-2">
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Dropdown 1</a></li>
                            <li className="relative group">
                                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between">Deep Dropdown <i className="bi bi-chevron-right"></i></button>
                                <ul className="absolute left-full top-0 hidden group-hover:block bg-white shadow-md w-48">
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Deep Dropdown 1</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Deep Dropdown 2</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Deep Dropdown 3</a></li>
                                </ul>
                            </li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Dropdown 2</a></li>
                        </ul>
                    </div> */}
                    <a href="contact.html" className="text-gray-700 hover:text-green-600">Contact</a>
                </nav>

                <div className=" hidden lg:block pr-4">
                    <button className=" hover:bg-green-500 bg-green-400 active:bg-green-600 py-2 px-4 rounded-md text-white">Sign In</button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <nav id="mobile-menu" className={`lg:hidden fixed top-16 left-0 w-full bg-white shadow-md ${isHidden ? 'hidden' : 'block'}`}>
                <ul className="space-y-4 p-4 flex flex-col items-center">
                    <li><a href="index.html" className="block text-gray-700 hover:text-green-600 hover:border hover:shadow-md">Home</a></li>
                    <li><a href="about.html" className="block text-gray-700 hover:text-green-600 hover:border hover:shadow-md">About Us</a></li>
                    <li><a href="services.html" className="block text-gray-700 hover:text-green-600 hover:border hover:shadow-md">Our Services</a></li>
                    <li><a href="testimonials.html" className="block text-gray-700 hover:text-green-600 hover:border hover:shadow-md">Testimonials</a></li>
                    <li><a href="blog.html" className="block text-gray-700 hover:text-green-600 hover:border hover:shadow-md">Blog</a></li>
                    <li><a href="contact.html" className="block text-gray-700 hover:text-green-600 hover:border hover:shadow-md">Contact</a></li>
                    <li><button className=" hover:bg-green-500 bg-green-400 active:bg-green-600 py-2 px-4 rounded-md text-white">Sign In</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
