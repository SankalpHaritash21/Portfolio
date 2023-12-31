"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSkills } from "@/lib/Hooks/useSkills";
import { fadeInAnimationVariants } from "@/constants/animation";
import Image from "next/image";

export default function Skills() {
  const { skillsData } = useSkills();
  return (
    <section
      id="skills"
      className="w-full scroll-mt-28 -mt-14 text-center sm:mb-40 roundedxl p-4 min-h-screen"
    >
      <div className="max-w-[53rem] flex flex-col items-center justify-center mt-40">
        <div className="text-2xl md:text-3xl font-bold text-start w-full">
          <h1 className="link-underline w-fit">My skills:</h1>
        </div>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mt-10">
          {skillsData.map((skills, index) => (
            <motion.li
              className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 md:m-4 text-sm"
              key={skills.id}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <div className="flex flex-col gap-y-5 items-center justify-center">
                <div className="overflow-hidden h-20">
                  <Image
                    src={skills.image.url}
                    alt={skills.skills}
                    height={70}
                    width={50}
                  />
                </div>
                <div className="font-bold text-xl">{skills.skills}</div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
