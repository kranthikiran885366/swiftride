import { motion } from 'motion/react';
import { Activity, Search, Filter, Download, User, Clock, Shield, Globe, CreditCard, Settings } from 'lucide-react';
import { cn } from '../../../utils/cn';

const auditLogs = [
  { id: 'LOG-9921', admin: 'Rahul Sharma', role: 'CEO', action: 'Approved Refund', target: 'Ride #84291', time: '2m ago', icon: CreditCard, color: 'text-emerald-500' },
  { id: 'LOG-9920', admin: 'Priya Singh', role: 'COO', action: 'Modified Surge', target: 'Mumbai Zone 4', time: '15m ago', icon: Globe, color: 'text-brand-500' },
  { id: 'LOG-9919', admin: 'Amit Patel', role: 'SuperAdmin', action: 'Banned User', target: 'USR-8821', time: '1h ago', icon: Shield, color: 'text-rose-500' },
  { id: 'LOG-9918', admin: 'Suresh Kumar', role: 'CTO', action: 'Pushed Config', target: 'API Gateway v2.4', time: '3h ago', icon: Settings, color: 'text-blue-500' },
  { id: 'LOG-9917', admin: 'Neha Gupta', role: 'OpsAdmin', action: 'Reassigned Driver', target: 'Ride #84288', time: '5h ago', icon: Activity, color: 'text-amber-500' },
];

export default function ChairmanAuditPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Platform Audit Trail</h1>
          <p className="text-slate-500 text-lg">Immutable record of every administrative action taken across the platform.</p>
        </div>
        <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export for Compliance
        </button>
      </div>

      <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by admin, action, or target..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 outline-none"
            />
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-50">
              <Filter className="w-4 h-4" />
              Filter by Role
            </button>
            <button className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-50">
              <Clock className="w-4 h-4" />
              Date Range
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="p-8 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Timestamp</th>
                <th className="p-8 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Administrator</th>
                <th className="p-8 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Action</th>
                <th className="p-8 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Target Entity</th>
                <th className="p-8 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 text-right">Log ID</th>
              </tr>
            </thead>
            <tbody>
              {auditLogs.map((log, i) => (
                <motion.tr
                  key={log.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group hover:bg-slate-50/50 transition-colors"
                >
                  <td className="p-8 border-b border-slate-50 text-sm font-medium text-slate-500">
                    {log.time}
                  </td>
                  <td className="p-8 border-b border-slate-50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                        <User className="w-5 h-5 text-slate-400" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{log.admin}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{log.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-8 border-b border-slate-50">
                    <div className="flex items-center gap-3">
                      <log.icon className={cn("w-5 h-5", log.color)} />
                      <span className="text-sm font-bold text-slate-700">{log.action}</span>
                    </div>
                  </td>
                  <td className="p-8 border-b border-slate-50">
                    <span className="text-sm font-mono font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded">{log.target}</span>
                  </td>
                  <td className="p-8 border-b border-slate-50 text-right">
                    <span className="text-xs font-mono font-bold text-slate-400">{log.id}</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-8 bg-slate-50/50 flex justify-center">
          <button className="text-sm font-bold text-slate-500 hover:text-slate-950 transition-colors">Load More Activity</button>
        </div>
      </div>
    </div>
  );
}
