"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MessageSquare, Plus, X } from "lucide-react";

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: <Phone size={18} />,
      label: "โทรสายตรง",
      href: "tel:091-030-4318",
      color: "bg-emerald-500 hover:bg-emerald-600 text-white",
    },
    {
      icon: <Mail size={18} />,
      label: "ส่งอีเมล",
      href: "mailto:disasdrop@gmail.com",
      color: "bg-indigo-500 hover:bg-indigo-600 text-white",
    },
    {
      icon: <MessageSquare size={18} />,
      label: "คุยกับ AI",
      href: "#ai-assistant",
      color: "bg-purple-500 hover:bg-purple-600 text-white",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 no-print flex flex-col items-end gap-3">
      {/* Expanded Actions List */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end gap-3 mb-2">
            {actions.map((act, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.8 }}
                transition={{ duration: 0.2, delay: (actions.length - 1 - index) * 0.05 }}
                className="flex items-center gap-2"
              >
                {/* Tooltip Label */}
                <div className="px-2.5 py-1 text-[11px] font-semibold text-slate-700 bg-white dark:text-zinc-200 dark:bg-zinc-800 rounded-lg shadow-md border border-slate-200/50 dark:border-zinc-700/50">
                  {act.label}
                </div>

                {/* Circular Action Button */}
                <a
                  href={act.href}
                  onClick={() => setIsOpen(false)}
                  className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110 ${act.color}`}
                  aria-label={act.label}
                >
                  {act.icon}
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center shadow-xl shadow-indigo-600/30 hover:scale-105 transition-all cursor-pointer"
        aria-label="Toggle contact dial"
      >
        {isOpen ? <X size={24} /> : <Plus size={24} className="animate-pulse" />}
      </button>
    </div>
  );
}
