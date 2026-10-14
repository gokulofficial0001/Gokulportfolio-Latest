import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  FileText,
  GitBranch,
  Layers3,
  Mail,
  Menu,
  MoonStar,
  Network,
  ShieldCheck,
  SunMedium,
  UsersRound,
  X,
} from 'lucide-react';
import './index.css';

const navItems = [
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Capabilities', 'capabilities'],
  ['Implementations', 'implementations'],
  ['Skills', 'skills'],
  ['Learning', 'learning'],
  ['Contact', 'contact'],
];
const primaryNavItems = navItems.slice(0, 5);

const capabilities = [
  {
    icon: Layers3,
    title: 'Healthcare IT Implementation',
    text: 'Hospital systems, workflow validation, functional testing, UAT, go-live support, and post-implementation coordination.',
    tags: ['HIS', 'UAT', 'Functional testing'],
  },
  {
    icon: GitBranch,
    title: 'Business & Workflow Analysis',
    text: 'Understand operational requirements, map current processes, surface gaps, and translate needs into practical system workflows.',
    tags: ['Requirement gathering', 'Process mapping', 'Workflow analysis'],
  },
  {
    icon: Database,
    title: 'Process Digitization & Automation',
    text: 'Replace fragmented manual tracking with structured digital workflows that improve visibility, organization, and traceability.',
    tags: ['Digitization', 'Automation', 'Documentation'],
  },
  {
    icon: UsersRound,
    title: 'User Adoption & Coordination',
    text: 'Coordinate hospital users, vendors, application teams, and stakeholders through testing, deployment, guidance, and improvement.',
    tags: ['User training', 'Vendor coordination', 'Stakeholder communication'],
  },
];

const projects = [
  {
    number: '01',
    title: 'Hospital Information System (HIS)',
    category: 'Enterprise Healthcare IT Implementation',
    problem: 'The legacy VB.NET system was not able to support the hospital’s modern digital workflow expectations across departments and services.',
    description: 'Supported and coordinated HIS implementation workflows with a strong focus on validation, user coordination, functional testing, UAT, issue tracking, and deployment readiness.',
    outcome: 'A more structured and accessible digital foundation for multi-department hospital operations, improving implementation readiness and user adoption.',
    role: 'Requirement understanding, implementation coordination, testing support, UAT, and issue validation.',
    status: 'FLAGSHIP IMPLEMENTATION',
    icon: Activity,
  },
  {
    number: '02',
    title: 'Transport Management System',
    category: 'Hospital Operations Digitization',
    problem: 'The hospital relied on manual workflows to manage transport activity, which limited visibility and consistency.',
    description: 'Digitized transport-related operations to streamline planning, improve visibility, and reduce dependency on fragmented manual tracking.',
    outcome: 'A centralized transport workflow that promotes better coordination, visibility, and operational control.',
    role: 'Workflow analysis, implementation coordination, validation, and stakeholder communication.',
    status: 'IMPLEMENTED',
    icon: Network,
  },
  {
    number: '03',
    title: 'License Management System (LMS)',
    category: 'Compliance & Renewal Management',
    problem: 'Hospital licenses and renewal dates were hard to track systematically, creating risk in compliance monitoring.',
    description: 'Implemented a centralized system for license tracking, validity monitoring, and renewal planning across hospital operations.',
    outcome: 'Improved visibility of compliance-related records and a clearer overview of upcoming renewal needs.',
    role: 'Requirement understanding, workflow validation, reporting support, and implementation assistance.',
    status: 'IMPLEMENTED',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'Payment Tracking System',
    category: 'Transaction Process Digitization',
    problem: 'Manual tracking of payments and financial records created operational effort and limited traceability.',
    description: 'Introduced a structured payment workflow to improve tracking, documentation, and visibility of hospital transactions.',
    outcome: 'A more organized and traceable payment process across routine operational and administrative transactions.',
    role: 'Process review, field validation, stakeholder coordination, and issue tracking.',
    status: 'IMPLEMENTED',
    icon: BarChart3,
  },
  {
    number: '05',
    title: 'Hospital Auditorium Booking System',
    category: 'Resource Booking Digitization',
    problem: 'Auditorium scheduling was spread across notebooks and ad hoc processes, creating friction for coordination and visibility.',
    description: 'Built a centralized booking flow to simplify venue management and improve access to schedule information.',
    outcome: 'A cleaner reservation process that supports smoother scheduling of seminars, meetings, and events.',
    role: 'Process mapping, requirement validation, implementation support, and documentation.',
    status: 'IMPLEMENTED',
    icon: BriefcaseBusiness,
  },
];

const skillGroups = [
  {
    title: 'Healthcare systems',
    items: ['Healthcare IT', 'Hospital Information Systems', 'Digital Health', 'Digital Transformation'],
    tone: 'brand',
  },
  {
    title: 'Workflow & analysis',
    items: ['Workflow Analysis', 'Workflow Optimization', 'Process Digitization', 'Process Automation', 'Requirement Gathering'],
    tone: 'slate',
  },
  {
    title: 'Implementation & validation',
    items: ['Application Implementation', 'Application Support', 'UAT', 'Functional Testing', 'Issue Tracking'],
    tone: 'brand',
  },
  {
    title: 'Stakeholder coordination',
    items: ['Stakeholder Coordination', 'Vendor Coordination', 'Hospital Operations Technology'],
    tone: 'slate',
  },
  {
    title: 'Data & supporting skills',
    items: ['Data Analytics', 'Excel', 'SQL', 'Power BI', 'Troubleshooting', 'Documentation'],
    tone: 'brand',
  },
];

function App() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = window.localStorage.getItem('portfolio-theme');
      if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;
    } catch (error) {
      console.warn('Unable to read the saved portfolio theme.', error);
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });
  const [activeSection, setActiveSection] = useState('about');
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const headerRef = useRef(null);
  const isDark = theme === 'dark';

  useEffect(() => {
    try {
      window.localStorage.setItem('portfolio-theme', theme);
    } catch (error) {
      console.warn('Unable to save the portfolio theme preference.', error);
    }
  }, [theme]);

  useEffect(() => {
    const sections = navItems
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: '-90px 0px -65% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const closeOnOutsideClick = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setIsSubmitting(true);
    setFormStatus('Sending your inquiry…');
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      if (!response.ok) throw new Error(`Form submission failed with status ${response.status}.`);
      setFormStatus('Thanks — your inquiry was sent successfully.');
      form.reset();
    } catch (error) {
      console.error('Unable to submit the portfolio inquiry.', error);
      setFormStatus('Your message could not be sent. Please email gokulofficial0001@gmail.com instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={isDark ? 'theme-dark min-h-screen bg-slate-950 text-slate-100' : 'theme-light min-h-screen bg-slate-50 text-slate-900'}>
      <header ref={headerRef} className={isDark ? 'fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl' : 'fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl'}>
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#home" className="focus-ring flex items-center gap-3 text-sm font-bold tracking-tight" aria-label="Go to homepage">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-teal-500 font-mono text-xs text-slate-950">GS</span>
            <span className={isDark ? 'text-[10px] font-bold leading-tight text-slate-100 sm:text-sm' : 'text-[10px] font-bold leading-tight text-slate-900 sm:text-sm'}>
              GOKULRAJ SAKTHIVEL <i className="hidden font-normal text-teal-500 not-italic sm:inline">| HEALTHCARE IT</i>
            </span>
          </a>

          <nav className={isDark ? 'hidden gap-5 text-xs font-bold uppercase tracking-[.1em] text-slate-300 xl:flex' : 'hidden gap-5 text-xs font-bold uppercase tracking-[.1em] text-slate-600 xl:flex'} aria-label="Primary navigation">
            {primaryNavItems.map(([label, id]) => (
              <a
                aria-current={activeSection === id ? 'location' : undefined}
                className={`${activeSection === id ? 'text-teal-500' : ''} focus-ring hover:text-teal-500`}
                href={`#${id}`}
                key={id}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="ml-auto mr-2 flex items-center gap-3 lg:ml-0 lg:mr-0">
            <button
              type="button"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className={isDark ? 'focus-ring flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 max-lg:gap-0 max-lg:p-2' : 'focus-ring flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm max-lg:gap-0 max-lg:p-2'}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <SunMedium className="h-4 w-4 text-amber-300" aria-hidden="true" /> : <MoonStar className="h-4 w-4 text-indigo-500" aria-hidden="true" />}
              <span className="hidden xl:inline">{isDark ? 'Light' : 'Dark'}</span>
            </button>

            <a href="#contact" className="focus-ring hidden items-center gap-2 rounded-lg bg-teal-500 px-4 py-3 text-xs font-bold text-slate-950 xl:flex">
              Let’s connect <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <button
            className={isDark ? 'focus-ring rounded-md p-2 xl:hidden' : 'focus-ring rounded-md p-2 text-slate-800 xl:hidden'}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        {open && (
          <nav id="mobile-navigation" className={isDark ? 'border-t border-slate-800 bg-slate-950 px-5 py-4 xl:hidden' : 'border-t border-slate-200 bg-white px-5 py-4 xl:hidden'} aria-label="Mobile navigation">
            {primaryNavItems.map(([label, id]) => (
              <a
                aria-current={activeSection === id ? 'location' : undefined}
                onClick={() => setOpen(false)}
                className={`${isDark ? 'text-slate-100' : 'text-slate-800'} ${activeSection === id ? 'text-teal-500' : ''} focus-ring block py-3 text-sm font-bold`}
                href={`#${id}`}
                key={id}
              >
                {label}
              </a>
            ))}
            <a onClick={() => setOpen(false)} href="#contact" className="focus-ring mt-2 inline-flex items-center gap-2 rounded-lg bg-teal-500 px-4 py-3 text-sm font-bold text-slate-950">
              Let’s connect <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </nav>
        )}
      </header>

      <main id="home">
        <section className={isDark ? 'grid-bg relative overflow-hidden pt-16 sm:pt-32' : 'grid-bg relative overflow-hidden bg-white pt-16 sm:pt-32'} aria-labelledby="hero-title">
          <div className="hero-system-art" aria-hidden="true">
            <span className="hero-system-label">HOSPITAL SYSTEMS</span>
            <span className="hero-system-node node-one" />
            <span className="hero-system-node node-two" />
            <span className="hero-system-node node-three" />
            <span className="hero-system-node node-four" />
            <span className="hero-system-scan" />
          </div>
          <div className="relative mx-auto max-w-7xl px-5 py-10 sm:py-20 lg:px-8 lg:py-28">
            <div className="max-w-5xl">
              <div className={isDark ? 'mb-7 inline-flex items-center gap-3 rounded-full border border-teal-800 bg-teal-950 px-3 py-2 text-xs font-bold uppercase tracking-[.18em] text-teal-200 shadow-sm' : 'mb-7 inline-flex items-center gap-3 rounded-full border border-teal-200 bg-teal-50 px-3 py-2 text-xs font-bold uppercase tracking-[.18em] text-teal-700 shadow-sm'}>
                <span className="h-2 w-2 rounded-full bg-teal-500" aria-hidden="true" />
                Open to healthcare IT opportunities
              </div>

              <p className={isDark ? 'mb-6 font-mono text-xs tracking-[.16em] text-teal-300' : 'mb-6 font-mono text-xs tracking-[.16em] text-teal-600'}>HEALTHCARE IT IMPLEMENTATION · GKNM HOSPITAL · COIMBATORE</p>
              <h1 id="hero-title" className={isDark ? 'text-4xl font-bold leading-[1.02] tracking-[-.055em] text-white sm:text-6xl lg:text-[68px]' : 'text-4xl font-bold leading-[1.02] tracking-[-.055em] text-slate-900 sm:text-6xl lg:text-[68px]'}>
                Gokulraj Sakthivel
              </h1>
              <p className={isDark ? 'mt-6 max-w-xl text-base leading-7 text-slate-300' : 'mt-6 max-w-xl text-base leading-7 text-slate-600'}>
                I turn hospital workflows into reliable digital systems through implementation, workflow validation, process digitization, and user-focused delivery.
              </p>

              <div className="mt-8 flex max-w-2xl flex-wrap gap-2">
                {['HIS', 'Hospital systems', 'Workflow validation', 'UAT', 'Process digitization', 'Automation', 'Digital transformation'].map((tag) => (
                  <span className={isDark ? 'rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 font-mono text-[10px] text-slate-200' : 'rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 font-mono text-[10px] text-slate-700'} key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#implementations" className="focus-ring hero-primary flex items-center gap-3 rounded-lg px-5 py-4 text-sm font-bold text-white">
                  View my implementations <ArrowDownRight className="h-4 w-4 text-teal-300" aria-hidden="true" />
                </a>
                <a href="#resume" className={isDark ? 'focus-ring flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-900 px-5 py-4 text-sm font-bold text-slate-100 shadow-sm hover:border-slate-600' : 'focus-ring flex items-center gap-3 rounded-lg border border-slate-300 bg-white px-5 py-4 text-sm font-bold shadow-sm hover:border-slate-400'}>
                  View résumé <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className={isDark ? 'mt-12 grid w-full max-w-4xl divide-y border-y border-slate-700 bg-slate-900/60 sm:mt-20 sm:grid-cols-3 sm:divide-x sm:divide-y-0' : 'mt-12 grid w-full max-w-4xl divide-y border-y border-slate-200 bg-white sm:mt-20 sm:grid-cols-3 sm:divide-x sm:divide-y-0'}>
              <Stat k="WHO I AM" v="Healthcare IT implementation professional" isDark={isDark} />
              <Stat k="WHAT I DO" v="Hospital systems and digital workflow delivery" isDark={isDark} />
              <Stat k="CURRENT FOCUS" v="HIS / digital transformation / process optimization" isDark={isDark} />
            </div>
          </div>
        </section>

        <section id="metrics" className={isDark ? 'border-b border-slate-800 bg-slate-950 px-5 py-12 lg:px-8' : 'border-b border-slate-200 bg-white px-5 py-12 lg:px-8'}>
          <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-3">
            <Metric value="05" label="Hospital implementation initiatives" isDark={isDark} />
            <Metric value="01" label="Flagship HIS implementation" isDark={isDark} />
            <Metric value="50+" label="Users trained across the hospital" isDark={isDark} />
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[.8fr_2fr] lg:px-8 lg:py-32">
          <Label n="01" t="ABOUT" isDark={isDark} />
          <div>
            <h2 className={isDark ? 'max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-.055em] text-white sm:text-5xl' : 'max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-.055em] text-slate-900 sm:text-5xl'}>
              Hospital operations, translated into <span className={isDark ? 'font-serif font-normal italic text-teal-300' : 'font-serif font-normal italic text-teal-600'}>usable systems.</span>
            </h2>
            <p className={isDark ? 'mt-8 max-w-3xl text-lg leading-8 text-slate-300' : 'mt-8 max-w-3xl text-lg leading-8 text-slate-600'}>
              I’m a Healthcare IT Implementation professional focused on transforming hospital operations through technology, workflow optimization, and process digitization.
            </p>
            <p className={isDark ? 'mt-5 max-w-3xl leading-7 text-slate-400' : 'mt-5 max-w-3xl leading-7 text-slate-500'}>
              I work with hospital users, operational teams, vendors, and technical stakeholders to understand requirements, validate workflows, coordinate implementations, perform testing and UAT, track issues, and support users during and after deployment.
            </p>
            <p className={isDark ? 'mt-5 max-w-3xl leading-7 text-slate-400' : 'mt-5 max-w-3xl leading-7 text-slate-500'}>
              My long-term direction is Healthcare IT, HIS/EMR implementation, Digital Health, Business Analysis, and Healthcare Digital Transformation.
            </p>
          </div>
        </section>

        <section id="experience" className={isDark ? 'border-y border-slate-800 bg-slate-900 px-5 py-24 lg:px-8 lg:py-32' : 'border-y border-slate-200 bg-white px-5 py-24 lg:px-8 lg:py-32'}>
          <div className="mx-auto max-w-7xl">
            <Label n="02" t="PROFESSIONAL EXPERIENCE" isDark={isDark} />
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className={isDark ? 'font-mono text-[10px] tracking-[.14em] text-teal-300' : 'font-mono text-[10px] tracking-[.14em] text-teal-600'}>CURRENT ROLE</p>
                <h2 className={isDark ? 'mt-4 text-4xl font-bold tracking-tight text-white' : 'mt-4 text-4xl font-bold tracking-tight text-slate-900'}>Implementation Officer – Healthcare IT</h2>
                <p className={isDark ? 'mt-3 text-lg text-slate-400' : 'mt-3 text-lg text-slate-500'}>GKNM Hospital · Coimbatore, Tamil Nadu</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  'Support hospital information systems and digital workflows.',
                  'Understand operational requirements and existing processes.',
                  'Coordinate users, vendors, application teams, and stakeholders.',
                  'Perform workflow validation, functional testing, and UAT.',
                  'Track issues, validate bugs, and support upgrades and go-live.',
                  'Provide application guidance and maintain implementation documentation.',
                ].map((item) => (
                  <div className={isDark ? 'flex gap-3 border-t border-slate-700 pt-4 text-sm leading-6 text-slate-300' : 'flex gap-3 border-t border-slate-200 pt-4 text-sm leading-6 text-slate-600'} key={item}>
                    <CheckCircle2 className={isDark ? 'mt-1 h-4 w-4 shrink-0 text-teal-300' : 'mt-1 h-4 w-4 shrink-0 text-teal-600'} aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" className={isDark ? 'bg-slate-950/70 px-5 py-24 lg:px-8 lg:py-32' : 'bg-slate-100 px-5 py-24 lg:px-8 lg:py-32'}>
          <div className="mx-auto max-w-7xl">
            <Label n="03" t="CORE CAPABILITIES" isDark={isDark} />
            <div className="max-w-3xl">
              <h2 className={isDark ? 'text-4xl font-bold leading-[1.05] tracking-[-.055em] text-white sm:text-5xl' : 'text-4xl font-bold leading-[1.05] tracking-[-.055em] text-slate-900 sm:text-5xl'}>Implementation is a process, not just software support.</h2>
              <p className={isDark ? 'mt-6 text-lg leading-8 text-slate-300' : 'mt-6 text-lg leading-8 text-slate-600'}>A practical mix of workflow understanding, delivery discipline, and user-focused coordination.</p>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {capabilities.map(({ icon: Icon, title, text, tags }, index) => (
                <article className={isDark ? 'rounded-lg border border-slate-700 bg-slate-900 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl' : 'rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl'} key={title}>
                  <div className="flex items-center justify-between">
                    <Icon className={isDark ? 'h-7 w-7 text-teal-300' : 'h-7 w-7 text-teal-600'} aria-hidden="true" />
                    <span className={isDark ? 'font-mono text-xs text-slate-400' : 'font-mono text-xs text-slate-500'}>0{index + 1}</span>
                  </div>
                  <h3 className={isDark ? 'mt-10 text-2xl font-bold tracking-tight text-white' : 'mt-10 text-2xl font-bold tracking-tight text-slate-900'}>{title}</h3>
                  <p className={isDark ? 'mt-4 text-sm leading-6 text-slate-300' : 'mt-4 text-sm leading-6 text-slate-600'}>{text}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span className={isDark ? 'rounded-full bg-slate-800 px-3 py-1 font-mono text-[10px] text-slate-200' : 'rounded-full bg-slate-100 px-3 py-1 font-mono text-[10px] text-slate-600'} key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="implementations" className={isDark ? 'bg-slate-950 px-5 py-24 text-white lg:px-8 lg:py-32' : 'bg-white px-5 py-24 text-slate-900 lg:px-8 lg:py-32'}>
          <div className="mx-auto max-w-7xl">
            <Label n="04" t="IMPLEMENTATION PORTFOLIO" isDark={isDark} />
            <div className="max-w-3xl">
              <h2 className={isDark ? 'text-4xl font-bold leading-[1.05] tracking-[-.055em] text-white sm:text-5xl' : 'text-4xl font-bold leading-[1.05] tracking-[-.055em] text-slate-900 sm:text-5xl'}>Five hospital initiatives built around real operational needs.</h2>
              <p className={isDark ? 'mt-6 text-lg leading-8 text-slate-300' : 'mt-6 text-lg leading-8 text-slate-600'}>Hands-on experience implementing and digitizing hospital workflows across clinical, operational, administrative, and compliance-related processes.</p>
            </div>
            <div className="mt-12 grid gap-4 lg:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard project={project} featured={index === 0} key={project.title} isDark={isDark} />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <Label n="05" t="SKILLS MATRIX" isDark={isDark} />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map(({ title, items, tone }) => (
              <SkillGroup title={title} items={items} tone={tone} isDark={isDark} key={title} />
            ))}
          </div>

        </section>

        <section id="learning" className={isDark ? 'bg-slate-950/80 px-5 py-24 lg:px-8 lg:py-32' : 'bg-slate-100 px-5 py-24 lg:px-8 lg:py-32'}>
          <div className="mx-auto max-w-7xl">
            <Label n="06" t="LEARNING & DEVELOPMENT" isDark={isDark} />
            <div className="grid gap-12 lg:grid-cols-[1.3fr_.7fr]">
              <div>
                <h2 className={isDark ? 'text-3xl font-bold tracking-tight text-white' : 'text-3xl font-bold tracking-tight text-slate-900'}>Learning that supports delivery.</h2>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    { title: 'Healthcare IT Foundations', details: 'Workflow design, operational awareness, and digital service alignment in healthcare settings.', icon: Activity },
                    { title: 'Data & Reporting', details: 'Excel, SQL, and Power BI for operational visibility, validation, and decision support.', icon: BarChart3 },
                    { title: 'Digital Health Awareness', details: 'HL7, FHIR, DICOM, interoperability concepts, and healthcare integration basics.', icon: Database },
                    { title: 'Implementation & Governance', details: 'Issue handling, documentation discipline, and process improvement for system rollouts.', icon: FileText },
                  ].map(({ title, details, icon: Icon }) => (
                    <article className={isDark ? 'rounded-lg border border-slate-700 bg-slate-900 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg' : 'rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg'} key={title}>
                      <Icon className={isDark ? 'h-6 w-6 text-teal-300' : 'h-6 w-6 text-teal-600'} aria-hidden="true" />
                      <h3 className={isDark ? 'mt-7 font-bold text-white' : 'mt-7 font-bold text-slate-900'}>{title}</h3>
                      <p className={isDark ? 'mt-2 text-sm leading-6 text-slate-300' : 'mt-2 text-sm leading-6 text-slate-600'}>{details}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <h2 className={isDark ? 'text-3xl font-bold tracking-tight text-white' : 'text-3xl font-bold tracking-tight text-slate-900'}>Education</h2>
                <article className={isDark ? 'mt-8 border-l-2 border-teal-400 pl-5' : 'mt-8 border-l-2 border-teal-500 pl-5'}>
                  <p className={isDark ? 'font-mono text-[10px] tracking-[.12em] text-teal-300' : 'font-mono text-[10px] tracking-[.12em] text-teal-600'}>2022–2024</p>
                  <h3 className={isDark ? 'mt-3 text-xl font-bold text-white' : 'mt-3 text-xl font-bold text-slate-900'}>Dr. G.R. Damodaran College of Science</h3>
                  <p className={isDark ? 'mt-3 text-sm leading-6 text-slate-300' : 'mt-3 text-sm leading-6 text-slate-600'}>Focused on technology, practical innovation, and project-based learning with participation in technical exhibitions and hands-on activities.</p>
                </article>
                <article className={isDark ? 'mt-10 border-l-2 border-slate-600 pl-5' : 'mt-10 border-l-2 border-slate-300 pl-5'}>
                  <p className={isDark ? 'font-mono text-[10px] tracking-[.12em] text-slate-400' : 'font-mono text-[10px] tracking-[.12em] text-slate-500'}>SUPPORTING LEADERSHIP</p>
                  <h3 className={isDark ? 'mt-3 text-xl font-bold text-white' : 'mt-3 text-xl font-bold text-slate-900'}>Technical mentoring</h3>
                  <p className={isDark ? 'mt-3 text-sm leading-6 text-slate-300' : 'mt-3 text-sm leading-6 text-slate-600'}>Trained 50+ hospital users in system workflows and practical application use.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="resume" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <Label n="07" t="RESUME" isDark={isDark} />
          <div className={isDark ? 'flex flex-col justify-between gap-8 rounded-lg border border-slate-800 bg-slate-900/80 p-7 sm:flex-row sm:items-center sm:p-10' : 'flex flex-col justify-between gap-8 rounded-lg border border-slate-200 bg-white p-7 sm:flex-row sm:items-center sm:p-10'}>
            <div>
              <h2 className={isDark ? 'text-3xl font-bold tracking-tight text-white' : 'text-3xl font-bold tracking-tight text-slate-900'}>Professional profile and résumé.</h2>
              <p className={isDark ? 'mt-3 max-w-xl text-slate-300' : 'mt-3 max-w-xl text-slate-600'}>Download my résumé for a detailed overview of my experience, capabilities, and delivery focus.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="/Gokulraj_Implementation_Executive.docx" download className="focus-ring inline-flex items-center gap-2 rounded-lg bg-teal-500 px-4 py-3 text-sm font-bold text-slate-950">
                Download résumé <FileText className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#contact" className={isDark ? 'focus-ring inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-bold text-slate-100' : 'focus-ring inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-900'}>
                Contact me <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className={isDark ? 'bg-slate-900 px-5 py-24 lg:px-8 lg:py-32' : 'bg-slate-100 px-5 py-24 lg:px-8 lg:py-32'}>
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <Label n="08" t="CONTACT" isDark={isDark} />
              <h2 className={isDark ? 'text-4xl font-bold leading-[1.05] tracking-[-.055em] text-white sm:text-5xl' : 'text-4xl font-bold leading-[1.05] tracking-[-.055em] text-slate-900 sm:text-5xl'}>Let’s connect.</h2>
              <p className={isDark ? 'mt-7 max-w-lg text-lg leading-8 text-slate-300' : 'mt-7 max-w-lg text-lg leading-8 text-slate-600'}>Healthcare IT | HIS | Digital Health | Implementation | Transformation</p>
              <div className={isDark ? 'mt-10 flex flex-col gap-4 border-t border-teal-200 pt-6 text-sm font-bold text-slate-300 sm:flex-row sm:items-center sm:gap-6' : 'mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm font-bold text-slate-600 sm:flex-row sm:items-center sm:gap-6'}>
                <a className="focus-ring flex items-center gap-3 hover:text-teal-500" href="mailto:gokulofficial0001@gmail.com">
                  <Mail className={isDark ? 'h-5 w-5 text-teal-300' : 'h-5 w-5 text-teal-600'} aria-hidden="true" />
                  gokulofficial0001@gmail.com
                </a>
                <a className={isDark ? 'focus-ring text-teal-300 hover:text-teal-200' : 'focus-ring text-teal-600 hover:text-teal-700'} href="https://www.linkedin.com/in/gokulraj-sakthivel-97b3b2275" target="_blank" rel="noreferrer">
                  LinkedIn profile <ArrowUpRight className="inline h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <form name="contact" method="POST" data-netlify="true" className={isDark ? 'rounded-lg border border-slate-700 bg-slate-950 p-6 shadow-xl shadow-teal-900/5 sm:p-8' : 'rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8'} onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <p className={isDark ? 'font-mono text-[10px] tracking-[.12em] text-slate-400' : 'font-mono text-[10px] tracking-[.12em] text-slate-500'}>START A CONVERSATION</p>
              <h3 className={isDark ? 'mt-3 text-2xl font-bold text-white' : 'mt-3 text-2xl font-bold text-slate-900'}>Professional inquiry</h3>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Input l="FULL NAME" p="Your name" name="name" required isDark={isDark} />
                <Input l="YOUR EMAIL" p="you@example.com" name="email" type="email" required isDark={isDark} />
                <label className="sm:col-span-2">
                  <span className={isDark ? 'mb-2 block font-mono text-[10px] tracking-[.11em] text-slate-400' : 'mb-2 block font-mono text-[10px] tracking-[.11em] text-slate-500'}>OPPORTUNITY FOCUS</span>
                  <input name="focus" placeholder="Implementation, digital health..." className={isDark ? 'focus-ring w-full rounded-lg border border-slate-700 bg-slate-900 p-3 text-sm text-slate-100 outline-none placeholder:text-slate-400' : 'focus-ring w-full rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-900 outline-none placeholder:text-slate-500'} required />
                </label>
                <label className="sm:col-span-2">
                  <span className={isDark ? 'mb-2 block font-mono text-[10px] tracking-[.11em] text-slate-400' : 'mb-2 block font-mono text-[10px] tracking-[.11em] text-slate-500'}>MESSAGE</span>
                  <textarea name="message" rows="5" placeholder="Tell me what you would like to discuss..." className={isDark ? 'focus-ring w-full rounded-lg border border-slate-700 bg-slate-900 p-3 text-sm text-slate-100 outline-none placeholder:text-slate-400' : 'focus-ring w-full rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-900 outline-none placeholder:text-slate-500'} required />
                </label>
              </div>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" disabled={isSubmitting} className={isDark ? 'focus-ring rounded-lg bg-teal-500 px-5 py-3 text-sm font-bold text-slate-950 disabled:cursor-wait disabled:opacity-60' : 'focus-ring rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white disabled:cursor-wait disabled:opacity-60'}>
                  {isSubmitting ? 'Sending…' : 'Send inquiry'}
                </button>
                {formStatus && <p role="status" aria-live="polite" className={isDark ? 'text-sm text-teal-300' : 'text-sm text-teal-700'}>{formStatus}</p>}
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className={isDark ? 'border-t border-slate-800 bg-slate-950 px-5 py-8 text-xs text-slate-400 lg:px-8' : 'border-t border-slate-200 bg-white px-5 py-8 text-xs text-slate-500 lg:px-8'}>
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 sm:flex-row">
          <div>
            <p className={isDark ? 'font-bold text-white' : 'font-bold text-slate-900'}>GokulRaj Sakthivel</p>
            <p className={isDark ? 'mt-1 text-slate-400' : 'mt-1 text-slate-600'}>Healthcare IT Implementation</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>HIS · Digital Transformation · Workflow Optimization · Process Automation</p>
              <div className="flex flex-wrap gap-4">
                <a className={isDark ? 'focus-ring hover:text-teal-300' : 'focus-ring hover:text-teal-700'} href="mailto:gokulofficial0001@gmail.com">Email</a>
                <a className={isDark ? 'focus-ring hover:text-teal-300' : 'focus-ring hover:text-teal-700'} href="https://www.linkedin.com/in/gokulraj-sakthivel-97b3b2275" target="_blank" rel="noreferrer">LinkedIn</a>
                <span>© {new Date().getFullYear()} Gokulraj Sakthivel</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a className={isDark ? 'focus-ring hover:text-teal-300' : 'focus-ring hover:text-teal-700'} href="mailto:gokulofficial0001@gmail.com">Email</a>
              <a className={isDark ? 'focus-ring hover:text-teal-300' : 'focus-ring hover:text-teal-700'} href="https://www.linkedin.com/in/gokulraj-sakthivel-97b3b2275" target="_blank" rel="noreferrer">LinkedIn</a>
              <span>© {new Date().getFullYear()} Gokulraj Sakthivel</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ project, featured, isDark }) {
  const Icon = project.icon;
  return (
    <article className={isDark ? `rounded-lg border p-6 ${featured ? 'border-teal-300 bg-teal-950/60 lg:col-span-2' : 'border-slate-700 bg-slate-900/60'}` : `rounded-lg border p-6 ${featured ? 'border-teal-200 bg-teal-50 lg:col-span-2' : 'border-slate-200 bg-slate-50'}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Icon className={isDark ? 'h-6 w-6 text-teal-300' : 'h-6 w-6 text-teal-600'} aria-hidden="true" />
          <span className={isDark ? 'font-mono text-xs text-teal-200' : 'font-mono text-xs text-teal-700'}>{project.number}</span>
        </div>
        <span className={isDark ? 'rounded-full border border-teal-400/40 px-3 py-1 font-mono text-xs tracking-[.1em] text-teal-200' : 'rounded-full border border-teal-200 px-3 py-1 font-mono text-xs tracking-[.1em] text-teal-700'}>{project.status}</span>
      </div>
      <h3 className={isDark ? 'mt-8 text-2xl font-bold text-white' : 'mt-8 text-2xl font-bold text-slate-900'}>{project.title}</h3>
      <p className={isDark ? 'mt-2 font-mono text-xs tracking-[.12em] text-slate-400' : 'mt-2 font-mono text-xs tracking-[.12em] text-slate-500'}>{project.category}</p>
      <div className={isDark ? 'mt-7 grid gap-6 text-sm leading-6 text-slate-300 sm:grid-cols-2' : 'mt-7 grid gap-6 text-sm leading-6 text-slate-700 sm:grid-cols-2'}>
        <div>
          <p className={isDark ? 'font-mono text-[10px] text-teal-200' : 'font-mono text-[10px] text-teal-700'}>PROBLEM</p>
          <p className={isDark ? 'mt-2 text-slate-400' : 'mt-2 text-slate-600'}>{project.problem}</p>
          <p className={isDark ? 'mt-4 font-mono text-[10px] text-teal-200' : 'mt-4 font-mono text-[10px] text-teal-700'}>SOLUTION</p>
          <p className="mt-2">{project.description}</p>
        </div>
        <div>
          <p className={isDark ? 'font-mono text-[10px] text-teal-200' : 'font-mono text-[10px] text-teal-700'}>MY ROLE</p>
          <p className="mt-2">{project.role}</p>
          <p className={isDark ? 'mt-4 font-mono text-[10px] text-teal-200' : 'mt-4 font-mono text-[10px] text-teal-700'}>IMPACT / OUTCOME</p>
          <p className={isDark ? 'mt-2 text-slate-400' : 'mt-2 text-slate-600'}>{project.outcome}</p>
        </div>
      </div>
    </article>
  );
}

function SkillGroup({ title, items, tone, isDark }) {
  return (
    <div>
      <h2 className={isDark ? 'text-2xl font-bold tracking-tight text-white' : 'text-2xl font-bold tracking-tight text-slate-900'}>{title}</h2>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span className={`rounded-full px-3 py-2 text-xs font-semibold ${tone === 'brand' ? (isDark ? 'bg-teal-500/10 text-teal-200' : 'bg-teal-50 text-teal-800') : (isDark ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-700')}`} key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Label({ n, t, isDark }) {
  return (
    <p className={isDark ? 'mb-8 flex items-center gap-3 font-mono text-[10px] tracking-[.15em] text-slate-400' : 'mb-8 flex items-center gap-3 font-mono text-[10px] tracking-[.15em] text-slate-500'}>
      <b className={isDark ? 'text-teal-300' : 'text-teal-600'}>{n}</b>
      <span className={isDark ? 'h-px w-8 bg-slate-500' : 'h-px w-8 bg-slate-400'} />
      {t}
    </p>
  );
}

function Stat({ k, v, isDark }) {
  return (
    <div className="px-4 py-5 sm:px-6">
      <p className={isDark ? 'font-mono text-[10px] tracking-[.12em] text-slate-400' : 'font-mono text-[10px] tracking-[.12em] text-slate-500'}>{k}</p>
      <p className={isDark ? 'mt-2 text-sm font-bold text-white' : 'mt-2 text-sm font-bold text-slate-900'}>{v}</p>
    </div>
  );
}

function Metric({ value, label, isDark }) {
  return (
    <div className={isDark ? 'border-l-2 border-teal-300 pl-4' : 'border-l-2 border-teal-600 pl-4'}>
      <p className={isDark ? 'text-3xl font-bold tracking-tight text-white' : 'text-3xl font-bold tracking-tight text-slate-900'}>{value}</p>
      <p className={isDark ? 'mt-1 text-xs leading-5 text-slate-400' : 'mt-1 text-xs leading-5 text-slate-600'}>{label}</p>
    </div>
  );
}

function Input({ l, p, name, type = 'text', required = false, isDark = false }) {
  return (
    <label>
      <span className={isDark ? 'mb-2 block font-mono text-[10px] tracking-[.11em] text-slate-400' : 'mb-2 block font-mono text-[10px] tracking-[.11em] text-slate-500'}>{l}</span>
      <input name={name} type={type} placeholder={p} required={required} className={isDark ? 'focus-ring w-full rounded-lg border border-slate-700 bg-slate-900 p-3 text-sm text-slate-100 outline-none placeholder:text-slate-400' : 'focus-ring w-full rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-900 outline-none placeholder:text-slate-500'} />
    </label>
  );
}

createRoot(document.getElementById('root')).render(<App />);
