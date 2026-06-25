'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, siteConfig } from '@/lib/data';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-line bg-bg/80 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-wide items-center justify-between container-px">
        <a
          href="#top"
          className="group inline-flex items-center gap-2.5"
          aria-label={`${siteConfig.name} — home`}
        >
          <span className="grid h-8 w-8 place-items-center rounded-md border border-line-strong font-serif text-sm text-fg">
            PS
          </span>
          <span className="font-serif text-[0.95rem] text-fg">
            {siteConfig.name}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted transition-colors hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted hover:text-fg"
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.6} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.6} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open ? (
        <div className="border-t border-line bg-bg/95 backdrop-blur-md md:hidden">
          <ul className="mx-auto flex max-w-wide flex-col container-px">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-line last:border-b-0">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-mono text-[13px] uppercase tracking-[0.12em] text-muted hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
