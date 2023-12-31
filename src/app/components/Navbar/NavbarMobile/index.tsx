"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiListBold } from "react-icons/pi";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { ActiveLink } from "../../ActiveLink";

export function NavbarMobile() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  return (
    <nav className="w-full flex items-center justify-start lg:hidden">
      <button>
        <PiListBold
          onClick={toggleDrawer}
          className="text-3xl text-violet-300 hover:text-violet-500 ease-in duration-300"
        />
      </button>
      <Drawer
        open={drawerOpen}
        onClose={toggleDrawer}
        direction="left"
        className="shadow-inner border-r-2 border-slate-600"
      >
        <div
          className="w-full h-full flex gap-8 text-xs pt-12 font-medium tracking-wider flex-col pl-6 bg-slate-800"
          onClick={toggleDrawer}
        >
          <h2 className="font-bold tracking-widest text-center">
            <ActiveLink href="/">
              VALDIR ALVES <span>{" </>"}</span>
            </ActiveLink>
          </h2>
          <ActiveLink href="/projects">PROJETOS</ActiveLink>
          <ActiveLink href="/about">SOBRE</ActiveLink>
          <ActiveLink href="/contact">CONTATO</ActiveLink>
          <Link
            href="https://github.com/valdir-alves3000"
            target="_blank"
            className="flex gap-2 items-center text-gray-500 hover:text-blue-600 group"
          >
            <FaGithub className="text-xl group-hover:text-black ease-in duration-300" />
            {"GitHub"}
          </Link>
          <Link
            href="https://www.linkedin.com/in/valdiralves3000/"
            target="_blank"
            className="flex gap-2 items-center text-gray-500 hover:text-blue-600 ease-in duration-300"
          >
            <FaLinkedin className="text-xl" />
            Linkedin
          </Link>
        </div>
      </Drawer>
    </nav>
  );
}
