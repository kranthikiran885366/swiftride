import { motion } from 'motion/react';
import { Lock, Shield, FileText, Eye, AlertCircle, CheckCircle2, Download, Search } from 'lucide-react';
import { cn } from '../../../utils/cn';

export default function ComplianceModule() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Legal & Compliance</h1>
          <p className="text-slate-500">Data privacy, regulatory filings, and audit trails.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Audit Export
          </button>
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Privacy Shield
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Privacy Requests */}
          <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-lg font-display font-bold flex items-center gap-2">
                <Lock className="w-5 h-5 text-brand-500" />
                Data Privacy Requests (GDPR/DPDP)
              </h3>
              <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-[10px] font-bold uppercase tracking-wider">4 Pending</span>
            </div>
            <div className="divide-y divide-slate-50">
              {[
                { id: 'REQ-842', user: 'Alex Thompson', type: 'Data Export', status: 'In Progress', date: '2h ago' },
                { id: 'REQ-841', user: 'Sarah Jenkins', type: 'Account Deletion', status: 'Pending', date: '5h ago' },
                { id: 'REQ-840', user: 'Michael Chen', type: 'Data Correction', status: 'Completed', date: '1d ago' },
              ].map((req, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-slate-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{req.type}</p>
                      <p className="text-xs text-slate-500">{req.user} • {req.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      req.status === 'Completed' ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                    )}>{req.status}</span>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{req.date}</p>
                    <button className="p-2 hover:bg-white rounded-lg border border-slate-200 text-slate-400 hover:text-slate-900"><Eye className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regulatory Filings */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              Regulatory Compliance
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Monthly GST Filing', status: 'Compliant', date: 'Feb 2024' },
                { label: 'TDS Returns (Quarterly)', status: 'Compliant', date: 'Q4 2023' },
                { label: 'Annual Audit Report', status: 'In Review', date: '2023' },
                { label: 'Data Residency Audit', status: 'Compliant', date: 'Jan 2024' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <p className="text-sm font-bold text-slate-900">{item.label}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-slate-500 font-medium">{item.date}</span>
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      item.status === 'Compliant' ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600"
                    )}>{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Risk Assessment */}
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">Risk Matrix</h4>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium">Regulatory Risk</span>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Low</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium">Data Privacy Risk</span>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Medium</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium">Financial Risk</span>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Low</span>
              </div>
              <div className="pt-6 border-t border-slate-800">
                <p className="text-[10px] text-slate-500 leading-relaxed italic">
                  "Overall platform compliance score is 98/100. Minor improvements needed in cross-border data transfer documentation."
                </p>
              </div>
            </div>
          </div>

          {/* Legal Documents */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-slate-950" />
              Legal Repository
            </h4>
            <div className="space-y-2">
              {['Terms of Service v4.2', 'Privacy Policy v3.1', 'Driver Agreement v2.0', 'Vendor Contracts'].map(doc => (
                <button key={doc} className="w-full text-left px-4 py-3 bg-slate-50 rounded-xl border border-slate-100 text-xs font-bold hover:bg-slate-100 transition-colors flex items-center justify-between group">
                  {doc}
                  <Download className="w-3 h-3 text-slate-400 group-hover:text-slate-950" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
