"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Tv, X, Film, Activity, Lock, Database, ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function ImpactArchive() {
  const [filterType, setFilterType] = useState("ALL");
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [frequencies, setFrequencies] = useState(Array(18).fill(15));

  const DEFAULT_VIDEO_URL = "https://drive.google.com/file/d/1sJX5Zyfj5qrlL6Ferpcv25aaWYbH7uIe/preview";

  const videos = [
    {
      id: "LOG_VID_001",
      title: "BẢN TIN MC TRUYỀN HÌNH",
      category: "TRUYỀN HÌNH",
      duration: "03:20",
      image: "/images/optimized/commentary-portrait.webp",
      videoUrl: "https://drive.google.com/file/d/1ltd2qnDW65F9yFDZF3wWLbztuwaq9P39/preview",
      description: "Dẫn dắt bản tin chính luận trực tiếp với phong thái chuyên nghiệp, giọng nói chuẩn mực và đĩnh đạc của một MC truyền hình chuyên nghiệp."
    },
    {
      id: "LOG_VID_002",
      title: "SỰ KIỆN KICK-OFF & VINH DANH",
      category: "REAL ESTATE",
      duration: "02:15",
      image: "https://img.youtube.com/vi/1JCzBQQC-fQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/1JCzBQQC-fQ",
      description: "Ghi hình trực tiếp những khoảnh khắc bùng nổ, truyền lửa nhiệt huyết và dẫn dắt vinh danh trang trọng tại sự kiện lớn."
    }
  ];

  const filteredVideos = videos.filter(video => {
    if (filterType === "ALL") return true;
    if (filterType === "REAL ESTATE") return video.category.includes("REAL ESTATE") || video.category.includes("BĐS");
    if (filterType === "OTHER") return !video.category.includes("REAL ESTATE") && !video.category.includes("BĐS");
    return true;
  });

  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  // Sync selected video when filtering
  useEffect(() => {
    if (filteredVideos.length > 0) {
      setSelectedVideo(filteredVideos[0]);
    }
  }, [filterType]);

  // Waveform spectrum animation
  useEffect(() => {
    const interval = setInterval(() => {
      setFrequencies(prev => prev.map(() => Math.floor(Math.random() * 65) + 15));
    }, 110);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="impact-archive" className="relative min-h-screen w-full bg-obsidian flex flex-col justify-center py-16 px-4 md:px-12 border-b border-charcoal overflow-hidden blueprint-grid">
      
      {/* Sci-fi HUD overlay scanlines */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes radarBeam {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 400px;
          }
        }
        .inspect-glow-panel {
          background-size: 30px 30px;
          background-image: linear-gradient(to right, rgba(213, 182, 122, 0.015) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(213, 182, 122, 0.015) 1px, transparent 1px);
        }
        .hud-scanline {
          background: linear-gradient(
            to bottom,
            rgba(213, 182, 122, 0) 0%,
            rgba(213, 182, 122, 0.05) 50%,
            rgba(213, 182, 122, 0) 100%
          );
          background-size: 100% 400px;
          animation: radarBeam 10s linear infinite;
        }
      `}} />

      <div className="relative z-10 max-w-7xl mx-auto w-full">

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
            SECTION 10 // REGISTRY: IMPACT_ARCHIVE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-platinum tracking-tight uppercase leading-tight mb-2">
            {siteConfig.videoArchive.title}
          </h2>
          <p className="text-xs font-mono text-gold/70 uppercase tracking-[0.2em]">
            {siteConfig.videoArchive.subtitle}
          </p>
        </div>

        {/* Mainframe Layout Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT SYSTEM LOGS: Scrollable List (5 columns) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="metal-panel border border-charcoal/80 bg-graphite/10 p-4 sm:p-5 rounded-sm flex flex-col justify-between h-[500px] lg:h-[600px]">
              
              <div className="space-y-4 flex flex-col h-full overflow-hidden">
                {/* Header info */}
                <div className="flex justify-between items-center border-b border-charcoal pb-3 shrink-0">
                  <div className="flex items-center gap-2">
                    <Database size={14} className="text-gold" />
                    <span className="font-mono text-xs text-platinum font-bold uppercase tracking-wider">DATABASE_REGISTRY</span>
                  </div>
                  <span className="font-mono text-[9px] text-platinum/40 uppercase">
                    TOTAL_LOGS: {videos.length}
                  </span>
                </div>

                {/* Filter Selector Tabs */}
                <div className="flex items-center gap-2 border border-charcoal bg-obsidian/60 p-1 rounded-sm shrink-0">
                  <button
                    onClick={() => setFilterType("ALL")}
                    className={`flex-1 py-1 font-mono text-[9px] tracking-wider uppercase transition-colors cursor-pointer text-center rounded-[2px] ${filterType === "ALL" ? "bg-gold text-obsidian font-bold" : "text-platinum/60 hover:text-platinum"}`}
                  >
                    TẤT CẢ
                  </button>
                  <button
                    onClick={() => setFilterType("REAL ESTATE")}
                    className={`flex-1 py-1 font-mono text-[9px] tracking-wider uppercase transition-colors cursor-pointer text-center rounded-[2px] ${filterType === "REAL ESTATE" ? "bg-gold text-obsidian font-bold" : "text-platinum/60 hover:text-platinum"}`}
                  >
                    BĐS
                  </button>
                  <button
                    onClick={() => setFilterType("OTHER")}
                    className={`flex-1 py-1 font-mono text-[9px] tracking-wider uppercase transition-colors cursor-pointer text-center rounded-[2px] ${filterType === "OTHER" ? "bg-gold text-obsidian font-bold" : "text-platinum/60 hover:text-platinum"}`}
                  >
                    KHÁC
                  </button>
                </div>

                {/* Logs scrolling panel */}
                <div className="flex-grow overflow-y-auto pr-1 space-y-2.5 scrollbar-thin scrollbar-thumb-charcoal scrollbar-track-transparent">
                  {filteredVideos.map((item) => {
                    const isSelected = selectedVideo && selectedVideo.id === item.id;
                    return (
                      <div
                        key={item.id}
                        onMouseEnter={() => setSelectedVideo(item)}
                        onClick={() => setSelectedVideo(item)}
                        className={`p-3 border transition-all duration-300 rounded-sm cursor-pointer relative group flex justify-between items-center ${
                          isSelected
                            ? "bg-gold/10 border-gold shadow-[0_0_12px_rgba(213,182,122,0.1)]"
                            : "bg-obsidian/40 border-charcoal/80 hover:border-gold/40 hover:bg-gold/[0.01]"
                        }`}
                      >
                        {/* Selector indicator line */}
                        <div className="absolute inset-y-0 left-0 w-1 bg-gold transition-transform duration-300 transform scale-y-0 group-hover:scale-y-100 origin-center" style={{ display: isSelected ? 'none' : 'block' }}></div>

                        <div className="flex flex-col min-w-0 pr-2">
                          <span className="font-mono text-[8px] text-gold/60 uppercase tracking-widest leading-none mb-1">
                            {item.id} // {item.category}
                          </span>
                          <span className="font-bold text-xs text-platinum tracking-tight group-hover:text-gold transition-colors truncate">
                            {item.title}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className="font-mono text-[9px] text-platinum/40 bg-graphite/40 border border-charcoal/50 px-1.5 py-0.5 rounded-sm">
                            {item.duration}
                          </span>
                          <ChevronRight size={12} className={`text-platinum/30 group-hover:text-gold transition-transform duration-300 ${isSelected ? "translate-x-0.5 text-gold" : ""}`} />
                        </div>
                      </div>
                    );
                  })}
                  {filteredVideos.length === 0 && (
                    <div className="text-center py-10 font-mono text-[10px] text-platinum/30">
                      NO RECORDS FOUND FOR CATEGORY
                    </div>
                  )}
                </div>

              </div>

            </div>
          </div>

          {/* RIGHT INSPECT WORKSPACE: Detailed HUD Dashboard (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {selectedVideo ? (
              <div className="metal-panel border border-charcoal/80 bg-graphite/5 p-5 rounded-sm flex flex-col h-full justify-between relative overflow-hidden inspect-glow-panel h-[500px] lg:h-[600px]">
                
                {/* Visual scanline static overlay */}
                <div className="absolute inset-0 pointer-events-none z-15 hud-scanline"></div>

                {/* Decorative Sci-fi brackets */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-gold/40"></div>
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-gold/40"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-gold/40"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-gold/40"></div>

                {/* Top status bar */}
                <div className="flex justify-between items-center border-b border-charcoal/80 pb-3 mb-4 font-mono text-[9px] sm:text-[10px] relative z-10 shrink-0">
                  <span className="text-gold font-bold uppercase flex items-center gap-1.5">
                    <Activity size={12} className="text-gold animate-pulse" /> INSPECT_WORKSPACE // {selectedVideo.id}
                  </span>
                  <span className="text-platinum/50 flex items-center gap-1.5">
                    <Lock size={10} className="text-emerald-500" /> DATA_INTEGRITY: SECURED
                  </span>
                </div>

                {/* Video thumbnail and interactive preview */}
                <div 
                  onClick={() => setActiveVideoModal(selectedVideo)}
                  className="flex-grow relative rounded-sm overflow-hidden border border-charcoal/85 bg-obsidian flex items-center justify-center cursor-pointer group shadow-[0_0_30px_rgba(0,0,0,0.6)] min-h-[180px] lg:min-h-[280px]"
                >
                  <img
                    src={selectedVideo.image}
                    alt={selectedVideo.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-obsidian/45 group-hover:bg-gold/[0.02] transition-colors duration-300"></div>

                  {/* Pulsing play overlay */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-gold/90 text-obsidian flex items-center justify-center shadow-[0_0_25px_rgba(213,182,122,0.5)] group-hover:scale-110 group-hover:bg-gold transition-all duration-300">
                    <Play size={26} fill="currentColor" className="ml-1" />
                  </div>

                  {/* Tech overlay text */}
                  <div className="absolute top-3 left-3 font-mono text-[8px] text-platinum/50 bg-obsidian/85 border border-charcoal/80 px-2 py-0.5 rounded-sm tracking-widest uppercase">
                    CAM_STREAM: ACTIVE
                  </div>
                  <div className="absolute bottom-3 right-3 font-mono text-[8px] text-gold bg-obsidian/85 border border-charcoal/80 px-2 py-0.5 rounded-sm tracking-widest">
                    DURATION: {selectedVideo.duration}
                  </div>
                </div>

                {/* Lower HUD Area: Waveform and technical stats */}
                <div className="mt-4 pt-4 border-t border-charcoal/80 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center shrink-0 relative z-10">
                  {/* Waveform decibel visualizer */}
                  <div className="sm:col-span-5 flex flex-col space-y-1">
                    <span className="font-mono text-[8px] text-platinum/40 uppercase tracking-widest flex items-center gap-1">
                      <Film size={10} className="text-gold" /> TELEMETRY_SPECTRUM
                    </span>
                    <div className="h-8 bg-obsidian/85 border border-charcoal/60 rounded-sm flex items-end justify-between px-3 py-1 gap-[2px]">
                      {frequencies.map((height, i) => (
                        <div
                          key={i}
                          className="flex-grow rounded-t-[1px] bg-gold/60 transition-all duration-150"
                          style={{ height: `${height}%`, minHeight: '3px' }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Technical stats */}
                  <div className="sm:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-[8px] text-platinum/40">
                    <div className="border border-charcoal/60 bg-obsidian/30 p-2 rounded-sm">
                      <span className="block text-[7px] text-platinum/30 uppercase">RESOLUTION</span>
                      <span className="text-platinum font-bold block mt-0.5">1080P FHD</span>
                    </div>
                    <div className="border border-charcoal/60 bg-obsidian/30 p-2 rounded-sm">
                      <span className="block text-[7px] text-platinum/30 uppercase">FPS_LOCK</span>
                      <span className="text-platinum font-bold block mt-0.5">60 FPS // CLK</span>
                    </div>
                    <div className="border border-charcoal/60 bg-obsidian/30 p-2 rounded-sm col-span-2 sm:col-span-1">
                      <span className="block text-[7px] text-platinum/30 uppercase">STATUS</span>
                      <span className="text-emerald-400 font-bold block mt-0.5">VERIFIED</span>
                    </div>
                  </div>
                </div>

                {/* Brief campaign description card */}
                <div className="mt-4 p-3 bg-obsidian/75 border border-charcoal/60 rounded-sm font-mono text-[9px] shrink-0 relative z-10">
                  <div className="flex justify-between items-center mb-1 text-gold">
                    <span className="font-bold uppercase tracking-wider">{selectedVideo.title}</span>
                    <span className="text-platinum/30 text-[8px]">{selectedVideo.category}</span>
                  </div>
                  <p className="text-platinum/70 leading-relaxed font-sans text-xs mt-1">
                    {selectedVideo.description}
                  </p>
                </div>

              </div>
            ) : (
              <div className="metal-panel border border-charcoal/80 bg-graphite/5 p-5 rounded-sm flex items-center justify-center h-full">
                <span className="font-mono text-xs text-platinum/40 italic">HOVER A SYSTEM RECORD TO LOAD WORKSPACE</span>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Embedded Google Drive Video Player Modal */}
      <AnimatePresence>
        {activeVideoModal && (
          <div
            className="fixed inset-0 bg-obsidian/95 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setActiveVideoModal(null)}
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
                  <Tv size={14} /> LIVE_RECORDING: {activeVideoModal.title}
                </span>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="text-platinum/60 hover:text-gold uppercase cursor-pointer flex items-center gap-1"
                >
                  [ĐÓNG_FEED] <X size={14} />
                </button>
              </div>

              {/* Video iFrame Screen */}
              <div className="flex-grow bg-obsidian relative flex items-center justify-center overflow-hidden border border-charcoal/40 my-3 aspect-video w-full">
                <iframe
                  src={activeVideoModal.videoUrl}
                  title={activeVideoModal.title}
                  className="w-full h-full border-0 absolute inset-0"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                />
              </div>

              {/* Media Player Control Bar */}
              <div className="px-4 pb-2 pt-1 font-mono text-[9px] text-platinum/40 flex justify-between">
                <span>SOURCE: GOOGLE_DRIVE // STREAM_STATUS: ACTIVE</span>
                <span>QUALITY: HD // RES: 1080P</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
