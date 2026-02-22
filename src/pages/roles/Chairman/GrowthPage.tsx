import { motion } from 'motion/react';
import { TrendingUp, Users, Car, Globe, ArrowUpRight, ArrowDownRight, Download, Calendar, Filter } from 'lucide-react';
import { cn } from '../../../utils/cn';

const metrics = [
  { label: 'Total Users', value: '1.24M', change: '+12.4%', trend: 'up', icon: Users },
  { label: 'Active Drivers', value: '42.5K', change: '+8.2%', trend: 'up', icon: Car },
  { label: 'City Presence', value: '18', change: '+2', trend: 'up', icon: Globe },
  { label: 'Churn Rate', value: '2.4%', change: '-0.5%', trend: 'down', icon: TrendingUp },
];

export default function ChairmanGrowthPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Growth & Penetration</h1>
          <p className="text-slate-500 text-lg">Strategic tracking of market expansion and user acquisition.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Last Quarter
          </button>
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Growth Deck
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((stat, i) => (
          <motion.div
            key={stat.label}
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
            <h3 className="text-xl font-display font-bold">Registration Trends</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-brand-200 bg-brand-50 text-brand-600 rounded-lg">Users</button>
              <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-slate-100 rounded-lg hover:bg-slate-50">Drivers</button>
            </div>
          </div>
          <div className="flex-grow flex items-center justify-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-400 font-mono text-xs uppercase tracking-widest">Growth Curve Chart Placeholder</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm flex flex-col">
          <h3 className="text-xl font-display font-bold mb-8">City Penetration</h3>
          <div className="space-y-6 flex-grow">
            {[
              { city: 'Mumbai', share: '64%', growth: '+12%' },
              { city: 'Bangalore', share: '52%', growth: '+18%' },
              { city: 'Delhi', share: '48%', growth: '+9%' },
              { city: 'Hyderabad', share: '35%', growth: '+24%' },
              { city: 'Chennai', share: '28%', growth: '+15%' },
            ].map((city, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-slate-900">{city.city}</span>
                  <span className="text-slate-500">{city.share} <span className="text-emerald-500 ml-1">{city.growth}</span></span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: city.share }}
                    className="h-full bg-brand-500" 
                  />
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-4 bg-slate-50 rounded-2xl font-bold text-sm text-slate-600 hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
            <Filter className="w-4 h-4" />
            Detailed City Analysis
          </button>
        </div>
      </div>
    </div>
  );
}
