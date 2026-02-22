import { motion } from 'motion/react';
import { Cpu, Server, Database, Activity, Shield, Zap, Terminal, Globe, RefreshCw, Layers, HardDrive } from 'lucide-react';
import { cn } from '../../../utils/cn';

export default function CTODashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Cpu className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em]">System Infrastructure Control</span>
          </div>
          <h1 className="text-4xl font-display font-bold mb-2">Tech Stack Overview</h1>
          <p className="text-slate-500 text-lg">Real-time monitoring of infrastructure, deployments, and AI systems.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            SSH Console
          </button>
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            Trigger Deployment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'CPU Cluster Load', value: '42%', trend: 'stable', icon: Cpu, color: 'text-blue-500' },
          { label: 'API Latency (p99)', value: '124ms', trend: 'down', icon: Zap, color: 'text-amber-500' },
          { label: 'DB Connections', value: '1.2K', trend: 'up', icon: Database, color: 'text-emerald-500' },
          { label: 'Error Rate', value: '0.02%', trend: 'down', icon: Shield, color: 'text-rose-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <stat.icon className={cn("w-6 h-6 mb-4", stat.color)} />
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-3xl font-display font-bold">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Microservices Mesh */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-display font-bold flex items-center gap-2">
                <Layers className="w-5 h-5 text-brand-500" />
                Service Mesh Status
              </h3>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold uppercase tracking-wider">All Systems Operational</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Auth-v3', status: 'Healthy', version: 'v3.4.2', load: '12%' },
                { name: 'Dispatch-Core', status: 'Healthy', version: 'v2.1.0', load: '45%' },
                { name: 'Payment-Bridge', status: 'Healthy', version: 'v1.8.5', load: '8%' },
                { name: 'Geo-Engine', status: 'Healthy', version: 'v4.0.1', load: '62%' },
              ].map((svc, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-900">{svc.name}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{svc.version} • Load: {svc.load}</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                </div>
              ))}
            </div>
          </div>

          {/* Deployment Timeline */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-500" />
              Deployment Pipeline
            </h3>
            <div className="space-y-6">
              {[
                { env: 'Production', status: 'Deployed', time: '2h ago', commit: '8f2a1c4', author: 'Suresh K.' },
                { env: 'Staging', status: 'Testing', time: '15m ago', commit: '4d9e2b1', author: 'Neha G.' },
                { env: 'Canary (5%)', status: 'Active', time: '1h ago', commit: 'a1b2c3d', author: 'Amit P.' },
              ].map((dep, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                      <HardDrive className="w-5 h-5 text-slate-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{dep.env}</p>
                      <p className="text-xs text-slate-500">{dep.commit} by {dep.author}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-wider">{dep.status}</span>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{dep.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-2xl flex flex-col">
          <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
            <Activity className="w-5 h-5 text-brand-500" />
            Real-time Logs
          </h3>
          <div className="flex-grow font-mono text-[10px] text-slate-400 space-y-2 overflow-hidden">
            <p className="text-emerald-400">[INFO] 19:42:01 - Auth service heartbeat OK</p>
            <p className="text-blue-400">[DEBUG] 19:42:05 - Geo-engine cache hit (98.2%)</p>
            <p className="text-amber-400">[WARN] 19:42:12 - High latency detected in Payment-Bridge</p>
            <p className="text-slate-500">[TRACE] 19:42:15 - Incoming request: GET /api/v1/rides/active</p>
            <p className="text-emerald-400">[INFO] 19:42:18 - Dispatcher-Core scaled +2 pods</p>
            <p className="text-slate-500">[TRACE] 19:42:22 - Outgoing webhook: Stripe-Connect</p>
            <p className="text-emerald-400">[INFO] 19:42:25 - Backup job completed successfully</p>
            <p className="text-rose-400">[ERROR] 19:42:30 - Failed to resolve DNS for cdn-node-4</p>
          </div>
          <button className="mt-8 w-full py-4 bg-slate-900 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
            <Terminal className="w-4 h-4" />
            Open Log Stream
          </button>
        </div>
      </div>
    </div>
  );
}
