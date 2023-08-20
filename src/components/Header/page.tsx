"use client"
import Link from 'next/link';
import React, { useState } from 'react';
// import User from "../../images/user.jpg"
import Image from 'next/image';
// import logo from "../../images/Sgfl.png"
import "../../styles/commn.css"
import { ArrowBigDownDash } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 bg-slate-900 shadow dark:bg-gray-900 z-[100]">
      <div className="container px-6 py-2 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <a href="#">
              <Image src="/images/Sgfl.png"
              height={100}
              width={100}
               className="w-auto h-6 sm:h-7"  alt="logo" />
            </a>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button onClick={toggleMenu} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                {!isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'} lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center z-[100]`}>
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8 nav-links">
              <Link href="#" className="px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-white hover:text-indigo-600">Home</Link>
              <Link href="#about" className="px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-white hover:text-indigo-600">About</Link>
              <Link href="#project" className="px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-white hover:text-indigo-600">Projects</Link>
              <Link href="#frontend" className="px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-white hover:text-indigo-600">FrontEnd</Link>
              <Link href="#backend" className="px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-white hover:text-indigo-600">Backend</Link>
            </div>

            <div className="flex items-center mt-4 lg:mt-0">
              <Link href="#contact" className="hidden mx-4 text-white transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-indigo-600 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="show notifications">
               <ArrowBigDownDash />
              </Link>

              <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <Image src="/images/user.jpg"
                  width={500}
                  height={500}
                   className="object-cover w-full h-full" alt="avatar" />
                </div>

                <h3 className="mx-2 text-white dark:text-gray-200 lg:hidden">Admin</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
