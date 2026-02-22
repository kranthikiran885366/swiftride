import { motion } from 'motion/react';
import { Cpu, Zap, Activity, ShieldCheck, Terminal, Globe, Server, Database, Cloud, Code, GitBranch, AlertTriangle } from 'lucide-react';
import { cn } from '../../../../utils/cn';

export default function Dashboard() {
  const stats = [
    { label: 'System Uptime', value: '99.99%', change: 'Optimal', trend: 'up', icon: Activity, color: 'text-emerald-500' },
    { label: 'Avg. Latency', value: '42ms', change: '-5ms', trend: 'down', icon: Zap, color: 'text-brand-500' },
    { label: 'Active Services', value: '124', change: 'All Healthy', trend: 'up', icon: Cpu, color: 'text-blue-500' },
    { label: 'Error Rate', value: '0.02%', change: 'Stable', trend: 'neutral', icon: AlertTriangle, color: 'text-rose-500' },
  ];

  return (
    <div className="space-y-10">
      <div className="flex items-end justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-slate-950 rounded-lg">
              <Code className="w-5 h-5 text-brand-400" />
            </div>
            <span className="text-xs font-bold text-slate-950 uppercase tracking-[0.2em]">Tech Stack Command</span>
          </div>
          <h1 className="text-4xl font-display font-bold mb-2">Infrastructure Overview</h1>
          <p className="text-slate-500 text-lg">Real-time health of microservices, deployment pipelines, and cloud resources.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            System Console
          </button>
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <GitBranch className="w-4 h-4" />
            Deployment Hub
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm"
          >
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
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Microservices Mesh */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm h-[500px] flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-display font-bold flex items-center gap-2">
                <Cpu className="w-5 h-5 text-brand-500" />
                Microservices Mesh Status
              </h3>
              <div className="flex gap-2">
                {['All', 'Core', 'Payments', 'Geo'].map(cat => (
                  <button key={cat} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-slate-100 rounded-lg hover:bg-slate-50">{cat}</button>
                ))}
              </div>
            </div>
            <div className="flex-grow flex items-center justify-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-100/20 via-transparent to-transparent" />
              <p className="text-slate-400 font-mono text-xs uppercase tracking-widest relative z-10">Service Mesh Visualization Placeholder</p>
            </div>
          </div>

          {/* Deployment Pipeline */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-blue-500" />
              Active Deployment Pipeline
            </h3>
            <div className="space-y-6">
              {[
                { service: 'Auth Service', version: 'v2.4.1', status: 'Deploying', progress: 65, env: 'Production' },
                { service: 'Ride Engine', version: 'v3.1.0', status: 'Testing', progress: 40, env: 'Staging' },
                { service: 'Payment Bridge', version: 'v1.8.2', status: 'Success', progress: 100, env: 'Production' },
              ].map((dep, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <div>
                      <h4 className="font-bold text-slate-900">{dep.service} <span className="text-slate-400 font-normal text-xs">{dep.version}</span></h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{dep.env} • {dep.status}</p>
                    </div>
                    <span className="text-sm font-bold text-slate-900">{dep.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${dep.progress}%` }}
                      className={cn(
                        "h-full",
                        dep.status === 'Success' ? "bg-emerald-500" : "bg-brand-500"
                      )} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Cloud Resources */}
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-2xl">
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <Cloud className="w-5 h-5 text-blue-400" />
              Cloud Infrastructure
            </h3>
            <div className="space-y-6">
              {[
                { label: 'AWS Instances', val: '42 Active', health: 'Healthy' },
                { label: 'RDS Clusters', val: '08 Active', health: 'Healthy' },
                { label: 'S3 Storage', val: '12.4 TB', health: 'Healthy' },
                { label: 'Redis Nodes', val: '12 Active', health: 'Warning' },
              ].map((cloud, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-bold">{cloud.label}</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{cloud.val}</p>
                  </div>
                  <div className={cn(
                    "w-2 h-2 rounded-full",
                    cloud.health === 'Healthy' ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" : "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]"
                  )} />
                </div>
              ))}
            </div>
            <button className="mt-8 w-full py-4 bg-slate-900 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-colors">Cloud Management</button>
          </div>

          {/* Real-time Logs Preview */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-brand-500" />
              Live System Logs
            </h4>
            <div className="space-y-3 font-mono text-[10px] text-slate-500">
              <p className="flex gap-2"><span className="text-emerald-500">[OK]</span> Auth service heartbeat received</p>
              <p className="flex gap-2"><span className="text-blue-500">[INFO]</span> New deployment started: ride-engine</p>
              <p className="flex gap-2"><span className="text-amber-500">[WARN]</span> Redis latency spike detected in ap-south-1</p>
              <p className="flex gap-2"><span className="text-emerald-500">[OK]</span> Database backup completed successfully</p>
            </div>
            <button className="w-full mt-6 py-3 bg-slate-50 rounded-xl font-bold text-sm text-slate-600 hover:bg-slate-100 transition-colors">
              Open Log Viewer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
