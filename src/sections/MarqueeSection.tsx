import { useRef, useState, useEffect } from 'react';

const row1Tags = [
  'Python',
  'PyTorch',
  'OpenCV',
  'YOLOv8',
  'FastAPI',
  'Supabase',
  'Scikit-learn',
  'Data Science',
  'Computer Vision',
  'Arduino',
  'Automation',
];

const row2Tags = [
  'React.js',
  'TypeScript',
  'Vite',
  'Tailwind CSS',
  'REST APIs',
  'Product Prototyping',
  'Full-Stack',
  'Machine Learning',
  'NLP',
  'System Design',
];

const MarqueeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.35;
      setOffset(scrollOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tripled1 = [...row1Tags, ...row1Tags, ...row1Tags];
  const tripled2 = [...row2Tags, ...row2Tags, ...row2Tags];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-5">
        {/* Row 1 - moves RIGHT */}
        <div
          className="flex gap-4"
          style={{
            transform: `translateX(${offset - 300}px)`,
            willChange: 'transform',
          }}
        >
          {tripled1.map((tag, i) => (
            <div
              key={`row1-${i}`}
              className="px-8 py-5 rounded-2xl bg-[#121212]/80 border border-[#D7E2EA]/10 flex items-center justify-center flex-shrink-0 text-white font-medium uppercase tracking-wider text-lg md:text-xl shadow-xl hover:border-[#B600A8]/30 transition-colors duration-300"
              style={{
                boxShadow: '0 4px 20px rgba(181, 1, 167, 0.03)',
                minWidth: '220px',
              }}
            >
              <span className="w-2.5 h-2.5 rounded-full mr-3.5 bg-gradient-to-r from-[#B600A8] to-[#7621B0] shadow-[0_0_10px_#B600A8]" />
              {tag}
            </div>
          ))}
        </div>

        {/* Row 2 - moves LEFT */}
        <div
          className="flex gap-4"
          style={{
            transform: `translateX(${-(offset - 300)}px)`,
            willChange: 'transform',
          }}
        >
          {tripled2.map((tag, i) => (
            <div
              key={`row2-${i}`}
              className="px-8 py-5 rounded-2xl bg-[#121212]/80 border border-[#D7E2EA]/10 flex items-center justify-center flex-shrink-0 text-white font-medium uppercase tracking-wider text-lg md:text-xl shadow-xl hover:border-[#BE4C00]/30 transition-colors duration-300"
              style={{
                boxShadow: '0 4px 20px rgba(190, 76, 0, 0.03)',
                minWidth: '220px',
              }}
            >
              <span className="w-2.5 h-2.5 rounded-full mr-3.5 bg-gradient-to-r from-[#7621B0] to-[#BE4C00] shadow-[0_0_10px_#BE4C00]" />
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
