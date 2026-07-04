import FadeIn from '../components/FadeIn';

const services = [
  {
    num: '01',
    name: 'AI & Machine Learning',
    desc: 'Building intelligent systems with computer vision, NLP, recommendation engines, classification models, and AI-powered scoring systems for real-world applications.',
  },
  {
    num: '02',
    name: 'Full-Stack Development',
    desc: 'Crafting modern, responsive web applications with React, TypeScript, Vite, FastAPI, Supabase, and production-ready deployment on Vercel.',
  },
  {
    num: '03',
    name: 'Computer Vision',
    desc: 'Developing visual AI solutions using OpenCV, YOLOv8, BLIP, and deep learning for object detection, image captioning, and safety monitoring.',
  },
  {
    num: '04',
    name: 'Product Prototyping',
    desc: 'Rapidly building demo-ready software products from concept to deployment, combining AI, data, and web development into practical solutions.',
  },
  {
    num: '05',
    name: 'Data Science',
    desc: 'Analyzing complex datasets using Pandas, NumPy, Scikit-learn, XGBoost, and statistical modeling to extract insights and drive decisions.',
  },
];

const ServicesSection = () => {
  return (
    <section
      id="skills"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Skills
      </h2>

      <div className="max-w-5xl mx-auto">
        {services.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.1}>
            <div
              className="flex flex-col md:flex-row items-start gap-4 md:gap-12 py-8 sm:py-10 md:py-12"
              style={{ borderBottom: '1px solid rgba(12, 12, 12, 0.15)' }}
            >
              <span
                className="font-black text-[#0C0C0C] leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {s.num}
              </span>
              <div className="flex flex-col gap-2 pt-1 md:pt-4">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {s.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
