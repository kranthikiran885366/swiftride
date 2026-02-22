import { motion } from 'motion/react';
import { TrendingUp, Globe, Users, Zap, ArrowUpRight, Download, Map, PieChart, BarChart3 } from 'lucide-react';
import { cn } from '../../../../utils/cn';

export default function Growth() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Growth & Penetration</h1>
          <p className="text-slate-500 text-lg">Strategic market expansion and user acquisition metrics.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Expansion Strategy
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Market Share', value: '24.2%', change: '+1.5%', trend: 'up', icon: Globe, color: 'text-brand-500' },
          { label: 'User Growth', value: '+18.4%', change: 'MoM', trend: 'up', icon: Users, color: 'text-blue-500' },
          { label: 'CAC', value: '$4.20', change: '-5%', trend: 'down', icon: Zap, color: 'text-emerald-500' },
          { label: 'LTV', value: '$124', change: '+12%', trend: 'up', icon: TrendingUp, color: 'text-amber-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
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
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-display font-bold flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-brand-500" />
                Market Penetration by Tier
              </h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-brand-200 bg-brand-50 text-brand-600 rounded-lg">Tier 1</button>
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-slate-100 rounded-lg hover:bg-slate-50">Tier 2</button>
              </div>
            </div>
            <div className="flex-grow flex items-center justify-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <p className="text-slate-400 font-mono text-xs uppercase tracking-widest">Penetration Bar Chart Placeholder</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <Map className="w-5 h-5 text-blue-500" />
              Expansion Roadmap
            </h3>
            <div className="space-y-6">
              {[
                { city: 'Hyderabad', status: 'Launch Phase', date: 'March 2024', progress: 85 },
                { city: 'Chennai', status: 'Regulatory Approval', date: 'April 2024', progress: 40 },
                { city: 'Pune', status: 'Market Research', date: 'June 2024', progress: 15 },
              ].map((city, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <div>
                      <h4 className="font-bold text-slate-900">{city.city}</h4>
                      <p className="text-xs text-slate-500">{city.status} • Target: {city.date}</p>
                    </div>
                    <span className="text-sm font-bold text-slate-900">{city.progress}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${city.progress}%` }}
                      className="h-full bg-brand-500" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">User Acquisition Channels</h4>
            <div className="space-y-6">
              {[
                { channel: 'Organic', val: '42%', color: 'bg-brand-500' },
                { channel: 'Referral', val: '28%', color: 'bg-blue-500' },
                { channel: 'Paid Ads', val: '18%', color: 'bg-amber-500' },
                { channel: 'Partnerships', val: '12%', color: 'bg-emerald-500' },
              ].map((ch, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={cn("w-2 h-2 rounded-full", ch.color)} />
                    <span className="text-sm font-medium text-slate-300">{ch.channel}</span>
                  </div>
                  <p className="text-sm font-bold">{ch.val}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-brand-500" />
              Retention Cohorts
            </h4>
            <div className="aspect-square bg-slate-50 rounded-2xl border border-dashed border-slate-200 flex items-center justify-center">
              <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest text-center px-4">Retention Heatmap Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
