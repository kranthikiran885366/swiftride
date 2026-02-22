import { motion } from 'motion/react';
import { Zap, Users, Car, MapPin, TrendingUp, ArrowUpRight, ArrowDownRight, Activity, ShieldAlert, Globe, PieChart, Download, Target, MessageSquare } from 'lucide-react';
import { useAppSelector } from '../../../../store/hooks';
import { cn } from '../../../../utils/cn';

export default function Dashboard() {
  const stats = [
    { label: 'Daily Revenue', value: '$428K', change: '+15.2%', trend: 'up', icon: Zap, color: 'text-brand-500' },
    { label: 'Active Rides', value: '12,405', change: '+8.2%', trend: 'up', icon: MapPin, color: 'text-blue-500' },
    { label: 'Driver Supply', value: '4,105', change: '-2.4%', trend: 'down', icon: Car, color: 'text-amber-500' },
    { label: 'Global NPS', value: '72', change: '+2', trend: 'up', icon: Target, color: 'text-emerald-500' },
  ];

  return (
    <div className="space-y-10">
      <div className="flex items-end justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-slate-950 rounded-lg">
              <Target className="w-5 h-5 text-brand-400" />
            </div>
            <span className="text-xs font-bold text-slate-950 uppercase tracking-[0.2em]">Executive Command Center</span>
          </div>
          <h1 className="text-4xl font-display font-bold mb-2">Global Operations</h1>
          <p className="text-slate-500 text-lg">Real-time pulse of the platform across all markets and verticals.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Executive Brief
          </button>
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Market View
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
                stat.trend === 'up' ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
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
          {/* Live Map View */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm h-[500px] flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-display font-bold flex items-center gap-2">
                <Activity className="w-5 h-5 text-brand-500" />
                Live Network Activity
              </h3>
              <div className="flex gap-2">
                {['Mumbai', 'Bangalore', 'Delhi', 'Hyderabad'].map(city => (
                  <button key={city} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-slate-100 rounded-lg hover:bg-slate-50">{city}</button>
                ))}
              </div>
            </div>
            <div className="flex-grow flex items-center justify-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/1200/800')] bg-cover opacity-10 grayscale" />
              <p className="text-slate-400 font-mono text-xs uppercase tracking-widest relative z-10">Global Live Map Placeholder</p>
            </div>
          </div>

          {/* Market Performance */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              Market Performance Scorecard
            </h3>
            <div className="space-y-6">
              {[
                { city: 'Mumbai', revenue: '$142K', growth: '+12%', health: 'Healthy' },
                { city: 'Bangalore', revenue: '$128K', growth: '+8%', health: 'Healthy' },
                { city: 'Delhi', revenue: '$98K', growth: '-2%', health: 'Warning' },
              ].map((m, i) => (
                <div key={i} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{m.city}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{m.revenue} Revenue</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={cn("text-sm font-bold", m.growth.startsWith('+') ? "text-emerald-600" : "text-rose-600")}>{m.growth}</p>
                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-widest",
                      m.health === 'Healthy' ? "text-emerald-500" : "text-amber-500"
                    )}>{m.health}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Executive Alerts */}
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-2xl">
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-500" />
              Executive Alerts
            </h3>
            <div className="space-y-6">
              {[
                { msg: 'Regulatory hurdle in Chennai', time: '2m ago', priority: 'High' },
                { msg: 'Competitor price drop: Delhi', time: '15m ago', priority: 'Medium' },
                { msg: 'Server latency spike: Mumbai', time: '4h ago', priority: 'Low' },
              ].map((alert, i) => (
                <div key={i} className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-sm font-bold mb-1">{alert.msg}</p>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{alert.time}</p>
                  </div>
                  <div className={cn(
                    "w-2 h-2 rounded-full mt-1.5",
                    alert.priority === 'High' ? "bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.8)]" : 
                    alert.priority === 'Medium' ? "bg-amber-500" : "bg-blue-500"
                  )} />
                </div>
              ))}
            </div>
            <button className="mt-8 w-full py-4 bg-white text-slate-950 rounded-2xl font-bold text-sm hover:bg-brand-400 transition-colors">Acknowledge All</button>
          </div>

          {/* Strategic Goals */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <Target className="w-5 h-5 text-brand-500" />
              Strategic Goals (Q1)
            </h4>
            <div className="space-y-6">
              {[
                { goal: 'Market Share 25%', progress: 82 },
                { goal: 'Driver Retention 90%', progress: 65 },
                { goal: 'EBITDA Positive', progress: 45 },
              ].map((goal, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span>{goal.goal}</span>
                    <span>{goal.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${goal.progress}%` }}
                      className="h-full bg-brand-500" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
