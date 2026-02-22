import { motion } from 'motion/react';
import { Lock, ShieldCheck, FileText, ShieldAlert, Zap, Search, Filter, Download, Clock, AlertTriangle, UserCheck, Scale } from 'lucide-react';
import { cn } from '../../../utils/cn';

export default function ComplianceOfficerDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-slate-50 rounded-lg">
              <Scale className="w-5 h-5 text-slate-900" />
            </div>
            <span className="text-xs font-bold text-slate-900 uppercase tracking-[0.2em]">Legal & Regulatory Control</span>
          </div>
          <h1 className="text-4xl font-display font-bold mb-2">Compliance Health</h1>
          <p className="text-slate-500 text-lg">Monitor data privacy requests, regulatory deadlines, and AML alerts.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Audit Export
          </button>
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            Submit Regulatory Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'GDPR Requests', value: '12', change: '02 Overdue', trend: 'up', icon: UserCheck, color: 'text-blue-500' },
          { label: 'AML Alerts', value: '04', change: 'High Risk', trend: 'up', icon: ShieldAlert, color: 'text-rose-500' },
          { label: 'Permit Compliance', value: '99.1%', change: 'On Target', trend: 'up', icon: ShieldCheck, color: 'text-emerald-500' },
          { label: 'Policy Expiry', value: '02', change: '30d Window', trend: 'neutral', icon: Clock, color: 'text-amber-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-slate-50 rounded-2xl">
                <stat.icon className={cn("w-6 h-6", stat.color)} />
              </div>
              <div className={cn(
                "flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-lg",
                stat.trend === 'up' ? "bg-emerald-50 text-emerald-600" : 
                stat.trend === 'down' ? "bg-rose-50 text-rose-600" : "bg-slate-50 text-slate-600"
              )}>
                {stat.change}
              </div>
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-3xl font-display font-bold">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Data Privacy Requests */}
          <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl font-display font-bold">Data Privacy Requests</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-brand-200 bg-brand-50 text-brand-600 rounded-lg">Erasure</button>
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-slate-100 rounded-lg hover:bg-slate-50">Access</button>
              </div>
            </div>
            <div className="divide-y divide-slate-50">
              {[
                { id: 'REQ-8821', user: 'Rahul S.', type: 'Right to Erasure', status: 'In Progress', deadline: '2d left' },
                { id: 'REQ-8820', user: 'Priya G.', type: 'Right to Access', status: 'Pending', deadline: '12d left' },
                { id: 'REQ-8819', user: 'Amit K.', type: 'Right to Erasure', status: 'Completed', deadline: 'Done' },
              ].map((req, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                      <Lock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{req.user} • {req.type}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{req.id} • Deadline: {req.deadline}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      req.status === 'In Progress' ? "bg-blue-50 text-blue-600" : 
                      req.status === 'Completed' ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                    )}>{req.status}</span>
                    <button className="px-4 py-2 bg-slate-950 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-brand-600 transition-colors">Process</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Policy Manager Preview */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-display font-bold flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-500" />
                Policy Manager
              </h3>
              <button className="text-sm font-bold text-brand-600 hover:text-brand-700">Create New Version</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Terms & Conditions', version: 'v4.2.0', status: 'Active', date: 'Jan 20' },
                { title: 'Privacy Policy', version: 'v3.1.5', status: 'Review', date: 'Feb 15' },
              ].map((pol, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-sm font-bold text-slate-900 mb-1">{pol.title}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{pol.version} • {pol.date}</span>
                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-widest",
                      pol.status === 'Active' ? "text-emerald-500" : "text-amber-500"
                    )}>{pol.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* AML Monitor */}
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">AML Monitor</h4>
            <div className="space-y-6">
              {[
                { user: 'Amit S.', reason: 'High Cash Volume', risk: 'High' },
                { user: 'Neha V.', reason: 'Structured Cycling', risk: 'Critical' },
              ].map((aml, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold">{aml.user}</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{aml.reason}</p>
                  </div>
                  <div className={cn(
                    "w-2 h-2 rounded-full",
                    aml.risk === 'Critical' ? "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.4)]" : "bg-amber-500"
                  )} />
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-4 bg-slate-900 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
              <ShieldAlert className="w-4 h-4" />
              File STR Report
            </button>
          </div>

          {/* Regulatory Deadlines */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-500" />
              Upcoming Deadlines
            </h4>
            <div className="space-y-4">
              {[
                { task: 'Quarterly Tax Filing', date: 'March 15', risk: 'High' },
                { task: 'Transport Authority Audit', date: 'April 02', risk: 'Medium' },
              ].map((dl, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-900">{dl.task}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{dl.date}</p>
                  </div>
                  <span className={cn(
                    "text-[10px] font-bold uppercase tracking-widest",
                    dl.risk === 'High' ? "text-rose-500" : "text-amber-500"
                  )}>{dl.risk}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 bg-slate-50 rounded-xl font-bold text-sm text-slate-600 hover:bg-slate-100 transition-colors">
              Manage Compliance Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
