import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

interface ProjectData {
  num: string;
  category: string;
  name: string;
  link?: string;
  images: {
    col1Top: string;
    col1Bottom: string;
    col2: string;
  };
}

const imageSets = [
  {
    col1Top: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Bottom: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    col1Top: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Bottom: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    col1Top: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Bottom: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
];

const projects: ProjectData[] = [
  {
    num: '01',
    category: 'Road Safety AI',
    name: 'Drowsiness Detection',
    images: imageSets[0],
  },
  {
    num: '02',
    category: 'AI Guidance Product',
    name: 'CareerPilot AI',
    link: 'https://careerpilot-orcin.vercel.app',
    images: imageSets[1],
  },
  {
    num: '03',
    category: 'Document Intelligence',
    name: 'DraftIQ Grader',
    link: 'https://draftiq-nine.vercel.app',
    images: imageSets[2],
  },
  {
    num: '04',
    category: 'Road Safety AI',
    name: 'DriveSense AI',
    images: imageSets[0],
  },
  {
    num: '05',
    category: 'Fintech Fraud Firewall',
    name: 'GuardPay AI',
    link: 'https://guardpay-iota.vercel.app',
    images: imageSets[1],
  },
  {
    num: '06',
    category: 'Healthcare Workflow',
    name: 'QueueCure Sync',
    link: 'https://queuecure-theta.vercel.app',
    images: imageSets[2],
  },
  {
    num: '07',
    category: 'EdTech Assistant',
    name: 'LastMinute Helper',
    link: 'https://lastminute-af4v2awweq-ew.a.run.app',
    images: imageSets[0],
  },
  {
    num: '08',
    category: 'Fintech Analytics',
    name: 'Finance Tracker',
    images: imageSets[1],
  },
  {
    num: '09',
    category: 'Frontend SaaS UI',
    name: 'Polaris Landing',
    link: 'https://polaris-kappa-sooty.vercel.app',
    images: imageSets[2],
  },
  {
    num: '10',
    category: 'Smart Mobility',
    name: 'MileGrid Planner',
    link: 'https://milegrid.vercel.app',
    images: imageSets[0],
  },
  {
    num: '11',
    category: 'Travel & Mobility',
    name: 'Traveloop',
    link: 'https://traveloop-zeta-jet.vercel.app',
    images: imageSets[1],
  },
  {
    num: '12',
    category: 'Mechanical Automation',
    name: 'Industrial Batch Mixing',
    images: imageSets[2],
  },
  {
    num: '13',
    category: 'Natural Language Processing',
    name: 'Resume Screener',
    images: imageSets[0],
  },
  {
    num: '14',
    category: 'Machine Learning',
    name: 'Fake News Detector',
    link: 'https://github.com/raaneshkv/Fake-News-Detection',
    images: imageSets[1],
  },
  {
    num: '15',
    category: 'Computer Vision / NLP',
    name: 'Image Caption Gen',
    link: 'https://github.com/raaneshkv/Image-Caption-Generator',
    images: imageSets[2],
  },
  {
    num: '16',
    category: 'Predictive Maintenance',
    name: 'HSAPM Hybrid Analysis',
    images: imageSets[0],
  },
  {
    num: '17',
    category: 'Software & Game Dev',
    name: 'Pacman (Python Game)',
    link: 'https://github.com/raaneshkv/pac_man_renaissance',
    images: imageSets[1],
  },
  {
    num: '18',
    category: 'Interactive Web Presentation',
    name: 'Honesty Presentation',
    link: 'https://raanesh-presentation.vercel.app',
    images: imageSets[2],
  },
  {
    num: '19',
    category: 'Web Game / Quiz',
    name: 'Tamil Movie Quiz',
    link: 'https://cm-quiz-ssn.vercel.app',
    images: imageSets[0],
  },
];

const ProjectCard = ({ project, index, totalCards }: { project: ProjectData; index: number; totalCards: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  // Calculate scaling and sticky top responsive value
  const targetScale = 1 - (totalCards - 1 - index) * 0.015;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="h-[85vh] sticky"
      style={{
        top: `calc(4.5rem + ${index * 8}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="rounded-[35px] sm:rounded-[50px] md:rounded-[60px] border border-[#D7E2EA]/20 bg-[#0C0C0C] p-4 sm:p-6 md:p-8 h-full flex flex-col origin-top shadow-2xl"
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-4 sm:mb-6 flex-wrap gap-4">
          <div className="flex items-start gap-4 sm:gap-6 md:gap-8">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
            >
              {project.num}
            </span>
            <div className="flex flex-col gap-1 pt-1 sm:pt-3">
              <span className="text-[#D7E2EA] opacity-60 text-xs sm:text-sm uppercase tracking-wider">
                {project.category}
              </span>
              <h3
                className="text-[#D7E2EA] font-semibold uppercase tracking-tight"
                style={{ fontSize: 'clamp(1rem, 2vw, 2rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <div className="pt-1 sm:pt-3">
            <LiveProjectButton href={project.link} />
          </div>
        </div>

        {/* Image grid */}
        <div className="flex-1 flex gap-3 sm:gap-4 md:gap-6 min-h-0">
          {/* Left column - 40% (hidden on mobile) */}
          <div className="hidden sm:flex w-[40%] flex-col gap-3 sm:gap-4 md:gap-6">
            <div className="overflow-hidden rounded-[25px] sm:rounded-[40px] md:rounded-[45px]" style={{ height: 'clamp(110px, 14vw, 200px)' }}>
              <img
                src={project.images.col1Top}
                alt={`${project.name} preview 1`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-[25px] sm:rounded-[40px] md:rounded-[45px] flex-1">
              <img
                src={project.images.col1Bottom}
                alt={`${project.name} preview 2`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
          {/* Right column - 60% on desktop, full-width on mobile */}
          <div className="w-full sm:w-[60%] overflow-hidden rounded-[25px] sm:rounded-[40px] md:rounded-[45px]">
            <img
              src={project.images.col2}
              alt={`${project.name} preview 3`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const achievements = [
  {
    title: '3rd Place, LLM Showdown',
    org: "Invente'25",
    desc: 'Prompt engineering and large language model-based problem solving against teams nationwide.',
  },
  {
    title: 'Top 10 Team Project',
    org: 'Sairam College Expo',
    desc: 'Recognized for DraftIQ, an AI-powered document intelligence and essay grading platform.',
  },
  {
    title: 'Shortlisted Project',
    org: 'Technoverse 2026',
    desc: 'CareerPilot AI was selected among top innovations for career forecasting and guidance.',
  },
  {
    title: 'Shortlisted for SNUC Hacks',
    org: 'SNUC Hacks',
    desc: 'Recognized for Financial Decision Maker & Tracker fintech project.',
  },
  {
    title: 'First Round Selection',
    org: 'Confluence 2.0',
    desc: 'GuardPay AI selected in the initial phase of the fintech innovation competition.',
  },
  {
    title: 'Internally Funded Project',
    org: 'SSN College of Engineering',
    desc: 'Awarded research funding for Driver Drowsiness Detection using computer vision and AI.',
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10"
    >
      {/* Projects list */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-7xl mx-auto mb-32 md:mb-48">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={i}
            totalCards={projects.length}
          />
        ))}
      </div>

      {/* Achievements Section */}
      <div id="achievements" className="max-w-7xl mx-auto mb-32 md:mb-48 border-t border-[#D7E2EA]/10 pt-20">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 120px)' }}
          >
            Accolades
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, idx) => (
            <FadeIn key={idx} delay={idx * 0.05} y={20}>
              <div className="p-6 md:p-8 rounded-[30px] border border-[#D7E2EA]/10 bg-[#121212]/50 hover:bg-[#181818]/60 transition-all duration-300 hover:border-[#D7E2EA]/30 group">
                <span className="text-[#D7E2EA]/40 text-sm font-semibold uppercase tracking-wider block mb-2 group-hover:text-[#D7E2EA]/60 transition-colors">
                  {ach.org}
                </span>
                <h3 className="text-white text-xl font-bold uppercase tracking-tight mb-3">
                  {ach.title}
                </h3>
                <p className="text-[#D7E2EA]/60 text-sm leading-relaxed font-light">
                  {ach.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer id="contact" className="max-w-7xl mx-auto border-t border-[#D7E2EA]/10 pt-20 pb-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h3 className="text-white font-bold text-2xl uppercase tracking-wider">Raanesh K V</h3>
          <p className="text-[#D7E2EA]/50 text-sm max-w-sm">
            AI/ML & Full-Stack Developer | B.E. Mechanical Engineering student with a software-first edge.
          </p>
        </div>

        {/* Social connections */}
        <div className="flex gap-6 items-center flex-wrap justify-center">
          <a
            href="mailto:raanesh2510944@ssn.edu.in"
            className="text-[#D7E2EA] hover:text-[#B600A8] transition-colors p-3 bg-[#121212] rounded-full border border-[#D7E2EA]/10 hover:border-[#B600A8]/30 cursor-pointer"
            aria-label="Email"
          >
            <span className="text-sm font-medium uppercase tracking-wider">Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/raaneshkv/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA] hover:text-[#7621B0] transition-colors p-3 bg-[#121212] rounded-full border border-[#D7E2EA]/10 hover:border-[#7621B0]/30 cursor-pointer"
            aria-label="LinkedIn"
          >
            <span className="text-sm font-medium uppercase tracking-wider">LinkedIn</span>
          </a>
          <a
            href="https://github.com/raaneshkv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA] hover:text-white transition-colors p-3 bg-[#121212] rounded-full border border-[#D7E2EA]/10 hover:border-white/30 cursor-pointer"
            aria-label="GitHub"
          >
            <span className="text-sm font-medium uppercase tracking-wider">GitHub</span>
          </a>
          <a
            href="https://www.instagram.com/raanesh_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA] hover:text-[#BE4C00] transition-colors p-3 bg-[#121212] rounded-full border border-[#D7E2EA]/10 hover:border-[#BE4C00]/30 cursor-pointer"
            aria-label="Instagram"
          >
            <span className="text-sm font-medium uppercase tracking-wider">Instagram</span>
          </a>
        </div>

        <div className="text-center md:text-right text-[#D7E2EA]/40 text-xs">
          <p>© {new Date().getFullYear()} Raanesh K V. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default ProjectsSection;
