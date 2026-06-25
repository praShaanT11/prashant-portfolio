import { Section } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { experience } from '@/lib/data';

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Industry experience"
      intro="Engineering roles that shaped how I build reliable, production-grade systems."
    >
      <ol className="relative ml-1 border-l border-line pl-7">
        {experience.map((item, i) => (
          <li
            key={item.company}
            className={
              i === experience.length - 1 ? 'relative' : 'relative pb-10'
            }
          >
            <span
              className="absolute -left-[33px] top-1.5 h-2.5 w-2.5 rounded-full border border-line-strong ring-4 ring-bg"
              style={{ backgroundColor: 'var(--surface)' }}
              aria-hidden
            />
            <Reveal delay={i * 0.04}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-serif text-xl font-medium text-fg">
                  {item.company}
                </h3>
                <span className="font-mono text-[12px] text-faint">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 text-[0.95rem] text-accent-strong">
                {item.role}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {item.points.map((p) => (
                  <li
                    key={p}
                    className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[12px] text-muted"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
