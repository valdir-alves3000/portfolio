"use client";

import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";

export function Profile() {
  useEffect(() => {
    AOS.init({
    });
  });

  return (
    <div className="relative w-full flex justify-center lg:mt-5">
      <div
        className="relative w-[300px] h-[280px]"
        data-aos="zoom-in"
        data-aos-duration="1900"
      >
        <div className="absolute bottom-[-70px] left-0 w-[300px] h-[290px] bg-slate-700 rounded-full -z-10 animate-pulse border-4 border-purple-800"></div>
        <Image
          src={"/assets/img/negative-profile.png"}
          width={300}
          height={300}
          alt="Imagem de Perfil"
        />
      </div>
    </div>
  );
}
