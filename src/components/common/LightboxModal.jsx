"use client";

import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Global Cinematic Lightbox Modal
 * Clean, lightweight, zero-dependency unmount to avoid React 19 / framer-motion ghost overlay bugs.
 */
export default function LightboxModal({
  isOpen,
  onClose,
  images = [],
  currentIndex = 0,
  onPrev,
  onNext,
  onSelectIndex,
  title = "DISPLAY_NODE",
}) {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev(e);
      if (e.key === "ArrowRight" && onNext) onNext(e);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  // Clean conditional unmount: if not open, returns null immediately.
  // No lingering fixed DOM element, no invisible z-50 overlay blocking clicks.
  if (!isOpen || images.length === 0 || currentIndex === null) {
    return null;
  }

  const currentImg = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8 animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal Header */}
      <div className="w-full flex justify-between items-center border-b border-charcoal/80 pb-4 font-mono text-xs z-10">
        <div className="flex items-center space-x-3 text-gold">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
          </span>
          <span className="font-bold uppercase tracking-wider">
            CINEMATIC_FEED // {title}
          </span>
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="flex items-center space-x-2 text-platinum/60 hover:text-gold transition-colors cursor-pointer group focus:outline-none"
        >
          <span>[ESC_CLOSE]</span>
          <X size={16} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>

      {/* Modal Center Image Display */}
      <div className="relative flex-grow w-full flex items-center justify-center my-4 z-10">
        <img
          key={currentIndex}
          src={`/${currentImg}`}
          alt={`${title} Frame ${currentIndex + 1}`}
          className="max-h-[75vh] max-w-full md:max-w-6xl object-contain border border-charcoal/60 rounded-sm shadow-2xl z-10 select-none animate-fadeInScale"
          onClick={(e) => e.stopPropagation()}
        />

        {/* Navigation Overlays */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (onPrev) onPrev(e);
              }}
              className="absolute left-2 md:left-6 z-20 p-3 bg-obsidian/85 border border-gold/40 text-gold hover:text-warmwhite hover:bg-gold/25 transition-all rounded-full cursor-pointer focus:outline-none shadow-[0_0_20px_rgba(0,0,0,0.8)]"
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (onNext) onNext(e);
              }}
              className="absolute right-2 md:right-6 z-20 p-3 bg-obsidian/85 border border-gold/40 text-gold hover:text-warmwhite hover:bg-gold/25 transition-all rounded-full cursor-pointer focus:outline-none shadow-[0_0_20px_rgba(0,0,0,0.8)]"
              aria-label="Next Image"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div
          className="w-full flex items-center justify-center gap-2 overflow-x-auto py-2 px-4 z-20"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((img, thumbIdx) => (
            <button
              type="button"
              key={thumbIdx}
              onClick={(e) => {
                e.stopPropagation();
                if (onSelectIndex) onSelectIndex(thumbIdx);
              }}
              className={`relative shrink-0 w-12 h-12 md:w-16 md:h-16 rounded overflow-hidden border transition-all cursor-pointer ${
                currentIndex === thumbIdx
                  ? "border-gold shadow-[0_0_10px_#D5B67A] scale-105"
                  : "border-white/10 opacity-50 hover:opacity-90"
              }`}
            >
              <img
                src={`/${img}`}
                alt={`Thumb ${thumbIdx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Modal Footer */}
      <div className="w-full border-t border-charcoal/80 pt-4 font-mono text-[9px] text-platinum/40 flex justify-between items-center z-10">
        <span>SCAN_NODE: CAM_{title}_0{currentIndex + 1} // BUFFER: 100% // RESOLUTION: HIGH_RES</span>
        <span className="text-gold font-bold uppercase tracking-wider">
          FRAME 0{currentIndex + 1} OF 0{images.length}
        </span>
      </div>
    </div>
  );
}
