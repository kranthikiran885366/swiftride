import { motion } from 'motion/react';
import { CreditCard, ArrowUpRight, ArrowDownRight, DollarSign, Wallet, Receipt, Download, Filter, Search } from 'lucide-react';
import { cn } from '../../../utils/cn';

const transactions = [
  { id: 'TXN-4421', user: 'Alex Thompson', type: 'Ride Payment', amount: '$42.50', status: 'Success', date: '2m ago' },
  { id: 'TXN-4420', user: 'Robert Fox (Driver)', type: 'Payout', amount: '-$350.00', status: 'Pending', date: '15m ago' },
  { id: 'TXN-4419', user: 'Sarah Jenkins', type: 'Wallet Top-up', amount: '$100.00', status: 'Success', date: '1h ago' },
  { id: 'TXN-4418', user: 'Michael Chen', type: 'Ride Payment', amount: '$12.00', status: 'Failed', date: '3h ago' },
];

export default function FinanceModule() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Finance & Payouts</h1>
          <p className="text-slate-500">Manage transactions, driver settlements, and platform revenue.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Ledger
          </button>
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            Bulk Payout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Revenue', value: '$1.24M', change: '+12%', trend: 'up', icon: DollarSign },
          { label: 'Pending Payouts', value: '$42.5K', change: '-5%', trend: 'down', icon: Wallet },
          { label: 'Success Rate', value: '99.2%', change: '+0.4%', trend: 'up', icon: Receipt },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-slate-50 rounded-2xl text-slate-950">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={cn(
                "flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg",
                stat.trend === 'up' ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
              )}>
                {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.change}
              </div>
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-3xl font-display font-bold">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-lg font-display font-bold">Recent Transactions</h3>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-slate-50 rounded-lg border border-slate-100"><Search className="w-4 h-4 text-slate-400" /></button>
            <button className="p-2 hover:bg-slate-50 rounded-lg border border-slate-100"><Filter className="w-4 h-4 text-slate-400" /></button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Transaction ID</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">User</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Type</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Amount</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn, i) => (
                <motion.tr
                  key={txn.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group hover:bg-slate-50/50 transition-colors"
                >
                  <td className="p-6 border-b border-slate-50">
                    <span className="text-sm font-mono font-bold text-slate-900">{txn.id}</span>
                  </td>
                  <td className="p-6 border-b border-slate-50">
                    <span className="text-sm font-bold text-slate-900">{txn.user}</span>
                  </td>
                  <td className="p-6 border-b border-slate-50">
                    <span className="text-xs font-medium text-slate-600">{txn.type}</span>
                  </td>
                  <td className="p-6 border-b border-slate-50">
                    <span className={cn(
                      "text-sm font-mono font-bold",
                      txn.amount.startsWith('-') ? "text-rose-600" : "text-emerald-600"
                    )}>{txn.amount}</span>
                  </td>
                  <td className="p-6 border-b border-slate-50">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      txn.status === 'Success' ? "bg-emerald-50 text-emerald-600" : 
                      txn.status === 'Pending' ? "bg-amber-50 text-amber-600" : "bg-rose-50 text-rose-600"
                    )}>{txn.status}</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
