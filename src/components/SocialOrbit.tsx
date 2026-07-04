import { Linkedin, Github, Instagram, Mail } from 'lucide-react';

const SocialOrbit = () => {
  const radius = 95;
  const size = radius * 2;

  const links = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/raaneshkv/',
      icon: Linkedin,
      positionClass: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
      color: 'rgba(118, 33, 176, 0.4)',
      hoverColor: '#7621B0',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      url: 'https://www.instagram.com/raanesh_',
      icon: Instagram,
      positionClass: 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2',
      color: 'rgba(182, 0, 168, 0.4)',
      hoverColor: '#B600A8',
    },
    {
      id: 'mail',
      name: 'Email',
      url: 'mailto:raanesh2510944@ssn.edu.in',
      icon: Mail,
      positionClass: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
      color: 'rgba(190, 76, 0, 0.4)',
      hoverColor: '#BE4C00',
    },
    {
      id: 'github',
      name: 'GitHub',
      url: 'https://github.com/raaneshkv',
      icon: Github,
      positionClass: 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
      color: 'rgba(215, 226, 234, 0.4)',
      hoverColor: '#D7E2EA',
    },
  ];

  return (
    <div className="relative flex items-center justify-center pointer-events-auto scale-75 sm:scale-100" style={{ width: `${size + 80}px`, height: `${size + 80}px` }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .orbit-spin-container {
          animation: orbit-spin 25s linear infinite;
        }
        .orbit-reverse-icon {
          animation: orbit-reverse-spin 25s linear infinite;
        }
      `}} />

      {/* Background Central Glow */}
      <div className="absolute w-14 h-14 rounded-full bg-gradient-to-r from-[#B600A8]/20 to-[#7621B0]/20 blur-2xl pointer-events-none" />

      {/* Spinning Container */}
      <div
        className="orbit-spin-container relative flex items-center justify-center"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <div className="absolute inset-0 rounded-full border border-dashed border-[#D7E2EA]/10 pointer-events-none" />
        <div className="absolute inset-0 border border-[#B600A8]/20 rotate-45 pointer-events-none" />

        {links.map((link) => {
          const Icon = link.icon;
          return (
            <div key={link.id} className={`absolute ${link.positionClass}`}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="orbit-reverse-icon p-3 rounded-full bg-[#121212] border flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl cursor-pointer group"
                style={{
                  boxShadow: `0 6px 18px ${link.color}`,
                  borderColor: link.color,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = link.hoverColor;
                  e.currentTarget.style.boxShadow = `0 8px 24px ${link.hoverColor}60`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = link.color;
                  e.currentTarget.style.boxShadow = `0 6px 18px ${link.color}`;
                }}
              >
                <Icon className="w-5 h-5 text-white" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialOrbit;
