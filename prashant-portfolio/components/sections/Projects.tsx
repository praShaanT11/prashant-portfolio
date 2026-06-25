import { Github, ArrowUpRight, ExternalLink } from 'lucide-react';
import { Section } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { Chip } from '@/components/Chip';
import { projects, type Project } from '@/lib/data';

function ProjectCard({ project }: { project: Project }) {
  const links = project.links;
  return (
    <article className="panel group flex h-full flex-col p-6 transition-colors hover:border-line-strong">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-serif text-[1.35rem] font-medium leading-snug text-fg">
          {project.name}
        </h3>
        {links ? (
          <div className="flex shrink-0 items-center gap-1.5">
            {links.github ? (
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} source on GitHub`}
                className="rounded-md p-1.5 text-faint transition-colors hover:bg-surface-hover hover:text-fg"
              >
                <Github className="h-4 w-4" aria-hidden />
              </a>
            ) : null}
            {links.demo ? (
              <a
                href={links.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} live demo`}
                className="rounded-md p-1.5 text-faint transition-colors hover:bg-surface-hover hover:text-fg"
              >
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            ) : null}
            {links.paper ? (
              <a
                href={links.paper}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} paper`}
                className="rounded-md p-1.5 text-faint transition-colors hover:bg-surface-hover hover:text-fg"
              >
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>

      <p className="mt-1.5 font-mono text-[12.5px] uppercase tracking-[0.08em] text-accent-strong">
        {project.tagline}
      </p>

      <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
        {project.description}
      </p>

      {project.highlights.length ? (
        <ul className="mt-4 space-y-1.5">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="flex gap-2.5 text-[0.9rem] leading-relaxed text-muted"
            >
              <span
                className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full"
                style={{ backgroundColor: 'var(--accent)' }}
                aria-hidden
              />
              {h}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {project.tech.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      intro="A selection of research-driven and applied projects across generative modeling, forecasting, medical imaging, and human-centered AI."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 2) * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
