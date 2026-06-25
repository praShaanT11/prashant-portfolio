import type { ReactNode } from 'react';
import { Reveal } from '@/components/Reveal';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  /** constrain the body to reading width (default) or allow the wide grid */
  width?: 'content' | 'wide';
  className?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  width = 'wide',
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-line py-16 sm:py-24 ${className ?? ''}`}
    >
      <div className="mx-auto w-full max-w-wide container-px">
        <Reveal>
          <header className="mb-12 max-w-content">
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-accent" aria-hidden />
              <span className="eyebrow text-accent">{eyebrow}</span>
            </div>
            <h2 className="mt-4 font-serif text-[1.9rem] font-medium leading-[1.1] tracking-tight text-fg sm:text-[2.3rem]">
              {title}
            </h2>
            {intro ? (
              <p className="mt-4 text-[0.975rem] leading-relaxed text-muted">
                {intro}
              </p>
            ) : null}
          </header>
        </Reveal>

        <div
          className={width === 'content' ? 'max-w-content' : 'max-w-wide'}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
