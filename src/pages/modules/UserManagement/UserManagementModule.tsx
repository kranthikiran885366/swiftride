import { motion } from 'motion/react';
import { Search, Filter, MoreVertical, Shield, Ban, Wallet, Eye } from 'lucide-react';
import { cn } from '../../../utils/cn';

const users = [
  { id: 'USR-001', name: 'Alex Thompson', email: 'alex.t@example.com', status: 'Active', wallet: '$124.50', joined: '2023-10-12' },
  { id: 'USR-002', name: 'Sarah Jenkins', email: 's.jenkins@gmail.com', status: 'Banned', wallet: '$0.00', joined: '2023-11-05' },
  { id: 'USR-003', name: 'Michael Chen', email: 'mchen88@outlook.com', status: 'Active', wallet: '$45.20', joined: '2023-12-01' },
  { id: 'USR-004', name: 'Elena Rodriguez', email: 'elena.rod@company.com', status: 'Active', wallet: '$210.00', joined: '2024-01-15' },
  { id: 'USR-005', name: 'David Wilson', email: 'dwilson@tech.io', status: 'Active', wallet: '$12.00', joined: '2024-02-10' },
];

export default function UserManagementModule() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">User Management</h1>
          <p className="text-slate-500">Manage platform riders, account status, and wallet balances.</p>
        </div>
        <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
          <Shield className="w-4 h-4" />
          Security Audit
        </button>
      </div>

      <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, email or ID..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 outline-none"
            />
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex-grow md:flex-grow-0 px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-50">
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <button className="flex-grow md:flex-grow-0 px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-50">Export CSV</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">User</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Status</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Wallet</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Joined</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group hover:bg-slate-50/50 transition-colors"
                >
                  <td className="p-6 border-b border-slate-50">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{user.name}</p>
                        <p className="text-xs text-slate-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 border-b border-slate-50">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      user.status === 'Active' ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                    )}>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-6 border-b border-slate-50">
                    <span className="text-sm font-mono font-bold text-slate-700">{user.wallet}</span>
                  </td>
                  <td className="p-6 border-b border-slate-50">
                    <span className="text-sm text-slate-500">{user.joined}</span>
                  </td>
                  <td className="p-6 border-b border-slate-50 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-900 transition-colors" title="View Profile">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-brand-600 transition-colors" title="Edit Wallet">
                        <Wallet className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-rose-50 rounded-lg text-slate-400 hover:text-rose-600 transition-colors" title="Ban User">
                        <Ban className="w-4 h-4" />
                      </button>
                    </div>
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
