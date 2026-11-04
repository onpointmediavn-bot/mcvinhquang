"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Play, Tv, X, Video } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function CommentaryEngine() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="commentary-engine" className="relative md:min-h-screen w-full bg-graphite flex flex-col justify-center py-12 md:py-20 px-2 md:px-12 border-b border-charcoal overflow-hidden blueprint-grid-fine">
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
            SECTION 09 // INTEL: INFLUENCE_SYSTEM
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-platinum tracking-tight uppercase leading-tight mb-3">
            {siteConfig.commentary.title}
          </h2>
          <p className="text-xs font-mono text-gold/70 uppercase tracking-[0.2em] mt-1">
            {siteConfig.commentary.subtitle}
          </p>
        </div>

        {/* Editorial Layout */}
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          {/* Broadcast frame portrait with video launcher */}
          <div className="w-full flex flex-col items-center">
            <div
              onClick={() => setIsVideoOpen(true)}
              className="relative w-full max-w-xl aspect-video md:aspect-[16/10] p-2 bg-obsidian border border-charcoal flex items-center justify-center overflow-hidden gold-glow group cursor-pointer rounded-sm"
            >
              {/* Camera recording indicators overlay */}
              <div className="absolute top-4 left-4 z-20 font-mono text-[9px] text-red-500 flex items-center gap-1.5 uppercase">
                <span className="inline-block w-2 h-2 bg-red-600 rounded-full animate-ping"></span>
                <span>REC // LIVE</span>
              </div>
              <div className="absolute top-4 right-4 z-20 font-mono text-[9px] text-platinum/50">
                1080P // 60FPS
              </div>

              <div className="relative w-full h-full overflow-hidden border border-charcoal bg-graphite flex items-center justify-center">
                <img
                  src={siteConfig.commentary.portrait}
                  alt="MC Vinh Quang Editorial Portrait"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent"></div>

                {/* Glowing Play Button Overlay */}
                <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-gold/90 text-obsidian flex items-center justify-center shadow-[0_0_30px_rgba(213,182,122,0.7)] group-hover:scale-110 group-hover:bg-gold transition-all duration-300 z-20">
                  <Play size={28} fill="currentColor" className="ml-1" />
                </div>

                {/* Bottom CTA Tag */}
                <div className="absolute bottom-4 inset-x-4 z-20 text-center">
                  <span className="font-mono text-[10px] text-gold font-bold uppercase tracking-widest px-3 py-1.5 bg-obsidian/90 backdrop-blur-md border border-gold/40 rounded-sm inline-flex items-center gap-1.5 group-hover:bg-gold group-hover:text-obsidian transition-colors">
                    <Video size={12} /> BẤM VÀO ĐỂ XEM CLIP MC TRUYỀN HÌNH
                  </span>
                </div>
              </div>
            </div>

            {/* Journalistic Stats & Watch Clip CTA Banner */}
            <div className="w-full max-w-xl mt-6 flex flex-col sm:flex-row gap-4 items-center justify-between border border-charcoal bg-charcoal/15 p-4 rounded-sm font-mono text-[10px]">
              <div className="grid grid-cols-2 gap-4 w-full sm:w-auto">
                <div>
                  <span className="text-platinum/40 block">BROADCAST_STATUS</span>
                  <span className="text-platinum font-semibold uppercase">ACTIVE JOURNALIST</span>
                </div>
                <div>
                  <span className="text-platinum/40 block">TONAL_DELIVERY</span>
                  <span className="text-platinum font-semibold uppercase">FORMAL / COMMANDING</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="w-full sm:w-auto px-5 py-2.5 bg-gold/90 hover:bg-gold text-obsidian font-bold rounded-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(213,182,122,0.4)]"
              >
                <Play size={14} fill="currentColor" /> XEM CLIP MC TRUYỀN HÌNH
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Embedded Google Drive TV MC Video Modal */}
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
                  <Tv size={14} /> LIVE_BROADCAST: MC TRUYỀN HÌNH - ĐÀI PT-TH HÀ NỘI
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
                  src={siteConfig.commentary.videoUrl}
                  title="Clip MC Truyền Hình"
                  className="w-full h-full border-0 absolute inset-0"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                />
              </div>

              {/* Media Player Control Bar */}
              <div className="px-4 pb-2 pt-1 font-mono text-[9px] text-platinum/40 flex justify-between">
                <span>SOURCE: GOOGLE_DRIVE // STREAM: BẢN TIN TRUYỀN HÌNH</span>
                <span>QUALITY: HD // RES: 1080P</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
