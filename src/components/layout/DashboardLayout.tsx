import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, LayoutDashboard, Users, Car, MapPin, CreditCard, Settings, LogOut, 
  Bell, Search, TrendingUp, ShieldAlert, Cpu, Megaphone, Lock, Globe, 
  FileText, Activity, ChevronDown, UserCircle, CheckCircle2, LifeBuoy,
  Database, Zap, BarChart3, Fingerprint, Newspaper, Smartphone
} from 'lucide-react';
import { useNavigate, Link, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { cn } from '../../utils/cn';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setRole, logout } from '../../store/slices/authSlice';
import { UserRole } from '../../types/auth.types';
import { hasPermission } from '../../utils/permissions';

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);
  const [isRoleSwitcherOpen, setIsRoleSwitcherOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const handleRoleSwitch = (role: UserRole) => {
    dispatch(setRole(role));
    setIsRoleSwitcherOpen(false);
    navigate('/dashboard');
  };

  const menuItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/dashboard', permission: 'overview' },
    
    // Core Operations
    { icon: Users, label: 'User Management', path: '/dashboard/users', permission: 'users' },
    { icon: Car, label: 'Driver Operations', path: '/dashboard/drivers', permission: 'drivers' },
    { icon: MapPin, label: 'Ride Control', path: '/dashboard/rides', permission: 'rides' },
    { icon: Globe, label: 'City Management', path: '/dashboard/cities', permission: 'geo' },
    
    // Finance & Growth
    { icon: CreditCard, label: 'Finance & Payouts', path: '/dashboard/finance', permission: 'finance' },
    { icon: BarChart3, label: 'Analytics & BI', path: '/dashboard/analytics', permission: 'analytics' },
    { icon: Megaphone, label: 'Marketing', path: '/dashboard/marketing', permission: 'marketing' },
    { icon: TrendingUp, label: 'Growth Metrics', path: '/dashboard/growth', permission: 'growth' },
    
    // Technical & Security
    { icon: Zap, label: 'AI & Strategy', path: '/dashboard/strategy', permission: 'ai' },
    { icon: Database, label: 'Infrastructure', path: '/dashboard/infrastructure', permission: 'devops' },
    { icon: Cpu, label: 'Microservices', path: '/dashboard/microservices', permission: 'devops' },
    { icon: Activity, label: 'System Logs', path: '/dashboard/logs', permission: 'devops' },
    
    // Compliance & Safety
    { icon: ShieldAlert, label: 'Safety Monitor', path: '/dashboard/safety', permission: 'safety' },
    { icon: Lock, label: 'Compliance', path: '/dashboard/compliance', permission: 'compliance' },
    { icon: Fingerprint, label: 'KYC Verification', path: '/dashboard/kyc', permission: 'kyc' },
    { icon: Activity, label: 'Audit Trail', path: '/dashboard/audit', permission: 'audit' },
    
    // Support & Admin
    { icon: LifeBuoy, label: 'Support Center', path: '/dashboard/support', permission: 'support' },
    { icon: CheckCircle2, label: 'Approvals', path: '/dashboard/approvals', permission: 'approvals' },
    { icon: Newspaper, label: 'Investors', path: '/dashboard/investors', permission: 'investors' },
    { icon: FileText, label: 'Documents', path: '/dashboard/documents', permission: 'documents' },
    { icon: Settings, label: 'Platform Config', path: '/dashboard/config', permission: 'config' },
    { icon: Smartphone, label: 'CMS & App', path: '/dashboard/cms', permission: 'cms' },
  ];

  const filteredMenu = menuItems.filter(item => user && hasPermission(user.role, item.permission));

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-950 text-white flex flex-col border-r border-slate-800 shrink-0">
        <div className="p-8 flex flex-col h-full">
          <Link to="/" className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/20">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="font-display text-2xl font-bold tracking-tight">SwiftRide</span>
          </Link>

          <nav className="flex-grow space-y-1 overflow-y-auto pr-2 custom-scrollbar">
            {filteredMenu.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all group",
                  location.pathname === item.path
                    ? "bg-brand-600 text-white shadow-lg shadow-brand-600/20"
                    : "text-slate-400 hover:text-white hover:bg-slate-900"
                )}
              >
                <item.icon className={cn(
                  "w-5 h-5 transition-colors",
                  location.pathname === item.path ? "text-white" : "text-slate-500 group-hover:text-brand-400"
                )} />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-8 border-t border-slate-900">
          <div className="relative">
            <button 
              onClick={() => setIsRoleSwitcherOpen(!isRoleSwitcherOpen)}
              className="flex items-center gap-3 mb-6 p-3 bg-slate-900 rounded-2xl w-full text-left hover:bg-slate-800 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center font-bold shrink-0">
                {user?.name.charAt(0)}
              </div>
              <div className="flex-grow overflow-hidden">
                <p className="text-sm font-bold truncate">{user?.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold flex items-center gap-1">
                  {user?.role.replace('_', ' ')}
                  <ChevronDown className="w-3 h-3" />
                </p>
              </div>
            </button>

            <AnimatePresence>
              {isRoleSwitcherOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute bottom-full left-0 w-full mb-2 bg-white text-slate-950 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50 max-h-80 overflow-y-auto"
                >
                  <div className="p-2">
                    <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">Switch Role (Demo)</p>
                    {Object.values(UserRole).map((role) => (
                      <button
                        key={role}
                        onClick={() => handleRoleSwitch(role)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-colors",
                          user?.role === role ? "bg-brand-50 text-brand-600" : "hover:bg-slate-50"
                        )}
                      >
                        {role.replace('_', ' ')}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-slate-400 hover:text-red-400 transition-colors text-sm font-medium"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-10 shrink-0">
          <div className="flex items-center gap-4 bg-slate-50 px-4 py-2 rounded-full border border-slate-200 w-96">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search platform..."
              className="bg-transparent border-none focus:ring-0 text-sm w-full"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-slate-400 hover:text-slate-950 transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-brand-500 rounded-full border-2 border-white" />
            </button>
            <div className="h-8 w-px bg-slate-200" />
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Platform Status</p>
                <p className="text-sm font-bold text-emerald-500 flex items-center gap-1 justify-end">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  Operational
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Area */}
        <div className="flex-grow overflow-y-auto p-10">
          <motion.div
            key={user?.role}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Outlet />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
