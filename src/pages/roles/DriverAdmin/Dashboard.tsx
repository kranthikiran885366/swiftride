import { motion } from 'motion/react';
import { Car, ShieldCheck, UserCheck, ShieldAlert, Zap, Search, Filter, Download, Clock, AlertTriangle, FileText, UserPlus } from 'lucide-react';
import { cn } from '../../../utils/cn';

export default function DriverAdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Car className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em]">Driver Lifecycle Management</span>
          </div>
          <h1 className="text-4xl font-display font-bold mb-2">Driver Operations</h1>
          <p className="text-slate-500 text-lg">Manage KYC onboarding, monitor driver performance, and handle suspensions.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
            <UserPlus className="w-4 h-4" />
            Manual Onboard
          </button>
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            Process KYC Queue
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Pending KYC', value: '124', change: '15 New', trend: 'up', icon: FileText, color: 'text-blue-500' },
          { label: 'Active Drivers', value: '42.1K', change: '+8.2%', trend: 'up', icon: UserCheck, color: 'text-emerald-500' },
          { label: 'Suspension Alerts', value: '08', change: 'Immediate', trend: 'up', icon: ShieldAlert, color: 'text-rose-500' },
          { label: 'Doc Expiry (30d)', value: '420', change: 'Action Req', trend: 'neutral', icon: Clock, color: 'text-amber-500' },
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
          {/* KYC Queue */}
          <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl font-display font-bold">KYC Onboarding Queue</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-brand-200 bg-brand-50 text-brand-600 rounded-lg">New</button>
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-slate-100 rounded-lg hover:bg-slate-50">Resubmitted</button>
              </div>
            </div>
            <div className="divide-y divide-slate-50">
              {[
                { id: 'KYC-8821', name: 'Rahul S.', city: 'Mumbai', vehicle: 'Swift Dzire', status: 'Pending', time: '2m ago' },
                { id: 'KYC-8820', name: 'Priya G.', city: 'Bangalore', vehicle: 'Honda Amaze', status: 'Under Review', time: '15m ago' },
                { id: 'KYC-8819', name: 'Amit K.', city: 'Delhi', vehicle: 'Toyota Etios', status: 'Pending', time: '1h ago' },
              ].map((kyc, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{kyc.name} • {kyc.city}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{kyc.id} • {kyc.vehicle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                      <span className={cn(
                        "text-[10px] font-bold uppercase tracking-widest",
                        kyc.status === 'Under Review' ? "text-amber-500" : "text-blue-500"
                      )}>{kyc.status}</span>
                    </div>
                    <button className="px-4 py-2 bg-slate-950 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-brand-600 transition-colors">Verify Docs</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Suspension Manager Preview */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-display font-bold flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-rose-500" />
                Active Suspensions
              </h3>
              <button className="text-sm font-bold text-brand-600 hover:text-brand-700">View All</button>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Rajesh K.', reason: 'Fake GPS Detected', duration: '7 Days', status: 'Appealed' },
                { name: 'Suresh M.', reason: 'Safety Violation', duration: 'Permanent', status: 'Active' },
              ].map((susp, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-rose-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{susp.name} - {susp.duration}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{susp.reason}</p>
                    </div>
                  </div>
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                    susp.status === 'Appealed' ? "bg-amber-50 text-amber-600" : "bg-rose-50 text-rose-600"
                  )}>{susp.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Document Expiry Tracker */}
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">Document Expiry</h4>
            <div className="space-y-6">
              {[
                { type: 'Driving License', count: 12, risk: 'High' },
                { type: 'Vehicle Insurance', count: 45, risk: 'Medium' },
                { type: 'Commercial Permit', count: 8, risk: 'Critical' },
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold">{doc.type}</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{doc.count} Expiring Soon</p>
                  </div>
                  <div className={cn(
                    "w-2 h-2 rounded-full",
                    doc.risk === 'Critical' ? "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.4)]" : 
                    doc.risk === 'High' ? "bg-amber-500" : "bg-blue-500"
                  )} />
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-4 bg-slate-900 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-colors">Send Reminders</button>
          </div>

          {/* Driver Performance Reports */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-brand-500" />
              Performance Alerts
            </h4>
            <div className="space-y-4">
              {[
                { name: 'Amit P.', metric: 'Acceptance Rate', val: '42%', alert: 'Low' },
                { name: 'Neha V.', metric: 'Cancellation', val: '18%', alert: 'High' },
              ].map((perf, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-900">{perf.name}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{perf.metric}</p>
                  </div>
                  <span className="text-sm font-bold text-rose-600">{perf.val}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 bg-slate-50 rounded-xl font-bold text-sm text-slate-600 hover:bg-slate-100 transition-colors">
              Download Performance Audit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
