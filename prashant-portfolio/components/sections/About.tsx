import { Section } from '@/components/Section';
import { Chip } from '@/components/Chip';
import { Reveal } from '@/components/Reveal';
import {
  aboutParagraphs,
  aboutFacts,
  researchInterests,
  siteConfig,
} from '@/lib/data';

function PortraitPlaceholder() {
  // Intentional placeholder. To use a real photo, drop `profile.jpg` into
  // /public and replace this block with:
  //   <img src={asset('profile.jpg')} alt="Prashant Singh" className="aspect-square w-full rounded-xl object-cover" />
  return (
    <div className="panel relative aspect-square w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden
      />
      <div className="absolute left-4 top-4">
        <span className="eyebrow">Portrait</span>
      </div>
      <div className="absolute inset-0 grid place-items-center">
        <span className="font-serif text-[5rem] leading-none text-fg/90">
          PS
        </span>
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <span className="eyebrow">{siteConfig.name}</span>
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: 'var(--accent)' }}
          aria-hidden
        />
      </div>
    </div>
  );
}

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Researcher at the intersection of learning and decisions"
    >
      <div className="grid gap-10 md:grid-cols-[300px_1fr] md:gap-12">
        <Reveal className="order-2 md:order-1">
          <div className="md:sticky md:top-24">
            <PortraitPlaceholder />
            <dl className="mt-6 divide-y divide-line">
              {aboutFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-4 py-2.5"
                >
                  <dt className="eyebrow">{fact.label}</dt>
                  <dd className="text-right text-sm text-fg">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal className="order-1 md:order-2" delay={0.05}>
          <div className="space-y-5 text-[1.02rem] leading-[1.75] text-muted">
            {aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="eyebrow mb-4">Research interests</h3>
            <div className="flex flex-wrap gap-2">
              {researchInterests.map((interest) => (
                <Chip key={interest}>{interest}</Chip>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
