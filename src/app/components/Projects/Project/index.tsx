import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Tag } from "./Tag";

type ProjectProps = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  github: string;
  site: string;
};

export function Project({
  title,
  image,
  description,
  technologies,
  github,
  site,
}: ProjectProps) {
  return (
    <div className="w-full flex mt-16 gap-20 max-[1200px]:flex-col">
      <div className="flex-1 flex flex-col gap-10">
        <h2
          className="text-violet-300 text-3xl tracking-widest max-[1200px]:m-auto max-[1200px]:max-w-3xl max-[1200px]:text-center max-[420px]:text-2xl"
          data-aos={"fade-right"}
          data-aos-duration={"1100"}
        >
          {title}
        </h2>
        <p
          className="text-xl text-justify font-light leading-10 max-[1200px]:m-auto max-[1200px]:max-w-3xl max-[420px]:leading-9"
          data-aos={"fade-left"}
        >
          {description}
        </p>
        <div
          className="w-full flex flex-wrap gap-4 max-[1200px]:m-auto max-[1200px]:max-w-3xl max-[1200px]:justify-center"
          data-aos={"fade-right"}
        >
          {technologies.map((technologie) => (
            <Tag key={technologie} tag={technologie} />
          ))}
        </div>
        <div
          className="flex gap-7 max-[1200px]:m-auto max-[1200px]:max-w-3xl max-[420px]:flex-col"
          data-aos={"fade-right"}
        >
          <Link
            href={github}
            target="_blank"
            className="flex items-center gap-2 text-violet-200 border p-2 rounded border-violet-200 opacity-50 hover:bg-violet-800 hover:text-white hover:opacity-70 hover:border-violet-900 shadow-md ease-in duration-300"
          >
            <span>Ver no github</span>
            <FaGithub />
          </Link>
          <Link
            href={site}
            target="_blank"
            className="flex items-center gap-2 text-violet-200 border p-2 rounded border-violet-200 opacity-50 hover:bg-violet-800 hover:text-white hover:opacity-70 hover:border-violet-900 shadow-md ease-in duration-300"
          >
            <span>Visitar o site</span>
            <FiExternalLink />
          </Link>
        </div>
      </div>
      <div
        className="flex-1 overflow-hidden rounded-md shadow"
        data-aos={"fade-left"}
      >
        <Image
          src={image}
          alt={`Pré-visualização do Projeto ${title}`}
          className="max-w-[650px] w-full max-[1200px]:m-auto"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
