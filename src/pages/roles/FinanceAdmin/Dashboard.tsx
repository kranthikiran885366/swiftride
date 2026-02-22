import { motion } from 'motion/react';
import { CreditCard, DollarSign, RefreshCw, ShieldAlert, Zap, Search, Filter, Download, Landmark, Wallet, AlertTriangle } from 'lucide-react';
import { cn } from '../../../utils/cn';

export default function FinanceAdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-emerald-50 rounded-lg">
              <CreditCard className="w-5 h-5 text-emerald-600" />
            </div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em]">Financial Operations</span>
          </div>
          <h1 className="text-4xl font-display font-bold mb-2">Finance Dashboard</h1>
          <p className="text-slate-500 text-lg">Manage transactions, process refunds, and monitor payout batches.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Daily Snapshot
          </button>
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Initiate Payout Run
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Today's Revenue", value: '$42,850', change: 'Live', trend: 'up', icon: DollarSign, color: 'text-emerald-500' },
          { label: 'Pending Refunds', value: '12', change: '$840.00', trend: 'neutral', icon: RefreshCw, color: 'text-amber-500' },
          { label: 'Payout Batch', value: 'Ready', change: '420 Drivers', trend: 'up', icon: Landmark, color: 'text-blue-500' },
          { label: 'Fraud Alerts', value: '03', change: 'Investigate', trend: 'up', icon: ShieldAlert, color: 'text-rose-500' },
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
          {/* Transaction Logs */}
          <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl font-display font-bold">Recent Transactions</h3>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400" />
                  <input type="text" placeholder="Search TXN..." className="pl-8 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs outline-none focus:ring-1 focus:ring-brand-500" />
                </div>
                <button className="p-1.5 hover:bg-slate-50 rounded-lg border border-slate-200"><Filter className="w-4 h-4 text-slate-400" /></button>
              </div>
            </div>
            <div className="divide-y divide-slate-50">
              {[
                { id: 'TXN-8821', user: 'Rahul S.', amount: '$42.50', status: 'Success', method: 'UPI', time: '2m ago' },
                { id: 'TXN-8820', user: 'Priya G.', amount: '$12.00', status: 'Success', method: 'Wallet', time: '15m ago' },
                { id: 'TXN-8819', user: 'Amit K.', amount: '$85.00', status: 'Failed', method: 'Card', time: '1h ago' },
                { id: 'TXN-8818', user: 'Suresh M.', amount: '$24.00', status: 'Success', method: 'Cash', time: '2h ago' },
              ].map((txn, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                      <DollarSign className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{txn.user}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{txn.id} • {txn.method}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-sm font-bold text-slate-900">{txn.amount}</p>
                      <span className={cn(
                        "text-[10px] font-bold uppercase tracking-widest",
                        txn.status === 'Success' ? "text-emerald-500" : "text-rose-500"
                      )}>{txn.status}</span>
                    </div>
                    <button className="p-2 hover:bg-white rounded-lg border border-slate-200 text-slate-400 hover:text-slate-950 transition-colors opacity-0 group-hover:opacity-100">
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Refund Queue Preview */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-display font-bold flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-amber-500" />
                Refund Queue
              </h3>
              <button className="text-sm font-bold text-brand-600 hover:text-brand-700">Process All</button>
            </div>
            <div className="space-y-4">
              {[
                { id: 'REF-001', user: 'Amit S.', amount: '$12.50', reason: 'Driver No-Show', time: '12m ago' },
                { id: 'REF-002', user: 'Neha V.', amount: '$4.00', reason: 'Overcharged', time: '45m ago' },
              ].map((ref, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-slate-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{ref.user} - {ref.amount}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{ref.reason} • {ref.time}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-rose-50 hover:text-rose-600 transition-colors text-slate-400">Reject</button>
                    <button className="px-3 py-1.5 bg-slate-950 text-white rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-brand-600 transition-colors">Approve</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Wallet Management */}
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">Wallet Management</h4>
            <div className="space-y-6">
              {[
                { label: 'Total Wallet Balance', value: '$842K', icon: Wallet },
                { label: 'Credits Loaded (24h)', value: '$12.4K', icon: Zap },
                { label: 'Unusual Activity', value: '02 Alerts', icon: ShieldAlert },
              ].map((w, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <w.icon className="w-4 h-4 text-slate-500" />
                    <span className="text-sm font-medium text-slate-300">{w.label}</span>
                  </div>
                  <p className="text-sm font-bold">{w.value}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-4 bg-slate-900 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-colors">Adjust User Credits</button>
          </div>

          {/* Failed Payments Monitor */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-500" />
              Failed Payments (Alert)
            </h4>
            <div className="space-y-4">
              {[
                { code: 'ERR_402', count: 12, reason: 'Insufficient Funds' },
                { code: 'GATEWAY_TIMEOUT', count: 5, reason: 'Razorpay Latency' },
                { code: 'FRAUD_BLOCK', count: 2, reason: 'Suspicious Pattern' },
              ].map((err, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-900">{err.code}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{err.reason}</p>
                  </div>
                  <span className="px-2 py-1 bg-rose-50 text-rose-600 rounded text-[10px] font-bold">{err.count}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 bg-slate-50 rounded-xl font-bold text-sm text-slate-600 hover:bg-slate-100 transition-colors">
              Investigate Failures
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
