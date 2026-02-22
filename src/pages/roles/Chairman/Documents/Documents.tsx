import { motion } from 'motion/react';
import { FileText, Download, Search, Filter, Clock, ShieldCheck, Lock, ChevronRight, FilePlus, Share2 } from 'lucide-react';
import { cn } from '../../../../utils/cn';

const documents = [
  { id: 'DOC-001', title: 'Board Meeting Minutes - Q4 2023', category: 'Minutes', date: 'Jan 15, 2024', size: '1.2 MB', status: 'Final' },
  { id: 'DOC-002', title: 'Strategic Roadmap 2024-2026', category: 'Strategy', date: 'Feb 02, 2024', size: '4.5 MB', status: 'Draft' },
  { id: 'DOC-003', title: 'Annual Financial Audit FY23', category: 'Finance', date: 'Feb 10, 2024', size: '8.2 MB', status: 'Review' },
  { id: 'DOC-004', title: 'Market Expansion Plan - Southeast Asia', category: 'Strategy', date: 'Feb 18, 2024', size: '2.8 MB', status: 'Final' },
];

export default function Documents() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Board Documents</h1>
          <p className="text-slate-500 text-lg">Secure repository for board meeting minutes, strategic plans, and legal filings.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <FilePlus className="w-4 h-4" />
            Upload Document
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl font-display font-bold">Document Library</h3>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400" />
                  <input type="text" placeholder="Search documents..." className="pl-8 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs outline-none focus:ring-1 focus:ring-brand-500" />
                </div>
                <button className="p-1.5 hover:bg-slate-50 rounded-lg border border-slate-200"><Filter className="w-4 h-4 text-slate-400" /></button>
              </div>
            </div>
            <div className="divide-y divide-slate-50">
              {documents.map((doc, i) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 hover:bg-slate-50 transition-colors group cursor-pointer"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 group-hover:text-brand-600 transition-colors">{doc.title}</h4>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{doc.category} • {doc.date} • {doc.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                        doc.status === 'Final' ? "bg-emerald-50 text-emerald-600" : 
                        doc.status === 'Review' ? "bg-amber-50 text-amber-600" : "bg-blue-50 text-blue-600"
                      )}>
                        {doc.status}
                      </span>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-white rounded-lg border border-slate-200 text-slate-400 hover:text-brand-600"><Download className="w-4 h-4" /></button>
                        <button className="p-2 hover:bg-white rounded-lg border border-slate-200 text-slate-400 hover:text-brand-600"><Share2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">Storage Overview</h4>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span>Used Space</span>
                  <span>42.8 GB / 100 GB</span>
                </div>
                <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '42.8%' }}
                    className="h-full bg-brand-500 shadow-[0_0_12px_rgba(168,85,247,0.4)]" 
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Total Files</p>
                  <p className="text-xl font-display font-bold">1,240</p>
                </div>
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Shared</p>
                  <p className="text-xl font-display font-bold">42</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <Lock className="w-5 h-5 text-brand-500" />
              Security & Access
            </h4>
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <p className="text-xs font-bold text-emerald-900">End-to-End Encryption Active</p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">All board documents are encrypted at rest and in transit. Access is restricted to board members and executive leadership.</p>
              <button className="w-full py-3 bg-slate-50 rounded-xl font-bold text-sm text-slate-600 hover:bg-slate-100 transition-colors">
                Manage Permissions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
