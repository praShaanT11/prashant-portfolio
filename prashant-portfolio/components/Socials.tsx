import { Github, Linkedin, Mail, GraduationCap } from 'lucide-react';
import { siteConfig } from '@/lib/data';

const links = [
  {
    label: 'GitHub',
    href: siteConfig.socials.github,
    icon: Github,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: siteConfig.socials.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: 'Email',
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: 'Google Scholar',
    href: siteConfig.socials.scholar,
    icon: GraduationCap,
    external: true,
  },
];

export function Socials({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {links.map(({ label, href, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          {...(external
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-line-strong hover:text-fg"
        >
          <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
        </a>
      ))}
    </div>
  );
}
