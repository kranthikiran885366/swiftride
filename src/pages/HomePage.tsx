import { motion } from 'motion/react';
import { ArrowRight, Shield, Zap, Globe, Users, BarChart3, MapPin, Check, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import RoleMatrix from '../components/sections/RoleMatrix';

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight">SwiftRide</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Platform', 'Solutions', 'Security', 'Company'].map(item => (
              <a key={item} href="#" className="text-sm font-bold text-slate-500 hover:text-slate-950 transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-bold text-slate-950 hover:text-brand-600 transition-colors">Sign In</Link>
            <Link to="/login" className="px-5 py-2.5 bg-slate-950 text-white rounded-full text-sm font-bold hover:bg-brand-600 transition-all">
              Launch Console
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Editorial Style (Recipe 2/11) */}
      <section className="relative pt-40 pb-32 lg:pt-52 lg:pb-64">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-950 text-[10px] font-bold uppercase tracking-[0.2em] mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                v4.2.0 Enterprise Release
              </div>
              <h1 className="text-7xl lg:text-[120px] font-display font-bold leading-[0.85] tracking-tighter mb-10">
                URBAN <br />
                <span className="text-brand-600 italic">VELOCITY</span> <br />
                REDEFINED.
              </h1>
              <p className="text-xl text-slate-500 max-w-xl mb-12 leading-relaxed font-medium">
                The world's most advanced mobility orchestration platform. 
                Real-time RBAC, sub-second latency, and predictive AI for the modern city.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/login" className="px-10 py-5 bg-slate-950 text-white rounded-2xl font-bold hover:bg-brand-600 transition-all flex items-center gap-3 group shadow-2xl shadow-slate-200">
                  Access Platform
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex items-center gap-4 px-6 py-5 border border-slate-200 rounded-2xl">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://picsum.photos/seed/${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    Trusted by <span className="text-slate-950">12k+</span> Operators
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative z-10 rounded-[48px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-slate-100">
                <img
                  src="https://picsum.photos/seed/swiftride/1200/1600"
                  alt="Modern Mobility"
                  className="w-full h-auto scale-105 hover:scale-100 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>
              
              {/* Floating Stats Card */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-10 -left-10 z-20 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-[240px]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Live Growth</span>
                </div>
                <h4 className="text-3xl font-display font-bold mb-1">+24.8%</h4>
                <p className="text-xs text-slate-500 font-medium">Network throughput increase in last 24h</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Technical Style (Recipe 1) */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
            {[
              { label: 'Active Cities', value: '120+', icon: MapPin },
              { label: 'Daily Rides', value: '2.4M', icon: Zap },
              { label: 'Safety Rating', value: '4.9/5', icon: Shield },
              { label: 'Data Points', value: '18B', icon: BarChart3 },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col"
              >
                <stat.icon className="w-5 h-5 text-brand-400 mb-6" />
                <span className="text-5xl lg:text-7xl font-display font-bold mb-4 tracking-tighter">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Role Matrix Section */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center mb-8">
                <Shield className="w-6 h-6 text-brand-600" />
              </div>
              <h2 className="text-5xl lg:text-6xl font-display font-bold mb-8 leading-[0.9] tracking-tight">
                GRANULAR <br />
                <span className="text-brand-600 italic">AUTHORITY</span> <br />
                MAPPING.
              </h2>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
                Our proprietary RBAC (Role-Based Access Control) system provides zero ambiguity on permissions. Every role from executive leadership to field operations is mapped to specific modules and actions.
              </p>
              <div className="space-y-4">
                {[
                  '16 Specialized Roles',
                  'Module-level Permissions',
                  'Real-time Audit Tracking',
                  'Secure Data Isolation'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-bold text-slate-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-slate-50 p-1 rounded-[40px] border border-slate-200">
                <RoleMatrix />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Bento Grid Style */}
      <section className="py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl lg:text-7xl font-display font-bold mb-8 tracking-tight">Engineered for Excellence</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
              Our platform is built on a foundation of advanced technology and rigorous operational standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 bg-white p-12 rounded-[48px] border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-brand-600" />
              </div>
              <h3 className="text-4xl font-display font-bold mb-6">Master Access Control</h3>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
                A sophisticated 16-role hierarchy ensures that every action is authorized and every data point is secure. From the Chairman to field staff, everyone has the exact tools they need.
              </p>
              <div className="flex gap-4">
                <span className="px-5 py-2 bg-slate-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-500">RBAC Driven</span>
                <span className="px-5 py-2 bg-slate-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-500">Audit Logs</span>
              </div>
            </div>

            <div className="md:col-span-4 bg-slate-950 text-white p-12 rounded-[48px] flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/20 rounded-full blur-[80px] group-hover:bg-brand-600/30 transition-colors" />
              <div className="relative z-10">
                <Globe className="w-12 h-12 text-brand-400 mb-10" />
                <h3 className="text-4xl font-display font-bold mb-6">Global Scale</h3>
                <p className="text-slate-400 leading-relaxed font-medium">
                  Real-time synchronization across 120+ cities with sub-second latency.
                </p>
              </div>
              <Link to="/login" className="relative z-10 mt-12 text-brand-400 font-bold flex items-center gap-2 group/link">
                View Network
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="md:col-span-4 bg-brand-600 text-white p-12 rounded-[48px] group">
              <Users className="w-12 h-12 text-white mb-10 group-hover:rotate-12 transition-transform" />
              <h3 className="text-4xl font-display font-bold mb-6">Driver First</h3>
              <p className="text-white/80 leading-relaxed font-medium">
                Industry-leading earnings, comprehensive insurance, and 24/7 support for our driver partners.
              </p>
            </div>

            <div className="md:col-span-8 bg-white p-12 rounded-[48px] border border-slate-200 shadow-sm flex flex-col md:flex-row gap-12 items-center group">
              <div className="flex-grow">
                <BarChart3 className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-10">
                  <BarChart3 className="w-8 h-8 text-slate-950" />
                </BarChart3>
                <h3 className="text-4xl font-display font-bold mb-6">Real-time Intelligence</h3>
                <p className="text-lg text-slate-500 leading-relaxed font-medium">
                  Advanced demand prediction and surge pricing algorithms powered by AI to maximize efficiency and earnings.
                </p>
              </div>
              <div className="w-full md:w-80 h-64 bg-slate-100 rounded-[32px] overflow-hidden shrink-0">
                <img
                  src="https://picsum.photos/seed/chart/600/500"
                  alt="Analytics"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-950 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight">SwiftRide</span>
          </div>
          <p className="text-sm text-slate-400 font-medium">© 2024 SwiftRide Technologies. All rights reserved.</p>
          <div className="flex gap-8">
            {['Privacy', 'Terms', 'Security'].map(item => (
              <a key={item} href="#" className="text-sm font-bold text-slate-500 hover:text-slate-950 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
