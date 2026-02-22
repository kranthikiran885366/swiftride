import { motion } from 'motion/react';
import { Globe, MapPin, TrendingUp, Users, Zap, Plus, Search, MoreVertical, Activity } from 'lucide-react';
import { cn } from '../../../utils/cn';

const cities = [
  { name: 'Mumbai', status: 'Active', rides: '42K', drivers: '12K', revenue: '$840K', growth: '+12%' },
  { name: 'New York', status: 'Active', rides: '120K', drivers: '35K', revenue: '$2.4M', growth: '+8%' },
  { name: 'London', status: 'Active', rides: '85K', drivers: '24K', revenue: '$1.8M', growth: '+15%' },
  { name: 'Chicago', status: 'Maintenance', rides: '0', drivers: '4K', revenue: '$0', growth: '0%' },
  { name: 'Singapore', status: 'Active', rides: '62K', drivers: '18K', revenue: '$1.2M', growth: '+22%' },
];

export default function CityManagementModule() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">City Management</h1>
          <p className="text-slate-500">Global network operations, city expansion, and local performance.</p>
        </div>
        <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Launch New City
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-lg font-display font-bold">Active Markets</h3>
            <div className="relative w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search cities..."
                className="w-full pl-12 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 outline-none"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">City</th>
                  <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Status</th>
                  <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 text-right">Revenue</th>
                  <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 text-right">Growth</th>
                  <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cities.map((city, i) => (
                  <motion.tr
                    key={city.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="p-6 border-b border-slate-50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                          <Globe className="w-4 h-4 text-slate-400" />
                        </div>
                        <span className="text-sm font-bold text-slate-900">{city.name}</span>
                      </div>
                    </td>
                    <td className="p-6 border-b border-slate-50">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                        city.status === 'Active' ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                      )}>{city.status}</span>
                    </td>
                    <td className="p-6 border-b border-slate-50 text-right">
                      <span className="text-sm font-mono font-bold text-slate-700">{city.revenue}</span>
                    </td>
                    <td className="p-6 border-b border-slate-50 text-right">
                      <span className="text-sm font-bold text-emerald-600">{city.growth}</span>
                    </td>
                    <td className="p-6 border-b border-slate-50 text-right">
                      <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-900 transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">Expansion Pipeline</h4>
            <div className="space-y-6">
              {[
                { city: 'Berlin', stage: 'Regulatory Approval', progress: 85 },
                { city: 'Tokyo', stage: 'Driver Recruitment', progress: 40 },
                { city: 'Dubai', stage: 'Market Analysis', progress: 20 },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span>{item.city}</span>
                    <span className="text-slate-500">{item.progress}%</span>
                  </div>
                  <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-500" style={{ width: `${item.progress}%` }} />
                  </div>
                  <p className="text-[10px] text-slate-500 mt-2 font-bold uppercase tracking-widest">{item.stage}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <Activity className="w-5 h-5 text-brand-500" />
              Global Heatmap
            </h4>
            <div className="aspect-square bg-slate-50 rounded-2xl border border-dashed border-slate-200 flex items-center justify-center">
              <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest text-center px-4">Interactive World Map Component Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
