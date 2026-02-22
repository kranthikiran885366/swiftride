import { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { store } from './store';
import { motion, AnimatePresence } from 'motion/react';

import { useAppSelector } from './store/hooks';
import { UserRole } from './types/auth.types';
import PermissionGuard from './components/auth/PermissionGuard';

// Layouts
const PublicLayout = lazy(() => import('./components/layout/PublicLayout'));
const DashboardLayout = lazy(() => import('./components/layout/DashboardLayout'));

// Public Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Role Dashboards
const Dashboards: Record<UserRole, any> = {
  [UserRole.SUPER_ADMIN]: lazy(() => import('./pages/roles/SuperAdmin/Dashboard')),
  [UserRole.CEO]: lazy(() => import('./pages/roles/CEO/Dashboard')),
  [UserRole.CHAIRMAN]: lazy(() => import('./pages/roles/Chairman/Dashboard')),
  [UserRole.CTO]: lazy(() => import('./pages/roles/CTO/Dashboard')),
  [UserRole.CFO]: lazy(() => import('./pages/roles/CFO/Dashboard')),
  [UserRole.COO]: lazy(() => import('./pages/roles/COO/Dashboard')),
  [UserRole.CMO]: lazy(() => import('./pages/roles/CMO/Dashboard')),
  [UserRole.OPS_ADMIN]: lazy(() => import('./pages/roles/OpsAdmin/Dashboard')),
  [UserRole.FINANCE_ADMIN]: lazy(() => import('./pages/roles/FinanceAdmin/Dashboard')),
  [UserRole.SUPPORT_ADMIN]: lazy(() => import('./pages/roles/SupportAdmin/Dashboard')),
  [UserRole.CITY_MANAGER]: lazy(() => import('./pages/roles/CityManager/Dashboard')),
  [UserRole.DRIVER_ADMIN]: lazy(() => import('./pages/roles/DriverAdmin/Dashboard')),
  [UserRole.MARKETING_ADMIN]: lazy(() => import('./pages/roles/MarketingAdmin/Dashboard')),
  [UserRole.COMPLIANCE_OFFICER]: lazy(() => import('./pages/roles/ComplianceOfficer/Dashboard')),
  [UserRole.TECH_OPS_ENGINEER]: lazy(() => import('./pages/roles/TechOpsEngineer/Dashboard')),
  [UserRole.BUSINESS_ANALYST]: lazy(() => import('./pages/roles/BusinessAnalyst/Dashboard')),
};

// Module Mapping
const Modules: Record<string, any> = {
  'users': lazy(() => import('./pages/modules/UserManagement/UserManagementModule')),
  'drivers': lazy(() => import('./pages/modules/DriverManagement/DriverManagementModule')),
  'rides': lazy(() => import('./pages/modules/RideManagement/RideManagementModule')),
  'finance': lazy(() => import('./pages/modules/Finance/FinanceModule')),
  'analytics': lazy(() => import('./pages/modules/Analytics/AnalyticsModule')),
  'marketing': lazy(() => import('./pages/modules/Marketing/MarketingModule')),
  'support': lazy(() => import('./pages/modules/Support/SupportModule')),
  'cities': lazy(() => import('./pages/modules/CityManagement/CityManagementModule')),
  'devops': lazy(() => import('./pages/modules/DevOps/DevOpsModule')),
  'compliance': lazy(() => import('./pages/modules/Compliance/ComplianceModule')),
  'config': lazy(() => import('./pages/modules/Config/ConfigModule')),
  'safety': lazy(() => import('./pages/roles/Chairman/SafetyPage')),
  'growth': lazy(() => import('./pages/roles/Chairman/GrowthPage')),
  'approvals': lazy(() => import('./pages/roles/Chairman/ApprovalsPage')),
  'investors': lazy(() => import('./pages/roles/Chairman/InvestorsPage')),
  'audit': lazy(() => import('./pages/roles/Chairman/AuditPage')),
  'documents': lazy(() => import('./pages/roles/Chairman/DocumentsPage')),
  'alerts': lazy(() => import('./pages/roles/CEO/Alerts/Alerts')),
  'operations': lazy(() => import('./pages/roles/CEO/Operations/Operations')),
  'strategy': lazy(() => import('./pages/roles/CEO/Strategy/Strategy')),
  'infrastructure': lazy(() => import('./pages/roles/CTO/Infrastructure/Infrastructure')),
  'microservices': lazy(() => import('./pages/roles/CTO/Microservices/Microservices')),
  'logs': lazy(() => import('./pages/roles/CTO/Logs/Logs')),
  'deployment': lazy(() => import('./pages/roles/CTO/Deployment/Deployment')),
};

const queryClient = new QueryClient();

function DashboardRouter() {
  const { user } = useAppSelector(state => state.auth);
  if (!user) return <Navigate to="/login" />;
  
  const Dashboard = Dashboards[user.role] || Dashboards[UserRole.SUPER_ADMIN];
  return <Dashboard />;
}

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <BrowserRouter>
            <Suspense fallback={<LoadingScreen />}>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route element={<PublicLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                  </Route>

                  <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<DashboardRouter />} />
                    
                    {Object.entries(Modules).map(([path, Component]) => {
                      const permission = path === 'cities' ? 'geo' : path;
                      return (
                        <Fragment key={path}>
                          <Route 
                            path={path} 
                            element={
                              <PermissionGuard permission={permission}>
                                <Component />
                              </PermissionGuard>
                            } 
                          />
                        </Fragment>
                      );
                    })}
                  </Route>

                  <Route path="/404" element={<NotFoundPage />} />
                  <Route path="*" element={<Navigate to="/404" replace />} />
                </Routes>
              </AnimatePresence>
            </Suspense>
          </BrowserRouter>
        </HelmetProvider>
      </QueryClientProvider>
    </Provider>
  );
}

function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-950 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="w-12 h-12 border-4 border-brand-500 border-t-transparent rounded-full animate-spin" />
        <p className="font-display text-sm tracking-widest uppercase opacity-50">Initializing Platform</p>
      </motion.div>
    </div>
  );
}
