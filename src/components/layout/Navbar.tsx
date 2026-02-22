import { Link } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../utils/cn';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center group-hover:bg-brand-600 transition-colors">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight">RideApp</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/ride" className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors">Ride</Link>
            <Link to="/driver" className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors">Drive</Link>
            <Link to="/safety" className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors">Safety</Link>
            <Link to="/about" className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors">Company</Link>
            <div className="h-6 w-px bg-slate-200" />
            <Link to="/login" className="text-sm font-semibold text-slate-950 hover:opacity-70 transition-opacity">Log in</Link>
            <Link to="/signup" className="px-5 py-2.5 bg-slate-950 text-white rounded-full text-sm font-semibold hover:bg-brand-600 transition-colors">Sign up</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 transition-all duration-300 overflow-hidden",
        isOpen ? "max-h-96" : "max-h-0"
      )}>
        <div className="px-4 pt-2 pb-6 space-y-4">
          <Link to="/ride" className="block text-lg font-medium">Ride</Link>
          <Link to="/driver" className="block text-lg font-medium">Drive</Link>
          <Link to="/safety" className="block text-lg font-medium">Safety</Link>
          <Link to="/about" className="block text-lg font-medium">Company</Link>
          <div className="pt-4 flex flex-col gap-3">
            <Link to="/login" className="w-full py-3 text-center font-semibold border border-slate-200 rounded-xl">Log in</Link>
            <Link to="/signup" className="w-full py-3 text-center font-semibold bg-slate-950 text-white rounded-xl">Sign up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
