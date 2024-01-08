import { projects } from "@/utils/data/projects";
import { Project } from "./Project";

import Link from "next/link";

export function Projects() {
  const mainProjects = projects.slice(0, 5);

  return (
    <section
      className="w-full p-10 overflow-x-hidden text-violet-200"
      id="projects"
    >
      <div className="w-full lg:mb-24">
        <h2
          className="text-3xl text-violet-300 font-normal text-center max-[420px]:text-3xl uppercase aos-init aos-animate"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          Principais projetos
        </h2>
      </div>
      <div className="w-full flex flex-col [&>*:nth-child(even)]:flex-row-reverse max-[1200px]:[&>*:nth-child(even)]:flex-col gap-5 lg:gap-24">
        {mainProjects.map(
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

      <div data-aos="zoom-in" data-aos-duration="1300">
        <Link
          href="/projects"
          className="w-60 flex mx-auto my-20 text-2xl text-violet-200 border py-3 px-5 rounded border-violet-200 opacity-50 hover:bg-violet-800 hover:text-white hover:opacity-70 hover:border-violet-900 shadow-md ease-in duration-300"
        >
          Ver mais projetos
        </Link>
      </div>
    </section>
  );
}
