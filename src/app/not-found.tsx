"use client";

import { Press_Start_2P } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const pressStart = Press_Start_2P({ weight: "400", subsets: [] });

export default function NotFound() {
  const [seconds, setSeconds] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);

    return () => clearTimeout(redirectTimer);
  }, [seconds]);

  useEffect(() => {
    if (seconds <= 0) {
      router.push("/");
    }
  }, [seconds, router]);

  return (
    <div className="w-full min-h-[550px] mt-10 flex bg-404 items-center  text-center text-violet-200 justify-center p-5">
      <div className="max-w-[600px]">
        <h2 className={`text-8xl leading-1 mb-8 ${pressStart.className}`}>
          404
        </h2>
        <h4 className="text-lg mb-16 border border-violet-300 rounded font-light p-5">
          Opps! Página não encontrada
        </h4>

        <p className="mb-16">
          A página que você estava procurando não existe. Você pode ter digitado
          incorretamente o endereço ou a página pode ter sido movida.
        </p>
        <Link
          href="/"
          className="py-5 px-7 border border-violet-400 text-violet-200 rounded-md uppercase shadow-md hover:bg-violet-500 hover:bg-opacity-50 hover:text-white transition-all duration-300"
        >
          Voltar a HOME
        </Link>

        <p className="mt-20 mb-10 font-weight">
          Você será redirecionado em {seconds} segundos.
        </p>
      </div>
    </div>
  );
}
