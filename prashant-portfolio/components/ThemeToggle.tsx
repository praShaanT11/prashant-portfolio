'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-line-strong hover:text-fg"
    >
      {/* Render a stable icon until mounted to avoid hydration mismatch */}
      {mounted ? (
        isDark ? (
          <Sun className="h-[18px] w-[18px]" strokeWidth={1.6} />
        ) : (
          <Moon className="h-[18px] w-[18px]" strokeWidth={1.6} />
        )
      ) : (
        <Sun className="h-[18px] w-[18px] opacity-0" strokeWidth={1.6} />
      )}
    </button>
  );
}
