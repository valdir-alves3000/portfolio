import { Profile } from "@/app/components/Profile";

export default function About() {
  return (
    <section className="flex px-10 gap-7 max-[920px]:flex-col max-[920px]:justify-center max-[920px]:items-center lg:px-20 min-h-screen">
      <div className="flex-1 lg:pt-20">
        <Profile />
      </div>
      <div className="flex-1 mb-7">
        <h1
          className="font-extrabold text-blue-700 text-7xl my-10 max-[520px]:text-3xl"
          data-aos={"zoom-in"}
          data-aos-duration={"1100"}
        >
          ABOUT
        </h1>

        <p
          className="text-xl text-justify indent-5 font-light leading-10  max-[420px]:leading-9 mb-7"
          data-aos={"fade-right"}
          data-aos-duration={"1500"}
        >
          Olá, eu sou Valdir, um entusiasta da programação e desenvolvedor full
          stack apaixonado por tecnologia. Trago consigo conhecimento e
          experiência na criação de aplicações. Minha dedicação se reflete na
          busca incessante por proporcionar a melhor experiência ao usuário,
          entregando o melhor de forma consistente em todas as atividades que
          realizo.
        </p>

        <p
          className="text-xl text-blue-500 text-justify font-semibold indent-5 leading-10  max-[420px]:leading-9 mb-7"
          data-aos={"fade-left"}
        >
          O que me motiva profundamente é a convicção de que a tecnologia tem o
          poder de melhorar vidas e resolver problemas de maneiras incríveis.
          Cada linha de código que escrevo, cada ideia que transformo em
          realidade é uma oportunidade para fazer a diferença real na sociedade.
          Comprometo-me com a aprendizagem contínua, pois sei que a tecnologia
          evolui rapidamente, e estar atualizado é fundamental para criar
          soluções impactantes.
        </p>

        <p
          className="text-xl text-justify indent-5 font-light leading-10  max-[420px]:leading-9 mb-7"
          data-aos={"fade-right"}
        >
          Minha paixão é uma fusão de curiosidade, inovação e a crença
          inabalável de que a tecnologia pode esculpir um futuro mais brilhante
          e eficiente para todos nós. Estou ansioso para continuar esta jornada
          e desenvolver projetos que realmente façam a diferença.
        </p>
      </div>
    </section>
  );
}
