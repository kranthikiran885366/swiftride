import { motion } from 'motion/react';
import { Zap, Users, Car, MapPin, TrendingUp, ArrowUpRight, ArrowDownRight, Activity, ShieldAlert, UserCircle } from 'lucide-react';
import { useAppSelector } from '../../../store/hooks';
import { cn } from '../../../utils/cn';

export default function RoleDashboard() {
  const { user } = useAppSelector(state => state.auth);
  
  const stats = [
    { label: 'Total Revenue', value: '$12.4M', change: '+12.5%', trend: 'up', icon: Zap },
    { label: 'Active Riders', value: '842,000', change: '+8.2%', trend: 'up', icon: Users },
    { label: 'Active Drivers', value: '42,105', change: '-2.4%', trend: 'down', icon: Car },
    { label: 'Completed Trips', value: '2.1M', change: '+15.3%', trend: 'up', icon: MapPin },
  ];

  return (
    <div className="space-y-10">
      <div className="flex items-end justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-brand-50 rounded-lg">
              <UserCircle className="w-5 h-5 text-brand-600" />
            </div>
            <span className="text-xs font-bold text-brand-600 uppercase tracking-[0.2em]">System Access: {user?.role.replace('_', ' ')}</span>
          </div>
          <h1 className="text-4xl font-display font-bold mb-2">Welcome back, {user?.name.split(' ')[0]}</h1>
          <p className="text-slate-500">Here's what's happening across the platform today.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors">Export Report</button>
          <button className="px-4 py-2 bg-slate-950 text-white rounded-xl text-sm font-bold hover:bg-brand-600 transition-colors">Live View</button>
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
            className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
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
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-3xl font-display font-bold">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      {/* Advanced Visualizations Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-display font-bold flex items-center gap-2">
              <Activity className="w-5 h-5 text-brand-500" />
              Network Throughput
            </h3>
            <div className="flex gap-2">
              {['1H', '24H', '7D', '30D'].map(t => (
                <button key={t} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-slate-100 rounded-lg hover:bg-slate-50">{t}</button>
              ))}
            </div>
          </div>
          <div className="flex-grow flex items-center justify-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-400 font-mono text-xs uppercase tracking-widest">Real-time Chart Component Placeholder</p>
          </div>
        </div>

        <div className="bg-slate-950 text-white p-8 rounded-3xl flex flex-col">
          <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-rose-500" />
            Critical Alerts
          </h3>
          <div className="space-y-4 flex-grow">
            {[
              { msg: 'Surge anomaly detected in Mumbai North', time: '2m ago', type: 'warning' },
              { msg: 'System maintenance scheduled for 02:00 UTC', time: '15m ago', type: 'info' },
              { msg: 'P1 SOS Alert: Trip #84291 (Chicago)', time: '24m ago', type: 'critical' },
            ].map((alert, i) => (
              <div key={i} className="p-4 bg-slate-900 rounded-2xl border border-slate-800 flex justify-between items-start gap-4">
                <div className="flex-grow">
                  <p className="text-sm font-medium mb-1">{alert.msg}</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{alert.time}</p>
                </div>
                <div className={cn(
                  "w-2 h-2 rounded-full mt-1.5",
                  alert.type === 'critical' ? "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]" : 
                  alert.type === 'warning' ? "bg-amber-500" : "bg-blue-500"
                )} />
              </div>
            ))}
          </div>
          <button className="mt-8 w-full py-3 bg-white text-slate-950 rounded-xl font-bold text-sm hover:bg-brand-400 transition-colors">View All Incident Logs</button>
        </div>
      </div>
    </div>
  );
}
