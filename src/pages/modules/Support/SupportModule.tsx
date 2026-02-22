import { motion } from 'motion/react';
import { MessageSquare, User, Clock, AlertCircle, CheckCircle2, Search, Filter, Phone, Mail } from 'lucide-react';
import { cn } from '../../../utils/cn';

const tickets = [
  { id: 'TKT-1024', user: 'Alex Thompson', subject: 'Fare Dispute - Trip #84291', priority: 'High', status: 'Open', assigned: 'Sarah J.', time: '12m ago' },
  { id: 'TKT-1023', user: 'Robert Fox (Driver)', subject: 'Account Verification Issue', priority: 'Medium', status: 'In Progress', assigned: 'Michael C.', time: '45m ago' },
  { id: 'TKT-1022', user: 'Elena Rodriguez', subject: 'Lost Item in Vehicle', priority: 'Low', status: 'Resolved', assigned: 'Sarah J.', time: '2h ago' },
  { id: 'TKT-1021', user: 'Michael Chen', subject: 'Payment Failed - Refund Req', priority: 'High', status: 'Open', assigned: 'Unassigned', time: '3h ago' },
];

export default function SupportModule() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Support & Tickets</h1>
          <p className="text-slate-500">Manage user inquiries, driver disputes, and platform assistance.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Live Calls
          </button>
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Bulk Message
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <div className="relative w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search tickets..."
                  className="w-full pl-12 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 outline-none"
                />
              </div>
              <button className="p-2 hover:bg-slate-50 rounded-lg border border-slate-100"><Filter className="w-4 h-4 text-slate-400" /></button>
            </div>

            <div className="divide-y divide-slate-50">
              {tickets.map((tkt, i) => (
                <motion.div
                  key={tkt.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center",
                      tkt.priority === 'High' ? "bg-rose-50 text-rose-600" : "bg-slate-100 text-slate-600"
                    )}>
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-slate-900">{tkt.subject}</span>
                        <span className={cn(
                          "px-2 py-0.5 rounded-md text-[8px] font-bold uppercase tracking-widest",
                          tkt.status === 'Open' ? "bg-blue-50 text-blue-600" : 
                          tkt.status === 'In Progress' ? "bg-amber-50 text-amber-600" : "bg-emerald-50 text-emerald-600"
                        )}>{tkt.status}</span>
                      </div>
                      <p className="text-xs text-slate-500">{tkt.user} • {tkt.id}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-12">
                    <div className="text-right hidden md:block">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Assigned To</p>
                      <p className="text-xs font-bold text-slate-700">{tkt.assigned}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Last Activity</p>
                      <p className="text-xs text-slate-500">{tkt.time}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-6">SLA Status</h4>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                  <span>First Response</span>
                  <span className="text-emerald-400">98.2%</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[98%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                  <span>Resolution Rate</span>
                  <span className="text-blue-400">84.5%</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[84%]" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6">Support Channels</h4>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                <span className="text-xs font-bold text-slate-700">In-app Chat</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                <span className="text-xs font-bold text-slate-700">Email Support</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                <span className="text-xs font-bold text-slate-700">Phone Hotline</span>
                <span className="w-2 h-2 rounded-full bg-amber-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
