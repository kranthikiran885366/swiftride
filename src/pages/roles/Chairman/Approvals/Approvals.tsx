import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Clock, FileText, ShieldCheck, UserCheck, ChevronRight, AlertTriangle } from 'lucide-react';
import { cn } from '../../../../utils/cn';

const pendingApprovals = [
  { id: 'APP-001', title: 'New Market Expansion: Hyderabad', category: 'Strategy', requester: 'CEO', date: '2h ago', priority: 'High', description: 'Request to allocate $2M for Hyderabad market launch and regulatory permits.' },
  { id: 'APP-002', title: 'Revised Driver Commission Policy', category: 'Policy', requester: 'COO', date: '5h ago', priority: 'Medium', description: 'Update to commission structure to improve driver retention in Tier 1 cities.' },
  { id: 'APP-003', title: 'Series C Funding Term Sheet', category: 'Finance', requester: 'CFO', date: '1d ago', priority: 'Critical', description: 'Final term sheet for $50M Series C round with Lead Investor.' },
];

export default function Approvals() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Policy Approvals</h1>
          <p className="text-slate-500 text-lg">Review and authorize critical strategic and financial decisions.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-amber-50 border border-amber-100 px-6 py-3 rounded-2xl">
            <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-1">Pending Review</p>
            <p className="text-2xl font-display font-bold text-amber-600">03</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {pendingApprovals.map((app, i) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center",
                    app.priority === 'Critical' ? "bg-rose-50 text-rose-600" : 
                    app.priority === 'High' ? "bg-amber-50 text-amber-600" : "bg-blue-50 text-blue-600"
                  )}>
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-display font-bold text-slate-900">{app.title}</h3>
                      <span className={cn(
                        "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest",
                        app.priority === 'Critical' ? "bg-rose-600 text-white" : 
                        app.priority === 'High' ? "bg-amber-500 text-white" : "bg-blue-500 text-white"
                      )}>{app.priority}</span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">{app.id} • {app.category} • Requested by {app.requester} • {app.date}</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">{app.description}</p>
              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <button className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors">
                  <FileText className="w-4 h-4" />
                  View Full Document
                </button>
                <div className="flex gap-3">
                  <button className="px-6 py-2.5 bg-slate-100 text-slate-600 rounded-xl font-bold text-sm hover:bg-rose-50 hover:text-rose-600 transition-colors flex items-center gap-2">
                    <XCircle className="w-4 h-4" />
                    Reject
                  </button>
                  <button className="px-6 py-2.5 bg-slate-950 text-white rounded-xl font-bold text-sm hover:bg-emerald-600 transition-colors flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Approve
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-8">
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">Approval Stats</h4>
            <div className="space-y-6">
              {[
                { label: 'Avg. Decision Time', value: '4.2h' },
                { label: 'Approval Rate', value: '82%' },
                { label: 'Pending Value', value: '$2.8M' },
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-300">{stat.label}</span>
                  <p className="text-lg font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-500" />
              Recent History
            </h4>
            <div className="space-y-4">
              {[
                { title: 'Q1 Marketing Budget', status: 'Approved', date: 'Yesterday' },
                { title: 'New CTO Onboarding', status: 'Approved', date: '2 days ago' },
                { title: 'Office Lease Renewal', status: 'Rejected', date: '3 days ago' },
              ].map((hist, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-900 line-clamp-1">{hist.title}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{hist.date}</p>
                  </div>
                  <span className={cn(
                    "text-[10px] font-bold uppercase tracking-widest",
                    hist.status === 'Approved' ? "text-emerald-500" : "text-rose-500"
                  )}>{hist.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
