"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ActiveLinkProps {
  children: ReactNode;
  href: string;
}

export function ActiveLink({ children, href }: ActiveLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      className={clsx(
        "m-2 hover:text-blue-400 ease-in duration-300",
        pathname.includes(href) ? "text-blue-400" : "text-gray-400"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
