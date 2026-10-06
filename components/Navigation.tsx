"use client";

import { useState, useEffect } from "react";
import { content } from "@/data/content";
import MessageModal from "./MessageModal";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = content.navigation.links.map(link => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-anthracite/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-white font-barlow font-bold text-xl tracking-wider">
              MB
            </a>

            <div className="hidden md:flex items-center space-x-8">
              {content.navigation.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative ${
                    activeSection === link.href.replace("#", "")
                      ? "text-cyan"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.replace("#", "") && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan" />
                  )}
                </a>
              ))}
              <button onClick={() => setIsModalOpen(true)} className="text-sm font-medium text-cyan hover:text-cyan/80 transition-colors">
                M'écrire
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white"
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {content.navigation.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "text-cyan bg-white/5"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <button onClick={() => { setIsModalOpen(true); setIsMenuOpen(false); }} className="block px-4 py-2 text-sm font-medium text-cyan">
                M'écrire
              </button>
            </div>
          )}
        </div>
      </nav>

      <MessageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
