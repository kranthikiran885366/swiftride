import { motion } from 'motion/react';
import { Zap, Users, Car, MapPin, TrendingUp, ArrowUpRight, ArrowDownRight, Activity, ShieldAlert, Globe, PieChart, Download } from 'lucide-react';
import { useAppSelector } from '../../../../store/hooks';
import { cn } from '../../../../utils/cn';

export default function Dashboard() {
  const { user } = useAppSelector(state => state.auth);
  
  const stats = [
    { label: 'Global Revenue', value: '$12.4M', change: '+12.5%', trend: 'up', icon: Zap },
    { label: 'Active Riders', value: '842,000', change: '+8.2%', trend: 'up', icon: Users },
    { label: 'Active Drivers', value: '42,105', change: '-2.4%', trend: 'down', icon: Car },
    { label: 'Market Share', value: '24.2%', change: '+1.5%', trend: 'up', icon: Globe },
  ];

  return (
    <div className="space-y-10">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Executive Dashboard</h1>
          <p className="text-slate-500 text-lg">Board-level overview of global platform performance and strategic KPIs.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Daily Snapshot PDF
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
        <div className="lg:col-span-2 bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm h-[500px] flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-display font-bold flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-brand-500" />
              Revenue Growth (YoY)
            </h3>
            <div className="flex gap-2">
              {['Q1', 'Q2', 'Q3', 'Q4'].map(q => (
                <button key={q} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-slate-100 rounded-lg hover:bg-slate-50">{q}</button>
              ))}
            </div>
          </div>
          <div className="flex-grow flex items-center justify-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-400 font-mono text-xs uppercase tracking-widest">Strategic Growth Chart Placeholder</p>
          </div>
        </div>

        <div className="bg-slate-950 text-white p-8 rounded-[32px] flex flex-col shadow-2xl">
          <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-rose-500" />
            Critical Alerts
          </h3>
          <div className="space-y-6 flex-grow">
            {[
              { msg: 'P1 SOS Alert: Trip #84291', time: '2m ago', type: 'critical' },
              { msg: 'Surge anomaly in Mumbai North', time: '15m ago', type: 'warning' },
              { msg: 'New city launch: Hyderabad', time: '4h ago', type: 'info' },
            ].map((alert, i) => (
              <div key={i} className="flex justify-between items-start gap-4">
                <div>
                  <p className="text-sm font-bold mb-1">{alert.msg}</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{alert.time}</p>
                </div>
                <div className={cn(
                  "w-2 h-2 rounded-full mt-1.5",
                  alert.type === 'critical' ? "bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.8)]" : 
                  alert.type === 'warning' ? "bg-amber-500" : "bg-blue-500"
                )} />
              </div>
            ))}
          </div>
          <button className="mt-8 w-full py-4 bg-white text-slate-950 rounded-2xl font-bold text-sm hover:bg-brand-400 transition-colors">View All Alerts</button>
        </div>
      </div>
    </div>
  );
}
