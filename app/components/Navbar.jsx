'use client';

import Link from "next/link";
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-20 flex items-center px-4 md:px-10 fixed top-0 left-0 bg-black/80 backdrop-blur-md z-[9999]">

      {/* Logo */}
      <h1 className="text-white text-3xl font-bold">
        <Link href="/">WarisAuto</Link>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex text-white gap-8 m-auto text-lg font-medium">
        <li className="hover:text-amber-400 transition duration-300">
          <Link href="/">HOME</Link>
        </li>
        <li className="hover:text-amber-400 transition duration-300">
          <Link href="/About">ABOUT</Link>
        </li>
        <li className="hover:text-amber-400 transition duration-300">
          <Link href="/cars">CARS</Link>
        </li>
        <li className="hover:text-amber-400 transition duration-300">
          <Link href="/Blog">BLOG</Link>
        </li>
        <li className="hover:text-amber-400 transition duration-300">
          <Link href="/Contact">CONTACT</Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden text-white text-3xl cursor-pointer ml-auto"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✖' : '☰'}
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-20 left-0 w-full bg-black flex flex-col items-center text-white text-lg font-medium overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? 'max-h-96 py-6' : 'max-h-0 py-0'
        } md:hidden`}
      >
        <ul className="flex flex-col items-start gap-6 w-full px-10">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/cars">Cars</Link></li>
          <li><Link href="/Blog">Blog</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
