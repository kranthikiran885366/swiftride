import { motion } from 'motion/react';
import { Cpu, Zap, Activity, ShieldCheck, Terminal, Globe, Server, Database, Cloud, Code, GitBranch, AlertTriangle, Box, Layers } from 'lucide-react';
import { cn } from '../../../../utils/cn';

const services = [
  { name: 'Auth Service', status: 'Healthy', version: 'v2.4.1', latency: '12ms', throughput: '1.2K req/s', errors: '0.01%' },
  { name: 'Ride Engine', status: 'Healthy', version: 'v3.1.0', latency: '45ms', throughput: '4.5K req/s', errors: '0.04%' },
  { name: 'Payment Bridge', status: 'Warning', version: 'v1.8.2', latency: '450ms', throughput: '840 req/s', errors: '2.1%' },
  { name: 'Geo Service', status: 'Healthy', version: 'v2.0.1', latency: '8ms', throughput: '12K req/s', errors: '0.00%' },
  { name: 'Notification Hub', status: 'Healthy', version: 'v1.2.4', latency: '15ms', throughput: '2.1K req/s', errors: '0.02%' },
  { name: 'User Profile', status: 'Healthy', version: 'v2.1.0', latency: '10ms', throughput: '3.2K req/s', errors: '0.01%' },
];

export default function Microservices() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Microservices Mesh</h1>
          <p className="text-slate-500 text-lg">Monitor health, latency, and throughput of all platform services.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <Layers className="w-4 h-4" />
            Service Map
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:border-brand-500 transition-all group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center",
                  service.status === 'Healthy' ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                )}>
                  <Box className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-brand-600 transition-colors">{service.name}</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{service.version}</p>
                </div>
              </div>
              <div className={cn(
                "w-2 h-2 rounded-full",
                service.status === 'Healthy' ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" : "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]"
              )} />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-slate-50 rounded-2xl">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Latency</p>
                <p className="text-lg font-display font-bold text-slate-900">{service.latency}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Errors</p>
                <p className={cn(
                  "text-lg font-display font-bold",
                  service.errors === '0.00%' ? "text-emerald-600" : 
                  service.status === 'Warning' ? "text-rose-600" : "text-slate-900"
                )}>{service.errors}</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span>Throughput</span>
                <span>{service.throughput}</span>
              </div>
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '65%' }}
                  className="h-full bg-brand-500" 
                />
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-50 flex justify-between items-center">
              <button className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-brand-600 transition-colors">View Logs</button>
              <button className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-brand-600 transition-colors">Restart Pods</button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-2xl">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-display font-bold flex items-center gap-2">
            <Activity className="w-5 h-5 text-brand-400" />
            Global Service Mesh Health
          </h3>
          <button className="px-4 py-2 bg-slate-900 rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors">Mesh Settings</button>
        </div>
        <div className="aspect-[21/9] bg-slate-900 rounded-2xl border border-dashed border-slate-800 flex items-center justify-center">
          <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">Interactive Service Mesh Graph Placeholder</p>
        </div>
      </div>
    </div>
  );
}
