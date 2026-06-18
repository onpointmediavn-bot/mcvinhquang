"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Eye, X, ChevronLeft, ChevronRight, Maximize2, Cpu } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function RealEstateEngine() {
  const [selectedImg, setSelectedImg] = useState(null);
  const images = siteConfig.realEstate.images || [];

  // Close lightbox on escape keypress
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImg(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedImg((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImg((prev) => (prev + 1) % images.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const renderImageCard = (img, idx, gridClasses) => {
    return (
      <motion.div
        key={idx}
        variants={itemVariants}
        onClick={() => setSelectedImg(idx)}
        className={`relative overflow-hidden border border-charcoal bg-obsidian rounded-sm cursor-pointer group gold-glow-hover flex flex-col justify-between ${gridClasses}`}
      >
        {/* HUD Bracket Corners */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold/30 group-hover:border-gold/80 transition-colors duration-500 z-10"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold/30 group-hover:border-gold/80 transition-colors duration-500 z-10"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gold/30 group-hover:border-gold/80 transition-colors duration-500 z-10"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold/30 group-hover:border-gold/80 transition-colors duration-500 z-10"></div>

        {/* Telemetry Header */}
        <div className="hidden md:flex p-3 border-b border-charcoal/80 bg-obsidian/60 justify-between items-center font-mono text-[8px] z-10 opacity-50 group-hover:opacity-100 transition-opacity">
          <span className="text-gold font-bold flex items-center gap-1 uppercase">
            <Terminal size={8} /> LINK_RR_0{idx + 1}
          </span>
          <span className="text-platinum/40 uppercase tracking-wider">
            {idx < 3 ? `SYS_FEED_0${idx + 1}` : `WIDE_FEED_0${idx - 2}`}
          </span>
        </div>

        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`/${img}`} 
            alt={`${siteConfig.realEstate.title} ${idx + 1}`}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/30 opacity-80 group-hover:opacity-50 transition-opacity"></div>
        </div>

        {/* Scanner bar animation on hover */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-x-0 h-0.5 bg-gold/50 shadow-[0_0_10px_#D5B67A] top-0 animate-scan"></div>
          <div className="absolute inset-3 border border-gold/15"></div>
        </div>

        {/* Interactive Zoom Indicator */}
        <div className="relative z-10 p-3 flex justify-between items-center bg-gradient-to-t from-obsidian/90 to-transparent pt-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="font-mono text-[9px] text-platinum/50 flex items-center gap-1">
            <Eye size={10} className="text-gold animate-pulse" /> CLICK_TO_EXPAND
          </span>
          <Maximize2 size={10} className="text-gold" />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="real-estate-engine" className="relative md:min-h-screen w-full bg-graphite flex flex-col justify-center py-12 md:py-20 px-6 md:px-12 border-b border-charcoal overflow-hidden blueprint-grid-fine">
      {/* Decorative mechanical axis grid */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-dashed border-gold/10 animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full border border-charcoal"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header (Unified Telemetry style) */}
        <div className="flex flex-col mb-12 relative pl-6 border-l-2 border-gold/60">
          {/* Mechanical Accent corners */}
          <div className="absolute top-0 left-0 w-2 h-[6px] bg-gold"></div>
          <div className="absolute bottom-0 left-0 w-2 h-[6px] bg-gold"></div>
          
          <span className="font-mono text-xs text-gold tracking-widest uppercase mb-2 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            SECTION 05 // MC BẤT ĐỘNG SẢN
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-platinum tracking-tight uppercase leading-tight mb-3">
            {siteConfig.realEstate.title}
          </h2>
          <p className="text-xs font-mono text-gold/70 uppercase tracking-[0.2em] mt-1">
            {siteConfig.realEstate.subtitle}
          </p>
        </div>

        {/* Bounding Connected Tactical Grid Panel */}
        <div className="relative p-6 md:p-8 border border-charcoal/80 bg-charcoal/20 backdrop-blur-md rounded-sm gold-glow w-full overflow-hidden">
          {/* Outer Panel HUD Corner Brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold/50"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold/50"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold/50"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold/50"></div>

          {/* Panel Header Telemetry */}
          <div className="flex justify-between items-center border-b border-charcoal/60 pb-3 mb-6 font-mono text-[9px] text-platinum/50">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse"></span>
              TACTICAL_GRID // REGAL_RESIDENCE_MONITOR
            </span>
            <span className="hidden sm:inline">DATA_STREAM: ESTABLISHED</span>
          </div>

          {/* Background Circuit Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-gold/10 fill-none" xmlns="http://www.w3.org/2000/svg">
            {/* Grid connecting lines matching the 3+2 layout */}
            <line x1="33.3%" y1="0%" x2="33.3%" y2="47%" strokeDasharray="3,4" className="hidden lg:block" />
            <line x1="66.6%" y1="0%" x2="66.6%" y2="47%" strokeDasharray="3,4" className="hidden lg:block" />
            <line x1="50%" y1="47%" x2="50%" y2="100%" strokeDasharray="3,4" className="hidden lg:block" />
            <line x1="0%" y1="47%" x2="100%" y2="47%" strokeDasharray="3,4" className="hidden lg:block" />
            
            {/* Circuit paths to tie images visually */}
            <path d="M 66.6,120 L 66.6,320 L 33.3,320 L 33.3,500" stroke="rgba(213, 182, 122, 0.25)" strokeWidth="1.2" className="hidden lg:block" />
            <path d="M 10,120 L 10,320 L 400,320" stroke="rgba(213, 182, 122, 0.15)" strokeWidth="1" className="hidden lg:block" />
            
            {/* Pulsing junction nodes at wire crossings */}
            <circle cx="33.3%" cy="47%" r="3.5" fill="#D5B67A" className="animate-ping hidden lg:block" />
            <circle cx="33.3%" cy="47%" r="2" fill="#D5B67A" className="hidden lg:block" />
            <circle cx="66.6%" cy="47%" r="3.5" fill="#D5B67A" className="animate-ping hidden lg:block" />
            <circle cx="66.6%" cy="47%" r="2" fill="#D5B67A" className="hidden lg:block" />
            <circle cx="50%" cy="47%" r="3.5" fill="#D5B67A" className="animate-ping hidden lg:block" />
            <circle cx="50%" cy="47%" r="2" fill="#D5B67A" className="hidden lg:block" />
          </svg>

          {/* Creative Asymmetric Grid Collage */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-2 md:gap-6 w-full relative z-10"
          >
            {/* Top Row (3 images) */}
            <div className="flex flex-row gap-2 md:gap-6 w-full items-stretch">
              {images.slice(0, 3).map((img, i) => {
                const idx = i;
                const gridClasses = "flex-1 w-0 aspect-[4/3] lg:aspect-auto lg:h-[320px]";
                return renderImageCard(img, idx, gridClasses);
              })}
            </div>

            {/* Bottom Row (2 images) */}
            <div className="flex flex-row gap-2 md:gap-6 w-full items-stretch">
              {images.slice(3, 5).map((img, i) => {
                const idx = i + 3;
                const gridClasses = "flex-1 w-0 aspect-video lg:aspect-auto lg:h-[360px]";
                return renderImageCard(img, idx, gridClasses);
              })}
            </div>
          </motion.div>

          {/* Panel Footer Telemetry */}
          <div className="flex justify-between items-center border-t border-charcoal/60 pt-3 mt-6 font-mono text-[8px] text-platinum/40">
            <span>SYS_COORD: RR_SYS_LINK // 100% STABLE</span>
            <span>CORE_LINK: SYNCHRONIZED</span>
          </div>
        </div>
      </div>

      {/* Cinematic Full-screen Lightbox Modal */}
      <AnimatePresence>
        {selectedImg !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8"
            onClick={() => setSelectedImg(null)}
          >
            {/* Modal Header */}
            <div className="w-full flex justify-between items-center border-b border-charcoal/80 pb-4 font-mono text-xs z-10">
              <div className="flex items-center space-x-3 text-gold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                </span>
                <span className="font-bold uppercase tracking-wider">
                  CINEMATIC_FEED // RR_HQ_DISPLAY
                </span>
              </div>
              <button 
                onClick={() => setSelectedImg(null)}
                className="flex items-center space-x-2 text-platinum/60 hover:text-gold transition-colors cursor-pointer group focus:outline-none"
              >
                <span>[ESC_CLOSE]</span>
                <X size={16} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Modal Center Image Display (Maximized uncropped sizing) */}
            <div className="relative flex-grow w-full flex items-center justify-center my-4 z-10">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={selectedImg}
                  src={`/${images[selectedImg]}`} 
                  alt={`${siteConfig.realEstate.title} Lightbox ${selectedImg + 1}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="max-h-[75vh] max-w-full md:max-w-6xl object-contain border border-charcoal/60 rounded-sm shadow-2xl z-10"
                  onClick={(e) => e.stopPropagation()}
                />
              </AnimatePresence>

              {/* Navigation overlays */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-2 md:left-6 p-3 bg-obsidian/80 border border-charcoal/80 text-gold hover:text-warmwhite hover:bg-gold/15 transition-all rounded-full cursor-pointer focus:outline-none hover:shadow-[0_0_15px_rgba(213,182,122,0.3)]"
                    aria-label="Previous Image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-2 md:right-6 p-3 bg-obsidian/80 border border-charcoal/80 text-gold hover:text-warmwhite hover:bg-gold/15 transition-all rounded-full cursor-pointer focus:outline-none hover:shadow-[0_0_15px_rgba(213,182,122,0.3)]"
                    aria-label="Next Image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="w-full border-t border-charcoal/80 pt-4 font-mono text-[9px] text-platinum/40 flex justify-between items-center z-10">
              <span>SCAN_NODE: CAM_RR_0{selectedImg + 1} // BUFFER: 100% // RESOLUTION: HIGH_RES</span>
              <span className="text-gold font-bold uppercase tracking-wider">
                FRAME 0{selectedImg + 1} OF 0{images.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
