import { motion } from 'motion/react';
import { Terminal, Search, Filter, Download, Trash2, Play, Pause, RefreshCw, AlertTriangle, Info, CheckCircle2, ChevronRight } from 'lucide-react';
import { cn } from '../../../../utils/cn';

const logs = [
  { timestamp: '2024-02-22 14:20:01', service: 'auth-service', level: 'INFO', message: 'User login successful: USR-8821', traceId: 'tr-84291' },
  { timestamp: '2024-02-22 14:19:58', service: 'ride-engine', level: 'WARN', message: 'Redis latency spike detected: 450ms', traceId: 'tr-84290' },
  { timestamp: '2024-02-22 14:19:45', service: 'payment-bridge', level: 'ERROR', message: 'Gateway timeout: Razorpay', traceId: 'tr-84289' },
  { timestamp: '2024-02-22 14:19:30', service: 'geo-service', level: 'INFO', message: 'Index update completed: Mumbai', traceId: 'tr-84288' },
];

export default function Logs() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">System Logs</h1>
          <p className="text-slate-500 text-lg">Real-time centralized log aggregator for all platform services.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Pause className="w-4 h-4" />
            Pause Stream
          </button>
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Logs
          </button>
        </div>
      </div>

      <div className="bg-slate-950 rounded-[32px] border border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[700px]">
        <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-500" />
              <input type="text" placeholder="Filter logs..." className="pl-8 pr-4 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-300 outline-none focus:ring-1 focus:ring-brand-500 w-64" />
            </div>
            <select className="bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-300 px-3 py-1.5 outline-none focus:ring-1 focus:ring-brand-500">
              <option>All Services</option>
              <option>auth-service</option>
              <option>ride-engine</option>
            </select>
            <select className="bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-300 px-3 py-1.5 outline-none focus:ring-1 focus:ring-brand-500">
              <option>All Levels</option>
              <option>INFO</option>
              <option>WARN</option>
              <option>ERROR</option>
            </select>
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
            <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-500 transition-colors"><RefreshCw className="w-4 h-4" /></button>
          </div>
        </div>
        
        <div className="flex-grow overflow-auto p-6 font-mono text-xs space-y-2">
          {logs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-4 py-1 hover:bg-slate-900/50 transition-colors group cursor-pointer"
            >
              <span className="text-slate-600 shrink-0">{log.timestamp}</span>
              <span className={cn(
                "w-16 shrink-0 font-bold",
                log.level === 'ERROR' ? "text-rose-500" : 
                log.level === 'WARN' ? "text-amber-500" : "text-emerald-500"
              )}>[{log.level}]</span>
              <span className="text-blue-400 shrink-0 w-32">[{log.service}]</span>
              <span className="text-slate-300 flex-grow">{log.message}</span>
              <span className="text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">ID: {log.traceId}</span>
            </motion.div>
          ))}
          <div className="flex gap-4 py-1 animate-pulse">
            <span className="text-slate-600 shrink-0">2024-02-22 14:20:05</span>
            <span className="text-emerald-500 w-16 shrink-0 font-bold">[INFO]</span>
            <span className="text-blue-400 shrink-0 w-32">[geo-service]</span>
            <span className="text-slate-300 flex-grow">Listening for new events...</span>
          </div>
        </div>

        <div className="p-4 border-t border-slate-800 bg-slate-900/50 flex justify-between items-center">
          <div className="flex items-center gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Connected</span>
            <span>42 Logs/sec</span>
          </div>
          <div className="flex gap-4">
            <button className="text-[10px] font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest">Clear Console</button>
            <button className="text-[10px] font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest">Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
}
