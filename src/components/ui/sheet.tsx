import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';

interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function Sheet({ open, onOpenChange, title, description, children }: SheetProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onOpenChange(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onOpenChange]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label={title}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={() => onOpenChange(false)}
            className="fixed inset-0 bg-primary-deep/45 backdrop-blur-xs"
            aria-hidden="true"
          />

          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex h-full w-full max-w-[320px] flex-col bg-background border-l border-border p-6 shadow-architectural-hover"
          >
            <div className="flex items-start justify-between gap-4 border-b border-border pb-5">
              <div>
                <p className="font-serif text-2xl font-semibold tracking-tight text-foreground">
                  {title}
                </p>
                {description && (
                  <p className="mt-1 text-xs text-muted-foreground">{description}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                aria-label="Fechar menu de navegação"
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border text-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>

            <div className="mt-6 flex flex-1 flex-col justify-between overflow-y-auto">
              {children}
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
