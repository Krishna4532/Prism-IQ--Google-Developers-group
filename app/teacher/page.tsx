'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Zap, BarChart3, Activity, ShieldCheck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const DEMO_STUDENTS = [
  { id: "PX-01", name: "Aryan Sharma", accuracy: 94, cognitive: "Optimal", velocity: "1.2x" },
  { id: "PX-02", name: "Isha Verma", accuracy: 72, cognitive: "Strained", velocity: "0.8x" },
  { id: "PX-03", name: "Rohan Das", accuracy: 88, cognitive: "Optimal", velocity: "1.5x" },
  { id: "PX-04", name: "Ananya Iyer", accuracy: 45, cognitive: "Critical", velocity: "0.4x" },
];

export default function TeacherTerminal() {
  return (
    <div className="netflix-container min-h-screen text-white p-6 pt-24 lg:p-12 lg:pt-32">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Navigation & Status */}
        <div className="flex justify-between items-center mb-12">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-[#FFD700] transition-colors group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Return to Hub</span>
          </Link>
          <div className="text-right">
             <h2 className="text-2xl font-black uppercase tracking-tighter italic">Educator <span className="text-[#FFD700] not-italic">Terminal</span></h2>
             <p className="text-[9px] font-mono text-gray-600 tracking-widest uppercase mt-1">Access Level: Administrator</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Side Metrics */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="glass-panel p-8 border-l-4 border-[#FFD700]">
              <Activity className="text-[#FFD700] mb-4" size={24} />
              <p className="text-[10px] uppercase font-black text-gray-500 tracking-widest">Global Accuracy</p>
              <h3 className="text-4xl font-light italic mt-2">82.4<span className="text-sm opacity-30">%</span></h3>
            </motion.div>
            
            <div className="glass-panel p-8">
              <ShieldCheck className="text-white/40 mb-4" size={24} />
              <p className="text-[10px] uppercase font-black text-gray-500 tracking-widest">Secure Nodes</p>
              <h3 className="text-4xl font-light italic mt-2">1,204</h3>
            </div>
          </div>

          {/* Center Table & 3D Visualizer */}
          <div className="lg:col-span-3 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-panel overflow-hidden border-white/5 shadow-2xl">
              <div className="p-6 bg-white/5 border-b border-white/5 flex justify-between items-center">
                <h3 className="font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-2">
                  <BarChart3 size={14} className="text-[#FFD700]" /> Student Telemetry Data
                </h3>
              </div>
              <table className="w-full text-left">
                <thead className="text-[9px] text-gray-500 uppercase font-black bg-black/40">
                  <tr>
                    <th className="p-6">Identity</th>
                    <th className="p-6">Accuracy</th>
                    <th className="p-6">Load Status</th>
                    <th className="p-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {DEMO_STUDENTS.map((s) => (
                    <tr key={s.id} className="hover:bg-[#FFD700]/5 transition-all group">
                      <td className="p-6">
                        <span className="font-bold text-sm block group-hover:text-[#FFD700] transition-colors">{s.name}</span>
                        <span className="text-[9px] font-mono text-gray-600 uppercase">{s.id}</span>
                      </td>
                      <td className="p-6 font-mono text-[#FFD700] text-lg font-light">{s.accuracy}%</td>
                      <td className="p-6">
                        <span className={`text-[9px] font-black uppercase px-3 py-1 rounded-full border ${
                          s.cognitive === 'Critical' ? 'border-red-500/50 text-red-500' : 'border-[#FFD700]/30 text-[#FFD700]'
                        }`}>
                          {s.cognitive}
                        </span> {/* Fixed: Closing span added here */}
                      </td>
                      <td className="p-6 text-right">
                        <button className="text-[9px] font-black uppercase bg-white/5 border border-white/10 px-4 py-2 rounded hover:border-[#FFD700] hover:text-[#FFD700] transition-all">Scan Node</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Bottom 3D Wireframe Visualizer */}
            <div className="glass-panel p-10 h-[250px] flex items-center justify-center relative overflow-hidden">
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute w-[600px] h-[600px] border border-white/5 rounded-full border-dashed" />
               <Globe size={48} className="text-[#FFD700] opacity-20" />
               <div className="absolute bottom-6 text-[8px] font-black uppercase tracking-[1em] text-gray-700 animate-pulse">Neural Grid Active</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}