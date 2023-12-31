"use client";
import React from "react";
import { useProjects } from "@/lib/Hooks/useProject";
import Skills from "./Skills";
import ProjectCard from "./Mapping/ProjectCard";
import Loading from "./Loading";

const Project = () => {
  const { loading, projectData } = useProjects();

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="p-10 flex flex-col select-none items-center justify-center w-full -mt-14">
      <div className="min-h-screen -mt-14 flex items-center justify-center">
        <Skills />
      </div>
      <div className="-mt-2 md:-mt-56 w-full flex flex-col items-center justify-center mx-10">
        <div className="md:px-16 w-full">
          <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 w-full flex justify-start link-underline">
            My Projects
          </h2>
          <h2 className="text-xl">
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </h2>
        </div>
        <div className="flex flex-wrap gap-y-10 md:gap-x-14 md:ml-20 mt-10 w-full">
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              createdAt={project.createdAt}
              title={project.title}
              tag={project.tag}
              description={project.description}
              github={project.github}
              liveLink={project.liveLink}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
