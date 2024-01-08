"use client";

import { imageLoader } from "@/utils/imageLoader";
import AOS from "aos";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

type ProjectProps = {
  title: string;
  image: string;
  github: string;
  site: string;
};

export function Project({ image, title, site, github }: ProjectProps) {
  useEffect(() => {
    AOS.init({});
  });
  return (
    <div
      className="flex-1 max-[1380px]:w-fit max-w-full group"
      data-aos="fade-up"
      data-aos-duration="1900"
    >
      <div className="border border-gray-700 p-2 rounded-xl mb-5 max-[1380px]:w-fit max-[980px]:w-full opacity-60 group-hover:opacity-100">
        <Image
          loader={() => imageLoader({ src: image, width: 400 })}
          src="me.png"
          className="w-96 object-fill h-60 rounded-lg max-[980px]:w-full max-[980px]:h-auto"
          alt={`Pré-visualização do Projeto ${title}`}
          width={400}
          height={300}
        />
      </div>

      <div className="flex justify-between opacity-60 group-hover:opacity-100">
        <span className="text-lg opacity-80">{title}</span>

        <div className="flex gap-5">
          <Link
            href={`${github}`}
            className="hover:text-blue-400 ease-in-out duration-300"
            target="_blank"
          >
            <FaGithub size={24} />
          </Link>
          <Link
            className="hover:text-blue-400 ease-in-out duration-300"
            href={`${site}`}
            target="_blank"
          >
            <FiExternalLink size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}
