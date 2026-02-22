import { motion } from 'motion/react';
import { Settings, Shield, Bell, Globe, Database, Lock, Cpu, Save, RefreshCw } from 'lucide-react';
import { cn } from '../../../utils/cn';

export default function ConfigModule() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Platform Config</h1>
          <p className="text-slate-500">Global system parameters, feature flags, and security rules.</p>
        </div>
        <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* General Settings */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <Settings className="w-5 h-5 text-slate-400" />
              Core Parameters
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Platform Commission (%)</label>
                  <input type="number" defaultValue="15" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Base Fare Multiplier</label>
                  <input type="number" defaultValue="1.2" step="0.1" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Surge Cap Multiplier</label>
                  <input type="number" defaultValue="3.5" step="0.5" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Min. Driver Rating</label>
                  <input type="number" defaultValue="4.2" step="0.1" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Feature Flags */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-brand-500" />
              Feature Control
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'AI Dispatch v2', enabled: true },
                { name: 'Crypto Payments', enabled: false },
                { name: 'Inter-city Rides', enabled: true },
                { name: 'Scheduled Bookings', enabled: true },
                { name: 'Dynamic Surge AI', enabled: true },
                { name: 'Driver Rewards Program', enabled: false },
              ].map((flag, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-700">{flag.name}</span>
                  <button className={cn(
                    "w-12 h-6 rounded-full transition-colors relative",
                    flag.enabled ? "bg-brand-500" : "bg-slate-300"
                  )}>
                    <div className={cn(
                      "absolute top-1 w-4 h-4 bg-white rounded-full transition-all",
                      flag.enabled ? "right-1" : "left-1"
                    )} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* System Status */}
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">System Health</h4>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Database className="w-4 h-4 text-brand-400" />
                  <span className="text-xs font-medium">Database Cluster</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Healthy</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-medium">Global CDN</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Healthy</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Lock className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-medium">Auth Gateway</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Healthy</span>
              </div>
              <button className="w-full mt-4 py-3 bg-slate-900 rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                <RefreshCw className="w-3 h-3" />
                Purge System Cache
              </button>
            </div>
          </div>

          {/* Maintenance Mode */}
          <div className="bg-rose-50 border border-rose-100 p-8 rounded-[32px]">
            <h4 className="font-display font-bold text-rose-900 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Danger Zone
            </h4>
            <p className="text-xs text-rose-700 mb-6 leading-relaxed">
              Enabling maintenance mode will disconnect all active users and drivers. Use with extreme caution.
            </p>
            <button className="w-full py-3 bg-rose-600 text-white rounded-xl font-bold text-sm hover:bg-rose-700 transition-colors">
              Enable Maintenance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
