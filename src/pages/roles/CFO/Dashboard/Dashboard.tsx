import { motion } from 'motion/react';
import { DollarSign, TrendingUp, CreditCard, Landmark, ArrowUpRight, ArrowDownRight, Download, Filter, Calendar, PieChart, Zap, Wallet, Receipt, ShieldCheck } from 'lucide-react';
import { cn } from '../../../../utils/cn';

export default function Dashboard() {
  const stats = [
    { label: 'Total Revenue', value: '$12.4M', change: '+18.2%', trend: 'up', icon: DollarSign, color: 'text-emerald-500' },
    { label: 'Net Profit', value: '$2.1M', change: '+12.4%', trend: 'up', icon: TrendingUp, color: 'text-brand-500' },
    { label: 'Burn Rate', value: '$420K', change: '-8.2%', trend: 'down', icon: Zap, color: 'text-rose-500' },
    { label: 'Cash on Hand', value: '$42M', change: 'Stable', trend: 'neutral', icon: Landmark, color: 'text-blue-500' },
  ];

  return (
    <div className="space-y-10">
      <div className="flex items-end justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-slate-950 rounded-lg">
              <Landmark className="w-5 h-5 text-brand-400" />
            </div>
            <span className="text-xs font-bold text-slate-950 uppercase tracking-[0.2em]">Financial Command Center</span>
          </div>
          <h1 className="text-4xl font-display font-bold mb-2">Financial Overview</h1>
          <p className="text-slate-500 text-lg">Real-time tracking of revenue, expenses, and platform unit economics.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Financial Report
          </button>
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            Audit Logs
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
                stat.trend === 'up' ? "bg-emerald-50 text-emerald-600" : 
                stat.trend === 'down' ? "bg-rose-50 text-rose-600" : "bg-slate-50 text-slate-600"
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
          {/* Revenue Chart */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-display font-bold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-brand-500" />
                Revenue vs. Projections
              </h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-brand-200 bg-brand-50 text-brand-600 rounded-lg">Monthly</button>
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-slate-100 rounded-lg hover:bg-slate-50">Quarterly</button>
              </div>
            </div>
            <div className="flex-grow flex items-center justify-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-100/20 via-transparent to-transparent" />
              <p className="text-slate-400 font-mono text-xs uppercase tracking-widest relative z-10">Financial Projection Chart Placeholder</p>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-display font-bold flex items-center gap-2">
                <Receipt className="w-5 h-5 text-blue-500" />
                Recent High-Value Transactions
              </h3>
              <button className="text-sm font-bold text-brand-600 hover:text-brand-700">View All</button>
            </div>
            <div className="space-y-6">
              {[
                { id: 'TXN-8821', desc: 'Regional Payout: Mumbai', amount: '$142,000', status: 'Success', date: '2m ago' },
                { id: 'TXN-8820', desc: 'Cloud Infrastructure Bill', amount: '$42,500', status: 'Pending', date: '15m ago' },
                { id: 'TXN-8819', desc: 'Marketing Campaign: Q1', amount: '$85,000', status: 'Success', date: '1h ago' },
              ].map((txn, i) => (
                <div key={i} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                      <DollarSign className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{txn.desc}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{txn.id} • {txn.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">{txn.amount}</p>
                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-widest",
                      txn.status === 'Success' ? "text-emerald-500" : "text-amber-500"
                    )}>{txn.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Expense Breakdown */}
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-2xl">
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-brand-400" />
              Expense Breakdown
            </h3>
            <div className="space-y-6">
              {[
                { label: 'Operations', val: '42%', color: 'bg-brand-500' },
                { label: 'Marketing', val: '28%', color: 'bg-blue-500' },
                { label: 'Technology', val: '18%', color: 'bg-emerald-500' },
                { label: 'Admin', val: '12%', color: 'bg-slate-700' },
              ].map((exp, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm font-bold">
                    <span>{exp.label}</span>
                    <span>{exp.val}</span>
                  </div>
                  <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: exp.val }}
                      className={cn("h-full", exp.color)} 
                    />
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-8 w-full py-4 bg-slate-900 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-colors">Expense Management</button>
          </div>

          {/* Gateway Health */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-brand-500" />
              Gateway Success Rates
            </h4>
            <div className="space-y-4">
              {[
                { name: 'Razorpay', rate: '98.4%', status: 'Healthy' },
                { name: 'Stripe', rate: '99.2%', status: 'Healthy' },
                { name: 'Paytm', rate: '82.5%', status: 'Warning' },
              ].map((g, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-900">{g.name}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Success Rate: {g.rate}</p>
                  </div>
                  <div className={cn(
                    "w-2 h-2 rounded-full",
                    g.status === 'Healthy' ? "bg-emerald-500" : "bg-amber-500"
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
