"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Phone, Mail, MessageSquare, Send, Check } from "lucide-react";
import { siteConfig } from "@/data/content";

// Custom brand icon for Facebook since brand icons are not exported in standard Lucide
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function ActivationTerminal() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const contactIcons = [
    Phone,         // phone
    Mail,          // email
    FacebookIcon,  // facebook
    MessageSquare  // zalo
  ];

  const handleCopy = (value, index) => {
    navigator.clipboard.writeText(value);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="activation-terminal" className="relative md:min-h-screen w-full bg-obsidian flex flex-col justify-center py-16 md:py-24 px-2 md:px-12 border-b border-charcoal overflow-hidden blueprint-grid">

      {/* Golden visual radiation overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-t from-gold/10 via-gold/[0.02] to-transparent rounded-full filter blur-3xl" />
        <div className="absolute inset-0 bg-radial-at-b from-gold/5 via-transparent to-transparent"></div>
        {/* Scanning fine grids */}
        <div className="absolute inset-0 scan-line"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
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
            TERMINAL 11 // MAXIMUM_ACTIVATION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-platinum tracking-tight uppercase leading-tight mb-3">
            LET'S CREATE THE NEXT IMPACT
          </h2>
          <p className="text-xs font-mono text-gold/70 uppercase tracking-[0.2em] mt-1">
            SYSTEM ONLINE // CONNECT THROUGH THE PORTS BELOW
          </p>
        </div>

        {/* Centered Content: Transmission Ports */}
        <div className="max-w-2xl mx-auto w-full flex flex-col space-y-6">
          <div className="space-y-4">
            <div className="font-mono text-xs text-gold/80 uppercase tracking-wider mb-2 text-center md:text-left">
              // ACTIVE SYSTEM PORT CONNECTIONS:
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {siteConfig.contact.methods.map((method, index) => {
                const Icon = contactIcons[index] || Terminal;
                const isCopied = copiedIndex === index;

                return (
                  <button
                    key={index}
                    onClick={() => handleCopy(method.value, index)}
                    className="text-left w-full p-4 metal-panel border border-charcoal hover:border-gold/50 hover:bg-gold/[0.01] transition-all duration-300 flex items-center justify-between group focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 border border-charcoal/80 bg-obsidian text-gold group-hover:scale-105 transition-transform duration-300">
                        <Icon size={14} />
                      </div>
                      <div>
                        <span className="font-mono text-[9px] text-platinum/40 block tracking-widest uppercase">
                          {method.label}
                        </span>
                        <span className="text-sm font-bold text-platinum/80 group-hover:text-platinum transition-colors">
                          {method.value}
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-[9px] text-gold/60 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider pl-2">
                      {isCopied ? "COPIED" : "CLICK_COPY"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick disclaimer stats */}
          <div className="border border-charcoal bg-charcoal/10 p-4 font-mono text-[9px] text-platinum/40 rounded-sm flex flex-col md:flex-row md:justify-between items-center space-y-2 md:space-y-0 text-center md:text-left">
            <div>PORT_INTEGRITY: STANDARD SSL</div>
            <div>BOOKING_TERMS: CONTRACTUAL AGREEMENT</div>
            <div>AVG_RESPONSE: L_THAN_12_HOURS</div>
          </div>
        </div>

      </div>
    </section>
  );
}
