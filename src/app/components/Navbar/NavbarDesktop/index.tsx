import { ActiveLink } from "@/app/components/ActiveLink";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function NavbarDesktop() {
  return (
    <nav className="hidden justify-between lg:flex">
      <ActiveLink href="/">
        VALDIR ALVES <span>{" </>"}</span>
      </ActiveLink>

      <div className="flex gap-8 font-medium tracking-wider items-center">
        <ActiveLink href="/projects">PROJETOS</ActiveLink>
        <ActiveLink href="/about">SOBRE</ActiveLink>
        <ActiveLink href="/contact">CONTATO</ActiveLink>
        <ActiveLink href="/courses">CURSOS</ActiveLink>
        <Link href="https://github.com/valdir-alves3000" target="_blank">
          <FaGithub className="text-3xl text-slate-600 hover:text-gray-800" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/valdiralves3000/"
          target="_blank"
        >
          <FaLinkedin className="text-3xl text-slate-600 hover:text-blue-500" />
        </Link>
      </div>
    </nav>
  );
}
