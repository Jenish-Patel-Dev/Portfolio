import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        // Organic accelerated increment
        const increment = Math.max(1, Math.floor(Math.random() * 8) + 2);
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -30,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#08090D] text-white select-none overflow-hidden"
        >
          {/* Subtle Cyber Grid Background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#9B6DFF]/20 to-[#00D4FF]/20 blur-[120px] pointer-events-none" />

          {/* Centered JP Monogram Animation */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
              {/* Outer Pulsing Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-3xl border border-dashed border-[#9B6DFF]/40"
              />

              {/* Glowing Inner Border */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-24 h-24 rounded-2xl bg-[#10121A]/80 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_40px_rgba(155,109,255,0.3)]"
              >
                {/* SVG Monogram with Draw Effect */}
                <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none">
                  <defs>
                    <linearGradient id="preloaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#9B6DFF" />
                      <stop offset="100%" stopColor="#00D4FF" />
                    </linearGradient>
                  </defs>
                  {/* J */}
                  <motion.path
                    d="M36 32 H50 V60 C50 67 44 71 36 71 C31 71 27 68 25 64"
                    stroke="url(#preloaderGrad)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                  />
                  {/* P */}
                  <motion.path
                    d="M58 70 V32 H70 C77 32 82 37 82 44 C82 51 77 56 70 56 H58"
                    stroke="url(#preloaderGrad)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: 'easeInOut' }}
                  />
                </svg>
              </motion.div>
            </div>

            {/* Name & Tagline */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-heading text-xl font-bold tracking-wider text-white uppercase mb-1"
            >
              JENISH PATEL
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.4 }}
              className="text-xs tracking-widest text-[#00D4FF] uppercase font-mono mb-6"
            >
              Oracle APEX Developer
            </motion.p>

            {/* Progress Bar & Percentage */}
            <div className="w-56 flex flex-col items-center">
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-2">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#9B6DFF] to-[#00D4FF]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between w-full text-[10px] font-mono text-gray-400">
                <span>INITIALIZING SYSTEM</span>
                <span className="text-[#00D4FF] font-semibold">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
