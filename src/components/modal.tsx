import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function Modal({
  isOpen,
  onClose,
  title,
  className,
  children,
}: PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  className?: string;
}>) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed z-[9999] top-0 bottom-0 left-0 right-0 bg-black/50 flex justify-center items-center"
          onClick={() => onClose()}
        >
          <motion.div
            className="max-w-2/4 min-w-[25%] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <div className="flex justify-between items-center p-4">
              <span className="font-bold">{title}</span>
              <button
                className="text-xl text-red-500 flex items-center"
                onClick={() => onClose?.()}
              >
                ✕
              </button>
            </div>
            <div className={`max-h-[520px] ${className}`}>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
