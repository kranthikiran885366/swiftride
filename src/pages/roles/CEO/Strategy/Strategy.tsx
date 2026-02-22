import { motion } from 'motion/react';
import { Target, Globe, TrendingUp, Zap, ArrowUpRight, Download, Map, PieChart, BarChart3, Users } from 'lucide-react';
import { cn } from '../../../../utils/cn';

export default function Strategy() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Strategic Roadmap</h1>
          <p className="text-slate-500 text-lg">Long-term vision, market expansion, and strategic objectives.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Strategic Plan PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Market Share Target', value: '35%', change: 'Q4 2024', trend: 'up', icon: Globe, color: 'text-brand-500' },
          { label: 'New City Launches', value: '12', change: 'Next 6m', trend: 'up', icon: Map, color: 'text-blue-500' },
          { label: 'EBITDA Target', value: '+$2M', change: 'FY 2024', trend: 'up', icon: TrendingUp, color: 'text-emerald-500' },
          { label: 'Strategic Hires', value: '08', change: 'Open Roles', trend: 'neutral', icon: Users, color: 'text-amber-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-slate-50 rounded-2xl">
                <stat.icon className={cn("w-6 h-6", stat.color)} />
              </div>
              <div className={cn(
                "flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-lg",
                stat.trend === 'up' ? "bg-emerald-50 text-emerald-600" : "bg-slate-50 text-slate-600"
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
          {/* Market Expansion Roadmap */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <Map className="w-5 h-5 text-blue-500" />
              Global Expansion Roadmap
            </h3>
            <div className="space-y-8">
              {[
                { city: 'Hyderabad', phase: 'Launch Phase', date: 'March 2024', progress: 85, status: 'On Track' },
                { city: 'Chennai', phase: 'Regulatory Approval', date: 'April 2024', progress: 40, status: 'Delayed' },
                { city: 'Pune', phase: 'Market Research', date: 'June 2024', progress: 15, status: 'On Track' },
                { city: 'Kolkata', phase: 'Feasibility Study', date: 'August 2024', progress: 5, status: 'On Track' },
              ].map((city, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <div>
                      <h4 className="font-bold text-slate-900">{city.city}</h4>
                      <p className="text-xs text-slate-500">{city.phase} • Target: {city.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-slate-900">{city.progress}%</p>
                      <span className={cn(
                        "text-[10px] font-bold uppercase tracking-widest",
                        city.status === 'On Track' ? "text-emerald-500" : "text-rose-500"
                      )}>{city.status}</span>
                    </div>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${city.progress}%` }}
                      className={cn("h-full", city.status === 'On Track' ? "bg-brand-500" : "bg-rose-500")} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Objectives */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <Target className="w-5 h-5 text-brand-500" />
              Strategic Objectives (Q1-Q2)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Profitability', desc: 'Achieve EBITDA positive in Tier 1 cities.', status: 'In Progress' },
                { title: 'Market Share', desc: 'Capture 30% share in Mumbai and Bangalore.', status: 'At Risk' },
                { title: 'Driver Retention', desc: 'Reduce churn by 15% through new incentive model.', status: 'In Progress' },
                { title: 'Tech Debt', desc: 'Complete migration to microservices architecture.', status: 'Completed' },
              ].map((obj, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-slate-900">{obj.title}</h4>
                    <span className={cn(
                      "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest",
                      obj.status === 'Completed' ? "bg-emerald-500 text-white" : 
                      obj.status === 'At Risk' ? "bg-rose-500 text-white" : "bg-blue-500 text-white"
                    )}>{obj.status}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{obj.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Market Share Pie */}
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">Market Share (Current)</h4>
            <div className="space-y-6">
              {[
                { player: 'Our Platform', share: '24.2%', color: 'bg-brand-500' },
                { player: 'Competitor A', share: '38.5%', color: 'bg-slate-700' },
                { player: 'Competitor B', share: '22.1%', color: 'bg-slate-800' },
                { player: 'Others', share: '15.2%', color: 'bg-slate-900' },
              ].map((p, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={cn("w-2 h-2 rounded-full", p.color)} />
                    <span className="text-sm font-medium text-slate-300">{p.player}</span>
                  </div>
                  <p className="text-sm font-bold">{p.share}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Intelligence */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-brand-500" />
              Competitive Intel
            </h4>
            <div className="space-y-4">
              {[
                { msg: 'Competitor A launched monthly pass in Mumbai', time: '2h ago' },
                { msg: 'Competitor B raising $200M Series D', time: '1d ago' },
                { msg: 'New local player entering Hyderabad', time: '3d ago' },
              ].map((intel, i) => (
                <div key={i} className="flex justify-between items-start gap-4">
                  <p className="text-sm text-slate-700">{intel.msg}</p>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest shrink-0">{intel.time}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 bg-slate-50 rounded-xl font-bold text-sm text-slate-600 hover:bg-slate-100 transition-colors">
              Full Competitive Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
