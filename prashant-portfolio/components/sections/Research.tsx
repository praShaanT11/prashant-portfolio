import { Section } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { Badge } from '@/components/Badge';
import { Chip } from '@/components/Chip';
import { research } from '@/lib/data';

export function Research() {
  return (
    <Section
      id="research"
      eyebrow="Research"
      title="Learning-based decision making in financial markets"
      intro="My current work develops machine learning methods for trading and trade execution — making robust decisions under uncertainty, with explicit attention to risk."
    >
      <div className="space-y-6">
        {research.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <article className="panel p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow text-accent">{item.kind}</span>
                {item.status ? <Badge>{item.status}</Badge> : null}
              </div>

              <h3 className="mt-3 max-w-3xl font-serif text-[1.45rem] font-medium leading-snug text-fg sm:text-[1.6rem]">
                {item.title}
              </h3>

              {item.points.length ? (
                <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[0.95rem] text-muted">
                      <span
                        className="mt-[0.55rem] h-px w-3 shrink-0"
                        style={{ backgroundColor: 'var(--accent)' }}
                        aria-hidden
                      />
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {item.topics?.length ? (
                <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                  {item.topics.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
