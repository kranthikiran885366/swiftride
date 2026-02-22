import { motion } from 'motion/react';
import { DollarSign, TrendingUp, CreditCard, Landmark, ArrowUpRight, ArrowDownRight, Download, Filter, Calendar, PieChart, Zap } from 'lucide-react';
import { cn } from '../../../../utils/cn';

export default function Finance() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Financial Command</h1>
          <p className="text-slate-500 text-lg">Executive overview of revenue, burn, and unit economics.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Financial Brief
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Daily Revenue', value: '$428K', change: '+15.2%', trend: 'up', icon: DollarSign, color: 'text-emerald-500' },
          { label: 'Take Rate', value: '22.4%', change: '+0.4%', trend: 'up', icon: Zap, color: 'text-brand-500' },
          { label: 'Burn Rate', value: '$420K', change: '-12%', trend: 'down', icon: CreditCard, color: 'text-rose-500' },
          { label: 'Cash Runway', value: '18m', change: 'Stable', trend: 'neutral', icon: Landmark, color: 'text-amber-500' },
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
        <div className="lg:col-span-2 space-y-8">
          {/* Revenue vs Payouts */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-display font-bold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-brand-500" />
                Revenue vs Payouts (Daily)
              </h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-brand-200 bg-brand-50 text-brand-600 rounded-lg">Last 7 Days</button>
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-slate-100 rounded-lg hover:bg-slate-50">Last 30 Days</button>
              </div>
            </div>
            <div className="flex-grow flex items-center justify-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <p className="text-slate-400 font-mono text-xs uppercase tracking-widest">Financial Performance Chart Placeholder</p>
            </div>
          </div>

          {/* Unit Economics */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-500" />
              Unit Economics Scorecard
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'CAC', value: '$4.20', status: 'Optimal' },
                { label: 'LTV', value: '$124', status: 'Healthy' },
                { label: 'Payback', value: '4.2m', status: 'Optimal' },
              ].map((u, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{u.label}</p>
                  <p className="text-2xl font-display font-bold text-slate-900 mb-1">{u.value}</p>
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{u.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Revenue by Vertical */}
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">Revenue by Vertical</h4>
            <div className="space-y-6">
              {[
                { vertical: 'Ride Hailing', share: '82%', val: '$350K' },
                { vertical: 'Delivery', share: '12%', val: '$52K' },
                { vertical: 'Rentals', share: '6%', val: '$26K' },
              ].map((v, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm font-bold">
                    <span>{v.vertical}</span>
                    <span>{v.val}</span>
                  </div>
                  <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: v.share }}
                      className="h-full bg-brand-500" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Gateway Health */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-brand-500" />
              Gateway Health
            </h4>
            <div className="space-y-4">
              {[
                { name: 'Razorpay', status: 'Healthy', latency: '120ms' },
                { name: 'Stripe', status: 'Healthy', latency: '85ms' },
                { name: 'Paytm', status: 'Warning', latency: '450ms' },
              ].map((g, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-900">{g.name}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Latency: {g.latency}</p>
                  </div>
                  <div className={cn(
                    "w-2 h-2 rounded-full",
                    g.status === 'Healthy' ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" : "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]"
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
