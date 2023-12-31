"use client";

import { projects } from "@/utils/data/projects";
import { useEffect } from "react";
import { Project } from "./Project";

import AOS from "aos";
import Link from "next/link";

type ProjectsProps = {
  allProject?: boolean;
};

export function Projects({ allProject }: ProjectsProps) {
  useEffect(() => {
    AOS.init({
      duration: 1700,
      easing: "ease-in-sine",
      delay: 100,
    });
  });

  const mainProjects = projects.slice(0, 5);

  return (
    <section className="w-full p-10 overflow-x-hidden">
      <div className="w-full lg:mb-24">
        <h2
          className="text-3xl text-violet-300 font-normal text-center max-[420px]:text-3xl uppercase"
          data-aos="zoom-in"
          data-aos-duration="1100"
        >
          Principais projetos
        </h2>
      </div>
      <div className="w-full flex flex-col [&>*:nth-child(even)]:flex-row-reverse max-[1200px]:[&>*:nth-child(even)]:flex-col  gap-24">
        {allProject
          ? projects.map(
              ({ title, image, description, technologies, github, site }) => (
                <Project
                  key={title}
                  title={title}
                  image={image}
                  description={description}
                  technologies={technologies}
                  github={github}
                  site={site}
                />
              )
            )
          : mainProjects.map(
              ({ title, image, description, technologies, github, site }) => (
                <Project
                  key={title}
                  title={title}
                  image={image}
                  description={description}
                  technologies={technologies}
                  github={github}
                  site={site}
                />
              )
            )}
      </div>
      <div className="w-full py-36 flex items-center justify-center">
        <Link
          href="/project"
          className="flex items-center gap-2 text-violet-200 text-2xl border-2 rounded-lg border-gray-700 p-3 border-violet-200 opacity-50 hover:opacity-100 hover:text-violet-300
          hover:border-gray-600 hover:bg-gray-900 shadow-md ease-in duration-300"
        >
          Ver mais projetos
        </Link>
      </div>
    </section>
  );
}
