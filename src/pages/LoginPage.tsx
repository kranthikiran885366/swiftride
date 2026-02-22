import { motion, AnimatePresence } from 'motion/react';
import { Shield, ArrowRight, Lock, Mail, ChevronDown, CheckCircle2 } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { setCredentials } from '../store/slices/authSlice';
import { UserRole } from '../types/auth.types';
import { cn } from '../utils/cn';

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [selectedRole, setSelectedRole] = useState<UserRole>(UserRole.SUPER_ADMIN);
  const [isRoleOpen, setIsRoleOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      dispatch(setCredentials({
        user: {
          id: `USR-${Math.floor(Math.random() * 1000)}`,
          name: `${selectedRole.replace('_', ' ')} User`,
          email: `${selectedRole.toLowerCase()}@swiftride.com`,
          role: selectedRole,
        },
        token: 'mock-jwt-token-' + Date.now(),
      }));
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-white p-10 rounded-[48px] shadow-2xl border border-white/10">
          <div className="flex flex-col items-center text-center mb-10">
            <motion.div 
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              className="w-20 h-20 bg-slate-950 rounded-3xl flex items-center justify-center mb-6 shadow-2xl shadow-brand-500/20"
            >
              <Shield className="w-10 h-10 text-brand-400" />
            </motion.div>
            <h1 className="text-4xl font-display font-bold mb-2 tracking-tight">SwiftRide</h1>
            <p className="text-slate-500 font-medium">Enterprise Management Portal</p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Role Selector - Advanced RBAC UI */}
            <div className="space-y-2 relative">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Access Level (RBAC)</label>
              <button
                type="button"
                onClick={() => setIsRoleOpen(!isRoleOpen)}
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between hover:bg-slate-100 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                  <span className="text-sm font-bold text-slate-900">{selectedRole.replace('_', ' ')}</span>
                </div>
                <ChevronDown className={cn("w-4 h-4 text-slate-400 transition-transform", isRoleOpen && "rotate-180")} />
              </button>

              <AnimatePresence>
                {isRoleOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-0 w-full mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 max-h-60 overflow-y-auto p-2"
                  >
                    {Object.values(UserRole).map((role) => (
                      <button
                        key={role}
                        type="button"
                        onClick={() => {
                          setSelectedRole(role);
                          setIsRoleOpen(false);
                        }}
                        className={cn(
                          "w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between group",
                          selectedRole === role ? "bg-brand-50 text-brand-600" : "hover:bg-slate-50 text-slate-600"
                        )}
                      >
                        {role.replace('_', ' ')}
                        {selectedRole === role && <CheckCircle2 className="w-4 h-4" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Security Credentials</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  defaultValue={`${selectedRole.toLowerCase()}@swiftride.com`}
                  readOnly
                  className="w-full pl-14 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-slate-400 cursor-not-allowed"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  defaultValue="password123"
                  className="w-full pl-14 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all font-mono"
                />
              </div>
            </div>

            <button 
              disabled={isLoading}
              className="w-full py-5 bg-slate-950 text-white rounded-2xl font-bold hover:bg-brand-600 transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Authorize Access
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Secure Environment Active
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
