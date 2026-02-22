import { motion } from 'motion/react';
import { ShieldAlert, AlertTriangle, Info, CheckCircle2, Clock, Search, Filter, Download, Bell, Zap, ChevronRight } from 'lucide-react';
import { cn } from '../../../../utils/cn';

const executiveAlerts = [
  { id: 'ALT-8821', title: 'Regulatory Block: Chennai', category: 'Legal', priority: 'High', time: '2m ago', description: 'Local transport authority has issued a stay order on bike-taxi operations in Chennai region.' },
  { id: 'ALT-8820', title: 'Surge Anomaly: Mumbai North', category: 'Operations', priority: 'Medium', time: '15m ago', description: 'Unusual surge multiplier (3.2x) detected in Mumbai North without corresponding demand spike.' },
  { id: 'ALT-8819', title: 'Payment Gateway Latency', category: 'Finance', priority: 'Medium', time: '1h ago', description: 'Razorpay is experiencing 450ms+ latency in the South India region. Success rate dropped to 82%.' },
  { id: 'ALT-8818', title: 'Competitor Price Drop: Delhi', category: 'Market', priority: 'Low', time: '4h ago', description: 'Competitor A has reduced base fare by 15% across all sedan categories in Delhi NCR.' },
];

export default function Alerts() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Executive Alerts</h1>
          <p className="text-slate-500 text-lg">Critical platform notifications requiring executive attention or awareness.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Acknowledge All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl font-display font-bold">Alert Feed</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-rose-200 bg-rose-50 text-rose-600 rounded-lg">High Priority</button>
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-slate-100 rounded-lg hover:bg-slate-50">All</button>
              </div>
            </div>
            <div className="divide-y divide-slate-50">
              {executiveAlerts.map((alert, i) => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 hover:bg-slate-50 transition-colors group cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center",
                        alert.priority === 'High' ? "bg-rose-50 text-rose-600" : 
                        alert.priority === 'Medium' ? "bg-amber-50 text-amber-600" : "bg-blue-50 text-blue-600"
                      )}>
                        {alert.priority === 'High' ? <ShieldAlert className="w-6 h-6" /> : 
                         alert.priority === 'Medium' ? <AlertTriangle className="w-6 h-6" /> : <Info className="w-6 h-6" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="font-bold text-slate-900">{alert.title}</h4>
                          <span className={cn(
                            "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest",
                            alert.priority === 'High' ? "bg-rose-600 text-white" : 
                            alert.priority === 'Medium' ? "bg-amber-500 text-white" : "bg-blue-500 text-white"
                          )}>{alert.priority}</span>
                        </div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{alert.id} • {alert.category} • {alert.time}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{alert.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-slate-100 rounded-xl text-xs font-bold hover:bg-slate-200 transition-colors">Briefing</button>
                      <button className="px-4 py-2 bg-slate-100 rounded-xl text-xs font-bold hover:bg-slate-200 transition-colors">Contact Dept</button>
                    </div>
                    <button className="flex items-center gap-1 text-xs font-bold text-brand-600 group-hover:translate-x-1 transition-transform">
                      Action Plan <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">Alert Statistics</h4>
            <div className="space-y-6">
              {[
                { label: 'Critical (24h)', value: '02', color: 'text-rose-400' },
                { label: 'Medium (24h)', value: '08', color: 'text-amber-400' },
                { label: 'Resolved', value: '14', color: 'text-emerald-400' },
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-300">{stat.label}</span>
                  <p className={cn("text-lg font-bold", stat.color)}>{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <Bell className="w-5 h-5 text-brand-500" />
              Notification Settings
            </h4>
            <div className="space-y-4">
              {[
                { type: 'SMS Alerts', status: 'On' },
                { type: 'Email Briefing', status: 'Daily' },
                { type: 'Push Notifications', status: 'Critical Only' },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600">{s.type}</span>
                  <span className="text-[10px] font-bold text-brand-600 uppercase tracking-widest">{s.status}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 bg-slate-50 rounded-xl font-bold text-sm text-slate-600 hover:bg-slate-100 transition-colors">
              Configure Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
