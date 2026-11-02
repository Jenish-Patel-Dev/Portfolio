import React from 'react';
import { ProjectItem } from '@/data/projects';
import {
  QrCode,
  ShieldCheck,
  Bot,
  FileSpreadsheet,
  CreditCard,
  FileText,
  Stamp,
  Database,
  ScanFace,
  Calendar,
} from 'lucide-react';

interface ProjectPreviewMockupProps {
  project: ProjectItem;
  className?: string;
}

export const ProjectPreviewMockup: React.FC<ProjectPreviewMockupProps> = ({ project, className = '' }) => {
  const getMockupContent = () => {
    switch (project.id) {
      case 'garage-sale-management-system':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between bg-[#0E111B] text-white font-mono text-[10px]">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-[#9B6DFF] font-semibold flex items-center gap-1.5">
                <QrCode className="w-3.5 h-3.5 text-[#00D4FF]" /> GARAGE_PORTAL_V2.4
              </span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px]">
                OCI_BUCKET: ACTIVE
              </span>
            </div>
            {/* Mock Grid */}
            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="p-2 rounded bg-white/5 border border-white/5 flex flex-col gap-1">
                <div className="w-full h-8 bg-[#9B6DFF]/20 rounded flex items-center justify-center text-[8px] text-[#9B6DFF]">
                  QR STAMP
                </div>
                <span className="truncate text-gray-300">Item #1042</span>
                <span className="text-[#00D4FF] font-bold">$45.00</span>
              </div>
              <div className="p-2 rounded bg-white/5 border border-white/5 flex flex-col gap-1">
                <div className="w-full h-8 bg-[#00D4FF]/20 rounded flex items-center justify-center text-[8px] text-[#00D4FF]">
                  GEO_PIN
                </div>
                <span className="truncate text-gray-300">Yard Sale B-12</span>
                <span className="text-emerald-400 font-bold">OPEN NOW</span>
              </div>
              <div className="p-2 rounded bg-white/5 border border-white/5 flex flex-col gap-1">
                <div className="w-full h-8 bg-[#FF8A3D]/20 rounded flex items-center justify-center text-[8px] text-[#FF8A3D]">
                  FAV_COUNT
                </div>
                <span className="truncate text-gray-300">Wishlist</span>
                <span className="text-amber-400 font-bold">128 Saves</span>
              </div>
            </div>
            {/* Bottom Status */}
            <div className="flex items-center justify-between text-[8px] text-gray-400 pt-1 border-t border-white/10">
              <span>SQL Query: 14ms</span>
              <span>Spatial Bounds: 5km</span>
            </div>
          </div>
        );

      case 'visitor-management-system':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between bg-[#0A101D] text-white font-mono text-[10px]">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-[#00D4FF] font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> SEC_GATE_CHECKIN
              </span>
              <span className="px-1.5 py-0.5 rounded bg-[#00D4FF]/20 text-[#00D4FF] text-[9px]">
                GATE 01: READY
              </span>
            </div>
            <div className="flex items-center gap-3 my-2">
              <div className="w-16 h-16 rounded bg-gradient-to-br from-[#00D4FF]/30 to-[#9B6DFF]/30 border border-[#00D4FF]/40 flex items-center justify-center p-2">
                <QrCode className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="text-[9px] text-gray-400">GUEST: VIP_CORPORATE</div>
                <div className="text-[11px] font-bold text-white">Host: Dept. Director</div>
                <div className="text-[8px] text-emerald-400">Parking Bay: P-42 Allocated</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[8px] text-gray-400 pt-1 border-t border-white/10">
              <span>Approval: 2-Tier Verified</span>
              <span>Badge Exp: 18:00 IST</span>
            </div>
          </div>
        );

      case 'ai-leave-management-system':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between bg-[#120D1E] text-white font-mono text-[10px]">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-[#FF8A3D] font-semibold flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5 text-[#9B6DFF]" /> AI_ASSISTANT_HR
              </span>
              <span className="text-[9px] text-emerald-400">LLM_CONNECT: 200 OK</span>
            </div>
            <div className="space-y-1.5 my-2">
              <div className="p-1.5 rounded bg-white/5 text-[9px] text-gray-300">
                User: "Can I take Friday off under medical policy?"
              </div>
              <div className="p-1.5 rounded bg-[#9B6DFF]/15 border border-[#9B6DFF]/30 text-[9px] text-[#00D4FF]">
                AI: "Balance: 6 Days. No departmental collision detected. Form pre-filled."
              </div>
            </div>
            <div className="flex items-center justify-between text-[8px] text-gray-400 pt-1 border-t border-white/10">
              <span>Approval Chain: L1 &gt; L2</span>
              <span>Quota Remaining: 14 Days</span>
            </div>
          </div>
        );

      case 'procurement-marketing-management':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between bg-[#0E151E] text-white font-mono text-[10px]">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-[#9B6DFF] font-semibold flex items-center gap-1.5">
                <FileSpreadsheet className="w-3.5 h-3.5 text-[#FF8A3D]" /> ERP_PROCUREMENT_MATRIX
              </span>
              <span className="text-[9px] text-[#00D4FF]">BI_PUB: SYNCED</span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-2">
              <div className="p-2 rounded bg-white/5 border border-white/10">
                <div className="text-[8px] text-gray-400">CAMPAIGN PO</div>
                <div className="text-xs font-bold text-white mt-1">PO-2025-089</div>
                <div className="text-[8px] text-emerald-400 mt-1">Budget Approved</div>
              </div>
              <div className="p-2 rounded bg-white/5 border border-white/10">
                <div className="text-[8px] text-gray-400">VENDOR MATRIX</div>
                <div className="text-xs font-bold text-[#00D4FF] mt-1">3 Quotations</div>
                <div className="text-[8px] text-amber-400 mt-1">Delta: -14% Cost</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[8px] text-gray-400 pt-1 border-t border-white/10">
              <span>Export: XML / PDF</span>
              <span>Status: PO Issued</span>
            </div>
          </div>
        );

      case 'payment-integration-application':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between bg-[#0D141C] text-white font-mono text-[10px]">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-[#00D4FF] font-semibold flex items-center gap-1.5">
                <CreditCard className="w-3.5 h-3.5 text-[#9B6DFF]" /> PAYMENT_GATEWAY_ROUTER
              </span>
              <span className="text-emerald-400 text-[9px]">TLS 1.3 / HMAC</span>
            </div>
            <div className="flex items-center justify-around my-2 p-2 rounded bg-white/5 border border-white/10">
              <div className="text-center">
                <div className="text-[8px] text-gray-400">RAZORPAY</div>
                <div className="text-[11px] font-bold text-emerald-400">UPI / NetBanking</div>
              </div>
              <div className="h-6 w-[1px] bg-white/10" />
              <div className="text-center">
                <div className="text-[8px] text-gray-400">STRIPE</div>
                <div className="text-[11px] font-bold text-[#9B6DFF]">Intl. Cards</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[8px] text-gray-400 pt-1 border-t border-white/10">
              <span>Webhook Signature: Validated</span>
              <span>Reconciliation: 100%</span>
            </div>
          </div>
        );

      case 'document-preview-download':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between bg-[#111219] text-white font-mono text-[10px]">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-[#FF8A3D] font-semibold flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#00D4FF]" /> DOC_VAULT_STREAMER
              </span>
              <span className="text-[9px] text-[#9B6DFF]">BLOB_PIPE</span>
            </div>
            <div className="p-2.5 rounded bg-white/5 border border-white/10 my-2 space-y-1">
              <div className="flex justify-between text-[9px]">
                <span className="text-gray-300">Annual_Audit_Report.pdf</span>
                <span className="text-[#00D4FF]">4.2 MB</span>
              </div>
              <div className="w-full h-1 bg-white/10 rounded overflow-hidden">
                <div className="w-3/4 h-full bg-gradient-to-r from-[#9B6DFF] to-[#00D4FF]" />
              </div>
              <div className="text-[8px] text-gray-400">Tokenized Stream: Active (WPG_DOCLOAD)</div>
            </div>
            <div className="flex items-center justify-between text-[8px] text-gray-400 pt-1 border-t border-white/10">
              <span>Viewer: Embedded PDF.js</span>
              <span>Access: Authorized</span>
            </div>
          </div>
        );

      case 'pdf-watermark-application':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between bg-[#140E1B] text-white font-mono text-[10px]">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-[#9B6DFF] font-semibold flex items-center gap-1.5">
                <Stamp className="w-3.5 h-3.5 text-amber-400" /> PDF_WATERMARK_ENGINE
              </span>
              <span className="text-[9px] text-emerald-400">PDF-LIB 1.8</span>
            </div>
            <div className="relative my-2 p-3 rounded bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
              <div className="absolute text-center transform -rotate-12 select-none opacity-25 text-red-400 font-extrabold text-sm tracking-widest">
                CONFIDENTIAL • INTERNAL
              </div>
              <div className="text-[8px] text-gray-300 z-10 text-center">
                User: J_PATEL | Stamp Angle: -45° | Opacity: 0.18
              </div>
            </div>
            <div className="flex items-center justify-between text-[8px] text-gray-400 pt-1 border-t border-white/10">
              <span>Batch Queue: Ready</span>
              <span>Format: PDF/A-1b</span>
            </div>
          </div>
        );

      case 'data-loading-application':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between bg-[#0A141A] text-white font-mono text-[10px]">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-[#00D4FF] font-semibold flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-[#9B6DFF]" /> ETL_DATA_LOADER_PRO
              </span>
              <span className="text-[9px] text-emerald-400">CSV/XLSX: OK</span>
            </div>
            <div className="my-2 p-2 rounded bg-white/5 border border-white/10 space-y-1">
              <div className="flex justify-between text-[8px] text-gray-400">
                <span>Row Parsing (APEX_DATA_PARSER)</span>
                <span className="text-emerald-400">10,000 / 10,000</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded overflow-hidden">
                <div className="w-full h-full bg-emerald-400" />
              </div>
              <div className="flex justify-between text-[8px] text-gray-400 pt-1">
                <span>Validation Errors: 0</span>
                <span>FORALL Bulk Insert: Fast</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[8px] text-gray-400 pt-1 border-t border-white/10">
              <span>Target: ERP_FIN_STAGE</span>
              <span>Commit: Auto</span>
            </div>
          </div>
        );

      case 'face-recognition-login':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between bg-[#0E1524] text-white font-mono text-[10px]">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-[#00D4FF] font-semibold flex items-center gap-1.5">
                <ScanFace className="w-3.5 h-3.5 text-[#FF8A3D]" /> BIOMETRIC_AUTH_SCHEME
              </span>
              <span className="text-[9px] text-emerald-400">CAM_LIVE</span>
            </div>
            <div className="relative my-2 p-2 rounded bg-white/5 border border-white/10 flex items-center justify-center">
              <div className="w-20 h-16 rounded border border-dashed border-[#00D4FF]/60 flex items-center justify-center relative">
                <div className="w-2.5 h-2.5 absolute top-1 left-1 border-t border-l border-[#00D4FF]" />
                <div className="w-2.5 h-2.5 absolute top-1 right-1 border-t border-r border-[#00D4FF]" />
                <div className="w-2.5 h-2.5 absolute bottom-1 left-1 border-b border-l border-[#00D4FF]" />
                <div className="w-2.5 h-2.5 absolute bottom-1 right-1 border-b border-r border-[#00D4FF]" />
                <ScanFace className="w-8 h-8 text-[#00D4FF]/80" />
              </div>
              <div className="ml-3 text-[8px] space-y-1 text-gray-300">
                <div>Confidence: 99.4%</div>
                <div>Liveness: Verified</div>
                <div className="text-emerald-400 font-bold">MATCH CONFIRMED</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[8px] text-gray-400 pt-1 border-t border-white/10">
              <span>Vectors: 128-dim encrypted</span>
              <span>Session: Granted</span>
            </div>
          </div>
        );

      case 'calendar-management-application':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between bg-[#11131E] text-white font-mono text-[10px]">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-[#9B6DFF] font-semibold flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#00D4FF]" /> APEX_CALENDAR_HUB
              </span>
              <span className="text-[9px] text-[#00D4FF]">AJAX_SYNC</span>
            </div>
            <div className="grid grid-cols-4 gap-1 my-2">
              <div className="p-1 rounded bg-[#9B6DFF]/20 text-[8px] text-center text-[#9B6DFF]">
                Mon 10:00<br />Sprint Sync
              </div>
              <div className="p-1 rounded bg-[#00D4FF]/20 text-[8px] text-center text-[#00D4FF]">
                Tue 14:00<br />Client Demo
              </div>
              <div className="p-1 rounded bg-[#FF8A3D]/20 text-[8px] text-center text-[#FF8A3D]">
                Wed 11:30<br />Architecture
              </div>
              <div className="p-1 rounded bg-emerald-500/20 text-[8px] text-center text-emerald-300">
                Thu 16:00<br />Deployment
              </div>
            </div>
            <div className="flex items-center justify-between text-[8px] text-gray-400 pt-1 border-t border-white/10">
              <span>Collision Engine: 0 Overlaps</span>
              <span>FullCalendar Engine: v6</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full p-4 flex items-center justify-center bg-theme-secondary text-theme-muted font-mono text-xs">
            Application Preview
          </div>
        );
    }
  };

  return (
    <div
      className={`relative w-full h-44 rounded-xl overflow-hidden border border-white/10 bg-[#08090D] shadow-inner transition-transform duration-500 group-hover:scale-[1.02] ${className}`}
    >
      {/* Top Application Browser Window Controls */}
      <div className="h-5 px-3 bg-black/40 border-b border-white/10 flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-red-500/70" />
        <div className="w-2 h-2 rounded-full bg-amber-500/70" />
        <div className="w-2 h-2 rounded-full bg-emerald-500/70" />
        <span className="ml-2 text-[9px] font-mono text-gray-400 truncate">
          app.apex/{project.id}
        </span>
      </div>

      {/* Mockup Workspace Screen */}
      <div className="h-[calc(100%-20px)]">{getMockupContent()}</div>
    </div>
  );
};
