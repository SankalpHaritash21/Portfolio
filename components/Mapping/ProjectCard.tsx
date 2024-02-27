import { Project } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";

const ProjectCard = ({
  id,
  createdAt,
  title,
  tag,
  description,
  github,
  liveLink,
  image,
}: Project) => {
  return (
    <BackgroundGradient className="rounded-[22px] relative overflow-hidden bg-zinc-900 shadow-lg border border-[#2A0E61] p-2 w-72 md:w-96 h-full">
      <Image
        src={image.url}
        alt={title}
        width={250}
        height={250}
        className="w-full object-contain rounded-[22px]"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 text-sm md:text-base">{description}</p>
      </div>
      <div className="flex justify-between md:px-10">
        <Link
          href={liveLink}
          target="_blank"
          className="font-bold bg-gradient-to-r from-blue-500 via-purple-800 to-orange-500 cursor-pointer inline-flex items-center justify-center px-1 py-1 mt-1 text-base leading-5 text-black transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black  hover:text-white"
        >
          Live Link
          <svg
            className="w-6 h-6 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>

        <Link
          href={github}
          target="_blank"
          className="cursor-pointer bg-gradient-to-r from-orange-500 via-purple-800 to-blue-500 font-bold bg- inline-flex items-center justify-center px-1 py-1 mt-1 ml-0 md:ml-7 leading-5 text-black text-base transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black hover:text-white"
        >
          Github Repo
          <svg
            className="w-6 h-6 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    </BackgroundGradient>
  );
};

export default ProjectCard;
