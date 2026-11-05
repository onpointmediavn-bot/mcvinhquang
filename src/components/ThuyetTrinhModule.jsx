"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Eye, Maximize2, Cpu } from "lucide-react";
import { siteConfig } from "@/data/content";
import LightboxModal from "@/components/common/LightboxModal";

export default function ThuyetTrinhModule() {
  const [selectedImg, setSelectedImg] = useState(null);
  const data = siteConfig.thuyetTrinhModule;
  const images = data?.images || [];

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

  return (
    <section id="thuyet-trinh-module" className="relative md:min-h-screen w-full bg-graphite flex flex-col justify-center py-12 md:py-20 px-2 md:px-12 border-b border-charcoal overflow-hidden blueprint-grid-fine">
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
            SECTION 10 // KEYNOTE: THUYẾT TRÌNH BĐS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-platinum tracking-tight uppercase leading-tight mb-3">
            {data?.title || "DIỄN GIẢ & THUYẾT TRÌNH DỰ ÁN"}
          </h2>
          <p className="text-xs font-mono text-gold/70 uppercase tracking-[0.2em] mt-1">
            {data?.subtitle || "ĐÀO TẠO & PHÂN TÍCH CHUYÊN SÂU DỰ ÁN CAO CẤP"}
          </p>
        </div>

        {/* Tactical Image Showcase Grid */}
        <div className="relative px-0 py-4 md:p-8 border-x-0 border-y border-charcoal/80 md:border bg-charcoal/10 md:bg-charcoal/20 backdrop-blur-md rounded-none md:rounded-sm gold-glow w-full overflow-hidden">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold/50"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold/50"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold/50"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold/50"></div>

          {/* Panel Header Telemetry */}
          <div className="flex justify-between items-center border-b border-charcoal/60 pb-3 mb-6 font-mono text-[9px] text-platinum/50 px-2 md:px-0">
            <span className="flex items-center gap-2">
              <Cpu size={12} className="text-gold" />
              TACTICAL_MODULE: KEYNOTE_PRESENTATION_STREAM
            </span>
            <span className="hidden sm:inline">DATA_ENCRYPTION: 256_BIT_SSL</span>
          </div>

          {/* Grid Layout */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 w-full"
          >
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                onClick={() => setSelectedImg(idx)}
                className="relative overflow-hidden border border-charcoal bg-obsidian rounded-sm cursor-pointer group gold-glow-hover flex flex-col justify-between aspect-[4/3] md:aspect-[3/4]"
              >
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold/30 group-hover:border-gold/80 transition-colors duration-500 z-10"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold/30 group-hover:border-gold/80 transition-colors duration-500 z-10"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gold/30 group-hover:border-gold/80 transition-colors duration-500 z-10"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold/30 group-hover:border-gold/80 transition-colors duration-500 z-10"></div>

                <div className="hidden md:flex p-3 border-b border-charcoal/80 bg-obsidian/60 justify-between items-center font-mono text-[8px] z-10 opacity-50 group-hover:opacity-100 transition-opacity">
                  <span className="text-gold font-bold flex items-center gap-1 uppercase">
                    <Terminal size={8} /> TT_FEED_0{idx + 1}
                  </span>
                  <span className="text-platinum/40 uppercase tracking-wider">KEYNOTE_PRO</span>
                </div>

                <div className="absolute inset-0 z-0">
                  <img 
                    src={`/${img}`} 
                    alt={`Thuyết trình ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/30 opacity-80 group-hover:opacity-50 transition-opacity"></div>
                </div>

                <div className="relative z-10 p-3 flex justify-between items-center bg-gradient-to-t from-obsidian/90 to-transparent pt-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="font-mono text-[9px] text-platinum/50 flex items-center gap-1">
                    <Eye size={10} className="text-gold animate-pulse" /> CLICK_TO_EXPAND
                  </span>
                  <Maximize2 size={10} className="text-gold" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <LightboxModal
        isOpen={selectedImg !== null}
        onClose={() => setSelectedImg(null)}
        images={images}
        currentIndex={selectedImg}
        onPrev={handlePrev}
        onNext={handleNext}
        onSelectIndex={(idx) => setSelectedImg(idx)}
        title={data?.title || "THUYẾT TRÌNH"}
      />
    </section>
  );
}
