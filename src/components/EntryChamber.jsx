"use client";

import { motion } from "framer-motion";
import { ChevronDown, Settings, Cpu, Zap, Activity } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function EntryChamber() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const handleScrollDown = () => {
    const coreSection = document.getElementById("power-core");
    if (coreSection) {
      coreSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative md:h-screen min-h-[400px] w-full overflow-hidden bg-obsidian flex flex-col justify-between pt-4 pb-4 px-6 md:p-12 border-b border-charcoal blueprint-grid">

      {/* Background Kinetic Systems */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 select-none">
        {/* Gear 1 */}
        <div className="absolute -top-10 -left-10 md:-top-20 md:-left-20 text-charcoal animate-spin-slow w-48 h-48 md:w-[400px] md:h-[400px]">
          <Settings className="w-full h-full" strokeWidth={0.5} />
        </div>
        {/* Gear 2 */}
        <div className="absolute -bottom-20 -right-20 md:-bottom-40 md:-right-40 text-charcoal animate-spin-slow-reverse w-64 h-64 md:w-[550px] md:h-[550px]">
          <Settings className="w-full h-full" strokeWidth={0.3} />
        </div>
        {/* Gear 3 */}
        <div className="absolute top-1/3 right-4 md:right-10 text-charcoal/40 animate-spin-medium w-24 h-24 md:w-[180px] md:h-[180px]">
          <Settings className="w-full h-full" strokeWidth={0.6} />
        </div>
        
        {/* Scanning Light overlay */}
        <div className="absolute inset-0 scan-line"></div>
      </div>

      {/* Header Telemetry */}
      <div className="relative z-10 w-full flex justify-between items-center border-b border-charcoal/50 pb-3 md:pb-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <span className="absolute inline-flex h-2 w-2 rounded-full bg-gold animate-ping"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
          </div>
          <span className="font-mono text-[9px] md:text-xs text-gold tracking-widest uppercase">
            SYSTEM STATUS: ENGAGED
          </span>
        </div>
        <div className="font-mono text-[9px] md:text-xs text-platinum/50 flex space-x-6">
          <span className="hidden md:inline">LOC: HN_VN</span>
          <span>SYS_VER: 2026.1</span>
        </div>
      </div>

      {/* Centerpiece Split Engine */}
      <div className="relative z-10 my-4 md:my-auto w-full max-w-7xl mx-auto grid grid-cols-12 gap-3 md:gap-12 items-center">
        {/* Left Column: Hero HUD Portrait */}
        {siteConfig.hero.backgroundImage && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="col-span-4 lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[3/4] p-1 md:p-3 bg-charcoal/20 border border-charcoal/80 rounded-sm gold-glow flex items-center justify-center overflow-hidden group gold-glow-hover">
              {/* HUD Bracket Corners */}
              <div className="absolute top-0 left-0 w-2 h-2 md:w-4 md:h-4 border-t border-l md:border-t-2 md:border-l-2 border-gold/40 group-hover:border-gold transition-colors duration-500"></div>
              <div className="absolute top-0 right-0 w-2 h-2 md:w-4 md:h-4 border-t border-r md:border-t-2 md:border-r-2 border-gold/40 group-hover:border-gold transition-colors duration-500"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 md:w-4 md:h-4 border-b border-l md:border-b-2 md:border-l-2 border-gold/40 group-hover:border-gold transition-colors duration-500"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 md:w-4 md:h-4 border-b border-r md:border-b-2 md:border-r-2 border-gold/40 group-hover:border-gold transition-colors duration-500"></div>

              {/* Inner Frame */}
              <div className="relative w-full h-full overflow-hidden border border-charcoal/40 bg-obsidian">
                {/* Scanline Animation */}
                <div 
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent animate-scan z-10"
                  style={{ animationDuration: '4s' }}
                ></div>
                
                <img
                  src={`/${siteConfig.hero.backgroundImage}`}
                  alt="MC Vinh Quang Portrait"
                  className="w-full h-full object-cover object-[40%_center] opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Subtle gold/dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/10 to-transparent"></div>
                
                {/* HUD Status Bar */}
                <div className="hidden md:flex absolute bottom-3 left-3 right-3 font-mono text-[9px] text-platinum/60 justify-between bg-obsidian/90 backdrop-blur-sm p-2 border border-charcoal/60">
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    LIVE_FEED: ONLINE
                  </span>
                  <span>SYS_FOCUS: 100%</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Right Column: Typographic Details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="col-span-8 lg:col-span-6 flex flex-col items-start text-left"
        >
          <motion.div variants={itemVariants} className="mb-2 md:mb-4">
            <span className="font-mono text-[8px] md:text-xs text-gold tracking-[0.2em] md:tracking-[0.3em] uppercase">
              {siteConfig.hero.slogan}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-platinum tracking-tight leading-tight md:leading-none mb-2 md:mb-6 animate-sweep md:whitespace-nowrap"
          >
            {siteConfig.hero.title}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-lg md:text-2xl text-gold/90 font-medium tracking-[0.05em] md:tracking-[0.15em] mb-4 md:mb-10"
          >
            {siteConfig.hero.subtitle}
          </motion.p>

          {/* Roles Machine Loop */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-2 md:flex md:flex-row md:space-x-4 lg:space-x-6 text-left"
          >
            {siteConfig.hero.roles.map((role, index) => (
              <div
                key={index}
                className="px-2 py-1 md:px-4 md:py-2 border border-charcoal bg-graphite/40 backdrop-blur-md flex items-center space-x-1.5 md:space-x-2 text-platinum hover:border-gold/30 transition-all duration-300 group"
              >
                {index === 0 && <Cpu size={10} className="text-gold group-hover:rotate-45 transition-transform duration-500 w-2.5 h-2.5 md:w-3.5 md:h-3.5" />}
                {index === 1 && <Zap size={10} className="text-gold w-2.5 h-2.5 md:w-3.5 md:h-3.5" />}
                {index === 2 && <Activity size={10} className="text-gold w-2.5 h-2.5 md:w-3.5 md:h-3.5" />}
                {index === 3 && <Settings size={10} className="text-gold animate-spin w-2.5 h-2.5 md:w-3.5 md:h-3.5" style={{ animationDuration: '6s' }} />}
                <span className="font-mono text-[8px] md:text-xs tracking-wider font-semibold">{role}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Navigation Indicator */}
      <div className="relative z-10 w-full flex flex-col items-center pb-2">
        <span className="font-mono text-[8px] md:text-[10px] text-platinum/40 tracking-[0.2em] md:tracking-[0.3em] uppercase mb-1 md:mb-2">
          {siteConfig.hero.tagline}
        </span>
        <button
          onClick={handleScrollDown}
          className="flex flex-col items-center justify-center p-1 md:p-2 text-platinum hover:text-gold transition-colors duration-300 group focus:outline-none"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 animate-bounce group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
