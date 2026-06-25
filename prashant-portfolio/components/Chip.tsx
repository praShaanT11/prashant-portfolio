import type { ReactNode } from 'react';

export function Chip({
  children,
  accent = false,
}: {
  children: ReactNode;
  accent?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[12px] leading-none ${
        accent
          ? 'border-line-strong text-fg'
          : 'border-line bg-surface text-muted'
      }`}
    >
      {children}
    </span>
  );
}
