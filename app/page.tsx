'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShieldAlert, User, ChevronRight, Binary } from 'lucide-react';

export default function Home() {
  return (
    <div className="netflix-container min-h-screen flex flex-col items-center justify-center px-4 bg-[#050505]">
      
      {/* Top Branding Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-20 text-center"
      >
        <div className="flex items-center justify-center gap-4 mb-4">
           <Binary className="text-[#FFD700] animate-pulse" size={32} />
           <h1 className="text-6xl font-black tracking-[0.4em] text-white uppercase italic">
            PRISM <span className="text-[#FFD700] not-italic">IQ</span>
          </h1>
        </div>
        <p className="text-gray-500 text-[10px] tracking-[0.8em] uppercase font-black opacity-60">
          Neural Command Interface // System v1.0.4
        </p>
      </motion.div>

      {/* Modern Selection Cards */}
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
        
        {/* Educator Node */}
        <Link href="/teacher" className="flex-1 group no-underline">
          <motion.div 
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass-panel p-16 text-center cursor-pointer shadow-[0_0_50px_rgba(0,0,0,0.5)] h-[500px] flex flex-col justify-center items-center relative overflow-hidden"
          >
            {/* Background Glow Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-[#FFD700] group-hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all duration-500 border border-white/10">
              <ShieldAlert className="text-white group-hover:text-black" size={40} />
            </div>
            
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Educator <span className="text-[#FFD700]">Terminal</span></h2>
            <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-[250px]">
              Access global neural clusters, student velocity metrics, and AI-driven classroom strategies.
            </p>
            
            <div className="mt-12 flex items-center gap-2 text-[#FFD700] text-[10px] font-black tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-all">
              Initialize System <ChevronRight size={14} />
            </div>
          </motion.div>
        </Link>

        {/* Student Node */}
        <Link href="/student" className="flex-1 group no-underline">
          <motion.div 
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass-panel p-16 text-center cursor-pointer shadow-[0_0_50px_rgba(0,0,0,0.5)] h-[500px] flex flex-col justify-center items-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-white group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500 border border-white/10">
              <User className="text-white group-hover:text-black" size={40} />
            </div>
            
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Student <span className="text-[#FFD700]">Node</span></h2>
            <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-[250px]">
              Authenticate your identity to review personalized aptitude radars and neural learning paths.
            </p>
            
            <div className="mt-12 flex items-center gap-2 text-white text-[10px] font-black tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-all">
              Establish Link <ChevronRight size={14} />
            </div>
          </motion.div>
        </Link>
      </div>

      {/* Footer System Status */}
      <div className="mt-20 flex gap-12 text-[9px] font-black uppercase tracking-[0.4em] text-gray-700">
        <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"/> Database: Active</div>
        <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"/> Gemini Engine: Online</div>
      </div>
    </div>
  );
}