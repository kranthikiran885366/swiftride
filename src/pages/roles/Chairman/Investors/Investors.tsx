import { motion } from 'motion/react';
import { Users, TrendingUp, DollarSign, PieChart, Download, MessageSquare, Briefcase, Globe, ArrowUpRight } from 'lucide-react';
import { cn } from '../../../../utils/cn';

export default function Investors() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Investor Relations</h1>
          <p className="text-slate-500 text-lg">Manage cap table, investor communications, and funding rounds.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Send Update
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Valuation', value: '$120M', change: 'Series B', trend: 'up', icon: TrendingUp, color: 'text-brand-500' },
          { label: 'Total Raised', value: '$42M', change: '3 Rounds', trend: 'up', icon: DollarSign, color: 'text-emerald-500' },
          { label: 'Investors', value: '18', change: '02 New', trend: 'up', icon: Users, color: 'text-blue-500' },
          { label: 'Burn Multiple', value: '1.2x', change: 'Optimal', trend: 'up', icon: Briefcase, color: 'text-amber-500' },
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
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-display font-bold">Cap Table Overview</h3>
              <button className="text-sm font-bold text-brand-600 hover:text-brand-700">Full Cap Table</button>
            </div>
            <div className="space-y-6">
              {[
                { name: 'Founders & Team', share: '45%', val: '$54M', type: 'Common' },
                { name: 'Global Ventures', share: '22%', val: '$26.4M', type: 'Preferred' },
                { name: 'Future Capital', share: '18%', val: '$21.6M', type: 'Preferred' },
                { name: 'Angel Group', share: '15%', val: '$18M', type: 'Common' },
              ].map((inv, i) => (
                <div key={i} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{inv.name}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{inv.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">{inv.share}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{inv.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <Download className="w-5 h-5 text-brand-500" />
              Investor Data Room
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Series B Term Sheet', size: '2.4 MB', date: 'Feb 12' },
                { title: 'Q4 2023 Financials', size: '4.1 MB', date: 'Jan 28' },
                { title: 'Platform Growth Deck', size: '12.8 MB', date: 'Feb 15' },
                { title: 'Audit Report FY23', size: '8.2 MB', date: 'Jan 10' },
              ].map((doc, i) => (
                <div key={i} className="p-4 border border-slate-100 rounded-2xl flex items-center justify-between hover:border-brand-200 hover:bg-brand-50 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <Download className="w-4 h-4 text-slate-400 group-hover:text-brand-600" />
                    <div>
                      <p className="text-sm font-bold text-slate-900 line-clamp-1">{doc.title}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{doc.size} • {doc.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">Valuation History</h4>
            <div className="space-y-6">
              {[
                { round: 'Series B', val: '$120M', date: '2024' },
                { round: 'Series A', val: '$45M', date: '2022' },
                { round: 'Seed', val: '$8M', date: '2020' },
              ].map((h, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold">{h.round}</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{h.date}</p>
                  </div>
                  <p className="text-sm font-bold text-brand-400">{h.val}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-brand-500" />
              Ownership Mix
            </h4>
            <div className="aspect-square bg-slate-50 rounded-2xl border border-dashed border-slate-200 flex items-center justify-center">
              <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest text-center px-4">Ownership Pie Chart Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
