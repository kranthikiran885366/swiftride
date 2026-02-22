import { motion } from 'motion/react';
import { GitBranch, Rocket, Clock, CheckCircle2, XCircle, RefreshCw, Terminal, Search, Filter, Download, GitCommit, GitPullRequest, ChevronRight } from 'lucide-react';
import { cn } from '../../../../utils/cn';

const deployments = [
  { id: 'DEP-8821', service: 'Auth Service', version: 'v2.4.1', status: 'Success', env: 'Production', time: '2m ago', author: 'Rahul S.' },
  { id: 'DEP-8820', service: 'Ride Engine', version: 'v3.1.0', status: 'Deploying', env: 'Production', time: '15m ago', author: 'Priya G.' },
  { id: 'DEP-8819', service: 'Payment Bridge', version: 'v1.8.2', status: 'Failed', env: 'Staging', time: '1h ago', author: 'Amit K.' },
  { id: 'DEP-8818', service: 'Geo Service', version: 'v2.0.1', status: 'Success', env: 'Production', time: '4h ago', author: 'System' },
];

export default function Deployment() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Deployment Hub</h1>
          <p className="text-slate-500 text-lg">Manage CI/CD pipelines, release versions, and environment health.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <Rocket className="w-4 h-4" />
            New Release
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Active Deploys', value: '02', change: 'Prod/Staging', trend: 'neutral', icon: Rocket, color: 'text-brand-500' },
          { label: 'Success Rate', value: '98.4%', change: '+1.2%', trend: 'up', icon: CheckCircle2, color: 'text-emerald-500' },
          { label: 'Avg. Build Time', value: '4m 20s', change: '-15s', trend: 'down', icon: Clock, color: 'text-blue-500' },
          { label: 'Failed (24h)', value: '01', change: 'Investigate', trend: 'up', icon: XCircle, color: 'text-rose-500' },
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
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl font-display font-bold">Deployment History</h3>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400" />
                  <input type="text" placeholder="Search deploys..." className="pl-8 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs outline-none focus:ring-1 focus:ring-brand-500" />
                </div>
                <button className="p-1.5 hover:bg-slate-50 rounded-lg border border-slate-200"><Filter className="w-4 h-4 text-slate-400" /></button>
              </div>
            </div>
            <div className="divide-y divide-slate-50">
              {deployments.map((dep, i) => (
                <motion.div
                  key={dep.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 hover:bg-slate-50 transition-colors group"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center",
                        dep.status === 'Success' ? "bg-emerald-50 text-emerald-600" : 
                        dep.status === 'Deploying' ? "bg-blue-50 text-blue-600" : "bg-rose-50 text-rose-600"
                      )}>
                        <GitCommit className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{dep.service} <span className="text-slate-400 font-normal text-xs">{dep.version}</span></p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{dep.env} • {dep.author} • {dep.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                        dep.status === 'Success' ? "bg-emerald-50 text-emerald-600" : 
                        dep.status === 'Deploying' ? "bg-blue-50 text-blue-600" : "bg-rose-50 text-rose-600"
                      )}>{dep.status}</span>
                      <button className="p-2 hover:bg-white rounded-lg border border-slate-200 text-slate-400 hover:text-brand-600 transition-colors">
                        <Terminal className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Pipeline Health */}
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">Pipeline Health</h4>
            <div className="space-y-6">
              {[
                { name: 'Build Cluster', status: 'Healthy' },
                { name: 'Artifact Registry', status: 'Healthy' },
                { name: 'Staging Env', status: 'Warning' },
                { name: 'Prod Env', status: 'Healthy' },
              ].map((p, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-300">{p.name}</span>
                  <div className={cn(
                    "w-2 h-2 rounded-full",
                    p.status === 'Healthy' ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" : "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]"
                  )} />
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-4 bg-slate-900 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
              <RefreshCw className="w-4 h-4" />
              Reset Pipeline
            </button>
          </div>

          {/* Recent PRs */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <GitPullRequest className="w-5 h-5 text-brand-500" />
              Pending PRs
            </h4>
            <div className="space-y-4">
              {[
                { title: 'Fix: Payment retry logic', author: 'Rahul S.', date: '2h ago' },
                { title: 'Feat: New city config', author: 'Priya G.', date: '4h ago' },
                { title: 'Refactor: Geo indexing', author: 'Amit K.', date: '1d ago' },
              ].map((pr, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-900 line-clamp-1">{pr.title}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{pr.author} • {pr.date}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 bg-slate-50 rounded-xl font-bold text-sm text-slate-600 hover:bg-slate-100 transition-colors">
              View All PRs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
