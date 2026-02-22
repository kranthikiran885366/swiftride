import { motion } from 'motion/react';
import { FileText, Upload, Download, Share2, Search, Filter, MoreVertical, Lock, Users, Clock } from 'lucide-react';
import { cn } from '../../../utils/cn';

const documents = [
  { id: 'DOC-001', title: 'Board Meeting Minutes - Jan 2024', category: 'Minutes', date: 'Jan 20, 2024', size: '1.2 MB', owner: 'Rahul Sharma' },
  { id: 'DOC-002', title: 'Series B Funding Agreement', category: 'Legal', date: 'Dec 15, 2023', size: '15.4 MB', owner: 'Legal Dept' },
  { id: 'DOC-003', title: 'City Expansion Strategy 2024', category: 'Strategy', date: 'Feb 01, 2024', size: '8.2 MB', owner: 'Priya Singh' },
  { id: 'DOC-004', title: 'Employee Stock Option Plan', category: 'HR', date: 'Nov 10, 2023', size: '2.1 MB', owner: 'HR Dept' },
];

export default function ChairmanDocumentsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Board Documents</h1>
          <p className="text-slate-500 text-lg">Secure repository for legal agreements, board minutes, and strategic plans.</p>
        </div>
        <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
          <Upload className="w-4 h-4" />
          Upload New Document
        </button>
      </div>

      <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search documents by name, category..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 outline-none"
            />
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-50">
              <Filter className="w-4 h-4" />
              All Categories
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100">
          {documents.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-8 hover:bg-slate-50 transition-colors group relative"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                  <FileText className="w-8 h-8" />
                </div>
                <button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 text-slate-400 hover:text-slate-950 transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
              <h4 className="font-bold text-slate-900 mb-2 line-clamp-2 h-10">{doc.title}</h4>
              <div className="flex items-center gap-2 mb-6">
                <span className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-[10px] font-bold uppercase tracking-widest">{doc.category}</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{doc.size}</span>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center text-[10px] font-bold text-white">
                    {doc.owner.charAt(0)}
                  </div>
                  <span className="text-xs font-medium text-slate-600">{doc.owner}</span>
                </div>
                <div className="flex gap-1">
                  <button className="p-2 text-slate-400 hover:text-brand-600 transition-colors"><Download className="w-4 h-4" /></button>
                  <button className="p-2 text-slate-400 hover:text-brand-600 transition-colors"><Share2 className="w-4 h-4" /></button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
          <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">Recent Activity</h4>
          <div className="space-y-6">
            {[
              { user: 'Rahul Sharma', action: 'Uploaded', doc: 'Q4 Performance Deck', time: '2h ago' },
              { user: 'Legal Dept', action: 'Updated', doc: 'ToS v4.2', time: '5h ago' },
              { user: 'Priya Singh', action: 'Shared', doc: 'Expansion Strategy', time: '1d ago' },
            ].map((act, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-slate-500" />
                </div>
                <div>
                  <p className="text-sm"><span className="font-bold">{act.user}</span> {act.action.toLowerCase()} <span className="text-brand-400">{act.doc}</span></p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{act.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
          <h4 className="font-display font-bold mb-8 flex items-center gap-2">
            <Lock className="w-5 h-5 text-brand-500" />
            Access Control
          </h4>
          <div className="space-y-4">
            {[
              { group: 'Board Members', members: 5, access: 'Full' },
              { group: 'Executive Team', members: 12, access: 'View & Edit' },
              { group: 'Legal Counsel', members: 3, access: 'Full' },
              { group: 'External Auditors', members: 2, access: 'View Only' },
            ].map((group, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                    <Users className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{group.group}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{group.members} Members</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-brand-600 uppercase tracking-widest">{group.access}</span>
                  <button className="text-xs font-bold text-slate-400 hover:text-slate-950 transition-colors">Manage</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
