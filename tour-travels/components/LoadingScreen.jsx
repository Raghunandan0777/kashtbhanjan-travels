"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  // Set status message based on progress percentage
  const getStatusMessage = (p) => {
    if (p < 25) return "Connecting...";
    if (p < 55) return "Loading Fleet...";
    if (p < 85) return "Setting Up Tour Routes...";
    if (p < 100) return "Polishing Experience...";
    return "Ready";
  };

  useEffect(() => {
    // 1. Lock body scrolling on mount
    document.body.style.overflow = "hidden";

    // 2. Animate progress
    const startTime = Date.now();
    const duration = 1600; // 1.6s progress duration

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percentage = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress((prev) => {
        if (percentage >= 100) {
          clearInterval(timer);
          // Wait 400ms at 100% for visual feedback, then unmount loader
          setTimeout(() => {
            setShowLoader(false);
            // Re-enable body scrolling after exit animation finishes (800ms transition)
            setTimeout(() => {
              document.body.style.overflow = "";
            }, 800);
          }, 400);
          return 100;
        }
        return Math.max(prev, percentage);
      });
    }, 30);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {/* Noscript fallback to hide loader and restore scroll if javascript is disabled */}
      <noscript>
        <style dangerouslySetInnerHTML={{
          __html: `
            #premium-loading-screen { display: none !important; }
            body { overflow: auto !important; }
          `
        }} />
      </noscript>

      <AnimatePresence>
        {showLoader && (
          <motion.div
            id="premium-loading-screen"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0, 
              scale: 1.05,
              filter: "blur(8px)"
            }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center select-none overflow-hidden"
            style={{
              background: "radial-gradient(circle at center, #18150c 0%, #050505 100%)"
            }}
          >
            {/* Radial background animation */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none animate-pulse-subtle" />

            <div className="flex flex-col items-center max-w-lg px-6 z-10">
              
              {/* Logo Area */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative flex items-center justify-center mb-8"
              >
                {/* Slow spinning outer gold ring */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute w-28 h-28 rounded-full border border-gold/10 border-t-gold/30"
                />

                {/* Pulsing inner glow ring */}
                <div className="absolute w-24 h-24 rounded-full border border-gold/20 animate-pulse" />

                {/* Logo Image */}
                <div className="relative w-20 h-20 overflow-hidden rounded-full border border-gold-border bg-[#0a0a0a] shadow-[0_0_30px_rgba(212,175,55,0.15)] flex items-center justify-center">
                  <Image
                    src="/logo.webp"
                    alt="Shree Kashtbhanjan Travels Logo"
                    fill
                    className="object-cover p-1.5"
                    sizes="80px"
                    priority
                  />
                </div>
              </motion.div>

              {/* Welcome Message Text Area */}
              <div className="flex flex-col items-center text-center">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-gold/80 text-[10px] tracking-[0.25em] uppercase font-semibold mb-2 block"
                >
                  Welcome To
                </motion.span>
                
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="font-heading text-2xl sm:text-3xl font-extrabold tracking-wider gold-gradient-text uppercase leading-tight"
                >
                  Shree Kashtbhanjan
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-muted text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold mt-1"
                >
                  Travels
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-[11px] text-muted tracking-widest uppercase font-light mt-3"
                >
                  Your Premium Journey Begins Here
                </motion.p>
              </div>

              {/* Progress Tracker */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-12 w-64 flex flex-col items-center gap-3"
              >
                {/* Sleek Loading Bar */}
                <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative shadow-[0_0_8px_rgba(255,255,255,0.02)]">
                  <motion.div
                    className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-full absolute left-0 top-0"
                    style={{ width: `${progress}%` }}
                    transition={{ type: "tween", ease: "easeOut" }}
                  />
                </div>

                {/* Progress Stats */}
                <div className="flex justify-between items-center w-full text-[9px] tracking-[0.15em] uppercase font-mono text-muted/60 mt-1">
                  <span>{getStatusMessage(progress)}</span>
                  <span className="text-gold font-semibold font-mono">{progress}%</span>
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
