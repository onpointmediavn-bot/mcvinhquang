"use client";

import { useState, useEffect } from "react";
import { Tv, Cpu, Wifi, Shield, Disc, Volume2 } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function MediaEngine() {
  const videos = siteConfig.vjReview.videos;
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [frequencies, setFrequencies] = useState(Array(18).fill(15));

  // Dynamic sound wave simulation when console is active
  useEffect(() => {
    const interval = setInterval(() => {
      setFrequencies(prev => prev.map(() => Math.floor(Math.random() * 70) + 15));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="media-engine" className="relative min-h-screen w-full bg-obsidian flex flex-col justify-center py-12 md:py-20 px-4 md:px-12 border-b border-charcoal overflow-hidden blueprint-grid">
      
      {/* Glowing visual scan lines and grid overlay */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scanline {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .console-glow-grid {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(213, 182, 122, 0.02) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(213, 182, 122, 0.02) 1px, transparent 1px);
        }
        .console-screen-scanline {
          animation: scanline 8s linear infinite;
        }
      `}} />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col h-full justify-between">
        
        {/* Section Header */}
        <div className="flex flex-col mb-10 relative pl-6 border-l-2 border-gold/60">
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

        {/* Console Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT PANEL: Feed Selector (4 columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="metal-panel border border-charcoal/80 bg-graphite/10 p-5 rounded-sm flex flex-col h-full justify-between">
              
              <div className="space-y-4">
                {/* Console Core Header */}
                <div className="flex justify-between items-center border-b border-charcoal pb-3">
                  <div className="flex items-center gap-2">
                    <Cpu size={14} className="text-gold" />
                    <span className="font-mono text-xs text-platinum font-bold uppercase tracking-wider">FEED_SELECTOR</span>
                  </div>
                  <span className="font-mono text-[9px] text-emerald-500 bg-emerald-950/40 border border-emerald-800/60 px-2 py-0.5 rounded-sm flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span> SYSTEM_ONLINE
                  </span>
                </div>

                {/* Feed Selector Buttons */}
                <div className="space-y-3 pt-2">
                  {videos.map((video, index) => {
                    const isActive = activeVideo.id === video.id;
                    const numStr = String(index + 1).padStart(2, '0');
                    return (
                      <button
                        key={video.id}
                        type="button"
                        onClick={() => setActiveVideo(video)}
                        className={`w-full flex items-center justify-between p-3.5 border transition-all duration-300 text-left rounded-sm relative group overflow-hidden cursor-pointer ${
                          isActive 
                            ? "bg-gold/15 border-gold shadow-[0_0_15px_rgba(213,182,122,0.15)]" 
                            : "bg-obsidian/60 border-charcoal hover:border-gold/40 hover:bg-gold/[0.02]"
                        }`}
                      >
                        {/* Selector background hover animation */}
                        <div className="absolute inset-y-0 left-0 w-1 bg-gold transition-transform duration-300 transform scale-y-0 group-hover:scale-y-100 origin-center" style={{ display: isActive ? 'none' : 'block' }}></div>
                        
                        <div className="flex items-center gap-3 relative z-10 w-full min-w-0">
                          {/* Channel Badge */}
                          <div className={`w-8 h-8 rounded-sm border font-mono text-xs font-bold flex items-center justify-center transition-colors shrink-0 ${
                            isActive 
                              ? "bg-gold text-obsidian border-gold" 
                              : "bg-graphite/40 text-gold border-charcoal/80 group-hover:border-gold/40"
                          }`}>
                            {numStr}
                          </div>

                          {/* Info */}
                          <div className="flex-grow min-w-0">
                            <span className="block font-bold text-xs text-platinum tracking-tight group-hover:text-gold transition-colors truncate">
                              {video.title}
                            </span>
                          </div>
                        </div>

                        {/* Status tag */}
                        <div className="flex flex-col items-end justify-between font-mono text-[9px] relative z-10 pl-2 shrink-0">
                          <span className={`font-semibold ${isActive ? "text-gold" : "text-platinum/30"}`}>
                            {isActive ? "ACTIVE" : "STANDBY"}
                          </span>
                          {video.duration && (
                            <span className="text-platinum/50 text-[8px] mt-1">{video.duration}</span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Console Telemetry Info Panel (Bottom of left side) */}
              <div className="border-t border-charcoal/80 mt-6 pt-4 space-y-3 font-mono text-[10px]">
                <div className="flex justify-between items-center text-platinum/40">
                  <span className="flex items-center gap-1.5"><Wifi size={10} /> SIGNAL_STRENGTH</span>
                  <span className="text-emerald-500 font-bold">100% // EXCELLENT</span>
                </div>
                <div className="flex justify-between items-center text-platinum/40">
                  <span className="flex items-center gap-1.5"><Shield size={10} /> ENCRYPTION_LAYER</span>
                  <span className="text-gold">AES_256_SSL</span>
                </div>
                <div className="flex justify-between items-center text-platinum/40">
                  <span className="flex items-center gap-1.5"><Disc size={10} /> FEED_SOURCE</span>
                  <span className="text-platinum max-w-[150px] truncate text-right uppercase">STREAM_SRC:SECURE</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT PANEL: Console Main Screen (8 columns) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="metal-panel border border-charcoal/80 bg-graphite/5 p-4 sm:p-6 rounded-sm flex flex-col h-full justify-between relative overflow-hidden console-glow-grid">
              
              {/* Decorative Sci-fi Corner Brackets */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-gold/40"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-gold/40"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-gold/40"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-gold/40"></div>

              {/* Console Screen Top status bar */}
              <div className="flex justify-between items-center border-b border-charcoal/80 pb-3 mb-4 font-mono text-[10px] sm:text-xs relative z-10">
                <span className="text-gold font-bold uppercase flex items-center gap-2 truncate max-w-[70%]">
                  <Tv size={14} className="text-gold shrink-0" /> CONSOLE_SCREEN // {activeVideo.title}
                </span>
                <span className="text-platinum/50 flex items-center gap-2 shrink-0">
                  <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                  <span className="text-red-500 font-bold tracking-wider">● FEED_STREAMING</span>
                </span>
              </div>

              {/* Console Display Screen Container */}
              <div className="flex-grow bg-obsidian border border-charcoal/60 rounded-sm relative flex items-center justify-center overflow-hidden min-h-[340px] md:min-h-[440px] p-4 bg-radial-gradient">
                
                {/* Visual scanline static effect */}
                <div className="absolute inset-0 w-full h-[2px] bg-gold/5 pointer-events-none z-20 console-screen-scanline"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.005] to-transparent pointer-events-none z-20"></div>

                {/* Horizontal Standard Video (16:9) */}
                {activeVideo.aspectRatio === "16:9" ? (
                  <div className="w-full h-full aspect-video max-w-full relative rounded-sm overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-charcoal/40 z-10">
                    <iframe
                      src={activeVideo.videoUrl}
                      title={activeVideo.title}
                      className="w-full h-full border-0 absolute inset-0"
                      allow="autoplay; encrypted-media; fullscreen"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  /* Vertical Shorts Video styled like a premium mobile frame screen */
                  <div className="h-full aspect-[9/16] max-h-[410px] relative rounded-xl overflow-hidden border-4 border-charcoal/90 bg-black shadow-[0_0_40px_rgba(213,182,122,0.15)] flex justify-center items-center z-10">
                    
                    {/* Top Speaker/Camera notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-charcoal rounded-b-md z-30 flex items-center justify-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-graphite"></div>
                      <div className="w-8 h-0.5 bg-graphite rounded-full"></div>
                    </div>

                    <iframe
                      src={activeVideo.videoUrl}
                      title={activeVideo.title}
                      className="w-full h-full border-0 absolute inset-0 z-10 pt-4"
                      allow="autoplay; encrypted-media; fullscreen"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>

              {/* UNDER SCREEN PANEL: Decibel / Wave Telemetry HUD */}
              <div className="mt-4 pt-4 border-t border-charcoal/80 grid grid-cols-1 md:grid-cols-12 gap-4 items-center relative z-10">
                
                {/* Audio Wave Visualizer Simulation */}
                <div className="md:col-span-5 flex flex-col space-y-1">
                  <span className="font-mono text-[8px] text-platinum/40 uppercase tracking-widest flex items-center gap-1.5">
                    <Volume2 size={10} className="text-gold animate-pulse" /> AUDIO_WAVEFORM_ANALYZER
                  </span>
                  <div className="h-9 bg-obsidian/85 border border-charcoal/60 rounded-sm flex items-end justify-between px-3 py-1.5 gap-[2px]">
                    {frequencies.map((height, i) => (
                      <div
                        key={i}
                        className="flex-grow rounded-t-[1px] bg-gold/70 transition-all duration-150"
                        style={{ height: `${height}%`, minHeight: '3px' }}
                      />
                    ))}
                  </div>
                </div>

                {/* Telemetry info columns */}
                <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-[9px] text-platinum/50">
                  <div className="border border-charcoal/60 bg-obsidian/30 p-2 rounded-sm">
                    <span className="block text-[8px] text-platinum/30">STREAM_RATE</span>
                    <span className="text-platinum font-bold block mt-0.5">60 FPS</span>
                  </div>
                  <div className="border border-charcoal/60 bg-obsidian/30 p-2 rounded-sm">
                    <span className="block text-[8px] text-platinum/30">DECIBEL_PEAK</span>
                    <span className="text-gold font-bold block mt-0.5">-3.2 dB</span>
                  </div>
                  <div className="border border-charcoal/60 bg-obsidian/30 p-2 rounded-sm">
                    <span className="block text-[8px] text-platinum/30">AUDIO_CODEC</span>
                    <span className="text-platinum font-bold block mt-0.5">AAC 320K</span>
                  </div>
                  <div className="border border-charcoal/60 bg-obsidian/30 p-2 rounded-sm">
                    <span className="block text-[8px] text-platinum/30">SYNC_STATUS</span>
                    <span className="text-emerald-400 font-bold block mt-0.5">LOCKED</span>
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
