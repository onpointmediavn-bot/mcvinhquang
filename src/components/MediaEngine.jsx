"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Radio, Play, Activity, Tv } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function MediaEngine() {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  // Position mappings for absolute placement on desktop/mobile
  const positions = {
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:scale-105 md:scale-110 z-20",
    "top-left": "top-4 left-4 sm:top-8 sm:left-8 md:top-12 md:left-12 z-10",
    "bottom-right": "bottom-4 right-4 sm:bottom-8 sm:right-8 md:bottom-12 md:right-12 z-10",
    "top-right": "top-4 right-4 sm:top-8 sm:right-8 md:top-16 md:right-24 z-10",
    "bottom-left": "bottom-4 left-4 sm:bottom-8 sm:left-8 md:bottom-20 md:left-24 z-10"
  };

  const sizes = {
    "large": "w-28 h-28 sm:w-36 sm:h-36 md:w-56 md:h-56",
    "medium": "w-20 h-20 sm:w-28 sm:h-28 md:w-44 md:h-44",
    "small": "w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36"
  };

  return (
    <section id="media-engine" className="relative min-h-screen w-full bg-obsidian flex flex-col justify-center py-20 px-6 md:px-12 border-b border-charcoal overflow-hidden blueprint-grid">
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col h-full justify-between">
        {/* Section Header */}
        <div className="flex flex-col mb-12 relative pl-6 border-l-2 border-gold/60">
          {/* Mechanical Accent corners */}
          <div className="absolute top-0 left-0 w-2 h-[6px] bg-gold"></div>
          <div className="absolute bottom-0 left-0 w-2 h-[6px] bg-gold"></div>

          <span className="font-mono text-xs text-gold tracking-widest uppercase mb-2 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            SECTION 08 // SYSTEM: VOICE_NETWORK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-platinum tracking-tight uppercase leading-tight mb-3">
            {siteConfig.vjReview.title}
          </h2>
          <p className="text-xs font-mono text-gold/70 uppercase tracking-[0.2em] mt-1">
            {siteConfig.vjReview.subtitle}
          </p>
        </div>

        {/* Network Layout Workspace (Visible on both mobile and desktop) */}
        <div className="relative w-full h-[450px] sm:h-[500px] md:h-[600px] bg-graphite/10 border border-charcoal/80 rounded-sm overflow-hidden flex items-center justify-center p-4">

          {/* Signal Connection Lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            {/* Draw links from outer nodes to center node */}
            {/* Top-Left to Center */}
            <line x1="20%" y1="20%" x2="50%" y2="50%" stroke={hoveredNode === 1 ? "#D5B67A" : "#1B1B1B"} strokeWidth={hoveredNode === 1 ? "2" : "1"} className="transition-all duration-300" />
            {hoveredNode === 1 && <circle r="3" fill="#FFF2D2" className="animate-ping"><animateMotion dur="2s" repeatCount="indefinite" path="M 20,20 L 50,50" pathLength="100" /></circle>}

            {/* Bottom-Right to Center */}
            <line x1="80%" y1="80%" x2="50%" y2="50%" stroke={hoveredNode === 2 ? "#D5B67A" : "#1B1B1B"} strokeWidth={hoveredNode === 2 ? "2" : "1"} className="transition-all duration-300" />
            {hoveredNode === 2 && <circle r="3" fill="#FFF2D2" className="animate-ping"><animateMotion dur="2s" repeatCount="indefinite" path="M 80,80 L 50,50" pathLength="100" /></circle>}

            {/* Top-Right to Center */}
            <line x1="80%" y1="20%" x2="50%" y2="50%" stroke={hoveredNode === 3 ? "#D5B67A" : "#1B1B1B"} strokeWidth={hoveredNode === 3 ? "2" : "1"} className="transition-all duration-300" />
            {hoveredNode === 3 && <circle r="3" fill="#FFF2D2" className="animate-ping"><animateMotion dur="2s" repeatCount="indefinite" path="M 80,20 L 50,50" pathLength="100" /></circle>}

            {/* Bottom-Left to Center */}
            <line x1="20%" y1="80%" x2="50%" y2="50%" stroke={hoveredNode === 4 ? "#D5B67A" : "#1B1B1B"} strokeWidth={hoveredNode === 4 ? "2" : "1"} className="transition-all duration-300" />
            {hoveredNode === 4 && <circle r="3" fill="#FFF2D2" className="animate-ping"><animateMotion dur="2s" repeatCount="indefinite" path="M 20,80 L 50,50" pathLength="100" /></circle>}

            {/* Subtle orbital signal rings */}
            <circle cx="50%" cy="50%" r="60" sm:r="80" stroke="rgba(213, 182, 122, 0.05)" strokeWidth="1" fill="none" strokeDasharray="5,5" className="animate-spin-slow" />
            <circle cx="50%" cy="50%" r="120" sm:r="160" stroke="rgba(213, 182, 122, 0.03)" strokeWidth="1" fill="none" strokeDasharray="10,10" className="animate-spin-slow-reverse" />
          </svg>

          {/* Network Floating Nodes Container */}
          <div className="absolute inset-0">
            {siteConfig.vjReview.videos.map((node, index) => {
              const posClass = positions[node.pos] || "relative";
              const sizeClass = sizes[node.size] || "w-24 h-24";

              return (
                <div
                  key={node.id}
                  onMouseEnter={() => setHoveredNode(index)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={() => setActiveVideo(node)}
                  className={`absolute rounded-full metal-panel overflow-hidden border border-charcoal cursor-pointer flex flex-col justify-center items-center text-center transition-all duration-500 hover:border-gold/80 hover:shadow-[0_0_25px_rgba(213,182,122,0.25)] select-none group ${posClass} ${sizeClass}`}
                >
                  {/* Backdrop optimized cover */}
                  <img
                    src={`/${node.image}`}
                    alt={node.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-obsidian/40 group-hover:bg-gold/[0.05] transition-colors duration-300"></div>

                  {/* Core Telemetry Node HUD Content */}
                  <div className="relative z-10 flex flex-col items-center p-2 sm:p-3">
                    <div className={`p-1.5 sm:p-2 rounded-full border border-charcoal/80 bg-obsidian/80 text-gold mb-1 sm:mb-2 transition-transform duration-500 group-hover:scale-110 ${node.size === 'large' ? 'w-8 h-8 sm:w-10 sm:h-10' : 'w-6 h-6 sm:w-8 sm:h-8'} flex items-center justify-center`}>
                      {node.size === 'large' ? <Radio size={14} className="animate-pulse" /> : <Play size={10} fill="currentColor" />}
                    </div>
                    <span className="font-mono text-[7px] sm:text-[9px] md:text-[10px] tracking-wider text-platinum font-semibold block px-1 sm:px-2 py-0.5 bg-obsidian/70 backdrop-blur-sm border border-charcoal/40 rounded-sm truncate max-w-[90%]">
                      {node.title}
                    </span>
                  </div>

                  {/* High tech node details (only visible on hovered/large screen nodes) */}
                  <div className="absolute bottom-2 font-mono text-[7px] text-gold/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-widest uppercase hidden sm:block">
                    SIG_TX: ENGAGED
                  </div>
                </div>
              );
            })}
          </div>

          {/* Local Active Node Details Telemetry Card (Desktop Bottom-Left) */}
          <div className="absolute bottom-4 left-4 p-4 metal-panel border border-charcoal/80 backdrop-blur-lg max-w-xs font-mono text-[10px] space-y-2 pointer-events-none hidden md:block">
            <div className="flex justify-between items-center text-gold border-b border-charcoal/60 pb-1">
              <span>NET_NODE: ACTIVE_DETAILS</span>
              <Activity size={10} className="animate-pulse" />
            </div>
            {hoveredNode !== null ? (
              <>
                <div>
                  <span className="text-platinum/50 block">NODE_ID</span>
                  <span className="text-platinum font-bold">VQ_SIG_0{siteConfig.vjReview.videos[hoveredNode].id}</span>
                </div>
                <div>
                  <span className="text-platinum/50 block">TRANSMISSION_TYPE</span>
                  <span className="text-gold font-bold">{siteConfig.vjReview.videos[hoveredNode].title}</span>
                </div>
                <div>
                  <span className="text-platinum/50 block">COORD_POS</span>
                  <span className="text-platinum">{siteConfig.vjReview.videos[hoveredNode].pos.toUpperCase()}</span>
                </div>
              </>
            ) : (
              <span className="text-platinum/40 italic">HOVER NODE TO TRANSMIT SIGNAL</span>
            )}
          </div>
        </div>
      </div>

      {/* Video Overlay Dialog Modal (Fallback React Player Mock) */}
      <AnimatePresence>
        {activeVideo && (
          <div
            className="fixed inset-0 bg-obsidian/95 backdrop-blur-md z-50 flex items-center justify-center p-6"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-3xl aspect-video bg-graphite border border-charcoal rounded-sm p-1 relative flex flex-col justify-between"
              onClick={e => e.stopPropagation()}
            >
              {/* Media Player Frame Header */}
              <div className="flex justify-between items-center border-b border-charcoal/80 pb-2 px-4 pt-2 font-mono text-xs">
                <span className="text-gold font-bold uppercase flex items-center gap-2">
                  <Tv size={14} /> LIVE_FEED: {activeVideo.title}
                </span>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="text-platinum/60 hover:text-gold uppercase cursor-pointer"
                >
                  [CLOSE_FEED]
                </button>
              </div>

              {/* Mock Cinema screen */}
              <div className="flex-grow bg-obsidian/90 relative flex items-center justify-center overflow-hidden border border-charcoal/40 my-3">
                <img
                  src={`/${activeVideo.image}`}
                  alt={activeVideo.title}
                  className="w-full h-full object-cover opacity-60 filter blur-sm absolute"
                />

                {/* Simulated playback interface */}
                <div className="relative z-10 text-center p-8 space-y-4">
                  <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center mx-auto text-gold bg-graphite/40 backdrop-blur-sm animate-pulse">
                    <Play size={24} fill="currentColor" className="ml-1" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold tracking-wider text-platinum uppercase">
                    PLAYING TRANSMISSION SOURCE: VQ_SIG_0{activeVideo.id}
                  </h4>
                  <p className="text-xs text-platinum/50 font-mono">
                    VIDEO LINK SIMULATION: STABLE // DURATION: 03:45
                  </p>
                </div>
              </div>

              {/* Media Player Control Bar */}
              <div className="px-4 pb-2 pt-1 font-mono text-[9px] text-platinum/40 flex justify-between">
                <span>BUFFER: 100% // SOURCE: STABLE</span>
                <span>VOL: 95% // DECODING: H264_ACCEL</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
