import { motion } from 'motion/react';
import { MapPin, Clock, User, Car, CheckCircle2, AlertCircle, Search, Filter, MoreVertical } from 'lucide-react';
import { cn } from '../../../utils/cn';

const rides = [
  { id: 'RID-9921', rider: 'Alex Thompson', driver: 'Robert Fox', status: 'In Progress', pickup: 'Downtown', destination: 'Airport', fare: '$42.50' },
  { id: 'RID-9920', rider: 'Sarah Jenkins', driver: 'Jane Cooper', status: 'Completed', pickup: 'North Side', destination: 'West End', fare: '$18.20' },
  { id: 'RID-9919', rider: 'Michael Chen', driver: 'Cody Fisher', status: 'Completed', pickup: 'South Side', destination: 'Downtown', fare: '$12.00' },
  { id: 'RID-9918', rider: 'Elena Rodriguez', driver: 'Esther Howard', status: 'Cancelled', pickup: 'Airport', destination: 'East Side', fare: '$0.00' },
];

export default function RideManagementModule() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Ride Control</h1>
          <p className="text-slate-500">Live monitoring of all active trips and historical data.</p>
        </div>
        <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
          <Activity className="w-4 h-4" />
          Live Map View
        </button>
      </div>

      <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by ride ID, rider or driver..."
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
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Ride ID</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Rider / Driver</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Status</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Route</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 text-right">Fare</th>
              </tr>
            </thead>
            <tbody>
              {rides.map((ride, i) => (
                <motion.tr
                  key={ride.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group hover:bg-slate-50/50 transition-colors"
                >
                  <td className="p-6 border-b border-slate-50">
                    <span className="text-sm font-mono font-bold text-slate-900">{ride.id}</span>
                  </td>
                  <td className="p-6 border-b border-slate-50">
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        <User className="w-3 h-3 text-slate-400" /> {ride.rider}
                      </p>
                      <p className="text-xs text-slate-500 flex items-center gap-2">
                        <Car className="w-3 h-3 text-slate-400" /> {ride.driver}
                      </p>
                    </div>
                  </td>
                  <td className="p-6 border-b border-slate-50">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      ride.status === 'In Progress' ? "bg-blue-50 text-blue-600" : 
                      ride.status === 'Completed' ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                    )}>
                      {ride.status}
                    </span>
                  </td>
                  <td className="p-6 border-b border-slate-50">
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="font-medium">{ride.pickup}</span>
                      <span className="text-slate-300">→</span>
                      <span className="font-medium">{ride.destination}</span>
                    </div>
                  </td>
                  <td className="p-6 border-b border-slate-50 text-right">
                    <span className="text-sm font-mono font-bold text-slate-900">{ride.fare}</span>
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
