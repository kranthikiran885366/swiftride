import { motion } from 'motion/react';
import { Car, MapPin, Activity, ShieldAlert, Zap, Globe, RefreshCw, Clock, AlertTriangle, Users, TrendingUp } from 'lucide-react';
import { cn } from '../../../../utils/cn';

export default function Operations() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Operations Command</h1>
          <p className="text-slate-500 text-lg">Global supply-demand balance and operational efficiency metrics.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Operational Review
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Fleet', value: '42,105', change: '+2.4%', trend: 'up', icon: Car, color: 'text-brand-500' },
          { label: 'Active Rides', value: '12,405', change: '+8.2%', trend: 'up', icon: MapPin, color: 'text-blue-500' },
          { label: 'Avg. Pickup', value: '4.2m', change: '-12s', trend: 'down', icon: Clock, color: 'text-emerald-500' },
          { label: 'SLA Breach', value: '0.4%', change: 'Stable', trend: 'neutral', icon: ShieldAlert, color: 'text-rose-500' },
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
          {/* Supply-Demand Heatmap */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-display font-bold flex items-center gap-2">
                <Globe className="w-5 h-5 text-brand-500" />
                Global Supply-Demand Balance
              </h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-brand-200 bg-brand-50 text-brand-600 rounded-lg">Real-time</button>
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-slate-100 rounded-lg hover:bg-slate-50">Historical</button>
              </div>
            </div>
            <div className="flex-grow flex items-center justify-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <p className="text-slate-400 font-mono text-xs uppercase tracking-widest">Global Operations Heatmap Placeholder</p>
            </div>
          </div>

          {/* Regional Efficiency */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              Regional Efficiency Scorecard
            </h3>
            <div className="space-y-6">
              {[
                { region: 'Mumbai', efficiency: '94%', drivers: '12.4K', status: 'Optimal' },
                { region: 'Bangalore', efficiency: '88%', drivers: '10.2K', status: 'Healthy' },
                { region: 'Delhi', efficiency: '72%', drivers: '8.4K', status: 'Warning' },
              ].map((r, i) => (
                <div key={i} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{r.region}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{r.drivers} Drivers</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">{r.efficiency}</p>
                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-widest",
                      r.status === 'Optimal' ? "text-emerald-500" : 
                      r.status === 'Healthy' ? "text-blue-500" : "text-amber-500"
                    )}>{r.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* SOS Monitor */}
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">SOS Monitor</h4>
            <div className="space-y-6">
              {[
                { id: 'SOS-8821', city: 'Mumbai', time: '2m ago', status: 'Active' },
                { id: 'SOS-8820', city: 'Delhi', time: '15m ago', status: 'Resolved' },
              ].map((sos, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold">{sos.id} • {sos.city}</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{sos.time}</p>
                  </div>
                  <div className={cn(
                    "w-2 h-2 rounded-full",
                    sos.status === 'Active' ? "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.4)]" : "bg-emerald-500"
                  )} />
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-4 bg-slate-900 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-colors">Emergency Command</button>
          </div>

          {/* Fleet Health */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <Car className="w-5 h-5 text-brand-500" />
              Fleet Health
            </h4>
            <div className="space-y-4">
              {[
                { type: 'Sedan', count: '12.4K', health: '98%' },
                { type: 'SUV', count: '8.2K', health: '96%' },
                { type: 'Auto', count: '15.4K', health: '92%' },
                { type: 'Bike', count: '6.1K', health: '99%' },
              ].map((f, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600">{f.type}</span>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">{f.count}</p>
                    <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">{f.health} Health</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
