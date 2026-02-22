import { motion } from 'motion/react';
import { Megaphone, Tag, Bell, Users, Globe, Zap, Search, Filter, Download, TrendingUp, DollarSign, Calendar } from 'lucide-react';
import { cn } from '../../../utils/cn';

export default function MarketingAdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-brand-50 rounded-lg">
              <Megaphone className="w-5 h-5 text-brand-600" />
            </div>
            <span className="text-xs font-bold text-brand-600 uppercase tracking-[0.2em]">Marketing Execution Layer</span>
          </div>
          <h1 className="text-4xl font-display font-bold mb-2">Campaigns Dashboard</h1>
          <p className="text-slate-500 text-lg">Execute campaigns, manage promo codes, and monitor notification performance.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Schedule Post
          </button>
          <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
            <Zap className="w-4 h-4" />
            New Campaign
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Active Campaigns', value: '08', change: '02 Ending', trend: 'neutral', icon: Megaphone, color: 'text-brand-500' },
          { label: 'Budget Used', value: '$12.4K', change: '42% of Cap', trend: 'up', icon: DollarSign, color: 'text-emerald-500' },
          { label: 'Avg. ROI', value: '3.8x', change: '+0.2x', trend: 'up', icon: TrendingUp, color: 'text-blue-500' },
          { label: 'Push Open Rate', value: '18.4%', change: '+2.1%', trend: 'up', icon: Bell, color: 'text-amber-500' },
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
          {/* Active Campaigns List */}
          <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl font-display font-bold">Execution Queue</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-brand-200 bg-brand-50 text-brand-600 rounded-lg">Active</button>
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-slate-100 rounded-lg hover:bg-slate-50">Scheduled</button>
              </div>
            </div>
            <div className="divide-y divide-slate-50">
              {[
                { name: 'Weekend Ride Sale', type: 'Coupon', target: 'Mumbai', roi: '3.8x', status: 'Active' },
                { name: 'New User Reactivation', type: 'Push', target: 'All Cities', roi: '4.2x', status: 'Active' },
                { name: 'Referral Boost', type: 'Referral', target: 'Bangalore', roi: '5.1x', status: 'Paused' },
              ].map((camp, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                      <Tag className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{camp.name} • {camp.type}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{camp.target} • ROI: {camp.roi}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      camp.status === 'Active' ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                    )}>{camp.status}</span>
                    <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-slate-950 hover:text-white transition-colors">Edit</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Website CMS Preview */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-display font-bold flex items-center gap-2">
                <Globe className="w-5 h-5 text-brand-500" />
                Website Content
              </h3>
              <button className="text-sm font-bold text-brand-600 hover:text-brand-700">Open CMS</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Top 5 Safest Cities for Night Rides', type: 'Blog', status: 'Draft', date: 'Feb 22' },
                { title: 'Diwali Festival Hero Banner', type: 'Hero', status: 'Live', date: 'Feb 21' },
              ].map((cms, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-sm font-bold text-slate-900 mb-1 line-clamp-1">{cms.title}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{cms.type} • {cms.date}</span>
                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-widest",
                      cms.status === 'Live' ? "text-emerald-500" : "text-amber-500"
                    )}>{cms.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* User Segments */}
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">User Segments</h4>
            <div className="space-y-6">
              {[
                { name: 'Power Users', count: '12.4K', growth: '+12%' },
                { name: 'Churned Riders', count: '45.2K', growth: '-2%' },
                { name: 'New Signups', count: '8.2K', growth: '+24%' },
              ].map((seg, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold">{seg.name}</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{seg.count} Users</p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">{seg.growth}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-4 bg-slate-900 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
              <Users className="w-4 h-4" />
              Build Segment
            </button>
          </div>

          {/* App Store Monitor */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h4 className="font-display font-bold mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5 text-brand-500" />
              App Store Listing
            </h4>
            <div className="space-y-4">
              {[
                { platform: 'iOS App Store', version: 'v3.4.2', status: 'Live' },
                { platform: 'Google Play', version: 'v3.4.2', status: 'Pending' },
              ].map((app, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-900">{app.platform}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{app.version}</p>
                  </div>
                  <span className={cn(
                    "text-[10px] font-bold uppercase tracking-widest",
                    app.status === 'Live' ? "text-emerald-500" : "text-amber-500"
                  )}>{app.status}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 bg-slate-50 rounded-xl font-bold text-sm text-slate-600 hover:bg-slate-100 transition-colors">
              Update Store Assets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
