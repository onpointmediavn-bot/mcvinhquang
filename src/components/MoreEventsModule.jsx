"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Eye, Maximize2, Activity } from "lucide-react";
import { siteConfig } from "@/data/content";
import LightboxModal from "@/components/common/LightboxModal";

export default function MoreEventsModule() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImg, setSelectedImg] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const events = siteConfig.moreEvents || [];
  const currentEvent = events[activeTab];
  const images = currentEvent?.images || [];

  // Tự động chuyển tab sau mỗi 5 giây (chỉ chạy khi KHÔNG hover và KHÔNG mở lightbox)
  useEffect(() => {
    if (isHovered || selectedImg !== null || events.length <= 1) return;

    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % events.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered, selectedImg, events.length]);

  const handlePrev = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setSelectedImg((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setSelectedImg((prev) => (prev + 1) % images.length);
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const renderImageCard = (img, idx, gridClasses) => {
    const isLastVisible = idx === 4 && images.length > 5;
    const remainingCount = images.length - 5;

    return (
      <motion.div
        key={`${activeTab}-${idx}`}
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
            <Terminal size={8} /> LINK_ARC_0{idx + 1}
          </span>
          <span className="text-platinum/40 uppercase tracking-wider">
            {isLastVisible ? "MORE_DATA_FEEDS" : `GRID_FEED_0${idx + 1}`}
          </span>
        </div>

        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`/${img}`} 
            alt={`${currentEvent.title} ${idx + 1}`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/30 opacity-80 group-hover:opacity-50 transition-opacity"></div>
        </div>

        {/* See More Overlay for Last Visible Thumbnail */}
        {isLastVisible && (
          <div className="absolute inset-0 bg-obsidian/75 backdrop-blur-xs z-10 flex flex-col items-center justify-center text-center p-4 border border-gold/20 group-hover:bg-obsidian/65 transition-colors">
            <Maximize2 size={20} className="text-gold mb-2 animate-pulse" />
            <span className="font-mono text-xs text-gold font-bold uppercase tracking-wider">
              + {remainingCount} FEEDS
            </span>
            <span className="font-mono text-[8px] text-platinum/50 uppercase tracking-widest mt-1">
              CLICK TO INITIALIZE
            </span>
          </div>
        )}

        {/* Scanner bar animation on hover */}
        {!isLastVisible && (
          <div className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-x-0 h-0.5 bg-gold/50 shadow-[0_0_10px_#D5B67A] top-0 animate-scan"></div>
            <div className="absolute inset-3 border border-gold/15"></div>
          </div>
        )}

        {/* Interactive Zoom Indicator */}
        {!isLastVisible && (
          <div className="relative z-10 p-3 flex justify-between items-center bg-gradient-to-t from-obsidian/90 to-transparent pt-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <span className="font-mono text-[9px] text-platinum/50 flex items-center gap-1">
              <Eye size={10} className="text-gold animate-pulse" /> CLICK_TO_EXPAND
            </span>
            <Maximize2 size={10} className="text-gold" />
          </div>
        )}
      </motion.div>
    );
  };

  if (!events || events.length === 0) return null;

  return (
    <section id="more-events" className="relative w-full bg-graphite flex flex-col justify-center py-12 md:py-20 px-2 md:px-12 border-b border-charcoal overflow-hidden blueprint-grid-fine">
      {/* Decorative mechanical axis grid */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-dashed border-gold/10 animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full border border-charcoal"></div>
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
            SECTION 03 // ARCHIVED TRANSMISSIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-platinum tracking-tight uppercase leading-tight mb-3">
            CÁC SỰ KIỆN KHÁC
          </h2>
          <p className="text-xs font-mono text-gold/70 uppercase tracking-[0.2em] mt-1">
            Lưu trữ dữ liệu hoạt động & các chương trình sự kiện nổi bật khác
          </p>
        </div>

        {/* Tab Console Selector */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {events.map((event, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={event.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`group relative rounded-lg px-4 py-4 text-left flex flex-col justify-between font-mono transition-all duration-300 cursor-pointer overflow-hidden select-none ${
                  isActive 
                    ? "bg-[#161619] shadow-[0_4px_25px_rgba(213,182,122,0.12)] -translate-y-0.5 border border-gold" 
                    : "bg-[#111113]/70 border border-white/5 hover:border-gold/30 hover:bg-[#161619]"
                }`}
              >
                {/* Luxury Smooth Shimmer Border for Active Tab */}
                {isActive && <div className="luxury-border-glow pointer-events-none" />}
                
                {/* Content Layer above the border glow */}
                <div className="relative z-10 w-full flex flex-col justify-between h-full pointer-events-none">
                  <div className="flex items-center justify-between">
                    <span className={`text-[9px] tracking-widest uppercase font-semibold ${isActive ? "text-gold" : "text-platinum/40"}`}>
                      CHANNEL 0{idx + 1}
                    </span>
                    <span className={`inline-block w-1.5 h-1.5 rounded-full ${isActive ? "bg-gold shadow-[0_0_8px_#D5B67A] animate-pulse" : "bg-white/10"}`} />
                  </div>
                  
                  <span className={`text-xs md:text-[13px] font-bold tracking-wide mt-2.5 mb-2 block transition-colors duration-300 ${
                    isActive ? "text-warmwhite" : "text-platinum/70 group-hover:text-platinum"
                  }`}>
                    {event.title.replace("KHÁNH THÀNH ", "").replace("KICK-OFF / ", "")}
                  </span>

                  <div className="flex justify-between items-center pt-2 border-t border-white/[0.06] text-[8px] text-platinum/40">
                    <span className="flex items-center gap-1 text-gold/80 font-medium">
                      {event.images.length} KHOẢNH KHẮC
                    </span>
                    <Activity size={10} className={isActive ? "text-gold animate-pulse" : "text-platinum/20"} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Event Display Box */}
        <div className="relative px-0 py-4 md:p-8 border-x-0 border-y border-charcoal/80 md:border bg-charcoal/10 md:bg-charcoal/20 backdrop-blur-md rounded-none md:rounded-sm gold-glow w-full overflow-hidden">
          {/* Outer Panel HUD Corner Brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold/50"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold/50"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold/50"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold/50"></div>

          {/* Panel Header Telemetry */}
          <div className="flex justify-between items-center border-b border-charcoal/60 pb-3 mb-6 font-mono text-[9px] text-platinum/50 px-2 md:px-0">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse"></span>
              ACTIVE_STREAM // {currentEvent.id.toUpperCase()}_MONITOR
            </span>
            <span className="hidden sm:inline">DECRYPTION: COMPLETE</span>
          </div>

          {/* Event Description Panel */}
          <div className="mb-8 px-2 md:px-0">
            <span className="text-[10px] font-mono text-gold uppercase tracking-[0.2em] block mb-1">
              {currentEvent.subtitle}
            </span>
            <h3 className="text-xl md:text-2xl font-black text-platinum tracking-tight uppercase leading-none mb-3">
              {currentEvent.title}
            </h3>
            <p className="text-platinum/80 text-xs md:text-sm leading-relaxed max-w-4xl font-semibold">
              {currentEvent.description}
            </p>
          </div>

          {/* Asymmetric Grid Collage */}
          <div className="w-full">
            {images.length === 4 ? (
              /* 4-Image Grid Collage (2x2 Layout) */
              <div className="flex flex-col gap-1 md:gap-6 w-full">
                <div className="flex flex-row gap-1 md:gap-6 w-full items-stretch">
                  {images.slice(0, 2).map((img, i) => renderImageCard(img, i, "flex-1 w-0 aspect-video lg:aspect-auto lg:h-[280px]"))}
                </div>
                <div className="flex flex-row gap-1 md:gap-6 w-full items-stretch">
                  {images.slice(2, 4).map((img, i) => renderImageCard(img, i + 2, "flex-1 w-0 aspect-video lg:aspect-auto lg:h-[280px]"))}
                </div>
              </div>
            ) : (
              /* 5-Image Grid Collage (3+2 Layout) */
              <div className="flex flex-col gap-1 md:gap-6 w-full">
                {/* Top Row (3 images) */}
                <div className="flex flex-row gap-1 md:gap-6 w-full items-stretch">
                  {images.slice(0, 3).map((img, i) => renderImageCard(img, i, "flex-1 w-0 aspect-[4/3] lg:aspect-auto lg:h-[260px]"))}
                </div>
                {/* Bottom Row (2 images) */}
                <div className="flex flex-row gap-1 md:gap-6 w-full items-stretch">
                  {images.slice(3, 5).map((img, i) => renderImageCard(img, i + 3, "flex-1 w-0 aspect-video lg:aspect-auto lg:h-[300px]"))}
                </div>
              </div>
            )}
          </div>

          {/* Panel Footer Telemetry */}
          <div className="flex justify-between items-center border-t border-charcoal/60 pt-3 mt-6 font-mono text-[8px] text-platinum/40 px-2 md:px-0">
            <span>SYS_COORD: VQ_ARC_LINK // 100% SECURE</span>
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
        title={`${currentEvent.id.toUpperCase()}_HQ_DISPLAY`}
      />
    </section>
  );
}
