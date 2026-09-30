"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
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

  const showToast = useCallback(
    (message: string, icon: "check" | "sparkles" = "check") => {
      const id = Date.now();
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
      <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
        <AnimatePresence>
          {toast && (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="pointer-events-auto flex items-center gap-3 bg-neutral-900/95 border border-white/15 text-white px-4 py-3 rounded-xl shadow-2xl backdrop-blur-xl"
            >
              {toast.icon === "sparkles" ? (
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
              ) : (
                <CheckCircle2 className="w-5 h-5 text-[#53FC18] shrink-0" />
              )}
              <span className="text-sm font-medium pr-1">{toast.message}</span>
              <button
                onClick={() => setToast(null)}
                className="text-neutral-400 hover:text-white transition-colors ml-1 p-0.5 rounded focus:outline-none"
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
