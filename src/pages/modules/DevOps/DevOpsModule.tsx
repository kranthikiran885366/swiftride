import { motion } from 'motion/react';
import { Cpu, Server, Database, Activity, Shield, Zap, Terminal, Globe, RefreshCw } from 'lucide-react';
import { cn } from '../../../utils/cn';

export default function DevOpsModule() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Tech & Infrastructure</h1>
          <p className="text-slate-500">System health, microservices, and AI model performance.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            System Shell
          </button>
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            Deploy Pipeline
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Microservices Health */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <Activity className="w-5 h-5 text-emerald-500" />
              Microservices Status
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Auth Service', status: 'Healthy', latency: '24ms', load: '12%' },
                { name: 'Ride Dispatcher', status: 'Healthy', latency: '42ms', load: '45%' },
                { name: 'Payment Gateway', status: 'Healthy', latency: '110ms', load: '8%' },
                { name: 'Geo-spatial Engine', status: 'Healthy', latency: '15ms', load: '62%' },
                { name: 'Notification Hub', status: 'Healthy', latency: '85ms', load: '15%' },
                { name: 'AI Pricing Engine', status: 'Healthy', latency: '120ms', load: '32%' },
              ].map((svc, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-900">{svc.name}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Lat: {svc.latency}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Load: {svc.load}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{svc.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Model Performance */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-brand-500" />
              AI & ML Systems
            </h3>
            <div className="space-y-6">
              {[
                { name: 'Demand Prediction v2.4', accuracy: '94.2%', drift: 'Low', status: 'Production' },
                { name: 'Fraud Detection (Real-time)', accuracy: '99.1%', drift: 'None', status: 'Production' },
                { name: 'Surge Optimizer v3.1', accuracy: '88.5%', drift: 'Moderate', status: 'A/B Testing' },
              ].map((model, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{model.name}</p>
                      <p className="text-xs text-slate-500">Accuracy: {model.accuracy} • Drift: {model.drift}</p>
                    </div>
                  </div>
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                    model.status === 'Production' ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600"
                  )}>{model.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Infrastructure Stats */}
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">Cloud Infrastructure</h4>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between text-xs font-bold mb-3">
                  <span className="flex items-center gap-2"><Server className="w-3 h-3" /> CPU Cluster</span>
                  <span className="text-brand-400">42%</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-500 w-[42%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold mb-3">
                  <span className="flex items-center gap-2"><Database className="w-3 h-3" /> DB Storage</span>
                  <span className="text-blue-400">68%</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[68%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold mb-3">
                  <span className="flex items-center gap-2"><Globe className="w-3 h-3" /> CDN Traffic</span>
                  <span className="text-emerald-400">2.4 TB/s</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[85%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Security Alerts */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-rose-500" />
              Security Logs
            </h4>
            <div className="space-y-4">
              {[
                { event: 'Brute force attempt blocked', ip: '192.168.1.1', time: '2m ago' },
                { event: 'SSL Certificate renewed', ip: 'System', time: '1h ago' },
                { event: 'New admin role created', ip: 'SuperAdmin', time: '4h ago' },
              ].map((log, i) => (
                <div key={i} className="text-xs border-l-2 border-slate-100 pl-4 py-1">
                  <p className="font-bold text-slate-900">{log.event}</p>
                  <p className="text-slate-500 mt-0.5">{log.ip} • {log.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
