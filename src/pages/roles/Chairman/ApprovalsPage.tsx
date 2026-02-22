import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Clock, FileText, AlertCircle, ChevronRight, User } from 'lucide-react';
import { cn } from '../../../utils/cn';

const pendingApprovals = [
  { 
    id: 'APP-001', 
    title: 'Commission Rate Change', 
    submittedBy: 'CEO (Rahul Sharma)', 
    type: 'Policy', 
    priority: 'High',
    date: '1h ago',
    impact: 'Affects 12,000 drivers in Mumbai. Est. revenue impact +$42K/mo.',
    description: 'Proposal to increase platform commission from 15% to 18% for premium cab category in Mumbai region.'
  },
  { 
    id: 'APP-002', 
    title: 'City Launch: Hyderabad', 
    submittedBy: 'COO (Priya Singh)', 
    type: 'Expansion', 
    priority: 'Medium',
    date: '4h ago',
    impact: 'Market size 8M. Initial driver target 2,000. Regulatory clearance obtained.',
    description: 'Full operational launch of Hyderabad city operations including driver recruitment and marketing campaigns.'
  },
];

export default function ChairmanApprovalsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-display font-bold mb-2">Policy Approvals</h1>
        <p className="text-slate-500 text-lg">Review and authorize major strategic decisions submitted by the executive team.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {pendingApprovals.map((app, i) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden"
          >
            <div className="p-8 border-b border-slate-100 flex justify-between items-start">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-display font-bold text-slate-900">{app.title}</h3>
                    <span className={cn(
                      "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest",
                      app.priority === 'High' ? "bg-rose-600 text-white" : "bg-brand-500 text-white"
                    )}>{app.priority}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1"><User className="w-4 h-4" /> {app.submittedBy}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {app.date}</span>
                    <span className="font-mono font-bold text-slate-400">{app.id}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="px-6 py-3 bg-slate-100 text-slate-600 rounded-2xl font-bold text-sm hover:bg-slate-200 transition-colors flex items-center gap-2">
                  <XCircle className="w-4 h-4" />
                  Reject
                </button>
                <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Approve Decision
                </button>
              </div>
            </div>
            <div className="p-8 bg-slate-50/50 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Proposal Details</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{app.description}</p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Strategic Impact</h4>
                <div className="p-4 bg-white rounded-2xl border border-slate-200 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-slate-700 leading-relaxed">{app.impact}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {pendingApprovals.length === 0 && (
          <div className="bg-white p-20 rounded-[32px] border border-slate-200 border-dashed flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-xl font-display font-bold text-slate-900 mb-2">All Caught Up</h3>
            <p className="text-slate-500">There are no pending policy approvals at this time.</p>
          </div>
        )}
      </div>
    </div>
  );
}
