import { motion } from 'motion/react';
import { MapPin, Car, Users, ShieldAlert, Zap, Activity, Globe, RefreshCw, Layers, HardDrive, Clock, AlertTriangle } from 'lucide-react';
import { cn } from '../../../utils/cn';

export default function COODashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-brand-50 rounded-lg">
              <Activity className="w-5 h-5 text-brand-600" />
            </div>
            <span className="text-xs font-bold text-brand-600 uppercase tracking-[0.2em]">Operations Command Center</span>
          </div>
          <h1 className="text-4xl font-display font-bold mb-2">Global Operations</h1>
          <p className="text-slate-500 text-lg">Real-time monitoring of rides, drivers, and platform service levels.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Globe className="w-4 h-4" />
            City View
          </button>
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <ShieldAlert className="w-4 h-4" />
            SOS Monitor
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Active Rides', value: '12,420', change: '+8.2%', trend: 'up', icon: MapPin, color: 'text-brand-500' },
          { label: 'Drivers Online', value: '42,105', change: '-2.4%', trend: 'down', icon: Car, color: 'text-blue-500' },
          { label: 'SLA Compliance', value: '94.2%', change: '+1.5%', trend: 'up', icon: Activity, color: 'text-emerald-500' },
          { label: 'Cancellation Rate', value: '2.8%', change: '-0.5%', trend: 'down', icon: AlertTriangle, color: 'text-rose-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-slate-50 rounded-2xl">
                <stat.icon className={cn("w-6 h-6", stat.color)} />
              </div>
              <div className={cn(
                "flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-lg",
                stat.trend === 'up' ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
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
          {/* Live Operations Map */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm h-[500px] flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-display font-bold flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-500" />
                Supply-Demand Heatmap
              </h3>
              <div className="flex gap-2">
                {['All Cities', 'Mumbai', 'Bangalore', 'Delhi'].map(city => (
                  <button key={city} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-slate-100 rounded-lg hover:bg-slate-50">{city}</button>
                ))}
              </div>
            </div>
            <div className="flex-grow flex items-center justify-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/opsmap/1200/800')] bg-cover opacity-10 grayscale" />
              <p className="text-slate-400 font-mono text-xs uppercase tracking-widest relative z-10">Interactive Operations Map Placeholder</p>
            </div>
          </div>

          {/* SLA Scorecards */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <Activity className="w-5 h-5 text-emerald-500" />
              City SLA Performance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { city: 'Mumbai', pickup: '4.2m', cancel: '2.1%', rating: '4.8' },
                { city: 'Bangalore', pickup: '5.8m', cancel: '3.4%', rating: '4.6' },
                { city: 'Delhi', pickup: '6.1m', cancel: '4.2%', rating: '4.5' },
                { city: 'Hyderabad', pickup: '4.5m', cancel: '2.8%', rating: '4.7' },
              ].map((city, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex justify-between items-center mb-4">
                    <p className="font-bold text-slate-900">{city.city}</p>
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">On Target</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Pickup</p>
                      <p className="text-sm font-bold">{city.pickup}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Cancel</p>
                      <p className="text-sm font-bold">{city.cancel}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Rating</p>
                      <p className="text-sm font-bold">{city.rating}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* SOS Monitor */}
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-2xl flex flex-col">
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-500" />
              Active SOS Alerts
            </h3>
            <div className="space-y-6 flex-grow">
              {[
                { id: 'SOS-8821', city: 'Mumbai', time: '2m ago', driver: 'Rahul K.', user: 'Amit S.' },
                { id: 'SOS-8820', city: 'Bangalore', time: '15m ago', driver: 'Priya G.', user: 'Neha V.' },
              ].map((sos, i) => (
                <div key={i} className="p-4 bg-slate-900 rounded-2xl border border-slate-800 group cursor-pointer hover:border-rose-500 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-sm font-bold text-rose-400">{sos.id}</p>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{sos.time}</span>
                  </div>
                  <p className="text-xs font-medium text-slate-300 mb-2">{sos.city} • {sos.driver} (D) / {sos.user} (U)</p>
                  <button className="text-[10px] font-bold uppercase tracking-widest text-white bg-rose-600 px-3 py-1.5 rounded-lg w-full">Take Control</button>
                </div>
              ))}
            </div>
            <button className="mt-8 w-full py-4 bg-slate-900 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-colors">View All Safety Logs</button>
          </div>

          {/* Operational Reports */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-500" />
              Daily Ops Briefing
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Morning briefing for Feb 21st: Supply is up 12% in Mumbai, but cancellation rates are spiking in Delhi due to weather.
            </p>
            <button className="w-full py-3 bg-brand-600 text-white rounded-xl font-bold text-sm hover:bg-brand-700 transition-colors">
              Download Briefing PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
