import { motion } from 'motion/react';
import { DollarSign, TrendingUp, CreditCard, Landmark, ArrowUpRight, ArrowDownRight, Download, Filter, Calendar, PieChart } from 'lucide-react';
import { cn } from '../../../../utils/cn';

export default function Finance() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Financial Command</h1>
          <p className="text-slate-500 text-lg">High-level financial health, burn rate, and revenue projections.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            FY 2024
          </button>
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Financial Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Revenue', value: '$12.4M', change: '+15.2%', trend: 'up', icon: DollarSign, color: 'text-emerald-500' },
          { label: 'Net Profit', value: '$2.1M', change: '+8.4%', trend: 'up', icon: TrendingUp, color: 'text-blue-500' },
          { label: 'Burn Rate', value: '$420K', change: '-12%', trend: 'down', icon: CreditCard, color: 'text-rose-500' },
          { label: 'Cash on Hand', value: '$8.4M', change: 'Stable', trend: 'neutral', icon: Landmark, color: 'text-amber-500' },
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
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-display font-bold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-brand-500" />
                Revenue vs Payouts
              </h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-brand-200 bg-brand-50 text-brand-600 rounded-lg">Monthly</button>
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-slate-100 rounded-lg hover:bg-slate-50">Quarterly</button>
              </div>
            </div>
            <div className="flex-grow flex items-center justify-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <p className="text-slate-400 font-mono text-xs uppercase tracking-widest">Financial Projection Chart Placeholder</p>
            </div>
          </div>

          <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl font-display font-bold">Major Transactions</h3>
              <button className="text-sm font-bold text-brand-600 hover:text-brand-700">View Ledger</button>
            </div>
            <div className="divide-y divide-slate-50">
              {[
                { name: 'AWS Infrastructure', category: 'Ops', amount: '-$12,400', date: 'Feb 22, 2024', status: 'Completed' },
                { name: 'Stripe Payout Batch', category: 'Payout', amount: '-$842,000', date: 'Feb 21, 2024', status: 'Pending' },
                { name: 'Series B Funding Tranche', category: 'Investment', amount: '+$2,000,000', date: 'Feb 20, 2024', status: 'Completed' },
              ].map((txn, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                      <Landmark className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{txn.name}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{txn.category} • {txn.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={cn(
                      "text-sm font-bold",
                      txn.amount.startsWith('+') ? "text-emerald-600" : "text-rose-600"
                    )}>{txn.amount}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{txn.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">Revenue by Region</h4>
            <div className="space-y-6">
              {[
                { region: 'Mumbai', share: '42%', val: '$5.2M' },
                { region: 'Bangalore', share: '28%', val: '$3.5M' },
                { region: 'Delhi', share: '18%', val: '$2.2M' },
                { region: 'Others', share: '12%', val: '$1.5M' },
              ].map((reg, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm font-bold">
                    <span>{reg.region}</span>
                    <span>{reg.val}</span>
                  </div>
                  <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: reg.share }}
                      className="h-full bg-brand-500" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-brand-500" />
              Expense Distribution
            </h4>
            <div className="aspect-square bg-slate-50 rounded-2xl border border-dashed border-slate-200 flex items-center justify-center">
              <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest text-center px-4">Expense Pie Chart Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
