import { Section } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { achievements } from '@/lib/data';

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Recognition"
      intro="Competitive examinations, scholarships, and academic honors."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {achievements.map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={(i % 2) * 0.06}>
              <article className="panel flex h-full items-start gap-4 p-6">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: 'var(--accent-tint)' }}
                >
                  <Icon className="h-5 w-5 text-accent" aria-hidden />
                </span>
                <div>
                  <h3 className="font-medium leading-snug text-fg">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[0.9rem] leading-relaxed text-muted">
                    {item.detail}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
