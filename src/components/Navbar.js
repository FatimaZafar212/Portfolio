"use client";

import { useState } from "react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Services", id: "services" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-gradient-to-r from-[#271472]/95 to-[#4b5563]/90 backdrop-blur-md">
      <div className="mx-auto flex h-[70px] max-w-[1200px] items-center justify-between px-5">

        {/* Logo */}
       <a
  href="#home"
  className="flex items-center text-2xl font-black tracking-wide"
>
  <span className="mr-1 font-black text-lg text-[#b9b9ff]">&lt;</span>

  <span className="text-white font-black">Fatima</span>

  <span className="ml-1 font-black bg-gradient-to-r from-[#7c8ff5] to-[#d2d2ff] bg-clip-text text-transparent">
    Zafar
  </span>

  <span className="ml-1 font-black text-lg text-[#b9b9ff]">/&gt;</span>
</a>
        {/* <a
  href="#home"
  className="text-2xl font-bold tracking-wide text-white"
>
  <span className="bg-gradient-to-r from-[#667eea] to-[#b9b9ff] bg-clip-text text-transparent">
    Fatima
  </span>{" "}
  Zafar
</a> */}
{/* <a href="#home" className="flex items-center gap-2">
  <span className="rounded-lg bg-gradient-to-r from-[#667eea] to-[#764ba2] px-3 py-1 text-xl font-bold text-white">
    FZ
  </span>

  <span className="text-xl font-semibold text-white">
    Fatima Zafar
  </span>
</a> */}
{/* <a href="#home" className="text-2xl font-bold text-white">
  <span className="text-[#b9b9ff]">&lt;</span>
  Fatima Zafar
  <span className="text-[#b9b9ff]">/&gt;</span>
</a> */}
        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative font-medium text-white transition duration-300 hover:text-[#4da3ff]"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle Menu"
        >
          <span className="h-[3px] w-6 bg-white"></span>
          <span className="h-[3px] w-6 bg-white"></span>
          <span className="h-[3px] w-6 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-[#17133d] px-5 py-5 md:hidden">
          <div className="flex flex-col items-center gap-5">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className="font-medium text-white transition hover:text-[#4da3ff]"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}