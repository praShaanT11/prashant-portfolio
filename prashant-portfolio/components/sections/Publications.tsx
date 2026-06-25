import { ArrowUpRight, FileText, Code2, BookMarked } from 'lucide-react';
import { Section } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { publications, type Publication } from '@/lib/data';

function PublicationCard({ pub }: { pub: Publication }) {
  const links: { label: string; href: string; icon: typeof FileText }[] = [];
  if (pub.pdf) links.push({ label: 'PDF', href: pub.pdf, icon: FileText });
  if (pub.code) links.push({ label: 'Code', href: pub.code, icon: Code2 });
  if (pub.doi)
    links.push({
      label: 'DOI',
      href: pub.doi.startsWith('http') ? pub.doi : `https://doi.org/${pub.doi}`,
      icon: ArrowUpRight,
    });

  return (
    <article className="panel p-6 sm:p-7">
      <h3 className="font-serif text-[1.3rem] font-medium leading-snug text-fg">
        {pub.title}
      </h3>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
        {pub.authors}
      </p>
      <p className="mt-1 text-[0.9rem] italic text-faint">
        {pub.venue}
        {pub.year ? `, ${pub.year}` : ''}
      </p>
      {links.length ? (
        <div className="mt-4 flex flex-wrap gap-2 border-t border-line pt-4">
          {links.map((l) => {
            const Icon = l.icon;
            return (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 font-mono text-[12px] text-muted transition-colors hover:border-line-strong hover:text-fg"
              >
                <Icon className="h-3.5 w-3.5" aria-hidden />
                {l.label}
              </a>
            );
          })}
        </div>
      ) : null}
    </article>
  );
}

function EmptyState() {
  return (
    <div className="panel flex flex-col items-center justify-center px-6 py-14 text-center [border-style:dashed]">
      <span
        className="flex h-12 w-12 items-center justify-center rounded-full"
        style={{ backgroundColor: 'var(--accent-tint)' }}
      >
        <BookMarked className="h-5 w-5 text-accent" aria-hidden />
      </span>
      <p className="mt-5 font-serif text-[1.4rem] font-medium text-fg">
        Coming soon
      </p>
      <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-muted">
        Papers from my thesis and ongoing research are in preparation. Published
        and preprint work will appear here with links to the PDF, code, and DOI.
      </p>
    </div>
  );
}

export function Publications() {
  return (
    <Section
      id="publications"
      eyebrow="Publications"
      title="Selected publications"
      intro="Peer-reviewed papers, preprints, and technical reports."
    >
      {publications.length ? (
        <div className="space-y-5">
          {publications.map((pub, i) => (
            <Reveal key={pub.title} delay={i * 0.05}>
              <PublicationCard pub={pub} />
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal>
          <EmptyState />
        </Reveal>
      )}
    </Section>
  );
}
