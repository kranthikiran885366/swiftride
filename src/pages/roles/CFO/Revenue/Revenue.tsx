import { motion } from 'motion/react';
import { DollarSign, TrendingUp, ArrowUpRight, Download, Filter, Calendar, PieChart, Zap, Globe, MapPin } from 'lucide-react';
import { cn } from '../../../../utils/cn';

export default function Revenue() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Revenue Analytics</h1>
          <p className="text-slate-500 text-lg">Detailed breakdown of platform revenue across regions and verticals.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Data
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Gross Revenue', value: '$12.4M', change: '+18.2%', trend: 'up', icon: DollarSign, color: 'text-emerald-500' },
          { label: 'Net Revenue', value: '$2.8M', change: '+12.4%', trend: 'up', icon: TrendingUp, color: 'text-brand-500' },
          { label: 'Avg. Order Value', value: '$12.40', change: '+2.1%', trend: 'up', icon: Zap, color: 'text-blue-500' },
          { label: 'Take Rate', value: '22.4%', change: '+0.4%', trend: 'up', icon: Globe, color: 'text-amber-500' },
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
          {/* Revenue by Region */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-display font-bold flex items-center gap-2">
                <Globe className="w-5 h-5 text-brand-500" />
                Revenue by Region
              </h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-brand-200 bg-brand-50 text-brand-600 rounded-lg">Last 30 Days</button>
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-slate-100 rounded-lg hover:bg-slate-50">Last 90 Days</button>
              </div>
            </div>
            <div className="flex-grow flex items-center justify-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <p className="text-slate-400 font-mono text-xs uppercase tracking-widest">Regional Revenue Heatmap Placeholder</p>
            </div>
          </div>

          {/* Vertical Performance */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-blue-500" />
              Vertical Performance Scorecard
            </h3>
            <div className="space-y-6">
              {[
                { vertical: 'Ride Hailing', revenue: '$10.2M', growth: '+15%', share: '82%' },
                { vertical: 'Delivery', revenue: '$1.4M', growth: '+24%', share: '12%' },
                { vertical: 'Rentals', revenue: '$0.8M', growth: '+8%', share: '6%' },
              ].map((v, i) => (
                <div key={i} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{v.vertical}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{v.revenue} Revenue • {v.share} Share</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-emerald-600">{v.growth}</p>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Growth YoY</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Top Cities */}
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">Top Cities by Revenue</h4>
            <div className="space-y-6">
              {[
                { city: 'Mumbai', val: '$4.2M', share: '34%' },
                { city: 'Bangalore', val: '$3.8M', share: '31%' },
                { city: 'Delhi', val: '$2.4M', share: '19%' },
                { city: 'Hyderabad', val: '$1.2M', share: '10%' },
              ].map((c, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm font-bold">
                    <span>{c.city}</span>
                    <span>{c.val}</span>
                  </div>
                  <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: c.share }}
                      className="h-full bg-brand-500" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue Alerts */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-brand-500" />
              Revenue Alerts
            </h4>
            <div className="space-y-4">
              {[
                { msg: 'Mumbai revenue exceeded target by 12%', type: 'Success' },
                { msg: 'Delhi revenue dropped 5% below projection', type: 'Warning' },
                { msg: 'New vertical "Rentals" reached $1M milestone', type: 'Success' },
              ].map((alert, i) => (
                <div key={i} className="flex justify-between items-start gap-4">
                  <p className="text-sm text-slate-700">{alert.msg}</p>
                  <div className={cn(
                    "w-2 h-2 rounded-full shrink-0 mt-1.5",
                    alert.type === 'Success' ? "bg-emerald-500" : "bg-amber-500"
                  )} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
