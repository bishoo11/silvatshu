"use client";

import React, { createContext, useContext, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Sparkles, X } from "lucide-react";

interface ToastContextType {
  showToast: (message: string, icon?: "check" | "sparkles") => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toast, setToast] = useState<{
    id: number;
    message: string;
    icon?: "check" | "sparkles";
  } | null>(null);

  const lastToastTime = useRef<number>(0);

  const showToast = useCallback(
    (message: string, icon: "check" | "sparkles" = "check") => {
      const now = Date.now();
      if (now - lastToastTime.current < 2000) {
        return; // Prevent duplicate rapid firing
      }
      lastToastTime.current = now;

      const id = now;
      setToast({ id, message, icon });
      setTimeout(() => {
        setToast((current) => (current?.id === id ? null : current));
      }, 3500);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 pointer-events-none flex justify-center sm:justify-end">
        <AnimatePresence>
          {toast && (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="pointer-events-auto flex items-center justify-between sm:justify-start gap-3 bg-neutral-900/95 border border-[#53FC18]/30 text-white px-4 py-3 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl max-w-sm w-full sm:w-auto"
            >
              <div className="flex items-center gap-3">
                {toast.icon === "sparkles" ? (
                  <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-[#53FC18] shrink-0" />
                )}
                <span className="text-sm font-medium pr-1">{toast.message}</span>
              </div>
              <button
                onClick={() => setToast(null)}
                className="text-neutral-400 hover:text-white transition-colors ml-1 p-1 rounded-lg hover:bg-white/5 focus:outline-none shrink-0"
                aria-label="Dismiss notification"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
