import { motion } from 'motion/react';
import { Server, Database, Cloud, Zap, ShieldCheck, Terminal, Globe, Activity, Cpu, HardDrive, Network } from 'lucide-react';
import { cn } from '../../../../utils/cn';

export default function Infrastructure() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Infrastructure Control</h1>
          <p className="text-slate-500 text-lg">Manage servers, databases, and global network resources.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Scale Cluster
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Compute Nodes', value: '42', change: '85% Load', trend: 'neutral', icon: Server, color: 'text-brand-500' },
          { label: 'DB Storage', value: '12.4 TB', change: '72% Used', trend: 'up', icon: Database, color: 'text-blue-500' },
          { label: 'CDN Traffic', value: '1.2 PB', change: '+12%', trend: 'up', icon: Globe, color: 'text-emerald-500' },
          { label: 'Network Health', value: '99.9%', change: 'Optimal', trend: 'up', icon: Network, color: 'text-amber-500' },
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
          {/* Server Clusters */}
          <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl font-display font-bold">Server Clusters</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-brand-200 bg-brand-50 text-brand-600 rounded-lg">Production</button>
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-slate-100 rounded-lg hover:bg-slate-50">Staging</button>
              </div>
            </div>
            <div className="divide-y divide-slate-50">
              {[
                { name: 'ap-south-1a', type: 'm5.xlarge', nodes: 12, cpu: '42%', ram: '68%', status: 'Healthy' },
                { name: 'ap-south-1b', type: 'm5.xlarge', nodes: 12, cpu: '88%', ram: '92%', status: 'Warning' },
                { name: 'us-east-1a', type: 'c5.2xlarge', nodes: 8, cpu: '12%', ram: '24%', status: 'Healthy' },
              ].map((cluster, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                      <Server className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{cluster.name}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{cluster.type} • {cluster.nodes} Nodes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">CPU</p>
                      <p className="text-sm font-bold">{cluster.cpu}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">RAM</p>
                      <p className="text-sm font-bold">{cluster.ram}</p>
                    </div>
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      cluster.status === 'Healthy' ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" : "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]"
                    )} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Database Health */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-500" />
              Database Cluster Health
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Core PostgreSQL', role: 'Master', connections: 842, lag: '2ms', status: 'Healthy' },
                { name: 'Geo Redis', role: 'Cluster', connections: 12405, lag: '0.4ms', status: 'Healthy' },
                { name: 'Analytics Clickhouse', role: 'Cluster', connections: 42, lag: '120ms', status: 'Healthy' },
                { name: 'User DocumentDB', role: 'Replica', connections: 128, lag: '45ms', status: 'Warning' },
              ].map((db, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-slate-900">{db.name}</h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{db.role}</p>
                    </div>
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      db.status === 'Healthy' ? "bg-emerald-500" : "bg-amber-500"
                    )} />
                  </div>
                  <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    <span>Conn: {db.connections}</span>
                    <span>Lag: {db.lag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Storage Usage */}
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">Storage Usage</h4>
            <div className="space-y-6">
              {[
                { label: 'S3 Assets', val: '8.4 TB', share: '68%' },
                { label: 'DB Backups', val: '2.1 TB', share: '15%' },
                { label: 'Log Archives', val: '1.9 TB', share: '17%' },
              ].map((s, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm font-bold">
                    <span>{s.label}</span>
                    <span>{s.val}</span>
                  </div>
                  <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: s.share }}
                      className="h-full bg-brand-500" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security & Compliance */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              Security Status
            </h4>
            <div className="space-y-4">
              {[
                { label: 'SSL Certificates', status: 'Valid' },
                { label: 'WAF Protection', status: 'Active' },
                { label: 'Vulnerability Scan', status: 'Passed' },
                { label: 'IAM Review', status: 'Pending' },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600">{s.label}</span>
                  <span className={cn(
                    "text-[10px] font-bold uppercase tracking-widest",
                    s.status === 'Valid' || s.status === 'Active' || s.status === 'Passed' ? "text-emerald-500" : "text-amber-500"
                  )}>{s.status}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 bg-slate-50 rounded-xl font-bold text-sm text-slate-600 hover:bg-slate-100 transition-colors">
              Infrastructure Audit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
