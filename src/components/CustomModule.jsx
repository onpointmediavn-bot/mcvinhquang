"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Eye, Maximize2, Cpu } from "lucide-react";
import { siteConfig } from "@/data/content";
import LightboxModal from "@/components/common/LightboxModal";

export default function CustomModule() {
  const [selectedImg, setSelectedImg] = useState(null);
  const images = siteConfig.customModule.images || [];

  const handlePrev = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setSelectedImg((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
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
            <Terminal size={8} /> LINK_VQ_0{idx + 1}
          </span>
          <span className="text-platinum/40 uppercase tracking-wider">
            {idx < 3 ? `SYS_FEED_0${idx + 1}` : `WIDE_FEED_0${idx - 2}`}
          </span>
        </div>

        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`/${img}`} 
            alt={`${siteConfig.customModule.title} ${idx + 1}`}
            loading="lazy"
            decoding="async"
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
    <section id="custom-module" className="relative md:min-h-screen w-full bg-graphite flex flex-col justify-center py-12 md:py-20 px-2 md:px-12 border-b border-charcoal overflow-hidden blueprint-grid-fine">
      {/* Decorative mechanical axis grid */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-dashed border-gold/10 animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-charcoal"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col mb-10 relative pl-6 border-l-2 border-gold/60">
          <div className="absolute top-0 left-0 w-2 h-[6px] bg-gold"></div>
          <div className="absolute bottom-0 left-0 w-2 h-[6px] bg-gold"></div>
          
          <span className="font-mono text-xs text-gold tracking-widest uppercase mb-2 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            {siteConfig.customModule.sectionCode}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-platinum tracking-tight uppercase leading-tight mb-3">
            {siteConfig.customModule.title}
          </h2>
          <p className="text-xs font-mono text-gold/70 uppercase tracking-[0.2em] mt-1">
            {siteConfig.customModule.subtitle}
          </p>
        </div>

        {/* Tactical Image Showcase Grid */}
        <div className="relative px-0 py-4 md:p-8 border-x-0 border-y border-charcoal/80 md:border bg-charcoal/10 md:bg-charcoal/20 backdrop-blur-md rounded-none md:rounded-sm gold-glow w-full overflow-hidden">
          {/* Outer Panel HUD Corner Brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold/50"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold/50"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold/50"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold/50"></div>

          {/* Panel Header Telemetry */}
          <div className="flex justify-between items-center border-b border-charcoal/60 pb-3 mb-6 font-mono text-[9px] text-platinum/50 px-2 md:px-0">
            <span className="flex items-center gap-2">
              <Cpu size={12} className="text-gold" />
              TACTICAL_MODULE: TECHCOMBANK_ANNUAL_STREAM
            </span>
            <span className="hidden sm:inline">DATA_ENCRYPTION: 256_BIT_SSL</span>
          </div>

          {/* Asymmetric Grid Collage */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-1 md:gap-6 w-full"
          >
            {/* Top Row: 3 Focus Photos */}
            <div className="flex flex-row gap-1 md:gap-6 w-full items-stretch">
              {images.slice(0, 3).map((img, idx) => {
                const gridClasses = "flex-1 w-0 aspect-[4/3] lg:aspect-auto lg:h-[300px]";
                return renderImageCard(img, idx, gridClasses);
              })}
            </div>

            {/* Bottom Row: 2 Panoramic Cinematic Photos */}
            <div className="flex flex-row gap-1 md:gap-6 w-full items-stretch">
              {images.slice(3, 5).map((img, i) => {
                const idx = i + 3;
                const gridClasses = "flex-1 w-0 aspect-video lg:aspect-auto lg:h-[360px]";
                return renderImageCard(img, idx, gridClasses);
              })}
            </div>
          </motion.div>

          {/* Panel Footer Telemetry */}
          <div className="flex justify-between items-center border-t border-charcoal/60 pt-3 mt-6 font-mono text-[8px] text-platinum/40">
            <span>SYS_COORD: VQ_SYS_LINK // 100% STABLE</span>
            <span>CORE_LINK: SYNCHRONIZED</span>
          </div>
        </div>
      </div>

      {/* Global Lightweight Lightbox Modal (Clean DOM unmount, 0 lingering overlays) */}
      <LightboxModal
        isOpen={selectedImg !== null}
        onClose={() => setSelectedImg(null)}
        images={images}
        currentIndex={selectedImg}
        onPrev={handlePrev}
        onNext={handleNext}
        onSelectIndex={(idx) => setSelectedImg(idx)}
        title="VQ_HQ_DISPLAY"
      />
    </section>
  );
}
