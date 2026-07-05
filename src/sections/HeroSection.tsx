import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import SocialOrbit from '../components/SocialOrbit';

const navLinks = ['About', 'Skills', 'Projects', 'Contact'];

const HeroSection = () => {
  return (
    <section className="min-h-screen md:h-screen md:max-h-screen flex flex-col justify-between relative px-6 md:px-10 pt-4 pb-8 md:pt-6 md:pb-4 overflow-x-hidden">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <nav className="flex justify-between">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.2rem] hover:opacity-70 transition-opacity duration-200"
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Main Content Area (Centering the Heading) */}
      <div className="flex-1 flex flex-col justify-center items-center z-10 min-h-0 py-8 md:py-0">
        {/* Hero Heading */}
        <div className="text-center w-full py-2">
          <FadeIn delay={0.15} y={30}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-normal md:whitespace-nowrap w-full text-5xl sm:text-7xl md:text-[9vw] lg:text-[10vw] xl:text-[10.5vw] select-none">
              Hi, i&apos;m Raanesh
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-end w-full z-20 md:gap-4 pb-4 md:pb-0">
        {/* Description (left) */}
        <div className="flex-1 flex justify-center md:justify-start">
          <FadeIn delay={0.35} y={20}>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-center md:text-left max-w-[220px] md:max-w-[260px]"
              style={{ fontSize: 'clamp(0.8rem, 1.2vw, 1.3rem)' }}
            >
              an ai/ml & full-stack developer building intelligent software products
            </p>
          </FadeIn>
        </div>

        {/* Social Orbit (middle) */}
        <div className="flex-shrink-0 flex justify-center">
          <FadeIn delay={0.4} y={20}>
            <SocialOrbit />
          </FadeIn>
        </div>

        {/* Contact Button (right) */}
        <div className="flex-1 flex justify-center md:justify-end">
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
