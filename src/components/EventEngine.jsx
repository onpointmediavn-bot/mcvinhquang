"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Eye, BarChart2, Radio, Server } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function EventEngine() {
  const [activeModule, setActiveModule] = useState(0);

  const icons = [
    Server, // MC sự kiện
    Radio,  // MC truyền hình
    Cpu,    // Thuyết trình / diễn giả
    Eye,    // Review & livestream
    BarChart2 // Đào tạo
  ];

  return (
    <section id="event-engine" className="relative min-h-screen w-full bg-obsidian flex flex-col justify-center py-20 px-6 md:px-12 border-b border-charcoal overflow-hidden blueprint-grid">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col mb-16 relative pl-6 border-l-2 border-gold/60">
          {/* Mechanical Accent corners */}
          <div className="absolute top-0 left-0 w-2 h-[6px] bg-gold"></div>
          <div className="absolute bottom-0 left-0 w-2 h-[6px] bg-gold"></div>
          
          <span className="font-mono text-xs text-gold tracking-widest uppercase mb-2 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            SECTION 03 // SYSTEM: EVENT_ENGINE
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-platinum tracking-tight uppercase leading-none mb-3">
            {siteConfig.strengths.title}
          </h2>
          <p className="text-xs font-mono text-gold/70 uppercase tracking-[0.2em] mt-1">
            {siteConfig.strengths.subtitle}
          </p>
        </div>

        {/* The Machine Console UI Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side: Modular Selectors (The Power Cells) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="font-mono text-xs text-platinum/40 mb-2 uppercase tracking-widest">
              SELECT MODULE CELL TO POWER SYSTEM:
            </div>
            
            <div className="space-y-3 flex-grow flex flex-col justify-center">
              {siteConfig.strengths.list.map((strength, index) => {
                const Icon = icons[index] || Cpu;
                const isActive = activeModule === index;
                
                return (
                  <button
                    key={strength.id}
                    onClick={() => setActiveModule(index)}
                    onMouseEnter={() => setActiveModule(index)}
                    className={`text-left w-full p-4 metal-panel relative overflow-hidden transition-all duration-300 border flex items-center justify-between focus:outline-none cursor-pointer group ${
                      isActive 
                        ? "border-gold bg-gold/[0.02] shadow-[0_0_15px_rgba(213,182,122,0.08)]" 
                        : "border-charcoal hover:border-gold/30 hover:bg-charcoal/10"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <span className={`font-mono text-xs ${isActive ? "text-gold" : "text-platinum/30"}`}>
                        [0{strength.id}]
                      </span>
                      <span className={`text-sm md:text-base font-bold tracking-wide transition-colors duration-300 ${isActive ? "text-gold" : "text-platinum/80 group-hover:text-platinum"}`}>
                        {strength.title}
                      </span>
                    </div>

                    <div className="flex items-center space-x-3">
                      {isActive && (
                        <span className="font-mono text-[9px] text-gold tracking-widest uppercase animate-pulse hidden md:inline">
                          CELL_ACTIVE
                        </span>
                      )}
                      <Icon className={`w-4 h-4 ${isActive ? "text-gold" : "text-platinum/40 group-hover:text-gold/60"}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Center Column: SVG Energy Lines */}
          <div className="hidden lg:col-span-1 lg:flex flex-col items-center justify-center relative">
            <svg className="w-full h-[350px] text-charcoal" viewBox="0 0 100 400" fill="none">
              {/* Wiring tracks */}
              <path d="M 10,60 L 50,60 L 50,200 L 90,200" stroke="currentColor" strokeWidth="1.5" />
              <path d="M 10,130 L 40,130 L 40,200 L 90,200" stroke="currentColor" strokeWidth="1.5" />
              <path d="M 10,200 L 90,200" stroke="currentColor" strokeWidth="1.5" />
              <path d="M 10,270 L 40,270 L 40,200 L 90,200" stroke="currentColor" strokeWidth="1.5" />
              <path d="M 10,340 L 50,340 L 50,200 L 90,200" stroke="currentColor" strokeWidth="1.5" />
              
              {/* Glowing active path */}
              <AnimatePresence>
                {activeModule === 0 && (
                  <motion.path 
                    initial={{ pathLength: 0 }} 
                    animate={{ pathLength: 1 }} 
                    exit={{ opacity: 0 }}
                    d="M 10,60 L 50,60 L 50,200 L 90,200" 
                    stroke="#D5B67A" 
                    strokeWidth="2.5" 
                    className="drop-shadow-[0_0_8px_rgba(213,182,122,0.8)]"
                  />
                )}
                {activeModule === 1 && (
                  <motion.path 
                    initial={{ pathLength: 0 }} 
                    animate={{ pathLength: 1 }} 
                    exit={{ opacity: 0 }}
                    d="M 10,130 L 40,130 L 40,200 L 90,200" 
                    stroke="#D5B67A" 
                    strokeWidth="2.5" 
                    className="drop-shadow-[0_0_8px_rgba(213,182,122,0.8)]"
                  />
                )}
                {activeModule === 2 && (
                  <motion.path 
                    initial={{ pathLength: 0 }} 
                    animate={{ pathLength: 1 }} 
                    exit={{ opacity: 0 }}
                    d="M 10,200 L 90,200" 
                    stroke="#D5B67A" 
                    strokeWidth="2.5" 
                    className="drop-shadow-[0_0_8px_rgba(213,182,122,0.8)]"
                  />
                )}
                {activeModule === 3 && (
                  <motion.path 
                    initial={{ pathLength: 0 }} 
                    animate={{ pathLength: 1 }} 
                    exit={{ opacity: 0 }}
                    d="M 10,270 L 40,270 L 40,200 L 90,200" 
                    stroke="#D5B67A" 
                    strokeWidth="2.5" 
                    className="drop-shadow-[0_0_8px_rgba(213,182,122,0.8)]"
                  />
                )}
                {activeModule === 4 && (
                  <motion.path 
                    initial={{ pathLength: 0 }} 
                    animate={{ pathLength: 1 }} 
                    exit={{ opacity: 0 }}
                    d="M 10,340 L 50,340 L 50,200 L 90,200" 
                    stroke="#D5B67A" 
                    strokeWidth="2.5" 
                    className="drop-shadow-[0_0_8px_rgba(213,182,122,0.8)]"
                  />
                )}
              </AnimatePresence>
            </svg>
          </div>

          {/* Right Side: Main Status Console (Telemetry and Graphic Screen) */}
          <div className="lg:col-span-6 flex">
            <div className="w-full metal-panel border border-charcoal flex flex-col overflow-hidden relative min-h-[450px]">
              {/* Dynamic screen display content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModule}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-48 md:h-60 overflow-hidden border-b border-charcoal bg-obsidian flex items-center justify-center"
                >
                  <img 
                    src={siteConfig.strengths.list[activeModule].image} 
                    alt={siteConfig.strengths.list[activeModule].title} 
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-700"
                  />
                  {/* Grid Lines Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent"></div>
                  <div className="absolute top-2 left-2 px-2 py-1 bg-obsidian/80 backdrop-blur-md border border-charcoal text-[9px] font-mono text-gold tracking-widest">
                    FEED_SOURCE: VQ_CAM_0{siteConfig.strengths.list[activeModule].id}
                  </div>
                  
                  {/* Mechanical Target Crosshairs */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                    <div className="w-24 h-24 rounded-full border border-gold border-dashed animate-spin-slow"></div>
                    <div className="absolute w-32 h-px bg-gold"></div>
                    <div className="absolute h-32 w-px bg-gold"></div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Data readouts */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-xs text-gold font-bold tracking-widest uppercase">
                      // {siteConfig.strengths.list[activeModule].title}
                    </span>
                    <span className="font-mono text-[10px] text-platinum/40">
                      SYS_LOAD: {((activeModule + 1) * 18 + 20).toFixed(0)}%
                    </span>
                  </div>
                  
                  <p className="text-platinum/80 text-sm md:text-base leading-relaxed mb-6 font-semibold">
                    {siteConfig.strengths.list[activeModule].desc}
                  </p>
                </div>

                {/* Telemetry Graphic indicators */}
                <div className="grid grid-cols-3 gap-4 border-t border-charcoal/60 pt-6 font-mono text-[9px] text-platinum/50">
                  <div>
                    <span className="block text-gold mb-1">MODULE STATE</span>
                    <span className="block text-platinum font-bold uppercase">READY_ACTIVE</span>
                  </div>
                  <div>
                    <span className="block text-gold mb-1">STAGE CAPABILITY</span>
                    <span className="block text-platinum font-bold">100% MAXIMUM</span>
                  </div>
                  <div>
                    <span className="block text-gold mb-1">LATENCY RATIO</span>
                    <span className="block text-platinum font-bold">0.00ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
