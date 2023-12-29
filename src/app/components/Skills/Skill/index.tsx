"use client";

import { TSkills } from "@/utils/skills";
import Image from "next/image";

export function Skill({ name, color, logo }: TSkills) {
  return (
    <div className="w-auto min-w-40 px-7 py-3 border rounded-full my-0 mx-10 leading-6 border-zinc-600 flex flex-row items-center justify-center gap-2">
      <Image
        src={`/assets/icons/${logo}`}
        alt={`Logo do ${name}`}
        width={40}
        height={40}
      />
      <p className="text-violet-200 mr-2">{name}</p>
    </div>
  );
}
