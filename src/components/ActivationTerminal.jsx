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
  const [formData, setFormData] = useState({ name: "", email: "", project: "", desc: "" });
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [isSent, setIsSent] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.project) return;
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: "", email: "", project: "", desc: "" });
    }, 4000);
  };

  return (
    <section id="activation-terminal" className="relative md:min-h-screen w-full bg-obsidian flex flex-col justify-center py-16 md:py-24 px-6 md:px-12 border-b border-charcoal overflow-hidden blueprint-grid">

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
            SYSTEM ONLINE // INITIALIZE BOOKING REQUESTS BELOW
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* Left Column: Transmission Ports (4 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="font-mono text-xs text-gold/80 uppercase tracking-wider mb-2">
                // ACTIVE SYSTEM PORT CONNECTIONS:
              </div>

              <div className="space-y-3">
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
            <div className="border border-charcoal bg-charcoal/10 p-4 font-mono text-[9px] text-platinum/40 rounded-sm space-y-1">
              <div>PORT_INTEGRITY: STANDARD SSL</div>
              <div>BOOKING_TERMS: CONTRACTUAL AGREEMENT</div>
              <div>AVG_RESPONSE: L_THAN_12_HOURS</div>
            </div>
          </div>

          {/* Right Column: Interactive Activation Terminal Form (7 Cols) */}
          <div className="lg:col-span-7 flex">
            <form
              onSubmit={handleSubmit}
              className="w-full metal-panel border border-charcoal flex flex-col justify-between p-6 md:p-8 relative min-h-[420px]"
            >
              <div>
                {/* Form header visual */}
                <div className="flex justify-between items-center border-b border-charcoal/60 pb-3 mb-6 font-mono text-xs">
                  <span className="text-gold font-bold flex items-center gap-1.5 uppercase">
                    <Terminal size={14} /> BOOKING_REQUEST_INPUT
                  </span>
                  <span className="text-platinum/40 uppercase">
                    ONLINE_CONSOL_v1.0
                  </span>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="text-gold/70 uppercase tracking-widest">Client Name / Organization</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. SUN GROUP MARKETING"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 bg-obsidian border border-charcoal text-platinum focus:border-gold/60 focus:outline-none transition-colors rounded-sm"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1">
                    <label className="text-gold/70 uppercase tracking-widest">Contact Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. contact@sungroup.vn"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 bg-obsidian border border-charcoal text-platinum focus:border-gold/60 focus:outline-none transition-colors rounded-sm"
                    />
                  </div>

                  {/* Project name field */}
                  <div className="space-y-1">
                    <label className="text-gold/70 uppercase tracking-widest">Event Name / Project Scope</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. SUN URBAN CITY SALESAUNCH"
                      value={formData.project}
                      onChange={e => setFormData({ ...formData, project: e.target.value })}
                      className="w-full p-3 bg-obsidian border border-charcoal text-platinum focus:border-gold/60 focus:outline-none transition-colors rounded-sm"
                    />
                  </div>

                  {/* Description field */}
                  <div className="space-y-1">
                    <label className="text-gold/70 uppercase tracking-widest">Parameters / Description</label>
                    <textarea
                      rows="3"
                      placeholder="Enter target schedule, audience size, language specifications..."
                      value={formData.desc}
                      onChange={e => setFormData({ ...formData, desc: e.target.value })}
                      className="w-full p-3 bg-obsidian border border-charcoal text-platinum focus:border-gold/60 focus:outline-none transition-colors rounded-sm font-sans"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA button */}
              <div className="mt-8 pt-4 border-t border-charcoal/60 flex items-center justify-between">
                <span className="font-mono text-[8px] text-platinum/40">
                  SYSTEM STATUS: AWAITING_SEND
                </span>

                <button
                  type="submit"
                  disabled={isSent}
                  className={`px-6 py-3 border font-mono text-xs tracking-widest uppercase font-bold flex items-center gap-2 cursor-pointer transition-all duration-300 relative overflow-hidden group ${isSent
                      ? "border-emerald-500 bg-emerald-950/20 text-emerald-400"
                      : "border-gold bg-gold text-obsidian hover:shadow-[0_0_20px_rgba(213,182,122,0.3)] hover:-translate-y-0.5"
                    }`}
                >
                  {isSent ? (
                    <>
                      <Check size={14} /> INITIALIZED_SUCCESS
                    </>
                  ) : (
                    <>
                      <Send size={12} /> {siteConfig.contact.ctaButton}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
