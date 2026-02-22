import { motion } from 'motion/react';
import { Megaphone, TrendingUp, Users, Zap, ArrowUpRight, ArrowDownRight, Download, Calendar, Filter, Tag, Bell, PieChart, Globe } from 'lucide-react';
import { cn } from '../../../utils/cn';

export default function CMODashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-brand-50 rounded-lg">
              <Megaphone className="w-5 h-5 text-brand-600" />
            </div>
            <span className="text-xs font-bold text-brand-600 uppercase tracking-[0.2em]">Growth & Brand Command</span>
          </div>
          <h1 className="text-4xl font-display font-bold mb-2">Marketing Growth</h1>
          <p className="text-slate-500 text-lg">Strategic overview of acquisition, retention, and campaign ROI.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Last 30 Days
          </button>
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Launch Campaign
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'New Users Today', value: '4,280', change: '+15.2%', trend: 'up', icon: Users, color: 'text-brand-500' },
          { label: 'Campaign ROI', value: '4.2x', change: '+0.4x', trend: 'up', icon: TrendingUp, color: 'text-emerald-500' },
          { label: 'App Downloads', value: '12.4K', change: '+8.2%', trend: 'up', icon: Download, color: 'text-blue-500' },
          { label: 'NPS Score', value: '72', change: '+2', trend: 'up', icon: Zap, color: 'text-amber-500' },
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
          {/* Campaign Performance */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-display font-bold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-brand-500" />
                Campaign Conversion Funnel
              </h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-brand-200 bg-brand-50 text-brand-600 rounded-lg">Acquisition</button>
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-slate-100 rounded-lg hover:bg-slate-50">Retention</button>
              </div>
            </div>
            <div className="flex-grow flex items-center justify-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <p className="text-slate-400 font-mono text-xs uppercase tracking-widest">Marketing Funnel Chart Placeholder</p>
            </div>
          </div>

          {/* Active Campaigns */}
          <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl font-display font-bold">Active Campaigns</h3>
              <button className="text-sm font-bold text-brand-600 hover:text-brand-700">View All Campaigns</button>
            </div>
            <div className="divide-y divide-slate-50">
              {[
                { name: 'Weekend Ride Sale', status: 'Active', budget: '$12K', roi: '3.8x', spend: '42%' },
                { name: 'New User Bonus', status: 'Active', budget: '$25K', roi: '4.5x', spend: '68%' },
                { name: 'Referral Boost', status: 'Active', budget: '$8K', roi: '5.2x', spend: '15%' },
              ].map((camp, i) => (
                <div key={i} className="p-8 hover:bg-slate-50 transition-colors group">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="font-bold text-slate-900">{camp.name}</h4>
                      <p className="text-xs text-slate-500">Budget: {camp.budget} • ROI: {camp.roi}</p>
                    </div>
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold uppercase tracking-wider">Active</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <span>Budget Spent</span>
                      <span>{camp.spend}</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: camp.spend }}
                        className="h-full bg-brand-500" 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Quick Actions */}
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">Quick Actions</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Create Coupon', icon: Tag },
                { label: 'Push Notify', icon: Bell },
                { label: 'User Segment', icon: Users },
                { label: 'Website CMS', icon: Globe },
              ].map((action, i) => (
                <button key={i} className="p-4 bg-slate-900 rounded-2xl border border-slate-800 hover:bg-slate-800 transition-colors flex flex-col items-center gap-3 text-center">
                  <action.icon className="w-5 h-5 text-brand-400" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Marketing Analytics */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-brand-500" />
              Channel Attribution
            </h4>
            <div className="aspect-square bg-slate-50 rounded-2xl border border-dashed border-slate-200 flex items-center justify-center">
              <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest text-center px-4">Attribution Pie Chart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
