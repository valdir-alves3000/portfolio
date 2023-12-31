import Image from "next/image";

export function Profile() {
  return (
    <div
      className="relative w-full flex justify-center lg:mt-5"
      data-aos="zoom-in"
    >
      <div className="relative w-[300px] h-[280px]">
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
