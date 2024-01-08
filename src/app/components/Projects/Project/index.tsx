"use client";

import { imageLoader } from "@/utils/imageLoader";
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
      <div className="flex-1 flex flex-col gap-10 relative">
        <h2
          className="text-violet-300 text-3xl tracking-widest max-[1200px]:m-auto max-[1200px]:max-w-3xl max-[1200px]:text-center max-[420px]:text-2xl aos-init aos-animate"
          data-aos={"fade-right"}
          data-aos-duration={"1100"}
        >
          {title}
        </h2>
        <p
          className="text-xl text-justify font-light leading-10 max-[1200px]:m-auto max-[1200px]:max-w-3xl max-[420px]:leading-9"
          data-aos={"fade-left"}
          data-aos-duration={"1700"}
        >
          {description}
        </p>
        <div
          className="w-full flex flex-wrap gap-4 max-[1200px]:m-auto max-[1200px]:max-w-3xl max-[1200px]:justify-center"
          data-aos={"fade-right"}
          data-aos-duration={"1700"}
        >
          {technologies.map((technologie) => (
            <Tag key={technologie} tag={technologie} />
          ))}
        </div>
        <div
          className="flex gap-7 max-[1200px]:m-auto max-[1200px]:max-w-3xl max-[420px]:absolute max-[420px]:-bottom-[335px] max-[420px]:justify-between max-[420px]:w-full"
          data-aos={"fade-right"}
          data-aos-duration={"1500"}
        >
          <Link
            href={github}
            target="_blank"
            className="flex items-center gap-2 text-violet-200 border p-2 rounded border-violet-200 opacity-50 hover:bg-violet-800 hover:text-white hover:opacity-70 hover:border-violet-900 shadow-md ease-in duration-300"
          >
            <i>
              <span className="max-[420px]:hidden">Ver no </span>github
            </i>
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
        className="flex-1 max-h-96 overflow-hidden rounded-md shadow max-[420px]:relative max-[420px]:-top-[50px] max-[420px]:max-h-[200px] max-[420px]:border max-[420px]:border-gray-700 max-[420px]:p-1"
        data-aos={"fade-left"}
        data-aos-duration={"1700"}
      >
        <Image
          loader={() => imageLoader({ src: image, width: 400 })}
          src={"me.png"}
          alt={`Pré-visualização do Projeto ${title}`}
          className="w-96 object-fill h-60 rounded-lg md:w-full md:h-auto"
          width={400}
          height={300}
        />
      </div>
    </div>
  );
}
