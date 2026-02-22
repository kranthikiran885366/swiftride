/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum UserRole {
  CHAIRMAN = 'CHAIRMAN',
  CEO = 'CEO',
  CTO = 'CTO',
  CFO = 'CFO',
  COO = 'COO',
  CMO = 'CMO',
  SUPER_ADMIN = 'SUPER_ADMIN',
  OPS_ADMIN = 'OPS_ADMIN',
  FINANCE_ADMIN = 'FINANCE_ADMIN',
  SUPPORT_ADMIN = 'SUPPORT_ADMIN',
  CITY_MANAGER = 'CITY_MANAGER',
  DRIVER_ADMIN = 'DRIVER_ADMIN',
  MARKETING_ADMIN = 'MARKETING_ADMIN',
  COMPLIANCE_OFFICER = 'COMPLIANCE_OFFICER',
  TECH_OPS_ENGINEER = 'TECH_OPS_ENGINEER',
  BUSINESS_ANALYST = 'BUSINESS_ANALYST',
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
}

export type AccessLevel = 'FULL' | 'VIEW' | 'LIMITED' | 'NONE';

export interface ModuleAccess {
  module: string;
  access: AccessLevel;
}
