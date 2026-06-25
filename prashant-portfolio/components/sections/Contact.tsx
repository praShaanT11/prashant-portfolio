'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { siteConfig } from '@/lib/data';

/* ----------------------------------------------------------------------------
 * This form opens the visitor's email client with a pre-filled message
 * (mailto:) so the site stays fully static and needs no backend. To collect
 * submissions on a server instead, swap the handler for a POST to a service
 * like Formspree (https://formspree.io) or a serverless function.
 * -------------------------------------------------------------------------- */

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const directLinks = [
    { label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
    { label: 'LinkedIn', value: 'Connect', href: siteConfig.socials.linkedin, icon: Linkedin },
    { label: 'GitHub', value: 'Follow', href: siteConfig.socials.github, icon: Github },
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || 'someone'}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? `\n${email}` : ''}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  const field =
    'w-full rounded-lg border border-line bg-bg px-3.5 py-2.5 text-[0.95rem] text-fg placeholder:text-faint transition-colors focus:border-line-strong focus:outline-none focus:ring-2 focus:ring-[var(--accent-tint)]';

  return (
    <section id="contact" className="scroll-mt-24 border-t border-line py-16 sm:py-24">
      <div className="mx-auto w-full max-w-wide container-px">
        <Reveal>
          <header className="mb-12 max-w-content">
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-accent" aria-hidden />
              <span className="eyebrow text-accent">Contact</span>
            </div>
            <h2 className="mt-4 font-serif text-[1.9rem] font-medium leading-[1.1] tracking-tight text-fg sm:text-[2.3rem]">
              Let&rsquo;s talk
            </h2>
            <p className="mt-4 text-[0.975rem] leading-relaxed text-muted">
              I&rsquo;m open to research collaborations, internships, and academic
              discussions. The quickest way to reach me is by email.
            </p>
          </header>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Direct links */}
          <Reveal>
            <div className="space-y-3">
              {directLinks.map((l) => {
                const Icon = l.icon;
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noreferrer"
                    className="panel flex items-center gap-4 p-4 transition-colors hover:border-line-strong"
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: 'var(--accent-tint)' }}
                    >
                      <Icon className="h-5 w-5 text-accent" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block eyebrow text-faint">{l.label}</span>
                      <span className="mt-1 block truncate text-[0.95rem] text-fg">
                        {l.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.06}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block eyebrow text-faint">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block eyebrow text-faint">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={field}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block eyebrow text-faint">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="A few lines about what you have in mind…"
                  className={`${field} resize-y`}
                />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-[0.9rem] font-medium text-bg transition-opacity hover:opacity-90"
                >
                  <Send className="h-4 w-4" aria-hidden />
                  Send message
                </button>
                <span className="text-[0.8rem] text-faint">
                  Opens in your email client.
                </span>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
