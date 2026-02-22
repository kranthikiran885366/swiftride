import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[12rem] font-display font-bold leading-none text-slate-100 select-none"
        >
          404
        </motion.h1>
        <div className="-mt-12 relative z-10">
          <h2 className="text-4xl font-display font-bold mb-4">Lost in Transit?</h2>
          <p className="text-slate-500 mb-10 max-w-md mx-auto">
            The page you are looking for doesn't exist or has been moved to another terminal.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-950 text-white rounded-full font-bold hover:bg-brand-600 transition-all group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Base
          </Link>
        </div>
      </div>
    </div>
  );
}
