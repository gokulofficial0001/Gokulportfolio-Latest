import React, { useState } from 'react';
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
  Settings2,
  ShieldCheck,
  Sparkles,
  SunMedium,
  TestTube2,
  UsersRound,
  X,
} from 'lucide-react';
import './index.css';

const navItems = [
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Capabilities', 'capabilities'],
  ['Implementations', 'implementations'],
  ['Contact', 'contact'],
];

const hideSections = {
  caseStudy: true,
  methodology: true,
  roadmap: true,
};

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

const methodology = [
  ['01', 'Discover', 'Understand the problem', 'Listen to users, clarify the operational context, and define what needs to improve.', Sparkles],
  ['02', 'Analyze', 'Understand the requirements', 'Break down the current process, roles, information, risks, and open questions.', Activity],
  ['03', 'Map', 'Make the workflow visible', 'Document the flow from request to completion and identify manual dependencies.', GitBranch],
  ['04', 'Implement', 'Align the digital workflow', 'Coordinate configuration, requirements, documentation, and stakeholder decisions.', Settings2],
  ['05', 'Validate', 'Testing + UAT', 'Perform functional checks, validate issues, and coordinate user acceptance activities.', TestTube2],
  ['06', 'Deploy', 'Support go-live', 'Help users and delivery stakeholders move into the implemented workflow.', ArrowUpRight],
  ['07', 'Improve', 'Support adoption', 'Track feedback, clarify issues, and identify practical opportunities for improvement.', CheckCircle2],
];

const roadmap = [
  ['WHERE I WAS', 'Implementation Officer – Healthcare IT', 'Hands-on hospital systems and workflow implementation.', ['HIS implementation', 'Workflow validation', 'UAT and testing', 'User coordination'], 'coral'],
  ['WHERE I AM', 'Building Healthcare IT Implementation Expertise', 'Deepening implementation, analysis, and digital workflow capability.', ['Requirement gathering', 'Process mapping', 'Issue management', 'Stakeholder coordination'], 'teal'],
  ['STEP 1', 'Healthcare IT Implementation Specialist', 'Build stronger analytical and healthcare systems foundations.', ['Advanced Excel', 'SQL', 'Power BI', 'Business analysis', 'Agile / Scrum', 'HIS / EMR fundamentals'], 'green'],
  ['STEP 2', 'HIS / EMR Implementation Specialist / Consultant', 'Grow into end-to-end implementation delivery.', ['Requirements engineering', 'Configuration', 'UAT and go-live', 'Change management', 'Data validation', 'HL7, FHIR, DICOM, APIs'], 'blue'],
  ['STEP 3', 'Senior Healthcare IT / HIS Consultant', 'Lead solution thinking, clients, and multi-project delivery.', ['Solution design', 'Healthcare business analysis', 'Consulting', 'Client management', 'Process improvement', 'Mentoring'], 'purple'],
  ['STEP 4', 'Digital Transformation Consultant / Solution Consultant / Delivery Manager', 'Contribute to larger healthcare technology programs and outcomes.', ['Digital transformation', 'Solution strategy', 'Program delivery', 'Team leadership', 'Client relationships'], 'amber'],
];

const primarySkills = [
  'Healthcare IT Implementation',
  'Hospital Information Systems',
  'HIS',
  'Digital Health',
  'Digital Transformation',
  'Workflow Analysis',
  'Workflow Optimization',
  'Process Digitization',
  'Process Automation',
  'Requirement Gathering',
  'UAT',
  'Functional Testing',
  'Application Implementation',
  'Application Support',
  'Issue Tracking',
  'Stakeholder Coordination',
  'Vendor Coordination',
  'Hospital Operations Technology',
];

const supportingSkills = ['Data Analytics', 'Excel', 'SQL', 'Power BI', 'Troubleshooting', 'Documentation'];
const developmentSkills = ['HL7', 'FHIR', 'DICOM', 'Healthcare Interoperability', 'EMR / EHR', 'Healthcare Cybersecurity', 'Advanced SQL', 'Power BI', 'APIs', 'Automation', 'Agile', 'Project Management', 'Requirements Engineering'];

function App() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [formStatus, setFormStatus] = useState('');
  const isDark = theme === 'dark';

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry: ${data.get('focus')}`);
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nFocus: ${data.get('focus')}\n\n${data.get('message')}`);
    setFormStatus('Opening your email client with your inquiry details.');
    window.location.href = `mailto:gokulofficial0001@gmail.com?subject=${subject}&body=${body}`;
    event.currentTarget.reset();
  };

  return (
    <div className={isDark ? 'theme-dark min-h-screen bg-slate-950 text-slate-100' : 'theme-light min-h-screen bg-slate-50 text-slate-900'}>
      <header className={isDark ? 'fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl' : 'fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl'}>
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#home" className="focus-ring flex items-center gap-3 text-sm font-bold tracking-tight" aria-label="Go to homepage">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-teal-500 font-mono text-xs text-slate-950">GS</span>
            <span className={isDark ? 'text-[10px] font-bold leading-tight text-slate-100 sm:text-sm' : 'text-[10px] font-bold leading-tight text-slate-900 sm:text-sm'}>
              GOKULRAJ SAKTHIVEL <i className="hidden font-normal text-teal-500 not-italic sm:inline">| HEALTHCARE IT</i>
            </span>
          </a>

          <nav className={isDark ? 'hidden gap-5 text-[10px] font-bold uppercase tracking-[.1em] text-slate-300 lg:flex' : 'hidden gap-5 text-[10px] font-bold uppercase tracking-[.1em] text-slate-600 lg:flex'} aria-label="Primary navigation">
            {navItems.map(([label, id]) => (
              <a className="focus-ring hover:text-teal-500" href={`#${id}`} key={id}>
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
              <span className="hidden lg:inline">{isDark ? 'Light' : 'Dark'}</span>
            </button>

            <a href="#contact" className="focus-ring hidden items-center gap-2 rounded-lg bg-teal-500 px-4 py-3 text-xs font-bold text-slate-950 sm:flex">
              Let’s connect <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <button
            className={isDark ? 'focus-ring rounded-md p-2 lg:hidden' : 'focus-ring rounded-md p-2 text-slate-800 lg:hidden'}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        {open && (
          <nav id="mobile-navigation" className={isDark ? 'border-t border-slate-800 bg-slate-950 px-5 py-4 lg:hidden' : 'border-t border-slate-200 bg-white px-5 py-4 lg:hidden'} aria-label="Mobile navigation">
            {navItems.map(([label, id]) => (
              <a onClick={() => setOpen(false)} className={isDark ? 'focus-ring block py-3 text-sm font-bold text-slate-100' : 'focus-ring block py-3 text-sm font-bold text-slate-800'} href={`#${id}`} key={id}>
                {label}
              </a>
            ))}
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
              <div className={isDark ? 'mb-7 inline-flex items-center gap-3 rounded-full border border-teal-200 bg-teal-50 px-3 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-teal-700 shadow-sm' : 'mb-7 inline-flex items-center gap-3 rounded-full border border-teal-200 bg-teal-50 px-3 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-teal-700 shadow-sm'}>
                <span className="h-2 w-2 rounded-full bg-teal-500" aria-hidden="true" />
                Open to healthcare IT opportunities
              </div>

              <p className={isDark ? 'mb-6 font-mono text-[9px] tracking-[.16em] text-teal-300' : 'mb-6 font-mono text-[9px] tracking-[.16em] text-teal-600'}>HEALTHCARE IT IMPLEMENTATION · GKNM HOSPITAL · COIMBATORE</p>
              <h1 id="hero-title" className={isDark ? 'text-4xl font-bold leading-[1.02] tracking-[-.055em] text-white sm:text-6xl lg:text-[68px]' : 'text-4xl font-bold leading-[1.02] tracking-[-.055em] text-slate-900 sm:text-6xl lg:text-[68px]'}>
                Healthcare IT <span className={isDark ? 'font-serif font-normal italic tracking-[-.04em] text-teal-300' : 'font-serif font-normal italic tracking-[-.04em] text-teal-600'}>Implementation.</span>
              </h1>
              <p className={isDark ? 'mt-6 max-w-xl text-base leading-7 text-slate-300' : 'mt-6 max-w-xl text-base leading-7 text-slate-600'}>
                Transforming hospital operations into practical digital workflows through implementation, workflow validation, process digitization, and technology-driven improvement.
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

        <section id="about" className={isDark ? 'mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[.8fr_2fr] lg:px-8 lg:py-32' : 'mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[.8fr_2fr] lg:px-8 lg:py-32'}>
          <Label n="01" t="ABOUT" />
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
                    <span className={isDark ? 'font-mono text-xs text-slate-400' : 'font-mono text-xs text-slate-400'}>0{index + 1}</span>
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

        <section id="metrics" className={isDark ? 'border-b border-slate-800 bg-slate-950 px-5 py-16 lg:px-8' : 'border-b border-slate-200 bg-white px-5 py-16 lg:px-8'}>
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Metric value="05+" label="Systems / implementation initiatives" isDark={isDark} />
            <Metric value="01" label="Flagship HIS implementation" isDark={isDark} />
            <Metric value="Multiple" label="Hospital workflow digitization initiatives" isDark={isDark} />
            <Metric value="50+" label="Users trained across the hospital" isDark={isDark} />
          </div>
        </section>

        {!hideSections.caseStudy && (
          <section id="case-study" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <Label n="05" t="FEATURED HIS CASE STUDY" />
            <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
              <div>
                <p className={isDark ? 'font-mono text-[10px] tracking-[.14em] text-teal-300' : 'font-mono text-[10px] tracking-[.14em] text-teal-600'}>HOSPITAL INFORMATION SYSTEM</p>
                <h2 className={isDark ? 'mt-4 text-4xl font-bold leading-[1.05] tracking-[-.055em] text-white sm:text-5xl' : 'mt-4 text-4xl font-bold leading-[1.05] tracking-[-.055em] text-slate-900 sm:text-5xl'}>Implementation decisions for a high-dependency hospital workflow.</h2>
                <p className={isDark ? 'mt-7 text-lg leading-8 text-slate-300' : 'mt-7 text-lg leading-8 text-slate-600'}>A generalized, non-confidential view of the work: understand the operational context, translate requirements into system behaviour, validate workflows with users, and support adoption through deployment.</p>

                <div className="mt-8 grid gap-3">
                  {[
                    'Operational context: hospital users depend on clear, reliable digital workflows',
                    'Problem framing: identify workflow gaps before they become implementation issues',
                    'Stakeholders: hospital users, operational teams, vendors, and application stakeholders',
                    'My role: requirement understanding, workflow validation, testing, UAT, and issue coordination',
                    'Decision lens: balance workflow fit, implementation readiness, and user adoption',
                    'Delivery: functional testing, issue and bug validation, go-live and post-implementation support',
                    'Evidence: [ADD VERIFIED adoption, efficiency, quality, or issue-resolution measures]',
                    'Constraints: [ADD VERIFIED workflow, data, integration, or compliance constraints]',
                    'Reflection: [ADD a real trade-off, challenge, or change you would make next time]',
                  ].map((item, index) => (
                    <div className={isDark ? 'flex items-center gap-3 border-b border-slate-700 py-3 text-sm text-slate-200' : 'flex items-center gap-3 border-b border-slate-200 py-3 text-sm text-slate-700'} key={item}>
                      <span className={isDark ? 'font-mono text-xs text-teal-300' : 'font-mono text-xs text-teal-600'}>{String(index + 1).padStart(2, '0')}</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className={isDark ? 'rounded-lg bg-slate-900 p-6 text-white sm:p-8' : 'rounded-lg bg-slate-100 p-6 text-slate-900 sm:p-8'}>
                <p className={isDark ? 'font-mono text-[10px] tracking-[.14em] text-teal-200' : 'font-mono text-[10px] tracking-[.14em] text-teal-600'}>IMPLEMENTATION LIFECYCLE</p>
                <div className="mt-8 grid gap-0">
                  {[
                    ['DISCOVER', 'Clarify the operational problem and success criteria'],
                    ['MAP', 'Validate current workflows, roles, dependencies, and exceptions'],
                    ['ALIGN', 'Translate requirements into decisions with users and delivery stakeholders'],
                    ['VALIDATE', 'Test functionality, validate issues, and coordinate UAT'],
                    ['DEPLOY', 'Support go-live readiness, escalation, and user coordination'],
                    ['ADOPT', 'Help users move from workflow change to consistent system use'],
                    ['IMPROVE', 'Capture feedback and identify the next practical improvement'],
                  ].map(([title, text], index) => (
                    <div className={isDark ? 'flex gap-4 border-l border-teal-400/40 pb-7 pl-5 last:pb-0' : 'flex gap-4 border-l border-teal-200 pb-7 pl-5 last:pb-0'} key={title}>
                      <span className={isDark ? '-ml-[31px] grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal-400 font-mono text-[10px] font-bold text-slate-950' : '-ml-[31px] grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal-500 font-mono text-[10px] font-bold text-white'}>{index + 1}</span>
                      <div>
                        <p className={isDark ? 'font-mono text-[10px] tracking-[.12em] text-teal-100' : 'font-mono text-[10px] tracking-[.12em] text-teal-700'}>{title}</p>
                        <p className={isDark ? 'mt-2 text-sm leading-6 text-slate-300' : 'mt-2 text-sm leading-6 text-slate-600'}>{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={isDark ? 'mt-8 border-l-2 border-teal-400 bg-slate-950/70 p-5' : 'mt-8 border-l-2 border-teal-600 bg-white p-5 shadow-sm'}>
                  <p className={isDark ? 'font-mono text-[10px] tracking-[.14em] text-teal-200' : 'font-mono text-[10px] tracking-[.14em] text-teal-700'}>SENIOR-LEVEL SIGNAL</p>
                  <p className={isDark ? 'mt-3 text-sm leading-6 text-slate-300' : 'mt-3 text-sm leading-6 text-slate-600'}>This work is not presented as screen delivery alone. It demonstrates systems thinking: connecting hospital workflows, user readiness, validation quality, vendor coordination, and the practical realities of implementation.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {!hideSections.methodology && (
          <section id="methodology" className={isDark ? 'border-y border-slate-800 bg-slate-900/90 px-5 py-24 lg:px-8 lg:py-32' : 'border-y border-slate-200 bg-slate-100 px-5 py-24 lg:px-8 lg:py-32'}>
            <div className="mx-auto max-w-7xl">
              <Label n="06" t="HOW I APPROACH IMPLEMENTATION" isDark={isDark} />
              <div className="max-w-3xl">
                <h2 className={isDark ? 'text-4xl font-bold leading-[1.05] tracking-[-.055em] text-white sm:text-5xl' : 'text-4xl font-bold leading-[1.05] tracking-[-.055em] text-slate-900 sm:text-5xl'}>A repeatable path from discovery to improvement.</h2>
              </div>
              <div className={isDark ? 'mt-12 grid gap-px overflow-hidden rounded-lg bg-slate-700 sm:grid-cols-2 lg:grid-cols-4' : 'mt-12 grid gap-px overflow-hidden rounded-lg bg-slate-200 sm:grid-cols-2 lg:grid-cols-4'}>
                {methodology.map(([number, title, text, activity, Icon]) => (
                  <article className={isDark ? 'bg-slate-900 p-6' : 'bg-white p-6'} key={title}>
                    <Icon className={isDark ? 'h-6 w-6 text-teal-300' : 'h-6 w-6 text-teal-600'} aria-hidden="true" />
                    <p className={isDark ? 'mt-8 font-mono text-[10px] text-teal-300' : 'mt-8 font-mono text-[10px] text-teal-600'}>{number}</p>
                    <h3 className={isDark ? 'mt-2 text-xl font-bold text-white' : 'mt-2 text-xl font-bold text-slate-900'}>{title}</h3>
                    <p className={isDark ? 'mt-3 text-sm font-semibold text-slate-200' : 'mt-3 text-sm font-semibold text-slate-700'}>{text}</p>
                    <p className={isDark ? 'mt-2 text-sm leading-6 text-slate-400' : 'mt-2 text-sm leading-6 text-slate-500'}>{activity}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section id="skills" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <Label n="07" t="SKILLS MATRIX" isDark={isDark} />
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <SkillGroup title="Primary capabilities" items={primarySkills} tone="brand" isDark={isDark} />
            <SkillGroup title="Supporting skills" items={supportingSkills} tone="slate" isDark={isDark} />
          </div>

        </section>

        <section id="learning" className={isDark ? 'bg-slate-950/80 px-5 py-24 lg:px-8 lg:py-32' : 'bg-slate-100 px-5 py-24 lg:px-8 lg:py-32'}>
          <div className="mx-auto max-w-7xl">
            <Label n="08" t="LEARNING & DEVELOPMENT" isDark={isDark} />
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
                  <p className={isDark ? 'mt-3 text-sm leading-6 text-slate-300' : 'mt-3 text-sm leading-6 text-slate-600'}>Guided approximately 25 trainees in practical networking and deployment-related training activities.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {!hideSections.roadmap && (
          <section id="roadmap" className={isDark ? 'bg-slate-950 px-5 py-24 text-white lg:px-8 lg:py-32' : 'bg-white px-5 py-24 text-slate-900 lg:px-8 lg:py-32'}>
            <div className="mx-auto max-w-7xl">
              <Label n="09" t="CAREER ROADMAP" isDark={isDark} />
              <div className="max-w-3xl">
                <h2 className={isDark ? 'text-4xl font-bold leading-[1.05] tracking-[-.055em] text-white sm:text-5xl' : 'text-4xl font-bold leading-[1.05] tracking-[-.055em] text-slate-900 sm:text-5xl'}>Building toward HIS/EMR consulting and digital transformation.</h2>
                <p className={isDark ? 'mt-6 text-lg leading-8 text-slate-300' : 'mt-6 text-lg leading-8 text-slate-600'}>A direction for continued growth, grounded in implementation experience and expanded healthcare technology capability.</p>
              </div>
              <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {roadmap.map(([label, title, focus, skills, color], index) => (
                  <article className={isDark ? `roadmap-card roadmap-${color} rounded-lg border bg-slate-900 p-5` : `roadmap-card roadmap-${color} rounded-lg border bg-white p-5`} key={label}>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className={isDark ? 'font-mono text-[10px] font-bold tracking-[.12em] text-slate-200' : 'font-mono text-[10px] font-bold tracking-[.12em] text-slate-800'}>{label}</p>
                        <p className={isDark ? 'mt-1 text-xs font-semibold text-slate-400' : 'mt-1 text-xs font-semibold text-slate-500'}>{index === 0 ? 'Starting point' : index === 1 ? 'Current direction' : `Development stage ${index - 1}`}</p>
                      </div>
                      <span className="roadmap-marker grid h-8 w-8 shrink-0 place-items-center rounded-full font-mono text-xs font-bold text-white">{index + 1}</span>
                    </div>
                    <h3 className={isDark ? 'mt-6 text-xl font-bold leading-tight text-white' : 'mt-6 text-xl font-bold leading-tight text-slate-900'}>{title}</h3>
                    <p className={isDark ? 'mt-3 text-sm leading-6 text-slate-300' : 'mt-3 text-sm leading-6 text-slate-600'}>{focus}</p>
                    <ul className={isDark ? 'mt-5 space-y-2 border-t border-slate-700 pt-4 text-sm leading-5 text-slate-200' : 'mt-5 space-y-2 border-t border-slate-200 pt-4 text-sm leading-5 text-slate-700'}>
                      {skills.map((skill) => (
                        <li className="flex gap-2" key={skill}>
                          <span aria-hidden="true">•</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section id="resume" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <Label n="10" t="RESUME" isDark={isDark} />
          <div className={isDark ? 'flex flex-col justify-between gap-8 rounded-lg border border-slate-800 bg-slate-900/80 p-7 sm:flex-row sm:items-center sm:p-10' : 'flex flex-col justify-between gap-8 rounded-lg border border-slate-200 bg-white p-7 sm:flex-row sm:items-center sm:p-10'}>
            <div>
              <h2 className={isDark ? 'text-3xl font-bold tracking-tight text-white' : 'text-3xl font-bold tracking-tight text-slate-900'}>Professional profile and résumé.</h2>
              <p className={isDark ? 'mt-3 max-w-xl text-slate-300' : 'mt-3 max-w-xl text-slate-600'}>A full résumé can be shared on request. The current portfolio is structured to present my experience, capability, and delivery focus clearly.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:gokulofficial0001@gmail.com?subject=Resume%20Request" className="focus-ring inline-flex items-center gap-2 rounded-lg bg-teal-500 px-4 py-3 text-sm font-bold text-slate-950">
                Request résumé <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
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
              <Label n="11" t="CONTACT" isDark={isDark} />
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

            <form className={isDark ? 'rounded-lg border border-slate-700 bg-slate-950 p-6 shadow-xl shadow-teal-900/5 sm:p-8' : 'rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8'} onSubmit={handleSubmit}>
              <p className={isDark ? 'font-mono text-[10px] tracking-[.12em] text-slate-400' : 'font-mono text-[10px] tracking-[.12em] text-slate-500'}>START A CONVERSATION</p>
              <h3 className={isDark ? 'mt-3 text-2xl font-bold text-white' : 'mt-3 text-2xl font-bold text-slate-900'}>Professional inquiry</h3>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Input l="FULL NAME" p="Your name" name="name" required isDark={isDark} />
                <Input l="CORPORATE EMAIL" p="name@company.com" name="email" type="email" required isDark={isDark} />
                <label className="sm:col-span-2">
                  <span className={isDark ? 'mb-2 block font-mono text-[10px] tracking-[.11em] text-slate-400' : 'mb-2 block font-mono text-[10px] tracking-[.11em] text-slate-500'}>OPPORTUNITY FOCUS</span>
                  <input name="focus" placeholder="Implementation, digital health..." className={isDark ? 'focus-ring w-full rounded-lg border border-slate-700 bg-slate-900 p-3 text-sm text-slate-100 outline-none placeholder:text-slate-400' : 'focus-ring w-full rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-900 outline-none placeholder:text-slate-400'} required />
                </label>
                <label className="sm:col-span-2">
                  <span className={isDark ? 'mb-2 block font-mono text-[10px] tracking-[.11em] text-slate-400' : 'mb-2 block font-mono text-[10px] tracking-[.11em] text-slate-500'}>MESSAGE</span>
                  <textarea name="message" rows="5" placeholder="Tell me what you would like to discuss..." className={isDark ? 'focus-ring w-full rounded-lg border border-slate-700 bg-slate-900 p-3 text-sm text-slate-100 outline-none placeholder:text-slate-400' : 'focus-ring w-full rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-900 outline-none placeholder:text-slate-400'} required />
                </label>
              </div>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className={isDark ? 'focus-ring rounded-lg bg-teal-500 px-5 py-3 text-sm font-bold text-slate-950' : 'focus-ring rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white'}>
                  Send inquiry
                </button>
                {formStatus && <p className={isDark ? 'text-sm text-teal-300' : 'text-sm text-teal-700'}>{formStatus}</p>}
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
          <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>HIS · Digital Transformation · Workflow Optimization · Process Automation</p>
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
        <span className={isDark ? 'rounded-full border border-teal-400/40 px-3 py-1 font-mono text-[9px] tracking-[.1em] text-teal-200' : 'rounded-full border border-teal-200 px-3 py-1 font-mono text-[9px] tracking-[.1em] text-teal-700'}>{project.status}</span>
      </div>
      <h3 className={isDark ? 'mt-8 text-2xl font-bold text-white' : 'mt-8 text-2xl font-bold text-slate-900'}>{project.title}</h3>
      <p className={isDark ? 'mt-2 font-mono text-[10px] tracking-[.12em] text-slate-400' : 'mt-2 font-mono text-[10px] tracking-[.12em] text-slate-500'}>{project.category}</p>
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

function SkillPanel({ title, text, items, isDark }) {
  return (
    <article className={isDark ? 'rounded-lg border border-slate-700 bg-slate-900 p-5' : 'rounded-lg border border-slate-200 bg-slate-50 p-5'}>
      <h3 className={isDark ? 'text-xl font-bold text-white' : 'text-xl font-bold text-slate-900'}>{title}</h3>
      <p className={isDark ? 'mt-2 text-sm leading-6 text-slate-300' : 'mt-2 text-sm leading-6 text-slate-500'}>{text}</p>
      <div className="mt-5 space-y-2">
        {items.map((item) => (
          <p className={isDark ? 'flex gap-2 text-sm text-slate-200' : 'flex gap-2 text-sm text-slate-700'} key={item}>
            <span className={isDark ? 'text-teal-300' : 'text-teal-600'}>+</span>
            {item}
          </p>
        ))}
      </div>
    </article>
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
      <p className={isDark ? 'mt-1 text-xs leading-5 text-slate-400' : 'mt-1 text-xs leading-5 text-slate-500'}>{label}</p>
    </div>
  );
}

function Input({ l, p, name, type = 'text', required = false, isDark = false }) {
  return (
    <label>
      <span className={isDark ? 'mb-2 block font-mono text-[10px] tracking-[.11em] text-slate-400' : 'mb-2 block font-mono text-[10px] tracking-[.11em] text-slate-500'}>{l}</span>
      <input name={name} type={type} placeholder={p} required={required} className={isDark ? 'focus-ring w-full rounded-lg border border-slate-700 bg-slate-900 p-3 text-sm text-slate-100 outline-none placeholder:text-slate-400' : 'focus-ring w-full rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-900 outline-none placeholder:text-slate-400'} />
    </label>
  );
}

createRoot(document.getElementById('root')).render(<App />);
