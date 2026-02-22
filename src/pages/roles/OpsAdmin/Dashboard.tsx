import { motion } from 'motion/react';
import { MapPin, Car, Activity, ShieldAlert, Zap, Globe, RefreshCw, Clock, AlertTriangle, Users } from 'lucide-react';
import { cn } from '../../../utils/cn';

export default function OpsAdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Activity className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em]">Day-to-Day Operations</span>
          </div>
          <h1 className="text-4xl font-display font-bold mb-2">Operations Dashboard</h1>
          <p className="text-slate-500 text-lg">Real-time supply management and incident resolution for your assigned region.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Zone View
          </button>
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Push Repositioning
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Active Rides', value: '1,240', change: '+12%', trend: 'up', icon: MapPin, color: 'text-brand-500' },
          { label: 'Drivers Online', value: '4,105', change: '85% Active', trend: 'neutral', icon: Car, color: 'text-blue-500' },
          { label: 'SLA Breach Risk', value: '08', change: 'High Priority', trend: 'up', icon: AlertTriangle, color: 'text-amber-500' },
          { label: 'Cancellation Rate', value: '2.4%', change: '-0.2%', trend: 'down', icon: Activity, color: 'text-rose-500' },
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
          {/* Live Ride Board */}
          <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl font-display font-bold">Live Ride Board</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-brand-200 bg-brand-50 text-brand-600 rounded-lg">Active</button>
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-slate-100 rounded-lg hover:bg-slate-50">Stuck</button>
              </div>
            </div>
            <div className="divide-y divide-slate-50">
              {[
                { id: 'RD-8821', user: 'Rahul S.', driver: 'Amit K.', status: 'En Route', eta: '4m', risk: 'Low' },
                { id: 'RD-8820', user: 'Priya G.', driver: 'Neha V.', status: 'Pickup', eta: '12m', risk: 'High' },
                { id: 'RD-8819', user: 'Suresh M.', driver: 'Raj P.', status: 'En Route', eta: '8m', risk: 'Medium' },
              ].map((ride, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{ride.user} → {ride.driver}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{ride.id} • {ride.status}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">ETA</p>
                      <p className="text-sm font-bold">{ride.eta}</p>
                    </div>
                    <div className="text-right w-20">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Risk</p>
                      <span className={cn(
                        "text-[10px] font-bold uppercase tracking-widest",
                        ride.risk === 'High' ? "text-rose-500" : 
                        ride.risk === 'Medium' ? "text-amber-500" : "text-emerald-500"
                      )}>{ride.risk}</span>
                    </div>
                    <button className="p-2 hover:bg-white rounded-lg border border-slate-200 text-slate-400 hover:text-slate-950 transition-colors opacity-0 group-hover:opacity-100">
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dispute Management Preview */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-display font-bold flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                Pending Disputes
              </h3>
              <button className="text-sm font-bold text-brand-600 hover:text-brand-700">Resolve All</button>
            </div>
            <div className="space-y-4">
              {[
                { id: 'DSP-001', type: 'Fare Dispute', user: 'Amit S.', time: '12m left', sla: 'Critical' },
                { id: 'DSP-002', type: 'Route Deviation', user: 'Neha V.', time: '45m left', sla: 'Normal' },
              ].map((dsp, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                      <Activity className="w-5 h-5 text-slate-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{dsp.type} - {dsp.user}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{dsp.id} • {dsp.time}</p>
                    </div>
                  </div>
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                    dsp.sla === 'Critical' ? "bg-rose-50 text-rose-600" : "bg-blue-50 text-blue-600"
                  )}>{dsp.sla}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Surge Zone Control */}
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">Active Surge Zones</h4>
            <div className="space-y-6">
              {[
                { zone: 'Mumbai North', multiplier: '1.8x', demand: 'High', supply: 'Low' },
                { zone: 'Airport Hub', multiplier: '2.4x', demand: 'Critical', supply: 'Very Low' },
                { zone: 'Downtown', multiplier: '1.2x', demand: 'Normal', supply: 'Normal' },
              ].map((sz, i) => (
                <div key={i} className="p-4 bg-slate-900 rounded-2xl border border-slate-800">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-bold">{sz.zone}</p>
                    <span className="text-brand-400 font-display font-bold">{sz.multiplier}</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    <span>D: {sz.demand}</span>
                    <span>S: {sz.supply}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-4 bg-slate-900 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-colors">Adjust Surge Rules</button>
          </div>

          {/* Driver Performance */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-brand-500" />
              Low Performers (Alert)
            </h4>
            <div className="space-y-4">
              {[
                { name: 'Rajesh K.', rating: '3.2', reason: 'High Cancellation' },
                { name: 'Suresh M.', rating: '3.5', reason: 'Route Deviation' },
              ].map((dr, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-900">{dr.name}</p>
                    <p className="text-[10px] text-rose-500 font-bold uppercase tracking-widest">{dr.reason}</p>
                  </div>
                  <span className="text-sm font-bold text-slate-900">{dr.rating} ★</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 bg-slate-50 rounded-xl font-bold text-sm text-slate-600 hover:bg-slate-100 transition-colors">
              Initiate Warning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
