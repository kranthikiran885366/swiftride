import { motion } from 'motion/react';
import { DollarSign, CreditCard, TrendingUp, ShieldAlert, ArrowUpRight, ArrowDownRight, Download, Calendar, Filter, PieChart, Landmark } from 'lucide-react';
import { cn } from '../../../utils/cn';

export default function CFODashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-emerald-50 rounded-lg">
              <Landmark className="w-5 h-5 text-emerald-600" />
            </div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em]">Financial Command Center</span>
          </div>
          <h1 className="text-4xl font-display font-bold mb-2">Global P&L Overview</h1>
          <p className="text-slate-500 text-lg">Real-time tracking of revenue, payouts, and financial compliance.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            This Month
          </button>
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Financial Deck
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Today's Revenue", value: '$42,850', change: '+12.5%', trend: 'up', icon: DollarSign, color: 'text-emerald-500' },
          { label: 'Pending Payouts', value: '$124,200', change: '420 Drivers', trend: 'neutral', icon: CreditCard, color: 'text-blue-500' },
          { label: 'Refund Requests', value: '18', change: '$1,240', trend: 'down', icon: RefreshCw, color: 'text-amber-500' },
          { label: 'Fraud Alerts', value: '04', change: 'High Risk', trend: 'up', icon: ShieldAlert, color: 'text-rose-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-slate-50 rounded-2xl">
                <stat.icon className={cn("w-6 h-6", stat.color)} />
              </div>
              {stat.trend !== 'neutral' && (
                <div className={cn(
                  "flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-lg",
                  stat.trend === 'up' ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                )}>
                  {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {stat.change}
                </div>
              )}
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-3xl font-display font-bold">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Revenue Chart */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-display font-bold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-500" />
                Revenue vs Payouts
              </h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-brand-200 bg-brand-50 text-brand-600 rounded-lg">Revenue</button>
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-slate-100 rounded-lg hover:bg-slate-50">Payouts</button>
              </div>
            </div>
            <div className="flex-grow flex items-center justify-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <p className="text-slate-400 font-mono text-xs uppercase tracking-widest">Financial Trend Chart Placeholder</p>
            </div>
          </div>

          {/* Transaction Logs Preview */}
          <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl font-display font-bold">Recent Transactions</h3>
              <button className="text-sm font-bold text-brand-600 hover:text-brand-700">View All Logs</button>
            </div>
            <div className="divide-y divide-slate-50">
              {[
                { id: 'TXN-8821', user: 'Rahul S.', amount: '$42.50', status: 'Success', method: 'UPI', time: '2m ago' },
                { id: 'TXN-8820', user: 'Priya G.', amount: '$12.00', status: 'Success', method: 'Wallet', time: '15m ago' },
                { id: 'TXN-8819', user: 'Amit K.', amount: '$85.00', status: 'Failed', method: 'Card', time: '1h ago' },
              ].map((txn, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                      <DollarSign className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{txn.user}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{txn.id} • {txn.method}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">{txn.amount}</p>
                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-widest",
                      txn.status === 'Success' ? "text-emerald-500" : "text-rose-500"
                    )}>{txn.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">Gateway Health</h4>
            <div className="space-y-6">
              {[
                { name: 'Razorpay', status: 'Healthy', uptime: '99.99%', latency: '42ms' },
                { name: 'Stripe', status: 'Healthy', uptime: '99.98%', latency: '58ms' },
                { name: 'PayU', status: 'Degraded', uptime: '98.50%', latency: '240ms' },
              ].map((gw, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-bold">{gw.name}</p>
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      gw.status === 'Healthy' ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" : "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]"
                    )} />
                  </div>
                  <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    <span>Uptime: {gw.uptime}</span>
                    <span>Lat: {gw.latency}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-4 bg-slate-900 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-colors">Manage Gateways</button>
          </div>

          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-brand-500" />
              Commission Breakdown
            </h4>
            <div className="aspect-square bg-slate-50 rounded-2xl border border-dashed border-slate-200 flex items-center justify-center">
              <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest text-center px-4">Commission Distribution Chart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { RefreshCw } from 'lucide-react';
