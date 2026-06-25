import { Section } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { Chip } from '@/components/Chip';
import { skills } from '@/lib/data';

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools of the trade"
      intro="Languages, frameworks, and methods I work with day to day."
    >
      <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
        {skills.map((group, i) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.label} delay={(i % 2) * 0.05}>
              <div className="h-full bg-bg p-6">
                <div className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4 text-accent" aria-hidden />
                  <h3 className="eyebrow text-fg">{group.label}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
