/* ============================================================================
 *  SITE CONTENT — edit everything here.
 *
 *  Items marked  // TODO  are placeholders you should replace with your real
 *  links, handles, and (optionally) a Google Scholar profile.
 * ========================================================================== */

import type { LucideIcon } from 'lucide-react';
import {
  Award,
  BadgeCheck,
  GraduationCap,
  Medal,
  Presentation,
  Users,
  Wrench,
  BookOpen,
} from 'lucide-react';

/* ---------------------------------- Site --------------------------------- */

export const siteConfig = {
  name: 'Prashant Singh',
  shortName: 'Prashant Singh',
  role: 'Incoming PhD Scholar · Machine Learning Researcher',
  tagline:
    'Incoming PhD Scholar · Machine Learning Researcher · Reinforcement Learning & Time Series Modeling',
  description:
    'Prashant Singh is a machine learning researcher and incoming PhD scholar at IIT Delhi, working on reinforcement learning, time series modeling, sequential decision making, and real-world AI systems spanning algorithmic trading and generative modeling.',
  // Used for SEO/OG absolute URLs and the sitemap.
  // Override at build time with NEXT_PUBLIC_SITE_URL, or edit this default.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://prashant-singh.vercel.app',
  cvPath: 'Prashant_Singh_CV.pdf', // file lives in /public — replace with your CV
  email: 'prashant.singh@example.com', // TODO replace with your email
  location: 'New Delhi, India',
  socials: {
    github: 'https://github.com/your-username', // TODO
    linkedin: 'https://www.linkedin.com/in/your-handle', // TODO
    scholar: 'https://scholar.google.com/citations?user=YOUR_ID', // TODO (placeholder)
  },
};

export const intro =
  'I am a machine learning researcher interested in reinforcement learning, time series modeling, sequential decision making, and real-world AI systems. My work spans algorithmic trading, generative modeling, and data-driven decision making.';

export const researchInterests = [
  'Reinforcement Learning',
  'Time Series Modeling',
  'Sequential Decision Making',
  'Machine Learning',
  'Deep Learning',
  'Financial AI',
  'Generative Models',
  'Algorithmic Trading',
  'AI for Real-World Systems',
];

/* ---------------------------------- About -------------------------------- */

export const aboutParagraphs = [
  'I am an incoming PhD scholar in the Department of Electrical Engineering at the Indian Institute of Technology (IIT) Delhi, where my research will centre on learning-based methods for sequential decision making and time series.',
  'I am completing an M.Tech in Computer Science with a specialization in Artificial Intelligence and Machine Learning at South Asian University, holding a CPI of 9.58 and a merit scholarship. My thesis develops machine learning methods for optimal trading and trade execution under market uncertainty.',
  'Before returning to research, I spent time in industry at Cognizant and Capgemini, working across enterprise middleware, infrastructure, and frontend systems. That engineering grounding shapes how I build reliable, reproducible AI for real-world settings.',
];

export const aboutFacts: { label: string; value: string }[] = [
  { label: 'Now', value: 'M.Tech CS (AI & ML), SAU' },
  { label: 'Next', value: 'PhD, EE — IIT Delhi' },
  { label: 'Focus', value: 'RL · Time Series · Finance' },
  { label: 'Based in', value: 'New Delhi, India' },
];

/* -------------------------------- Education ------------------------------ */

export interface EducationItem {
  institution: string;
  degree: string;
  field?: string;
  period?: string;
  detail?: string;
  badges?: string[];
  status?: string;
}

export const education: EducationItem[] = [
  {
    institution: 'Indian Institute of Technology Delhi',
    degree: 'Doctor of Philosophy (PhD)',
    field: 'Department of Electrical Engineering',
    detail:
      'Incoming PhD Scholar. Research in machine learning for sequential decision making and time series.',
    status: 'Incoming',
  },
  {
    institution: 'South Asian University',
    degree: 'M.Tech in Computer Science',
    field: 'Specialization in Artificial Intelligence & Machine Learning',
    detail:
      'Thesis on machine learning for optimal trading strategies and trade execution.',
    badges: ['CPI 9.58', 'Merit Scholarship'],
  },
  {
    institution: 'Chhattisgarh Swami Vivekanand Technical University (CSVTU)',
    degree: 'B.Tech',
    field: 'Electronics & Telecommunication Engineering',
    badges: ['CGPA 7.96'],
  },
];

/* -------------------------------- Research ------------------------------- */

export interface ResearchItem {
  kind: string;
  title: string;
  status?: string;
  points: string[];
  topics?: string[];
}

export const research: ResearchItem[] = [
  {
    kind: 'M.Tech Thesis',
    title: 'Optimal Trading Strategies using Machine Learning',
    status: 'Ongoing',
    points: [
      'A constraint-aware adaptive execution framework for trading under operational limits.',
      'Robust decision-making policies under market uncertainty and regime shifts.',
      'Explicit optimization of the risk–performance trade-off in execution.',
      'A GAN-based limit order book simulator for training and stress-testing strategies.',
    ],
  },
  {
    kind: 'Seminar',
    title:
      'Optimal Trade Execution in Financial Markets: A Learning-Based Perspective',
    points: [
      'A survey-and-synthesis of learning-based approaches to optimal trade execution.',
    ],
    topics: [
      'Reinforcement Learning',
      'Dynamic Programming',
      'Stochastic Control',
      'Market Microstructure',
      'Limit Order Books',
    ],
  },
];

/* ------------------------------ Publications ----------------------------- */

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year?: string;
  doi?: string;
  pdf?: string;
  code?: string;
}

// Add entries here as papers appear — the Publications section renders them
// automatically and shows a "coming soon" state while this list is empty.
export const publications: Publication[] = [];

/* -------------------------------- Projects ------------------------------- */

export interface Project {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  highlights: string[];
  links?: { github?: string; demo?: string; paper?: string };
}

export const projects: Project[] = [
  {
    name: 'GridSynth',
    tagline: 'Event-driven household energy consumption simulation',
    description:
      'A generative model that synthesizes realistic household electricity consumption traces for downstream forecasting and grid studies.',
    tech: ['WGAN-GP', 'PyTorch', 'Time Series Modeling'],
    highlights: [
      'Conditional GAN architecture',
      'Multi-head generator',
      'Temporal conditioning',
      'Statistical validation',
    ],
  },
  {
    name: 'Newsify',
    tagline: 'AI-assisted news trustworthiness framework',
    description:
      'An explainable interface that helps readers reason about the trustworthiness of news through bias signals and user-centered design.',
    tech: ['HCI', 'UX Research', 'Figma'],
    highlights: [
      'Explainable AI interfaces',
      'Bias detection',
      'User-centered design',
    ],
  },
  {
    name: 'Automated Retinal Vessel Segmentation',
    tagline: 'Biomedical image segmentation with U-Net',
    description:
      'A segmentation pipeline for retinal blood vessels combining classical preprocessing with a U-Net, optimized for Dice score.',
    tech: ['U-Net', 'PyTorch', 'Medical Imaging'],
    highlights: [
      'Classical preprocessing',
      'Biomedical segmentation',
      'Dice score optimization',
    ],
  },
  {
    name: 'Multi-Factor Stock Market Forecasting',
    tagline: 'Forecasting the S&P 500 with multi-factor models',
    description:
      'A comparative study of tree- and sequence-based models for S&P 500 forecasting, evaluated with rigorous statistical testing.',
    tech: ['Random Forest', 'LSTM', 'Transformers'],
    highlights: [
      'S&P 500 forecasting',
      'Multi-factor analysis',
      'Diebold–Mariano testing',
    ],
  },
];

/* ------------------------------- Experience ------------------------------ */

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'Cognizant',
    role: 'Senior Systems Executive',
    period: 'Jun 2022 – Jul 2023',
    points: [
      'Middleware administration',
      'Oracle WebLogic',
      'Linux infrastructure',
    ],
  },
  {
    company: 'Capgemini',
    role: 'Software Engineer',
    period: 'Aug 2021 – Mar 2022',
    points: [
      'Adobe Experience Manager',
      'Frontend development',
      'Enterprise applications',
    ],
  },
];

/* ------------------------- Leadership & Service -------------------------- */

export interface ServiceItem {
  title: string;
  detail: string;
  icon: LucideIcon;
}

export const service: ServiceItem[] = [
  {
    title: 'Teaching Assistant',
    detail: 'Supported coursework and labs in computer science and ML.',
    icon: Presentation,
  },
  {
    title: 'Student Representative',
    detail: 'Centre of Training & Placement.',
    icon: Users,
  },
  {
    title: 'Workshop Coordination',
    detail: 'Organized and ran technical workshops for students.',
    icon: BookOpen,
  },
  {
    title: 'Academic Mentoring',
    detail: 'Mentored peers and juniors on research and projects.',
    icon: GraduationCap,
  },
];

/* --------------------------------- Skills -------------------------------- */

export interface SkillGroup {
  label: string;
  icon: LucideIcon;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: 'Programming',
    icon: Wrench,
    items: ['Python', 'C', 'C++', 'JavaScript'],
  },
  {
    label: 'Machine Learning',
    icon: BadgeCheck,
    items: ['PyTorch', 'Keras', 'Scikit-Learn', 'NumPy', 'Pandas'],
  },
  {
    label: 'Research',
    icon: BookOpen,
    items: [
      'Reinforcement Learning',
      'Time Series Analysis',
      'Deep Learning',
      'Generative AI',
    ],
  },
  {
    label: 'Tools',
    icon: Wrench,
    items: ['Git', 'Linux', 'LaTeX', 'Matplotlib'],
  },
];

/* ------------------------------ Achievements ----------------------------- */

export interface Achievement {
  title: string;
  detail: string;
  icon: LucideIcon;
}

export const achievements: Achievement[] = [
  {
    title: 'GATE CS — Qualified',
    detail: 'Graduate Aptitude Test in Engineering, Computer Science.',
    icon: Medal,
  },
  {
    title: 'GATE DA — Qualified',
    detail: 'Graduate Aptitude Test in Engineering, Data Science & AI.',
    icon: Medal,
  },
  {
    title: 'SAU Merit Scholarship',
    detail: 'Awarded for academic merit at South Asian University.',
    icon: Award,
  },
  {
    title: 'First Rank — M.Tech Semester 1',
    detail: 'Ranked first in the cohort during the first semester.',
    icon: Award,
  },
];

/* -------------------------------- Nav links ------------------------------ */

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#research', label: 'Research' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];
