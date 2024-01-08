"use client";

import { TypingText } from "@/app/components/TypingText";
import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const whatsappLink = `https://wa.me/5511995445056?text=${encodeURIComponent(
      `Olá meu nome é *${name}*,\n
      *Email*: ${email},\n
      ${message}`
    )}`;
    window.open(whatsappLink, "_blank");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="max-w-xl w-full m-auto mb-16 px-5">
      <h1 className="my-10 text-2xl w-full h-[60px] text-center md:text-5xl font-bold font-weight">
        <TypingText text="Entre em Contato" />
      </h1>
      <div className="flex justify-between">
        <Link
          href="https://www.linkedin.com/in/valdiralves3000/"
          target="_blank"
          className="flex items-center text-xl opacity-50 hover:opacity-100 hover:text-blue-400 ease-in duration-300"
        >
          <FaLinkedin />
          <span className="ml-2">LinkedIn</span>
        </Link>
        <Link
          href="https://github.com/valdir-alves3000/"
          target="_blank"
          className="flex items-center text-xl opacity-50 hover:opacity-100 hover:text-blue-400 ease-in duration-300"
        >
          <FaGithub />
          <span className="ml-2">GitHub</span>
        </Link>
        <Link
          href="mailto:valdiralves3000@gmail.com"
          target="_blank"
          className="flex items-center text-xl opacity-50 hover:opacity-100 hover:text-blue-400 ease-in duration-300"
        >
          <FaEnvelope />
          <span className="ml-2">Email</span>
        </Link>
      </div>

      <form className="mt-10" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-600"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border border-slate-600 bg-slate-700 rounded-md focus:outline-none focus:ring focus:ring-slate-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border border-slate-600 bg-slate-700 rounded-md focus:outline-none focus:ring focus:ring-slate-500 focus:border-slate-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-slate-600"
          >
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="mt-1 p-2 w-full border border-slate-600 rounded-md focus:outline-none focus:ring focus:ring-slate-500 text-white bg-slate-700"
            style={{ resize: "none" }}
          />
        </div>
        <button
          type="submit"
          className="bg-slate-700 text-blue-200 px-4 py-2 rounded-md hover:bg-slate-600 hover:text-white focus:outline-none focus:ring focus:border-slate-500"
        >
          Enviar Mensagem
        </button>
      </form>
    </section>
  );
}
