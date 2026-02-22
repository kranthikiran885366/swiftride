import { UserRole } from '../types/auth.types';

export const ROLE_PERMISSIONS: Record<UserRole, string[]> = {
  [UserRole.CHAIRMAN]: ['overview', 'finance', 'safety', 'growth', 'approvals', 'investors', 'audit', 'documents'],
  [UserRole.CEO]: ['overview', 'users', 'drivers', 'rides', 'finance', 'analytics', 'ai', 'safety', 'support', 'marketing', 'config', 'geo', 'notifications', 'compliance', 'rbac', 'devops', 'cms'],
  [UserRole.CTO]: ['overview', 'devops', 'api', 'errors', 'deployments', 'ai', 'config', 'experiments', 'website-tech', 'analytics'],
  [UserRole.CFO]: ['overview', 'finance', 'transactions', 'payouts', 'refunds', 'commissions', 'fraud', 'tax', 'reports', 'gateways', 'budget'],
  [UserRole.COO]: ['overview', 'rides', 'history', 'disputes', 'drivers', 'kyc', 'safety', 'cities', 'incentives', 'sla', 'geo', 'reports'],
  [UserRole.CMO]: ['overview', 'marketing', 'campaigns', 'coupons', 'referral', 'notifications', 'segments', 'analytics', 'cms', 'blog', 'appstore'],
  [UserRole.SUPER_ADMIN]: ['overview', 'users', 'drivers', 'rides', 'finance', 'ai', 'safety', 'support', 'config', 'geo', 'rbac', 'fraud', 'devops', 'cms'],
  [UserRole.OPS_ADMIN]: ['overview', 'rides', 'history', 'disputes', 'drivers', 'performance', 'geo', 'incentives', 'cities', 'safety'],
  [UserRole.FINANCE_ADMIN]: ['overview', 'finance', 'transactions', 'refunds', 'payouts', 'wallets', 'failed-payments', 'reports', 'commissions', 'promo-cost', 'tax'],
  [UserRole.SUPPORT_ADMIN]: ['overview', 'tickets', 'users', 'drivers', 'chat', 'calls', 'escalations', 'canned-responses', 'quality', 'refunds'],
  [UserRole.CITY_MANAGER]: ['overview', 'rides', 'drivers', 'users', 'geo', 'incentives', 'analytics', 'reports', 'recruitment', 'notifications'],
  [UserRole.DRIVER_ADMIN]: ['overview', 'kyc', 'profiles', 'warnings', 'suspensions', 'blacklist', 'tiers', 'documents', 'bgcheck', 'performance'],
  [UserRole.MARKETING_ADMIN]: ['overview', 'campaigns', 'coupons', 'referral', 'notifications', 'segments', 'blog', 'cities', 'cms', 'seo', 'appstore', 'analytics'],
  [UserRole.COMPLIANCE_OFFICER]: ['overview', 'privacy', 'consent', 'retention', 'policies', 'reports', 'permits', 'aml', 'legalhold', 'audit', 'insurance'],
  [UserRole.TECH_OPS_ENGINEER]: ['overview', 'devops', 'monitoring', 'infrastructure', 'logs'],
  [UserRole.BUSINESS_ANALYST]: ['overview', 'analytics', 'reports', 'bi'],
};

export function hasPermission(role: UserRole, permission: string): boolean {
  return ROLE_PERMISSIONS[role]?.includes(permission) || ROLE_PERMISSIONS[role]?.includes('all');
}
