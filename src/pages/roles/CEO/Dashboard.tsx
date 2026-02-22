import { motion } from 'motion/react';
import { Zap, Users, Car, MapPin, TrendingUp, ArrowUpRight, ArrowDownRight, Activity, ShieldAlert, Globe, Cpu, ShieldCheck } from 'lucide-react';
import { useAppSelector } from '../../../store/hooks';
import { cn } from '../../../utils/cn';

export default function CEODashboard() {
  const { user } = useAppSelector(state => state.auth);
  
  const stats = [
    { label: 'Platform Revenue', value: '$12.4M', change: '+12.5%', trend: 'up', icon: Zap },
    { label: 'Total Users', value: '842,000', change: '+8.2%', trend: 'up', icon: Users },
    { label: 'Active Drivers', value: '42,105', change: '-2.4%', trend: 'down', icon: Car },
    { label: 'Platform Health', value: '99.98%', change: 'Stable', trend: 'up', icon: Cpu },
  ];

  return (
    <div className="space-y-10">
      <div className="flex items-end justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-brand-50 rounded-lg">
              <ShieldCheck className="w-5 h-5 text-brand-600" />
            </div>
            <span className="text-xs font-bold text-brand-600 uppercase tracking-[0.2em]">Executive Command Center</span>
          </div>
          <h1 className="text-4xl font-display font-bold mb-2">Welcome back, {user?.name.split(' ')[0]}</h1>
          <p className="text-slate-500 text-lg">Strategic overview of global operations and platform performance.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Global Heatmap
          </button>
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <Activity className="w-4 h-4" />
            Live Operations
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
              <div className="p-3 bg-slate-50 rounded-2xl text-slate-950">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={cn(
                "flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg",
                stat.trend === 'up' ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
              )}>
                {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.change}
              </div>
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-3xl font-display font-bold">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Live Map View */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm h-[500px] flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-display font-bold flex items-center gap-2">
              <MapPin className="w-5 h-5 text-brand-500" />
              Global Ride Distribution
            </h3>
            <div className="flex gap-2">
              {['Mumbai', 'New York', 'London', 'Singapore'].map(city => (
                <button key={city} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-slate-100 rounded-lg hover:bg-slate-50">{city}</button>
              ))}
            </div>
          </div>
          <div className="flex-grow flex items-center justify-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/1200/800')] bg-cover opacity-10 grayscale" />
            <p className="text-slate-400 font-mono text-xs uppercase tracking-widest relative z-10">Interactive Global Map Component</p>
          </div>
        </div>

        {/* Strategic Alerts */}
        <div className="bg-slate-950 text-white p-8 rounded-[32px] flex flex-col shadow-2xl">
          <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-rose-500" />
            Executive Alerts
          </h3>
          <div className="space-y-6 flex-grow">
            {[
              { msg: 'Surge anomaly detected in Mumbai North', time: '2m ago', type: 'warning', action: 'Investigate' },
              { msg: 'P1 SOS Alert: Trip #84291 (Chicago)', time: '24m ago', type: 'critical', action: 'Escalate' },
              { msg: 'Revenue target for Q1 exceeded by 12%', time: '1h ago', type: 'success', action: 'View Report' },
              { msg: 'New city launch proposal: Hyderabad', time: '4h ago', type: 'info', action: 'Review' },
            ].map((alert, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <div className="flex-grow">
                    <p className="text-sm font-bold mb-1 group-hover:text-brand-400 transition-colors">{alert.msg}</p>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{alert.time}</p>
                  </div>
                  <div className={cn(
                    "w-2 h-2 rounded-full mt-1.5",
                    alert.type === 'critical' ? "bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.8)]" : 
                    alert.type === 'warning' ? "bg-amber-500" : 
                    alert.type === 'success' ? "bg-emerald-500" : "bg-blue-500"
                  )} />
                </div>
                <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors">{alert.action} →</button>
              </div>
            ))}
          </div>
          <button className="mt-8 w-full py-4 bg-white text-slate-950 rounded-2xl font-bold text-sm hover:bg-brand-400 transition-colors">Emergency Broadcast</button>
        </div>
      </div>
    </div>
  );
}
