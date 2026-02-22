import { motion } from 'motion/react';
import { CreditCard, Receipt, PieChart, ArrowUpRight, Download, Filter, Calendar, Zap, Users, Server, Globe } from 'lucide-react';
import { cn } from '../../../../utils/cn';

export default function Expenses() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Expense Management</h1>
          <p className="text-slate-500 text-lg">Track and manage platform operational costs and overheads.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <Receipt className="w-4 h-4" />
            New Expense
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total OpEx', value: '$4.2M', change: '+5.2%', trend: 'up', icon: CreditCard, color: 'text-brand-500' },
          { label: 'Burn Rate', value: '$420K', change: '-8.2%', trend: 'down', icon: Zap, color: 'text-rose-500' },
          { label: 'Marketing Spend', value: '$1.2M', change: '+12%', trend: 'up', icon: Globe, color: 'text-blue-500' },
          { label: 'Cloud Costs', value: '$850K', change: '+2.4%', trend: 'up', icon: Server, color: 'text-amber-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-slate-50 rounded-2xl">
                <stat.icon className={cn("w-6 h-6", stat.color)} />
              </div>
              <div className={cn(
                "flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-lg",
                stat.trend === 'up' ? "bg-rose-50 text-rose-600" : "bg-emerald-50 text-emerald-600"
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
          {/* Expense Categories */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-brand-500" />
              Expense by Category
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { category: 'Cloud Infrastructure', amount: '$850,000', share: '20%', trend: 'up', icon: Server },
                { category: 'Digital Marketing', amount: '$1,200,000', share: '28%', trend: 'up', icon: Globe },
                { category: 'Payroll & Benefits', amount: '$1,500,000', share: '36%', trend: 'stable', icon: Users },
                { category: 'Office & Admin', amount: '$650,000', share: '16%', trend: 'down', icon: CreditCard },
              ].map((c, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-brand-200 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-white rounded-xl shadow-sm group-hover:text-brand-600 transition-colors">
                      <c.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{c.share}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1">{c.category}</h4>
                  <p className="text-xl font-display font-bold text-slate-900">{c.amount}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Invoices */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-display font-bold flex items-center gap-2">
                <Receipt className="w-5 h-5 text-blue-500" />
                Recent Invoices
              </h3>
              <button className="text-sm font-bold text-brand-600 hover:text-brand-700">View All</button>
            </div>
            <div className="divide-y divide-slate-50">
              {[
                { vendor: 'Amazon Web Services', amount: '$42,500', date: 'Feb 20, 2024', status: 'Paid' },
                { vendor: 'Google Marketing', amount: '$28,000', date: 'Feb 18, 2024', status: 'Processing' },
                { vendor: 'WeWork Global', amount: '$15,400', date: 'Feb 15, 2024', status: 'Paid' },
                { vendor: 'Slack Technologies', amount: '$4,200', date: 'Feb 10, 2024', status: 'Paid' },
              ].map((inv, i) => (
                <div key={i} className="py-4 flex items-center justify-between group">
                  <div>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors">{inv.vendor}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{inv.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">{inv.amount}</p>
                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-widest",
                      inv.status === 'Paid' ? "text-emerald-500" : "text-amber-500"
                    )}>{inv.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Burn Rate Monitor */}
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">Burn Rate Monitor</h4>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span>Current Burn</span>
                  <span>$420K / mo</span>
                </div>
                <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    className="h-full bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.4)]" 
                  />
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">Burn rate is currently 8% below target for Q1. Runway extended by 1.2 months.</p>
            </div>
          </div>

          {/* Budget Utilization */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-brand-500" />
              Budget Utilization
            </h4>
            <div className="space-y-6">
              {[
                { dept: 'Engineering', used: 82 },
                { dept: 'Marketing', used: 95 },
                { dept: 'Operations', used: 64 },
                { dept: 'Sales', used: 45 },
              ].map((d, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span>{d.dept}</span>
                    <span>{d.used}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${d.used}%` }}
                      className={cn(
                        "h-full",
                        d.used > 90 ? "bg-rose-500" : d.used > 75 ? "bg-amber-500" : "bg-emerald-500"
                      )} 
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
