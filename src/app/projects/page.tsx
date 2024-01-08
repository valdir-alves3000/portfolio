import { Project } from "@/app/components/Project";
import { TypingText } from "@/app/components/TypingText";
import { projects } from "@/utils/data/projects";

type ProjectProps = {
  title: string;
  image: string;
  github: string;
  site: string;
};

export default function Projects() {
  return (
    <section className="w-full mb-24 px-5">
      <h1 className="font-extrabold text-7xl text-blue-400 my-10 m-auto w-full text-center max-[600px]:text-3xl capitalize">
        <TypingText text="meus projetos" />
      </h1>
      <p className="max-w-6xl m-auto text-center mb-20 text-2xl font-light leading-10 max-[600px]:text-xl max-[600px]:leading-10">
        Neste espaço, compartilho uma visão abrangente da minha jornada como
        desenvolvedor de software, destacando minhas habilidades, projetos
        notáveis e a exploração de diversas tecnologias.
      </p>
      <div className="gap-20 grid max-[1380px]:grid-cols-2 justify-items-center grid-cols-3 max-[980px]:grid-cols-1">
        {projects.map(({ image, title, github, site }: ProjectProps) => (
          <Project
            key={image}
            title={title}
            image={image}
            github={github}
            site={site}
          />
        ))}
      </div>
    </section>
  );
}
