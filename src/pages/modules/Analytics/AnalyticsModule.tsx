import { motion } from 'motion/react';
import { TrendingUp, BarChart3, PieChart, Activity, Globe, Zap, ArrowUpRight, Download, Calendar } from 'lucide-react';
import { cn } from '../../../utils/cn';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart as RePieChart, Pie, Cell, BarChart, Bar, Legend
} from 'recharts';

const growthData = [
  { name: 'Mon', revenue: 4000, rides: 2400, users: 2400 },
  { name: 'Tue', revenue: 3000, rides: 1398, users: 2210 },
  { name: 'Wed', revenue: 2000, rides: 9800, users: 2290 },
  { name: 'Thu', revenue: 2780, rides: 3908, users: 2000 },
  { name: 'Fri', revenue: 1890, rides: 4800, users: 2181 },
  { name: 'Sat', revenue: 2390, rides: 3800, users: 2500 },
  { name: 'Sun', revenue: 3490, rides: 4300, users: 2100 },
];

const marketData = [
  { name: 'Our Platform', value: 64, color: '#10b981' },
  { name: 'Competitor A', value: 22, color: '#3b82f6' },
  { name: 'Others', value: 14, color: '#334155' },
];

export default function AnalyticsModule() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Analytics & BI</h1>
          <p className="text-slate-500">Deep insights into platform growth, user behavior, and market trends.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Last 7 Days
          </button>
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export BI Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm h-[500px] flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-display font-bold flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-brand-500" />
              Growth Velocity
            </h3>
            <div className="flex gap-2">
              {['Revenue', 'Rides', 'Users'].map(t => (
                <button key={t} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-slate-100 rounded-lg hover:bg-slate-50">{t}</button>
              ))}
            </div>
          </div>
          <div className="flex-grow">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthData}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 600, fill: '#94a3b8' }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 600, fill: '#94a3b8' }}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Side Metrics */}
        <div className="space-y-6">
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl h-[300px] flex flex-col">
            <h4 className="font-display font-bold mb-4 text-slate-400 uppercase tracking-widest text-xs">Market Share</h4>
            <div className="flex-grow">
              <ResponsiveContainer width="100%" height="100%">
                <RePieChart>
                  <Pie
                    data={marketData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {marketData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RePieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
              {marketData.map((item, i) => (
                <div key={i} className="text-center">
                  <div className={cn("w-1.5 h-1.5 rounded-full mx-auto mb-1", i === 0 ? "bg-brand-500" : i === 1 ? "bg-blue-500" : "bg-slate-700")} />
                  <p className="text-[8px] font-bold uppercase tracking-tighter text-slate-500">{item.name}</p>
                  <p className="text-xs font-bold">{item.value}%</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              Real-time Pulse
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Active Now</p>
                  <h5 className="text-2xl font-display font-bold">12,842</h5>
                </div>
                <div className="text-emerald-500 flex items-center gap-1 text-xs font-bold">
                  <ArrowUpRight className="w-3 h-3" /> 4.2%
                </div>
              </div>
              <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  className="h-full bg-emerald-500" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
