"use client";

import { TSkills } from "@/utils/data/skills";
import Image from "next/image";

export function Skill({ name, logo }: TSkills) {
  return (
    <div className="w-auto  py-1  px-3 min-w-32  my-0 mx-5  border rounded-full leading-6 border-zinc-600 flex flex-row items-center justify-center gap-2 md:min-w-40 md:px-7 md:py-3 md:mx-10">
      <Image
        src={`/assets/icons/${logo}`}
        alt={`Logo do ${name}`}
        width={40}
        height={40}
        className="max-[720px]:w-[25px] rounded-full"
      />
      <p className="text-xs text-violet-200 mr-2 md:text-base">{name}</p>
    </div>
  );
}
