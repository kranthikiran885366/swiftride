import { motion } from 'motion/react';
import { ShieldAlert, AlertTriangle, CheckCircle2, Phone, MapPin, Clock, ChevronRight } from 'lucide-react';
import { cn } from '../../../utils/cn';

const incidents = [
  { id: 'INC-8821', type: 'SOS Alert', status: 'Active', priority: 'P1', location: 'Downtown', time: '2m ago', description: 'User triggered SOS during trip.' },
  { id: 'INC-8820', type: 'Accident', status: 'In Review', priority: 'P1', location: 'North Side', time: '15m ago', description: 'Minor collision reported by driver.' },
  { id: 'INC-8819', type: 'Harassment', status: 'Resolved', priority: 'P2', location: 'Airport Road', time: '1h ago', description: 'Verbal dispute between rider and driver.' },
];

export default function ChairmanSafetyPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Safety Summary</h1>
          <p className="text-slate-500 text-lg">Board-level overview of platform safety and critical incidents.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-rose-50 border border-rose-100 px-6 py-3 rounded-2xl">
            <p className="text-[10px] font-bold text-rose-400 uppercase tracking-widest mb-1">Active P1 Cases</p>
            <p className="text-2xl font-display font-bold text-rose-600">04</p>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 px-6 py-3 rounded-2xl">
            <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">Safety Score</p>
            <p className="text-2xl font-display font-bold text-emerald-600">99.8%</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl font-display font-bold">Critical Incidents</h3>
              <button className="text-sm font-bold text-brand-600 hover:text-brand-700">View All History</button>
            </div>
            <div className="divide-y divide-slate-50">
              {incidents.map((inc, i) => (
                <motion.div
                  key={inc.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 hover:bg-slate-50 transition-colors group cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center",
                        inc.priority === 'P1' ? "bg-rose-50 text-rose-600" : "bg-amber-50 text-amber-600"
                      )}>
                        <ShieldAlert className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="font-bold text-slate-900">{inc.type}</h4>
                          <span className={cn(
                            "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest",
                            inc.priority === 'P1' ? "bg-rose-600 text-white" : "bg-amber-500 text-white"
                          )}>{inc.priority}</span>
                        </div>
                        <p className="text-xs text-slate-500 font-medium">{inc.id} • {inc.location} • {inc.time}</p>
                      </div>
                    </div>
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      inc.status === 'Active' ? "bg-rose-50 text-rose-600" : 
                      inc.status === 'In Review' ? "bg-amber-50 text-amber-600" : "bg-emerald-50 text-emerald-600"
                    )}>
                      {inc.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{inc.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-slate-100 rounded-xl text-xs font-bold hover:bg-slate-200 transition-colors">View Logs</button>
                      <button className="px-4 py-2 bg-slate-100 rounded-xl text-xs font-bold hover:bg-slate-200 transition-colors">Contact Ops</button>
                    </div>
                    <button className="flex items-center gap-1 text-xs font-bold text-brand-600 group-hover:translate-x-1 transition-transform">
                      Full Incident Report <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-6 text-slate-400 uppercase tracking-widest text-xs">Safety Trends</h4>
            <div className="space-y-6">
              {[
                { label: 'Incident Rate', value: '0.04%', trend: 'down', color: 'text-emerald-400' },
                { label: 'Avg. Response Time', value: '42s', trend: 'down', color: 'text-emerald-400' },
                { label: 'Resolution Rate', value: '94%', trend: 'up', color: 'text-emerald-400' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-300">{stat.label}</span>
                  <div className="text-right">
                    <p className="text-lg font-bold">{stat.value}</p>
                    <p className={cn("text-[10px] font-bold uppercase", stat.color)}>{stat.trend === 'down' ? '↓ Improving' : '↑ Improving'}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-slate-800">
              <button className="w-full py-4 bg-brand-600 rounded-2xl font-bold text-sm hover:bg-brand-500 transition-colors">
                Download Safety Audit
              </button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              Risk Zones
            </h4>
            <div className="aspect-square bg-slate-50 rounded-2xl border border-dashed border-slate-200 flex items-center justify-center">
              <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest text-center px-4">Interactive Safety Heatmap Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
