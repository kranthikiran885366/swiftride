import { motion } from 'motion/react';
import { Search, Filter, CheckCircle2, Clock, MapPin, Star, ShieldCheck, MoreVertical } from 'lucide-react';
import { cn } from '../../../utils/cn';

const drivers = [
  { id: 'DRV-882', name: 'Robert Fox', vehicle: 'Toyota Prius (White)', status: 'Active', kyc: 'Approved', rating: 4.9, location: 'Downtown' },
  { id: 'DRV-412', name: 'Jane Cooper', vehicle: 'Honda Civic (Black)', status: 'Pending', kyc: 'Reviewing', rating: 0.0, location: 'Airport' },
  { id: 'DRV-109', name: 'Cody Fisher', vehicle: 'Tesla Model 3 (Red)', status: 'Active', kyc: 'Approved', rating: 4.8, location: 'North Side' },
  { id: 'DRV-773', name: 'Esther Howard', vehicle: 'Hyundai Ioniq (Blue)', status: 'Suspended', kyc: 'Approved', rating: 4.2, location: 'West End' },
  { id: 'DRV-221', name: 'Guy Hawkins', vehicle: 'Ford Fusion (Silver)', status: 'Active', kyc: 'Approved', rating: 4.7, location: 'South Side' },
];

export default function DriverManagementModule() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Driver Operations</h1>
          <p className="text-slate-500">Monitor fleet activity, KYC approvals, and performance metrics.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors">Onboarding Queue</button>
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            KYC Approvals
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, vehicle or ID..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 outline-none"
            />
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-50">
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Driver</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Vehicle</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">KYC Status</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Rating</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {drivers.map((driver, i) => (
                <motion.tr
                  key={driver.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group hover:bg-slate-50/50 transition-colors"
                >
                  <td className="p-6 border-b border-slate-50">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400">
                        {driver.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{driver.name}</p>
                        <p className="text-xs text-slate-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {driver.location}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 border-b border-slate-50">
                    <p className="text-sm text-slate-700">{driver.vehicle}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{driver.id}</p>
                  </td>
                  <td className="p-6 border-b border-slate-50">
                    <div className="flex items-center gap-2">
                      {driver.kyc === 'Approved' ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <Clock className="w-4 h-4 text-amber-500" />
                      )}
                      <span className="text-sm font-medium text-slate-700">{driver.kyc}</span>
                    </div>
                  </td>
                  <td className="p-6 border-b border-slate-50">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                      <span className="text-sm font-bold text-slate-700">{driver.rating}</span>
                    </div>
                  </td>
                  <td className="p-6 border-b border-slate-50 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="px-3 py-1.5 bg-slate-950 text-white rounded-lg text-xs font-bold hover:bg-brand-600 transition-colors">Manage</button>
                      <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-900 transition-colors">
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
