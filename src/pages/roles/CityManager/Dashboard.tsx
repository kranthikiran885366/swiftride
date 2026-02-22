import { motion } from 'motion/react';
import { MapPin, Car, Activity, ShieldAlert, Zap, Globe, RefreshCw, Clock, AlertTriangle, Users, TrendingUp, DollarSign } from 'lucide-react';
import { cn } from '../../../utils/cn';

export default function CityManagerDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-brand-50 rounded-lg">
              <Globe className="w-5 h-5 text-brand-600" />
            </div>
            <span className="text-xs font-bold text-brand-600 uppercase tracking-[0.2em]">City Operations: Bangalore</span>
          </div>
          <h1 className="text-4xl font-display font-bold mb-2">Bangalore Overview</h1>
          <p className="text-slate-500 text-lg">Manage local supply, monitor city-specific KPIs, and resolve local disputes.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            City Report
          </button>
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Local Incentive
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Today's Rides", value: '4,250', change: '+8.2%', trend: 'up', icon: MapPin, color: 'text-brand-500' },
          { label: "Today's Revenue", value: '$12.4K', change: '+12%', trend: 'up', icon: DollarSign, color: 'text-emerald-500' },
          { label: 'Active Drivers', value: '1,105', change: '92% Online', trend: 'neutral', icon: Car, color: 'text-blue-500' },
          { label: 'SLA Status', value: '96.4%', change: 'On Target', trend: 'up', icon: Activity, color: 'text-emerald-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-slate-50 rounded-2xl">
                <stat.icon className={cn("w-6 h-6", stat.color)} />
              </div>
              <div className={cn(
                "flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-lg",
                stat.trend === 'up' ? "bg-emerald-50 text-emerald-600" : "bg-slate-50 text-slate-600"
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
          {/* City Map */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm h-[500px] flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-display font-bold flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-500" />
                Bangalore Supply Map
              </h3>
              <div className="flex gap-2">
                {['All Zones', 'Indiranagar', 'Koramangala', 'Whitefield'].map(zone => (
                  <button key={zone} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-slate-100 rounded-lg hover:bg-slate-50">{zone}</button>
                ))}
              </div>
            </div>
            <div className="flex-grow flex items-center justify-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/bangalore/1200/800')] bg-cover opacity-10 grayscale" />
              <p className="text-slate-400 font-mono text-xs uppercase tracking-widest relative z-10">Local City Map Placeholder</p>
            </div>
          </div>

          {/* Local Driver Performance */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500" />
              Top Local Drivers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'Rajesh K.', rides: 24, rating: 4.9, status: 'Active' },
                { name: 'Suresh M.', rides: 21, rating: 4.8, status: 'Active' },
                { name: 'Amit P.', rides: 18, rating: 4.9, status: 'Active' },
              ].map((dr, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-sm font-bold text-slate-900 mb-1">{dr.name}</p>
                  <p className="text-xs text-slate-500 mb-3">{dr.rides} Rides Today</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-emerald-600">{dr.rating} ★</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{dr.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Zone Health */}
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">Zone Health</h4>
            <div className="space-y-6">
              {[
                { zone: 'Indiranagar', status: 'Healthy', supply: 'High' },
                { zone: 'Whitefield', status: 'Warning', supply: 'Low' },
                { zone: 'Koramangala', status: 'Healthy', supply: 'Medium' },
                { zone: 'HSR Layout', status: 'Critical', supply: 'Very Low' },
              ].map((z, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold">{z.zone}</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Supply: {z.supply}</p>
                  </div>
                  <div className={cn(
                    "w-2 h-2 rounded-full",
                    z.status === 'Healthy' ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" : 
                    z.status === 'Warning' ? "bg-amber-500" : "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.4)]"
                  )} />
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-4 bg-slate-900 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-colors">Adjust Zone Surge</button>
          </div>

          {/* Local Alerts */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              Local Alerts
            </h4>
            <div className="space-y-4">
              {[
                { msg: 'Traffic spike on MG Road', time: '5m ago' },
                { msg: 'Driver protest in Zone 4', time: '1h ago' },
                { msg: 'New driver onboarding batch ready', time: '2h ago' },
              ].map((alert, i) => (
                <div key={i} className="flex justify-between items-start gap-4">
                  <p className="text-sm text-slate-700">{alert.msg}</p>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest shrink-0">{alert.time}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 bg-slate-50 rounded-xl font-bold text-sm text-slate-600 hover:bg-slate-100 transition-colors">
              View All Local Alerts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
