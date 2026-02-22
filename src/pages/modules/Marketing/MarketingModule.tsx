import { motion } from 'motion/react';
import { Megaphone, Tag, Users, Mail, BarChart3, Plus, MoreVertical, Play, Pause } from 'lucide-react';
import { cn } from '../../../utils/cn';

const campaigns = [
  { id: 'CMP-001', name: 'Summer Surge Promo', type: 'Coupon', status: 'Active', reach: '1.2M', conversion: '8.4%' },
  { id: 'CMP-002', name: 'Driver Referral Bonus', type: 'Referral', status: 'Active', reach: '42K', conversion: '12.1%' },
  { id: 'CMP-003', name: 'New User Discount', type: 'Coupon', status: 'Paused', reach: '850K', conversion: '5.2%' },
  { id: 'CMP-004', name: 'Weekend Night Ride', type: 'Push', status: 'Active', reach: '2.4M', conversion: '15.8%' },
];

export default function MarketingModule() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Marketing Brain</h1>
          <p className="text-slate-500">Manage campaigns, coupons, and user engagement strategies.</p>
        </div>
        <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create Campaign
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Reach', value: '4.8M', icon: Users, color: 'text-blue-500' },
          { label: 'Avg. Conversion', value: '9.2%', icon: BarChart3, color: 'text-emerald-500' },
          { label: 'Active Coupons', value: '12', icon: Tag, color: 'text-amber-500' },
          { label: 'Sent Notifications', value: '18.4M', icon: Mail, color: 'text-brand-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <stat.icon className={cn("w-6 h-6 mb-4", stat.color)} />
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-3xl font-display font-bold">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-lg font-display font-bold">Active Campaigns</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Campaign</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Type</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Status</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Reach</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Conv.</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((camp, i) => (
                <motion.tr
                  key={camp.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group hover:bg-slate-50/50 transition-colors"
                >
                  <td className="p-6 border-b border-slate-50">
                    <p className="text-sm font-bold text-slate-900">{camp.name}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{camp.id}</p>
                  </td>
                  <td className="p-6 border-b border-slate-50">
                    <span className="text-xs font-medium text-slate-600">{camp.type}</span>
                  </td>
                  <td className="p-6 border-b border-slate-50">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      camp.status === 'Active' ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"
                    )}>
                      {camp.status}
                    </span>
                  </td>
                  <td className="p-6 border-b border-slate-50">
                    <span className="text-sm font-bold text-slate-700">{camp.reach}</span>
                  </td>
                  <td className="p-6 border-b border-slate-50">
                    <span className="text-sm font-bold text-slate-700">{camp.conversion}</span>
                  </td>
                  <td className="p-6 border-b border-slate-50 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-900">
                        {camp.status === 'Active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                      <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-900">
                        <MoreVertical className="w-4 h-4" />
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
