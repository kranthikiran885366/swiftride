import { motion } from 'motion/react';
import { FileText, MessageSquare, Phone, ShieldAlert, Zap, Search, Filter, Download, UserCheck, Clock, Star, AlertTriangle } from 'lucide-react';
import { cn } from '../../../utils/cn';

export default function SupportAdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-50 rounded-lg">
              <MessageSquare className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em]">Customer Support Command</span>
          </div>
          <h1 className="text-4xl font-display font-bold mb-2">Support Dashboard</h1>
          <p className="text-slate-500 text-lg">Monitor ticket queues, agent performance, and customer satisfaction.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Daily Brief
          </button>
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <UserCheck className="w-4 h-4" />
            Assign Tickets
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Open Tickets', value: '47', change: '06 Overdue', trend: 'up', icon: FileText, color: 'text-blue-500' },
          { label: 'Avg. Resolution', value: '18m', change: '-2m today', trend: 'down', icon: Clock, color: 'text-emerald-500' },
          { label: 'CSAT Score', value: '4.8', change: '+0.2', trend: 'up', icon: Star, color: 'text-amber-500' },
          { label: 'SLA Breaches', value: '02', change: 'Immediate Action', trend: 'up', icon: ShieldAlert, color: 'text-rose-500' },
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
          {/* Ticket Queue */}
          <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl font-display font-bold">Priority Ticket Queue</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-rose-200 bg-rose-50 text-rose-600 rounded-lg">Critical</button>
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-slate-100 rounded-lg hover:bg-slate-50">All</button>
              </div>
            </div>
            <div className="divide-y divide-slate-50">
              {[
                { id: 'TKT-8821', user: 'Rahul S.', type: 'Fare Dispute', priority: 'High', status: 'Open', time: '2m ago' },
                { id: 'TKT-8820', user: 'Priya G.', type: 'Safety Concern', priority: 'Critical', status: 'In Progress', time: '15m ago' },
                { id: 'TKT-8819', user: 'Amit K.', type: 'App Issue', priority: 'Medium', status: 'Open', time: '1h ago' },
                { id: 'TKT-8818', user: 'Suresh M.', type: 'Payment Failed', priority: 'High', status: 'Open', time: '2h ago' },
              ].map((tkt, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center",
                      tkt.priority === 'Critical' ? "bg-rose-100 text-rose-600" : "bg-slate-100 text-slate-400"
                    )}>
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{tkt.type} - {tkt.user}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{tkt.id} • {tkt.status}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Priority</p>
                      <span className={cn(
                        "text-[10px] font-bold uppercase tracking-widest",
                        tkt.priority === 'Critical' ? "text-rose-500" : 
                        tkt.priority === 'High' ? "text-amber-500" : "text-emerald-500"
                      )}>{tkt.priority}</span>
                    </div>
                    <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-slate-950 hover:text-white transition-colors">Resolve</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Live Chat Monitor */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-display font-bold flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-brand-500" />
                Active Chats
              </h3>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold uppercase tracking-wider">12 Agents Online</span>
            </div>
            <div className="space-y-4">
              {[
                { user: 'Amit S.', agent: 'Bot', wait: '12s', status: 'Waiting' },
                { user: 'Neha V.', agent: 'Sarah K.', wait: '2m', status: 'Active' },
              ].map((chat, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                      <UserCheck className="w-5 h-5 text-slate-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{chat.user} ↔ {chat.agent}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Wait: {chat.wait} • {chat.status}</p>
                    </div>
                  </div>
                  <button className="text-[10px] font-bold uppercase tracking-widest text-brand-600 hover:text-brand-700 transition-colors">Join Chat</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Agent Availability */}
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">Agent Status</h4>
            <div className="space-y-6">
              {[
                { name: 'Sarah K.', status: 'Active', tickets: 4 },
                { name: 'John D.', status: 'On Break', tickets: 0 },
                { name: 'Mike R.', status: 'Active', tickets: 2 },
                { name: 'Elena W.', status: 'Offline', tickets: 0 },
              ].map((agent, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      agent.status === 'Active' ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" : 
                      agent.status === 'On Break' ? "bg-amber-500" : "bg-slate-700"
                    )} />
                    <span className="text-sm font-medium text-slate-300">{agent.name}</span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{agent.tickets} Tickets</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-4 bg-slate-900 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-colors">Manage Roster</button>
          </div>

          {/* Call Logs Preview */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <Phone className="w-5 h-5 text-brand-500" />
              Recent Calls
            </h4>
            <div className="space-y-4">
              {[
                { user: 'Rajesh K.', duration: '4:20', outcome: 'Resolved' },
                { user: 'Suresh M.', duration: '1:15', outcome: 'Escalated' },
              ].map((call, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-900">{call.user}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{call.duration} • {call.outcome}</p>
                  </div>
                  <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-slate-950 transition-colors">
                    <Zap className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 bg-slate-50 rounded-xl font-bold text-sm text-slate-600 hover:bg-slate-100 transition-colors">
              Full Call Logs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
