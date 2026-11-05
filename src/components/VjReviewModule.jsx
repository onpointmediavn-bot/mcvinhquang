"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Tv, X, Video, Sparkles, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function VjReviewModule() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const data = siteConfig.vjReviewModule;

  return (
    <section id="vj-review-module" className="relative md:min-h-screen w-full bg-obsidian flex flex-col justify-center py-12 md:py-20 px-2 md:px-12 border-b border-charcoal overflow-hidden blueprint-grid">
      <div className="relative z-10 max-w-7xl mx-auto w-full">

        {/* Section Header */}
        <div className="flex flex-col mb-12 relative pl-6 border-l-2 border-gold/60">
          <div className="absolute top-0 left-0 w-2 h-[6px] bg-gold"></div>
          <div className="absolute bottom-0 left-0 w-2 h-[6px] bg-gold"></div>

          <span className="font-mono text-xs text-gold tracking-widest uppercase mb-2 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            SECTION 12 // MEDIA INFLUENCE: VJ / REVIEW
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-platinum tracking-tight uppercase leading-tight mb-3">
            {data?.title || "VJ / REVIEW"}
          </h2>
          <p className="text-xs font-mono text-gold/70 uppercase tracking-[0.2em] mt-1">
            {data?.subtitle || "KẾT NỐI NHÃN HÀNG VÀ KHÁCH HÀNG QUA GÓC NHÌN TRUYỀN THÔNG ĐẲNG CẤP"}
          </p>
        </div>

        {/* Centered Cinema Frame - Full Width Large Showcase */}
        <div className="flex flex-col items-center max-w-6xl mx-auto w-full">
          <div
            onClick={() => setIsVideoOpen(true)}
            className="relative w-full aspect-video md:aspect-[16/9] lg:aspect-[21/9] min-h-[300px] md:min-h-[460px] lg:min-h-[540px] p-2 md:p-3 bg-graphite border border-charcoal/90 flex items-center justify-center overflow-hidden gold-glow group cursor-pointer rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.9)]"
          >
            {/* Corner Sci-fi Brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 md:w-6 md:h-6 border-t-2 border-l-2 border-gold/70 z-20"></div>
            <div className="absolute top-0 right-0 w-4 h-4 md:w-6 md:h-6 border-t-2 border-r-2 border-gold/70 z-20"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 md:w-6 md:h-6 border-b-2 border-l-2 border-gold/70 z-20"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 md:w-6 md:h-6 border-b-2 border-r-2 border-gold/70 z-20"></div>

            {/* Status Indicator */}
            <div className="absolute top-4 left-4 z-20 font-mono text-[9px] md:text-[10px] text-emerald-400 flex items-center gap-2 uppercase bg-obsidian/90 backdrop-blur-md px-3 py-1 rounded border border-emerald-500/40 shadow-lg">
              <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="tracking-widest font-bold">VJ_CINEMA // 4K ULTRA RESOLUTION</span>
            </div>

            {/* Top Right Duration Tag */}
            <div className="absolute top-4 right-4 z-20 font-mono text-[9px] md:text-[10px] text-platinum/70 flex items-center gap-1.5 uppercase bg-obsidian/90 backdrop-blur-md px-3 py-1 rounded border border-charcoal shadow-lg">
              <span>{data?.duration || "03:12"}</span>
            </div>

            {/* Video Thumbnail Background */}
            <div className="relative w-full h-full overflow-hidden border border-charcoal/60 bg-obsidian flex items-center justify-center">
              <img
                src={`/${data?.thumbnail || "images/vj-review/thai-dao-thumb.webp"}`}
                alt={data?.videoTitle || "VJ Review"}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>

              {/* Glowing Play Button */}
              <div className="absolute inset-0 m-auto w-16 h-16 md:w-24 md:h-24 rounded-full bg-gold/90 text-obsidian flex items-center justify-center shadow-[0_0_50px_rgba(213,182,122,0.9)] group-hover:scale-115 group-hover:bg-gold transition-all duration-300 z-20 cursor-pointer">
                <Play size={32} fill="currentColor" className="ml-1 md:w-10 md:h-10 text-obsidian" />
              </div>

              {/* Bottom CTA Tag */}
              <div className="absolute bottom-4 inset-x-4 z-20 text-center">
                <span className="font-mono text-[10px] md:text-xs text-gold font-bold uppercase tracking-widest px-4 py-2 bg-obsidian/95 backdrop-blur-md border border-gold/50 rounded-sm inline-flex items-center gap-2 group-hover:bg-gold group-hover:text-obsidian transition-colors shadow-2xl">
                  <Video size={14} /> BẤM VÀO ĐỂ PHÁT CLIP REVIEW (THÁI ĐÀO RESIDENCE)
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Embedded Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <div
            className="fixed inset-0 bg-obsidian/95 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-4xl bg-graphite border border-charcoal rounded-sm p-1 relative flex flex-col justify-between"
              onClick={e => e.stopPropagation()}
            >
              {/* Media Player Frame Header */}
              <div className="flex justify-between items-center border-b border-charcoal/80 pb-2 px-4 pt-2 font-mono text-xs">
                <span className="text-gold font-bold uppercase flex items-center gap-2">
                  <Tv size={14} /> VJ_BROADCAST: {data?.videoTitle || "THÁI ĐÀO RESIDENCE"}
                </span>
                <button
                  onClick={() => setIsVideoOpen(false)}
                  className="text-platinum/60 hover:text-gold uppercase cursor-pointer flex items-center gap-1"
                >
                  [ĐÓNG_FEED] <X size={14} />
                </button>
              </div>

              {/* Video iFrame Screen */}
              <div className="flex-grow bg-obsidian relative flex items-center justify-center overflow-hidden border border-charcoal/40 my-3 aspect-video w-full">
                <iframe
                  src={data?.videoUrl || "https://www.youtube.com/embed/SUj-GF4Kdw0"}
                  title={data?.videoTitle || "VJ Review"}
                  className="w-full h-full border-0 absolute inset-0"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                />
              </div>

              {/* Media Player Control Bar */}
              <div className="px-4 pb-2 pt-1 font-mono text-[9px] text-platinum/40 flex justify-between">
                <span>FORMAT: 16:9 // HORIZONTAL REVIEW</span>
                <span>STATUS: STREAMING</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

