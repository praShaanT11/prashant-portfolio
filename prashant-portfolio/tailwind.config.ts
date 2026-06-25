import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        elev: 'var(--bg-elev)',
        line: 'var(--border)',
        'line-strong': 'var(--border-strong)',
        fg: 'var(--fg)',
        muted: 'var(--fg-muted)',
        faint: 'var(--fg-faint)',
        accent: 'var(--accent)',
        'accent-strong': 'var(--accent-strong)',
        surface: 'var(--surface)',
        'surface-hover': 'var(--surface-hover)',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'Cambria', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '46rem',
        wide: '64rem',
      },
      letterSpacing: {
        eyebrow: '0.2em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
};

export default config;
