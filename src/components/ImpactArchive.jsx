"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Search, ShieldCheck, FileText, ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function ImpactArchive() {
  const [selectedRecord, setSelectedRecord] = useState(0);
  const [filterType, setFilterType] = useState("ALL");

  // Rich telemetry metadata mapped to the video archive list
  const archiveMetadata = [
    {
      id: "REC_001",
      name: "KICK-OFF HOÀ XUÂN",
      brand: "SUN GROUP",
      industry: "REAL ESTATE",
      size: "2,500 PAX",
      status: "COMPLETED",
      lang: "VI/EN",
      duration: "02:40",
      description: "Lễ ra quân bùng nổ chiến dịch dự án Khu đô thị sinh thái Nam Hòa Xuân, tạo động lực mạnh mẽ cho 2,500 chuyên viên kinh doanh.",
      image: "/images/optimized/video-1.webp"
    },
    {
      id: "REC_002",
      name: "MỞ BÁN SUN URBAN CITY",
      brand: "SUN GROUP",
      industry: "REAL ESTATE",
      size: "3,000 PAX",
      status: "VERIFIED",
      lang: "VI/EN",
      duration: "03:15",
      description: "Sự kiện mở bán siêu dự án đại đô thị Sun Urban City Hà Nam. MC dẫn dắt bùng nổ, thúc đẩy giao dịch thành công vượt mong đợi.",
      image: "/images/optimized/video-2.webp"
    },
    {
      id: "REC_003",
      name: "KHỞI CÔNG RAMON URBANIZ",
      brand: "RAMON GROUP",
      industry: "CONSTRUCTION",
      size: "1,200 PAX",
      status: "ARCHIVED",
      lang: "VI",
      duration: "01:50",
      description: "Lễ động thổ khởi công tổ hợp khu công nghiệp đô thị Ramon. Đòi hỏi phong thái dẫn đĩnh đạc, trang trọng chính luận.",
      image: "/images/optimized/video-3.webp"
    },
    {
      id: "REC_004",
      name: "GIỚI THIỆU VINH RESIDENCE",
      brand: "VINH HOMES",
      industry: "REAL ESTATE",
      size: "1,800 PAX",
      status: "COMPLETED",
      lang: "VI/EN",
      duration: "02:10",
      description: "Hội nghị giới thiệu dòng sản phẩm căn hộ cao cấp Vinh Residence, thuyết trình chuyên sâu gia tăng giá trị thương hiệu.",
      image: "/images/optimized/video-4.webp"
    },
    {
      id: "REC_005",
      name: "TỌA ĐÀM CENLAND",
      brand: "CEN GROUP",
      industry: "FINANCE / BĐS",
      size: "800 PAX",
      status: "VERIFIED",
      lang: "VI",
      duration: "04:20",
      description: "Diễn đàn tọa đàm chuyên sâu kinh tế bất động sản. MC đóng vai trò điều phối chuyên môn sắc sảo, kết nối các chuyên gia hàng đầu.",
      image: "/images/optimized/video-5.webp"
    },
    {
      id: "REC_006",
      name: "REGAL LEGEND QUẢNG BÌNH",
      brand: "REGAL GROUP",
      industry: "REAL ESTATE",
      size: "1,500 PAX",
      status: "COMPLETED",
      lang: "VI/EN",
      duration: "03:00",
      description: "Đại nhạc hội khai trương siêu dự án Regal Legend Quảng Bình, khuấy động không gian hàng nghìn khách mời tham dự.",
      image: "/images/optimized/video-6.webp"
    }
  ];

  // Filter lists based on selection
  const filteredRecords = archiveMetadata.filter(record => {
    if (filterType === "ALL") return true;
    if (filterType === "REAL ESTATE") return record.industry === "REAL ESTATE";
    if (filterType === "OTHER") return record.industry !== "REAL ESTATE";
    return true;
  });

  return (
    <section id="impact-archive" className="relative min-h-screen w-full bg-obsidian flex flex-col justify-center py-20 px-6 md:px-12 border-b border-charcoal overflow-hidden blueprint-grid">
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
            SECTION 10 // REGISTRY: IMPACT_ARCHIVE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-platinum tracking-tight uppercase leading-tight mb-3">
            {siteConfig.videoArchive.title}
          </h2>
          <p className="text-xs font-mono text-gold/70 uppercase tracking-[0.2em] mt-1">
            {siteConfig.videoArchive.subtitle}
          </p>
        </div>

        {/* High Tech Ledger Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Side: Ledger Table Grid (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">

            {/* Filter Terminal bar */}
            <div className="flex flex-wrap items-center gap-2 border-b border-charcoal pb-4">
              <button
                onClick={() => setFilterType("ALL")}
                className={`px-3 py-1 font-mono text-[10px] tracking-wider uppercase border border-charcoal cursor-pointer transition-colors ${filterType === "ALL" ? "bg-gold text-obsidian border-gold font-bold" : "text-platinum/60 hover:text-platinum"}`}
              >
                [ALL_RECORDS]
              </button>
              <button
                onClick={() => setFilterType("REAL ESTATE")}
                className={`px-3 py-1 font-mono text-[10px] tracking-wider uppercase border border-charcoal cursor-pointer transition-colors ${filterType === "REAL ESTATE" ? "bg-gold text-obsidian border-gold font-bold" : "text-platinum/60 hover:text-platinum"}`}
              >
                [REAL_ESTATE]
              </button>
              <button
                onClick={() => setFilterType("OTHER")}
                className={`px-3 py-1 font-mono text-[10px] tracking-wider uppercase border border-charcoal cursor-pointer transition-colors ${filterType === "OTHER" ? "bg-gold text-obsidian border-gold font-bold" : "text-platinum/60 hover:text-platinum"}`}
              >
                [OTHER_INDUSTRIES]
              </button>
            </div>

            {/* Tabular ledger layout */}
            <div className="flex-grow overflow-x-auto">
              <table className="w-full text-left font-mono text-xs border-collapse">
                <thead>
                  <tr className="border-b border-charcoal/80 text-gold text-[10px] uppercase tracking-wider">
                    <th className="py-3 px-2">ID</th>
                    <th className="py-3 px-2">EVENT NAME</th>
                    <th className="py-3 px-2 hidden md:table-cell">BRAND</th>
                    <th className="py-3 px-2 hidden lg:table-cell">CAPACITY</th>
                    <th className="py-3 px-2 text-right">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRecords.map((record) => {
                    const originalIndex = archiveMetadata.findIndex(r => r.id === record.id);
                    const isSelected = selectedRecord === originalIndex;

                    return (
                      <tr
                        key={record.id}
                        onClick={() => setSelectedRecord(originalIndex)}
                        className={`border-b border-charcoal/40 cursor-pointer transition-all duration-200 group ${isSelected
                            ? "bg-gold/[0.03] text-gold border-l-2 border-l-gold pl-1"
                            : "text-platinum/70 hover:text-platinum hover:bg-charcoal/20"
                          }`}
                      >
                        <td className="py-4 px-2 font-bold text-gold/75 group-hover:text-gold">{record.id}</td>
                        <td className="py-4 px-2 font-sans font-bold text-sm tracking-wide">{record.name}</td>
                        <td className="py-4 px-2 hidden md:table-cell text-platinum/60 group-hover:text-platinum/90">{record.brand}</td>
                        <td className="py-4 px-2 hidden lg:table-cell text-platinum/60 group-hover:text-platinum/90">{record.size}</td>
                        <td className="py-4 px-2 text-right">
                          <span className={`px-2 py-0.5 rounded-sm text-[9px] font-bold ${record.status === "VERIFIED"
                              ? "bg-emerald-950/40 text-emerald-400 border border-emerald-900/50"
                              : record.status === "COMPLETED"
                                ? "bg-gold/10 text-gold border border-gold/20"
                                : "bg-charcoal text-platinum/40 border border-charcoal/40"
                            }`}>
                            {record.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Database summary tags */}
            <div className="flex items-center space-x-2 text-[10px] text-platinum/40 pt-4 border-t border-charcoal font-mono">
              <Database size={12} className="text-gold" />
              <span>RECORDS FOUND: {filteredRecords.length} // STORAGE_UNIT: LOCAL_SECURE</span>
            </div>
          </div>

          {/* Right Side: Ledger Detail Scan Panel (5 Cols) */}
          <div className="lg:col-span-5 flex">
            <div className="w-full metal-panel border border-charcoal/80 flex flex-col justify-between overflow-hidden relative min-h-[480px]">

              {/* Active Scanner layout header */}
              <div className="p-4 border-b border-charcoal/80 bg-obsidian/40 flex justify-between items-center font-mono text-[10px]">
                <span className="text-gold font-bold flex items-center gap-1.5 uppercase">
                  <Search size={12} /> SCAN_NODE: {archiveMetadata[selectedRecord].id}
                </span>
                <span className="text-platinum/40 uppercase">
                  METADATA_LOADED
                </span>
              </div>

              {/* Cover scanning preview */}
              <div className="relative w-full aspect-video bg-obsidian border-b border-charcoal flex items-center justify-center overflow-hidden">
                <img
                  src={archiveMetadata[selectedRecord].image}
                  alt={archiveMetadata[selectedRecord].name}
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-700 ease-in-out"
                />

                {/* Horizontal scanner light loop */}
                <div className="absolute inset-x-0 h-0.5 bg-gold/50 shadow-[0_0_10px_#D5B67A] top-0 animate-scan"></div>

                {/* Visual crop brackets */}
                <div className="absolute inset-3 border border-platinum/10 pointer-events-none"></div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-obsidian/90 text-gold font-mono text-[9px] border border-charcoal">
                  LEN: {archiveMetadata[selectedRecord].duration}
                </div>
              </div>

              {/* Data readouts */}
              <div className="p-6 md:p-8 flex-grow space-y-6">
                <div>
                  <span className="font-mono text-[10px] text-gold tracking-widest block uppercase mb-1">
                    {archiveMetadata[selectedRecord].brand} // {archiveMetadata[selectedRecord].industry}
                  </span>
                  <h3 className="text-2xl font-black text-platinum tracking-tight leading-tight uppercase">
                    {archiveMetadata[selectedRecord].name}
                  </h3>
                </div>

                <p className="text-platinum/70 text-xs md:text-sm leading-relaxed border-l-2 border-gold/30 pl-4 py-1">
                  {archiveMetadata[selectedRecord].description}
                </p>

                {/* Database specifics */}
                <div className="grid grid-cols-2 gap-4 border-t border-charcoal/60 pt-6 font-mono text-[9px] text-platinum/50">
                  <div>
                    <span className="text-gold block mb-0.5">AUDIENCE SCALE</span>
                    <span className="text-platinum font-bold text-xs">{archiveMetadata[selectedRecord].size}</span>
                  </div>
                  <div>
                    <span className="text-gold block mb-0.5">LANGUAGE CODE</span>
                    <span className="text-platinum font-bold text-xs">{archiveMetadata[selectedRecord].lang}</span>
                  </div>
                </div>
              </div>

              {/* Registry footer */}
              <div className="p-4 border-t border-charcoal bg-obsidian/40 font-mono text-[9px] text-platinum/40 flex justify-between items-center">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={10} className="text-emerald-400" /> LEDGER_INTEGRITY: SECURE
                </span>
                <span className="flex items-center gap-1 hover:text-gold cursor-pointer transition-colors">
                  <FileText size={10} /> VIEW_FULL_RECORD <ChevronRight size={8} />
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
