"use client"

import Link from "next/link";
import { useState } from "react";

export default function Navbar() { 
  const [active, setActive] = useState(false);

  console.log(active);

  const handleClick = () => {
    console.log('Testing');
    setActive(!active);
  };

  return (  
    <nav className="navbar sticky top-0 z-50 bg-[#EFBF6A] [#1E2A44]  text-black py-4"> 
      <div className="container mx-auto px-4 flex  items-center justify-between"> 
        <h1 className="text-2xl font-bold text-[#59171B]  md:px-4">Portfolio</h1> 
        <ul className={`menu flex items-center gap-7 md:static absolute 
        ${active ? 'bg-white top-20 opacity-100 text-5xl' : 'bg-white top-20 opacity-0 text-5xl'} 
        left-1/2 -translate-x-1/2 md:-translate-x-0 md:flex-row 
        flex-col md:bg-transparent bg-slate-700 w-full md:w-auto 
        md:py-0 py-10 text-[#59171B] opacity-0 transition-all md:opacity-100 md:transition-none md:text-base text-xl`}> 
          <li> 
            <Link href="#home">Home</Link> 
          </li> 
          <li> 
            <Link href="#skills">Skills</Link> 
          </li> 
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li> 
            <Link href="#footer">Contact</Link> 
          </li> 
        </ul> 
      <div className="md:hidden block" onClick={() => handleClick()}>  
        <i className="ri-menu-line ri-2x font-bold text-white"></i>
      </div>
      </div>
    </nav> 
  ); 
} 