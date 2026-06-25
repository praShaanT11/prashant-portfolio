import { ArrowRight, Download, Mail } from 'lucide-react';
import { siteConfig, intro } from '@/lib/data';
import { asset } from '@/lib/asset';
import { Socials } from '@/components/Socials';

function ResearchFigure() {
  const policy =
    '34.0,236.5 43.2,231.5 52.4,226.8 61.6,223.8 70.8,220.8 80.0,217.7 89.3,213.4 98.5,210.1 107.7,205.2 116.9,200.4 126.1,194.3 135.3,188.6 144.5,185.3 153.7,181.4 162.9,177.9 172.1,172.9 181.3,168.3 190.6,165.2 199.8,160.1 209.0,156.2 218.2,151.8 227.4,146.3 236.6,142.6 245.8,138.0 255.0,132.8 264.2,126.7 273.4,122.4 282.7,119.0 291.9,116.0 301.1,110.6 310.3,104.9 319.5,99.7 328.7,94.9 337.9,89.3 347.1,84.9 356.3,81.8 365.5,76.8 374.7,71.2 384.0,67.1 393.2,64.1 402.4,60.7 411.6,57.6 420.8,54.3 430.0,50.2';
  const baseline =
    '34.0,242.8 43.2,243.8 52.4,242.3 61.6,239.6 70.8,237.5 80.0,238.4 89.3,232.9 98.5,232.6 107.7,226.0 116.9,224.3 126.1,225.5 135.3,224.7 144.5,225.3 153.7,219.9 162.9,216.5 172.1,214.9 181.3,216.0 190.6,215.9 199.8,213.9 209.0,210.5 218.2,209.5 227.4,205.1 236.6,201.8 245.8,195.9 255.0,195.1 264.2,195.7 273.4,190.8 282.7,188.2 291.9,184.1 301.1,180.8 310.3,179.7 319.5,176.3 328.7,174.0 337.9,167.5 347.1,163.4 356.3,159.0 365.5,152.0 374.7,151.2 384.0,147.1 393.2,144.8 402.4,145.4 411.6,140.4 420.8,139.9 430.0,134.0';

  return (
    <figure className="panel relative overflow-hidden p-5">
      <figcaption className="mb-4 flex items-center justify-between">
        <span className="eyebrow">Fig. 1 — Illustrative</span>
        <span className="eyebrow">cumulative reward</span>
      </figcaption>

      <svg
        viewBox="0 0 460 300"
        className="h-auto w-full"
        role="img"
        aria-label="Illustrative chart comparing a learned policy against a baseline over time."
      >
        {/* horizontal grid */}
        {[44, 95, 147, 198, 250].map((y) => (
          <line
            key={y}
            x1="34"
            x2="430"
            y1={y}
            y2={y}
            style={{ stroke: 'var(--grid-line)' }}
            strokeWidth="1"
          />
        ))}
        {/* axes */}
        <line
          x1="34"
          y1="44"
          x2="34"
          y2="250"
          style={{ stroke: 'var(--border-strong)' }}
          strokeWidth="1"
        />
        <line
          x1="34"
          y1="250"
          x2="430"
          y2="250"
          style={{ stroke: 'var(--border-strong)' }}
          strokeWidth="1"
        />

        {/* baseline series */}
        <polyline
          points={baseline}
          fill="none"
          style={{ stroke: 'var(--fg-faint)' }}
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeDasharray="4 3"
        />
        {/* learned policy series */}
        <polyline
          points={policy}
          fill="none"
          style={{ stroke: 'var(--accent)' }}
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <circle cx="430" cy="50.2" r="3" style={{ fill: 'var(--accent)' }} />
        <circle
          cx="430"
          cy="134"
          r="2.5"
          style={{ fill: 'var(--fg-faint)' }}
        />

        {/* axis ticks */}
        <text x="30" y="258" textAnchor="end" className="figure-tick">
          t₀
        </text>
        <text x="430" y="258" textAnchor="end" className="figure-tick">
          T
        </text>
      </svg>

      <div className="mt-4 flex items-center gap-5">
        <span className="flex items-center gap-2 text-[12px] text-muted">
          <span
            className="h-[2px] w-4 rounded"
            style={{ background: 'var(--accent)' }}
          />
          Learned policy
        </span>
        <span className="flex items-center gap-2 text-[12px] text-muted">
          <span
            className="h-[2px] w-4 rounded"
            style={{ background: 'var(--fg-faint)' }}
          />
          Baseline
        </span>
      </div>
    </figure>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto w-full max-w-wide container-px pb-16 pt-14 sm:pb-24 sm:pt-20"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-accent" aria-hidden />
            <span className="eyebrow text-accent">
              Incoming PhD Scholar · IIT Delhi
            </span>
          </div>

          <h1 className="mt-6 font-serif text-[2.9rem] font-medium leading-[0.98] tracking-[-0.02em] text-fg sm:text-[4rem]">
            {siteConfig.name}
          </h1>

          <p className="mt-5 max-w-xl font-mono text-[0.8rem] uppercase leading-relaxed tracking-[0.06em] text-muted sm:text-[0.85rem]">
            Machine Learning Researcher — Reinforcement Learning &amp; Time
            Series Modeling
          </p>

          <p className="mt-6 max-w-xl text-[1.02rem] leading-[1.7] text-muted">
            {intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#research"
              className="inline-flex items-center gap-2 rounded-md bg-fg px-4 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              View research
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href={asset(siteConfig.cvPath)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line-strong px-4 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-surface-hover"
            >
              <Download className="h-4 w-4" strokeWidth={1.8} />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:text-fg"
            >
              <Mail className="h-4 w-4" strokeWidth={1.8} />
              Contact
            </a>
          </div>

          <div className="mt-9">
            <Socials />
          </div>
        </div>

        <div className="hidden lg:block">
          <ResearchFigure />
        </div>
      </div>
    </section>
  );
}
