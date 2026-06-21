"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Cpu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollState = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScrollState);
    return () => window.removeEventListener("scroll", handleScrollState);
  }, []);

  const navItems = [
    { label: "MC EVENT", target: "custom-module" },
    { label: "MC BẤT ĐỘNG SẢN", target: "real-estate-engine" },
    { label: "MC TRUYỀN HÌNH", target: "commentary-engine" },
    { label: "MC REVIEW & LIVESTREAM", target: "media-engine" },
    { label: "VIDEO", target: "impact-archive" }
  ];

  const handleScroll = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-obsidian/90 backdrop-blur-md py-4 border-charcoal/80 shadow-[0_4px_30px_rgba(0,0,0,0.8)]" 
          : "bg-obsidian/20 backdrop-blur-sm py-6 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 md:px-12 flex justify-between items-center w-full">
        {/* Brand Logo / HUD Name */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center space-x-2 cursor-pointer group"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
          </span>
          <span className="font-sans text-base md:text-lg font-black text-platinum tracking-wider uppercase group-hover:text-gold transition-colors duration-300">
            MC VINH QUANG
          </span>
        </div>

        {/* Desktop Navigation Menu Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.target)}
              className="font-mono text-[10px] text-platinum/70 hover:text-gold tracking-widest uppercase relative transition-colors duration-300 py-1 cursor-pointer focus:outline-none group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>

        {/* Right side status / Quick CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <button 
            onClick={() => handleScroll("activation-terminal")}
            className="px-4 py-2 border border-gold/40 hover:border-gold bg-gold/5 hover:bg-gold hover:text-obsidian font-mono text-[9px] tracking-widest uppercase transition-all duration-300 rounded-sm cursor-pointer"
          >
            Booking
          </button>
        </div>

        {/* Mobile menu hamburger toggle button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 border border-charcoal/80 bg-obsidian/45 text-gold hover:text-platinum hover:border-gold/50 transition-colors focus:outline-none cursor-pointer rounded-sm"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu Slide-down Overlay panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden w-full bg-obsidian border-b border-charcoal overflow-hidden px-2 pb-8 pt-4"
          >
            <div className="flex flex-col space-y-4 pt-4 border-t border-charcoal/60">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleScroll(item.target)}
                  className="w-full text-left font-mono text-xs text-platinum/70 hover:text-gold tracking-wider uppercase py-2 cursor-pointer focus:outline-none flex items-center justify-between group"
                >
                  <span>{item.label}</span>
                  <Cpu size={12} className="opacity-0 group-hover:opacity-100 text-gold transition-opacity" />
                </button>
              ))}
              
              <button 
                onClick={() => handleScroll("activation-terminal")}
                className="w-full mt-4 py-3 text-center border border-gold bg-gold text-obsidian font-mono text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded-sm cursor-pointer"
              >
                Booking
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
