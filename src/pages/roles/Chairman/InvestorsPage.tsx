import { motion } from 'motion/react';
import { FileText, Download, Eye, Share2, TrendingUp, DollarSign, Users, Zap, Search, Filter } from 'lucide-react';
import { cn } from '../../../utils/cn';

const reports = [
  { id: 'REP-Q4-23', title: 'Q4 2023 Performance Deck', date: 'Jan 15, 2024', size: '4.2 MB', status: 'Published' },
  { id: 'REP-ANN-23', title: '2023 Annual Growth Report', date: 'Jan 05, 2024', size: '12.8 MB', status: 'Published' },
  { id: 'REP-UNIT-24', title: 'Unit Economics Analysis - Jan', date: 'Feb 02, 2024', size: '1.5 MB', status: 'Draft' },
];

export default function ChairmanInvestorsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Investor Relations</h1>
          <p className="text-slate-500 text-lg">Auto-compiled financial metrics and performance reports for board members and investors.</p>
        </div>
        <button className="px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors flex items-center gap-2">
          <Zap className="w-4 h-4" />
          Generate New Report
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Key Investor Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Burn Rate', value: '$420K', trend: 'down', icon: DollarSign },
              { label: 'LTV / CAC', value: '4.2x', trend: 'up', icon: TrendingUp },
              { label: 'GMV (MTD)', value: '$2.8M', trend: 'up', icon: Zap },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-slate-50 rounded-xl text-slate-950">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <span className={cn(
                    "text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest",
                    stat.trend === 'up' ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                  )}>{stat.trend}</span>
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                <h3 className="text-2xl font-display font-bold">{stat.value}</h3>
              </div>
            ))}
          </div>

          {/* Reports List */}
          <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl font-display font-bold">Compiled Reports</h3>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-slate-50 rounded-lg border border-slate-100"><Search className="w-4 h-4 text-slate-400" /></button>
                <button className="p-2 hover:bg-slate-50 rounded-lg border border-slate-100"><Filter className="w-4 h-4 text-slate-400" /></button>
              </div>
            </div>
            <div className="divide-y divide-slate-50">
              {reports.map((rep, i) => (
                <div key={rep.id} className="p-8 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{rep.title}</h4>
                      <p className="text-xs text-slate-500">{rep.date} • {rep.size}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mr-4",
                      rep.status === 'Published' ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                    )}>{rep.status}</span>
                    <button className="p-2 hover:bg-white rounded-lg border border-slate-200 text-slate-400 hover:text-slate-950 transition-colors"><Eye className="w-4 h-4" /></button>
                    <button className="p-2 hover:bg-white rounded-lg border border-slate-200 text-slate-400 hover:text-slate-950 transition-colors"><Download className="w-4 h-4" /></button>
                    <button className="p-2 hover:bg-white rounded-lg border border-slate-200 text-slate-400 hover:text-slate-950 transition-colors"><Share2 className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-slate-950 text-white p-8 rounded-[32px] shadow-xl">
            <h4 className="font-display font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">Data Room Access</h4>
            <div className="space-y-6">
              {[
                { name: 'Sequoia Capital', access: 'Full', lastActive: '2h ago' },
                { name: 'Tiger Global', access: 'Limited', lastActive: '1d ago' },
                { name: 'SoftBank Vision Fund', access: 'Full', lastActive: '5m ago' },
              ].map((investor, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold">{investor.name}</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{investor.access} Access</p>
                  </div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{investor.lastActive}</p>
                </div>
              ))}
              <button className="w-full mt-4 py-4 bg-slate-900 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                <Users className="w-4 h-4" />
                Manage Permissions
              </button>
            </div>
          </div>

          <div className="bg-brand-50 border border-brand-100 p-8 rounded-[32px]">
            <h4 className="font-display font-bold text-brand-900 mb-4">Investor Briefing</h4>
            <p className="text-sm text-brand-700 leading-relaxed mb-6">
              The next board meeting is scheduled for March 15th. All Q1 reports will be auto-compiled by March 5th.
            </p>
            <button className="w-full py-3 bg-brand-600 text-white rounded-xl font-bold text-sm hover:bg-brand-700 transition-colors">
              Schedule Briefing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
