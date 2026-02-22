import { motion } from 'motion/react';
import { Check, X, Zap } from 'lucide-react';
import { cn } from '../../utils/cn';

type Access = 'FULL' | 'VIEW' | 'LIMITED' | 'NONE';

interface ModuleRow {
  module: string;
  roles: Record<string, Access>;
}

const matrix: ModuleRow[] = [
  { module: 'User Management', roles: { Chairman: 'FULL', CEO: 'FULL', CTO: 'VIEW', SuperAdmin: 'FULL', OpsAdmin: 'LIMITED' } },
  { module: 'Driver Management', roles: { Chairman: 'FULL', CEO: 'FULL', CTO: 'VIEW', SuperAdmin: 'FULL', OpsAdmin: 'FULL' } },
  { module: 'Ride Management', roles: { Chairman: 'VIEW', CEO: 'FULL', CTO: 'VIEW', SuperAdmin: 'FULL', OpsAdmin: 'FULL' } },
  { module: 'Payments & Finance', roles: { Chairman: 'FULL', CEO: 'FULL', CTO: 'NONE', SuperAdmin: 'FULL', OpsAdmin: 'NONE' } },
  { module: 'AI & Automation', roles: { Chairman: 'VIEW', CEO: 'FULL', CTO: 'FULL', SuperAdmin: 'FULL', OpsAdmin: 'NONE' } },
];

export default function RoleMatrix() {
  const roles = ['Chairman', 'CEO', 'CTO', 'SuperAdmin', 'OpsAdmin'];

  const getIcon = (access: Access) => {
    switch (access) {
      case 'FULL': return <Check className="w-4 h-4 text-emerald-500" />;
      case 'VIEW': return <div className="w-2 h-2 rounded-full bg-blue-400" />;
      case 'LIMITED': return <Zap className="w-3 h-3 text-amber-500" />;
      case 'NONE': return <X className="w-4 h-4 text-slate-300" />;
    }
  };

  return (
    <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-8 border-b border-slate-100 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-display font-bold">Master Access Matrix</h3>
          <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mt-1">Role-Based Permission Mapping</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            <Check className="w-3 h-3 text-emerald-500" /> Full
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> View
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            <Zap className="w-3 h-3 text-amber-500" /> Limited
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Module</th>
              {roles.map(role => (
                <th key={role} className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 text-center">{role}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matrix.map((row, i) => (
              <motion.tr
                key={row.module}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group hover:bg-slate-50/50 transition-colors"
              >
                <td className="p-6 border-b border-slate-50">
                  <span className="text-sm font-bold text-slate-700">{row.module}</span>
                </td>
                {roles.map(role => (
                  <td key={role} className="p-6 border-b border-slate-50 text-center">
                    <div className="flex justify-center">
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                        row.roles[role] === 'FULL' ? "bg-emerald-50" :
                        row.roles[role] === 'VIEW' ? "bg-blue-50" :
                        row.roles[role] === 'LIMITED' ? "bg-amber-50" : "bg-slate-50"
                      )}>
                        {getIcon(row.roles[role])}
                      </div>
                    </div>
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
