import { motion } from 'motion/react';
import { Shield, Zap, Users, Car, MapPin, TrendingUp, ShieldAlert, Cpu, Lock, Globe, Settings, Activity, Terminal, AlertTriangle, UserCheck } from 'lucide-react';
import { useAppSelector } from '../../../store/hooks';
import { cn } from '../../../utils/cn';

export default function SuperAdminDashboard() {
  const { user } = useAppSelector(state => state.auth);
  
  const stats = [
    { label: 'Total Revenue', value: '$12.4M', change: '+12.5%', trend: 'up', icon: Zap, color: 'text-brand-500' },
    { label: 'Active Riders', value: '842,000', change: '+8.2%', trend: 'up', icon: Users, color: 'text-blue-500' },
    { label: 'Active Drivers', value: '42,105', change: '-2.4%', trend: 'down', icon: Car, color: 'text-amber-500' },
    { label: 'System Health', value: '99.99%', change: 'Optimal', trend: 'up', icon: Cpu, color: 'text-emerald-500' },
  ];

  return (
    <div className="space-y-10">
      <div className="flex items-end justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-slate-950 rounded-lg">
              <Shield className="w-5 h-5 text-brand-400" />
            </div>
            <span className="text-xs font-bold text-slate-950 uppercase tracking-[0.2em]">Hands-On God Mode Access</span>
          </div>
          <h1 className="text-4xl font-display font-bold mb-2">Master Command Center</h1>
          <p className="text-slate-500 text-lg">Unrestricted access to every module, control, and platform entity.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            System Console
          </button>
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <Activity className="w-4 h-4" />
            Global Live View
          </button>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {[
          { label: 'Users', icon: Users, path: '/dashboard/users' },
          { label: 'Drivers', icon: Car, path: '/dashboard/drivers' },
          { label: 'Rides', icon: MapPin, path: '/dashboard/rides' },
          { label: 'Finance', icon: Zap, path: '/dashboard/finance' },
          { label: 'Config', icon: Settings, path: '/dashboard/config' },
          { label: 'DevOps', icon: Cpu, path: '/dashboard/devops' },
        ].map((item, i) => (
          <button key={i} className="p-6 bg-white border border-slate-200 rounded-[32px] hover:border-brand-500 hover:shadow-lg transition-all group flex flex-col items-center gap-3">
            <item.icon className="w-6 h-6 text-slate-400 group-hover:text-brand-600 transition-colors" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-950">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm"
          >
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
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Critical Alerts */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-display font-bold flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-rose-500" />
                Critical System Alerts
              </h3>
              <button className="text-sm font-bold text-brand-600 hover:text-brand-700">Acknowledge All</button>
            </div>
            <div className="space-y-4">
              {[
                { msg: 'P1 SOS Alert: Trip #84291 (Mumbai)', time: '2m ago', type: 'sos' },
                { msg: 'Fraud Pattern Detected: 12 accounts linked to IP 192.168.1.42', time: '15m ago', type: 'fraud' },
                { msg: 'API Gateway Latency Spike: 450ms in Singapore region', time: '24m ago', type: 'system' },
              ].map((alert, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between group cursor-pointer hover:bg-white hover:shadow-md transition-all">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center",
                      alert.type === 'sos' ? "bg-rose-100 text-rose-600" : 
                      alert.type === 'fraud' ? "bg-amber-100 text-amber-600" : "bg-blue-100 text-blue-600"
                    )}>
                      {alert.type === 'sos' ? <ShieldAlert className="w-6 h-6" /> : 
                       alert.type === 'fraud' ? <AlertTriangle className="w-6 h-6" /> : <Cpu className="w-6 h-6" />}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{alert.msg}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{alert.time}</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-slate-950 hover:text-white transition-colors">Take Action</button>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Admin Actions */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <Activity className="w-5 h-5 text-brand-500" />
              Global Audit Trail
            </h3>
            <div className="space-y-6">
              {[
                { admin: 'Rahul S.', role: 'CEO', action: 'Approved Refund', target: 'Ride #84291', time: '2m ago' },
                { admin: 'Priya G.', role: 'COO', action: 'Modified Surge', target: 'Mumbai Zone 4', time: '15m ago' },
                { admin: 'Amit K.', role: 'SuperAdmin', action: 'Banned User', target: 'USR-8821', time: '1h ago' },
              ].map((act, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                      <UserCheck className="w-5 h-5 text-slate-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{act.admin} <span className="text-slate-400 font-normal">({act.role})</span></p>
                      <p className="text-xs text-slate-500">{act.action} on {act.target}</p>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{act.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* System Health Bar */}
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-2xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">System Health</h4>
            <div className="space-y-6">
              {[
                { name: 'API Gateway', status: 'Healthy', val: 100 },
                { name: 'Database Cluster', status: 'Healthy', val: 100 },
                { name: 'Geo Engine', status: 'Warning', val: 85 },
                { name: 'Payment Bridge', status: 'Healthy', val: 100 },
              ].map((sys, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-bold">{sys.name}</p>
                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-widest",
                      sys.status === 'Healthy' ? "text-emerald-400" : "text-amber-400"
                    )}>{sys.status}</span>
                  </div>
                  <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${sys.val}%` }}
                      className={cn("h-full", sys.status === 'Healthy' ? "bg-emerald-500" : "bg-amber-500")}
                    />
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-4 bg-slate-900 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
              <Settings className="w-4 h-4" />
              Infrastructure Config
            </button>
          </div>

          {/* God Mode Controls */}
          <div className="bg-brand-50 border border-brand-100 p-8 rounded-[32px]">
            <h4 className="font-display font-bold text-brand-900 mb-4">God Mode Controls</h4>
            <div className="space-y-3">
              <button className="w-full py-3 bg-white border border-brand-200 text-brand-900 rounded-xl font-bold text-sm hover:bg-brand-100 transition-colors flex items-center justify-center gap-2">
                <Lock className="w-4 h-4" />
                Force System Logout
              </button>
              <button className="w-full py-3 bg-white border border-brand-200 text-brand-900 rounded-xl font-bold text-sm hover:bg-brand-100 transition-colors flex items-center justify-center gap-2">
                <ShieldAlert className="w-4 h-4" />
                Trigger Emergency Mode
              </button>
              <button className="w-full py-3 bg-white border border-brand-200 text-brand-900 rounded-xl font-bold text-sm hover:bg-brand-100 transition-colors flex items-center justify-center gap-2">
                <Globe className="w-4 h-4" />
                Maintenance Mode
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
