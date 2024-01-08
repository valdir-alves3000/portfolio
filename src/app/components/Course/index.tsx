"use client";

import { imageLoader } from "@/utils/imageLoader";
import AOS from "aos";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";

type CourseProps = {
  name: string;
  image: string;
  certificate: string;
};

export function Course({ certificate, image, name }: CourseProps) {
  useEffect(() => {
    AOS.init({});
  });

  return (
    <div
      className="flex-1 max-[1380px]:w-fit max-w-full text-blue-300 opacity-60 hover:opacity-100"
      data-aos="zoom-in"
      data-aos-duration="1100"
    >
      <div className="border border-gray-700 p-2 rounded-xl mb-5 max-[1380px]:w-fit max-[980px]:w-full">
        <Image
          loader={() => imageLoader({ src: image, width: 500 })}
          src="me.png"
          alt={`Pré-visualização do Certificado ${name}`}
          className="rounded-lg"
          width={500}
          height={500}
        />
      </div>
      <div className="flex justify-between">
        <span className="text-lg opacity-80 truncate mr-2">{name}</span>

        <Link
          className="hover:text-blue-500 ease-in-out duration-300"
          href={`${certificate}`}
          target="_blank"
        >
          <FiExternalLink size={24} />
        </Link>
      </div>
    </div>
  );
}
