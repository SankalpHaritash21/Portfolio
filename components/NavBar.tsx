"use client";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import logo from "@/public/Images/Logo1.webp";
import Image from "next/image";

const NavBar = () => {
  const [menu, setMenu] = useState(true);
  const [animationParent] = useAutoAnimate();
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="w-full h-14 text-white bg-background flex items-center justify-between px-8 rounded-bl-xl rounded-br-xl py-2 z-50 bg-transparent ">
      <div>
        <Link href="/">
          <div className="flex items-center justify-center md:hidden">
            <Image src={logo} alt="Logo" height={23} width={23} />
          </div>

          <div className="md:flex items-center justify-center hidden gap-x-4">
            <Image src={logo} alt="Logo" height={23} width={23} />
            <h1 className="font-bold">Sankalp Haritash</h1>
          </div>
        </Link>
      </div>
      <div className="hidden md:flex items-center justify-center gap-x-10 text-xl lg:text-2xl p-2">
        {NAV_LINKS.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className="link-underline focus:font-bold text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold w-28 active:bg-gray-700 flex items-center justify-center"
          >
            {link.title}
          </Link>
        ))}
      </div>

      <div
        className="inline-block cursor-pointer md:hidden border border-white p-2"
        onClick={handleMenu}
        ref={animationParent}
      >
        {menu ? (
          <AiOutlineMenu size={"1rem"} />
        ) : (
          <AiOutlineClose size={"1rem"} />
        )}
      </div>

      {!menu && (
        <div className="fixed inset-x-28  top-16  mx-4 flex flex-col w-48 items-center rounded-md bg-background border border-white text-white md:hidden p-2 z-50">
          {NAV_LINKS.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className="link-underline text-3xl text-gray-50 flex-Center cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-white hover:animate-pulse"
              onClick={handleMenu}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
