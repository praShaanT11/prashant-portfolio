import { ArrowUp } from 'lucide-react';
import { Socials } from '@/components/Socials';
import { siteConfig, navLinks } from '@/lib/data';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-12">
      <div className="mx-auto w-full max-w-wide container-px">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <a
              href="#top"
              className="font-serif text-lg font-medium text-fg transition-colors hover:text-accent"
            >
              {siteConfig.name}
            </a>
            <p className="mt-2 text-[0.875rem] leading-relaxed text-muted">
              {siteConfig.role}
            </p>
            <div className="mt-4">
              <Socials />
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.9rem] text-muted transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8rem] text-faint">
            © {year} {siteConfig.name}. Built with Next.js &amp; Tailwind CSS.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-[0.8rem] text-muted transition-colors hover:text-fg"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
