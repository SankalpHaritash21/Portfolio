"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Sam from "@/public/Images/Sankalp1.webp";
import { resume } from "@/constants";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <section className="lg:py-16 px-2 md:h-[600px] flex flex-col items-center justify-center w-full">
      <div className="flex flex-col-reverse gap-y-14 md:gap-y-0 lg:flex-row justify-between  w-full items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="place-self-center text-center sm:text-left justify-self-start md:w-1/2"
        >
          <h1 className="text-white w-full md:w-auto  mt-2 md:mt-0  mb-4 text-2xl md:text-4xl lg:text-7xl lg:leading-normal font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Hi, I&apos;m
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Sankalp Haritash",
                2000,
                "Web Developer",
                2000,
                "MERN Developer",
                2000,
                "Next.js Developer",
                1000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </h1>
          <p className="text-sm md:text-xl lg:text-lg mt-5 md:mt-10 text-white flex w-full text-start">
            I am a Full Stack Web Developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Next.js, Redux, Node.js, Express,
            MongoDB, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
            Exploring Open Source.
          </p>
          <p className="text-sm md:text-xl lg:text-lg mt-5 md:mt-10 text-white flex w-full text-start">
            I am open to working asynchronously in various time zones and can
            adapt to your time zone needs. I&lsquo;m excited to contribute to
            your next project. Let&lsquo;s connect.
          </p>
          <div className="mt-10 md:mt-10 w-full flex flex-col  md:flex-row justify-start">
            <Link
              href="/contact"
              className="flex items-center justify-center px-2 py-2 md:py-0 w-56 md:w-fit rounded-full md:mr-2 hover:bg-slate-900 text-white hover:text-black font-bold"
            >
              <Button
                className="bg-transparent dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800"
                duration={5000}
              >
                Let&lsquo;s Connect
              </Button>
            </Link>
            <Link
              href={resume}
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full hover:bg-slate-800 text-white mt-3 font-bold hover:text-black"
            >
              <Button
                className="bg-transparent dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800"
                duration={5000}
              >
                <h1>Download CV</h1>
              </Button>
            </Link>
          </div>
        </motion.div>

        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src={Sam}
            alt="Sankalp Haritash"
            className="absolute inset-0 w-full h-full object-cover rounded-full"
            layout="fill"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
