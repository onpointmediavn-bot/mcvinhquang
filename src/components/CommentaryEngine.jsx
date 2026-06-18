"use client";

import { Quote } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function CommentaryEngine() {
  return (
    <section id="commentary-engine" className="relative md:min-h-screen w-full bg-graphite flex flex-col justify-center py-12 md:py-20 px-6 md:px-12 border-b border-charcoal overflow-hidden blueprint-grid-fine">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Broadcast frame portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[3/4] p-2 bg-obsidian border border-charcoal flex items-center justify-center overflow-hidden gold-glow">

              {/* Camera recording indicators overlay */}
              <div className="absolute top-4 left-4 z-10 font-mono text-[9px] text-red-500 flex items-center gap-1.5 uppercase">
                <span className="inline-block w-2 h-2 bg-red-600 rounded-full animate-ping"></span>
                <span>REC // LIVE</span>
              </div>
              <div className="absolute top-4 right-4 z-10 font-mono text-[9px] text-platinum/50">
                1080P // 60FPS
              </div>

              <div className="relative w-full h-full overflow-hidden border border-charcoal bg-graphite">
                <img
                  src={siteConfig.commentary.portrait}
                  alt="MC Vinh Quang Editorial Portrait"
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Editorial Quotes */}
          <div className="lg:col-span-7 space-y-8">
            <div className="font-mono text-xs text-platinum/40 mb-2 uppercase tracking-widest">
              EDITORIAL RECORDS // TRANSMITTED SPEECHES:
            </div>

            <div className="space-y-6">
              {siteConfig.commentary.articles.map((article, index) => (
                <div
                  key={index}
                  className="metal-panel border border-charcoal p-8 relative flex flex-col justify-between hover:border-gold/30 transition-all duration-500 group"
                >
                  {/* Decorative quote icon */}
                  <div className="absolute -top-4 -left-4 p-2.5 bg-obsidian border border-charcoal/80 rounded-sm text-gold/30 group-hover:text-gold transition-colors duration-300">
                    <Quote size={20} fill="currentColor" />
                  </div>

                  <blockquote className="text-xl md:text-2xl font-bold text-platinum tracking-wide leading-relaxed pl-4 border-l border-gold/40 group-hover:border-gold transition-colors duration-500 mb-6">
                    "{article.quote}"
                  </blockquote>

                  {/* Editorial signature details */}
                  <div className="flex justify-between items-center border-t border-charcoal/60 pt-4 font-mono text-xs">
                    <div>
                      <span className="text-platinum/40 block text-[9px]">AUTHORITY SOURCE</span>
                      <span className="text-gold font-bold">{article.source}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-platinum/40 block text-[9px]">PUBLICATION YEAR</span>
                      <span className="text-platinum font-semibold">{article.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Journalistic Stats Banner */}
            <div className="grid grid-cols-2 gap-4 border border-charcoal bg-charcoal/15 p-4 rounded-sm font-mono text-[10px]">
              <div>
                <span className="text-platinum/40 block">BROADCAST_STATUS</span>
                <span className="text-platinum font-semibold uppercase">ACTIVE JOURNALIST</span>
              </div>
              <div>
                <span className="text-platinum/40 block">TONAL_DELIVERY</span>
                <span className="text-platinum font-semibold uppercase">FORMAL / COMMANDING</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
