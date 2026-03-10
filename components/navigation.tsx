"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ["about", "experience", "projects", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-black/20"
          : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-12 lg:px-24 py-5">
        <a
          href="#"
          className="text-sm font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400"
        >
          MK
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`text-sm transition-colors ${
                    active === id
                      ? "text-indigo-400"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href="#contact"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors md:hidden"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
