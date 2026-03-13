import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface StrikeDisplayProps {
  strikes: number;
  maxStrikes?: number;
}

export function StrikeDisplay({ strikes, maxStrikes = 3 }: StrikeDisplayProps) {
  return (
    <div className="flex gap-6 justify-center items-center mb-12">
      <h3 className="text-3xl font-black text-rose-500 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(244,63,94,0.5)]">
        Strikes
      </h3>
      <div className="flex gap-4">
        {Array.from({ length: maxStrikes }).map((_, index) => (
          <div key={index} className="relative">
            <AnimatePresence mode="wait">
              {index < strikes ? (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ 
                    scale: 1, 
                    rotate: 0,
                  }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 260, 
                    damping: 20,
                  }}
                  className="relative w-20 h-20 bg-gradient-to-br from-rose-500 to-rose-700 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(244,63,94,0.6)] border-4 border-rose-400"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent" />
                  <X className="relative w-12 h-12 text-white stroke-[5] drop-shadow-lg" />
                  
                  {/* Pulse ring */}
                  <motion.div
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{ scale: 1.4, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 rounded-full border-4 border-rose-400"
                  />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-20 h-20 rounded-full border-4 border-slate-600/40 bg-slate-800/30 backdrop-blur-sm shadow-inner"
                />
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}