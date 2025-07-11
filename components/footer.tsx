import React from "react";
import { BsLinkedin, BsGithub, BsInstagram, BsTwitterX, BsWhatsapp, BsTelephone } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
        <a
          href="https://www.linkedin.com/in/ravi-kumar0/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 text-gray-700 hover:text-blue-600 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-blue-400"
          aria-label="LinkedIn"
        >
          <BsLinkedin className="text-lg" />
        </a>

        <a
          href="https://github.com/ravikmr0"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white"
          aria-label="GitHub"
        >
          <BsGithub className="text-lg" />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 text-gray-700 hover:text-pink-600 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-pink-400"
          aria-label="Instagram"
        >
          <BsInstagram className="text-lg" />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white"
          aria-label="X (Twitter)"
        >
          <BsTwitterX className="text-lg" />
        </a>

        <a
          href="tel:+916398422407"
          className="bg-white p-3 text-gray-700 hover:text-green-600 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-green-400"
          aria-label="Call +91 6398422407"
        >
          <BsTelephone className="text-lg" />
        </a>

        <a
          href="https://wa.me/916398422407"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 text-gray-700 hover:text-green-500 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-green-400"
          aria-label="WhatsApp"
        >
          <BsWhatsapp className="text-lg" />
        </a>
      </div>

      <div className="mb-4">
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
          📞 Call: <a href="tel:+916398422407" className="hover:text-gray-900 dark:hover:text-white transition">+91 6398422407</a>
        </p>
      </div>

      <small className="mb-2 block text-xs">
        &copy; 2030 RaviKumar. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}