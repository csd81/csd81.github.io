import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Imperative toast: parent calls the function provided via `bind` to show a message.
 */
export function Toast({ bind }: { bind: (show: (msg: string) => void) => void }) {
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    bind((m: string) => {
      setMsg(m);
      window.setTimeout(() => setMsg(null), 3200);
    });
  }, [bind]);

  return (
    <AnimatePresence>
      {msg && (
        <motion.div
          className="toast"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
        >
          {msg}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
