"use client";

import { Course } from "@/app/components/Course";
import { TypingText } from "@/app/components/TypingText";
import { courses } from "@/utils/data/courses";
import AOS from "aos";
import { useEffect } from "react";

type CourseProps = {
  name: string;
  certificate: string;
  image: string;
};

export default function Courses() {
  useEffect(() => {
    AOS.init({});
  });

  return (
    <section className="w-full mb-32 px-5 text-blue-400">
      <h1 className="font-extrabold text-6xl my-10 m-auto w-full text-center max-[600px]:text-3xl capitalize">
        <TypingText
          text="
        Trilhando o Caminho do Conhecimento"
        />
      </h1>
      <p
        className="m-auto text-justify mb-20 text-2xl font-light leading-10 max-[600px]:text-xl max-[600px]:leading-10"
        data-aos="fade-left"
        data-aos-duration="1100"
      >
        Exploro aqui minha fascinante jornada de estudos na programação e no
        desenvolvimento de software, onde mergulho em diversas tecnologias para
        aprimorar minha expertise e me destacar como um profissional de
        excelência nesse vibrante campo. Descubra como tenho lapidado meu
        conhecimento para brilhar na área do desenvolvimento!
      </p>
      <div className="gap-20 grid max-[1380px]:grid-cols-2 justify-items-center grid-cols-3 max-[980px]:grid-cols-1">
        {courses.map(({ certificate, name, image }: CourseProps) => (
          <Course
            key={name}
            name={name}
            image={image}
            certificate={certificate}
          />
        ))}
      </div>
    </section>
  );
}
