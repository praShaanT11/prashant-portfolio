import { Section } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { Badge } from '@/components/Badge';
import { education } from '@/lib/data';

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <ol className="relative ml-1 border-l border-line pl-7">
        {education.map((item, i) => (
          <li
            key={item.institution}
            className={i === education.length - 1 ? 'relative' : 'relative pb-10'}
          >
            <span
              className="absolute -left-[33px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-bg"
              style={{ backgroundColor: 'var(--accent)' }}
              aria-hidden
            />
            <Reveal delay={i * 0.04}>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="eyebrow">{item.institution}</span>
                {item.status ? <Badge>{item.status}</Badge> : null}
              </div>
              <h3 className="mt-2 font-serif text-xl font-medium text-fg">
                {item.degree}
              </h3>
              {item.field ? (
                <p className="mt-1 text-[0.95rem] text-muted">{item.field}</p>
              ) : null}
              {item.badges?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.badges.map((b) => (
                    <span
                      key={b}
                      className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[11px] text-fg"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              ) : null}
              {item.detail ? (
                <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-faint">
                  {item.detail}
                </p>
              ) : null}
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
