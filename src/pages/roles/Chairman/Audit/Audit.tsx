import { motion } from 'motion/react';
import { ShieldCheck, Activity, UserCheck, Clock, Search, Filter, Download, Terminal, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { cn } from '../../../../utils/cn';

const auditLogs = [
  { id: 'AUD-8821', user: 'Rahul S. (CEO)', action: 'Modified Surge Multiplier', target: 'Mumbai Zone 4', time: '2m ago', severity: 'Medium' },
  { id: 'AUD-8820', user: 'System (Auto)', action: 'Banned Driver DRV-442', target: 'Fraud Detection', time: '15m ago', severity: 'High' },
  { id: 'AUD-8819', user: 'Priya G. (COO)', action: 'Approved Refund', target: 'Ride #84291', time: '1h ago', severity: 'Low' },
  { id: 'AUD-8818', user: 'Amit K. (SuperAdmin)', action: 'Updated Global Config', target: 'System Settings', time: '2h ago', severity: 'Critical' },
];

export default function Audit() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Platform Audit Trail</h1>
          <p className="text-slate-500 text-lg">Immutable log of every administrative action across the platform.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Full Log
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl font-display font-bold">Global Action Log</h3>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400" />
                  <input type="text" placeholder="Search logs..." className="pl-8 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs outline-none focus:ring-1 focus:ring-brand-500" />
                </div>
                <button className="p-1.5 hover:bg-slate-50 rounded-lg border border-slate-200"><Filter className="w-4 h-4 text-slate-400" /></button>
              </div>
            </div>
            <div className="divide-y divide-slate-50">
              {auditLogs.map((log, i) => (
                <motion.div
                  key={log.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 hover:bg-slate-50 transition-colors group"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center",
                        log.severity === 'Critical' ? "bg-rose-50 text-rose-600" : 
                        log.severity === 'High' ? "bg-amber-50 text-amber-600" : "bg-slate-100 text-slate-400"
                      )}>
                        <Terminal className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{log.action}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{log.user} • {log.target}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{log.time}</p>
                      <span className={cn(
                        "text-[10px] font-bold uppercase tracking-widest",
                        log.severity === 'Critical' ? "text-rose-500" : 
                        log.severity === 'High' ? "text-amber-500" : "text-slate-400"
                      )}>{log.severity}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">Security Health</h4>
            <div className="space-y-6">
              {[
                { label: 'Admin Logins (24h)', value: '42' },
                { label: 'Failed Attempts', value: '03', color: 'text-rose-400' },
                { label: 'Config Changes', value: '12' },
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-300">{stat.label}</span>
                  <p className={cn("text-lg font-bold", stat.color || "text-white")}>{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              Compliance Status
            </h4>
            <div className="space-y-4">
              {[
                { task: 'GDPR Audit', status: 'Passed', date: 'Jan 2024' },
                { task: 'SOC2 Review', status: 'In Progress', date: 'Feb 2024' },
                { task: 'Data Encryption', status: 'Verified', date: 'Live' },
              ].map((c, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-900">{c.task}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{c.date}</p>
                  </div>
                  <CheckCircle2 className={cn(
                    "w-4 h-4",
                    c.status === 'Passed' || c.status === 'Verified' ? "text-emerald-500" : "text-amber-500"
                  )} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
