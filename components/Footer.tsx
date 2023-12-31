import Image from "next/image";
import React from "react";
import logo from "@/public/Images/Logo1.webp";

const Footer = () => {
  return (
    <footer className="border z-10 border-t-white border-l-transparent border-r-transparent text-white  h-20 flex items-center justify-center">
      <div className="container flex items-center justify-between px-10">
        <div>
          <Image src={logo} width={25} height={25} alt="Sankalp Haritash" />
        </div>
        <div className="text-white font-bold">Sankalp Haritash</div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
