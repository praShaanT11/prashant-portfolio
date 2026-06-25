import type { ReactNode } from 'react';

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-accent-strong"
      style={{ backgroundColor: 'var(--accent-tint)' }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: 'var(--accent)' }}
        aria-hidden
      />
      {children}
    </span>
  );
}
