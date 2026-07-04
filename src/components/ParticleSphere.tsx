import { useEffect, useRef } from 'react';

const ParticleSphere = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = 450;
    let height = canvas.height = 450;

    // Handle high DPI displays
    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = canvas.width = rect.width * 2;
      height = canvas.height = rect.height * 2;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const particleCount = 50;

    // Create particles inside a circular boundary to form a loose sphere/network
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 120;
      particles.push({
        x: width / 2 + Math.cos(angle) * radius * 2,
        y: height / 2 + Math.sin(angle) * radius * 2,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        radius: Math.random() * 2 + 1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Radial background glow inside the canvas
      const gradient = ctx.createRadialGradient(
        width / 2, height / 2, 20,
        width / 2, height / 2, width / 2
      );
      gradient.addColorStop(0, 'rgba(118, 33, 176, 0.08)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, width / 2, 0, Math.PI * 2);
      ctx.fill();
      
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce back from outer bounds
        const distFromCenter = Math.hypot(p.x - width / 2, p.y - height / 2);
        if (distFromCenter > width / 2 - 20) {
          // Point vector inwards
          const angle = Math.atan2(p.y - height / 2, p.x - width / 2);
          p.vx = -Math.cos(angle) * Math.abs(p.vx);
          p.vy = -Math.sin(angle) * Math.abs(p.vy);
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(182, 0, 168, 0.7)'; // Glow purple
        ctx.fill();

        // Connect lines
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(118, 33, 176, ${0.45 * (1 - dist / 120)})`; // Fade connection
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <canvas ref={canvasRef} className="w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px] lg:w-[500px] lg:h-[500px] opacity-80" />
      {/* Decorative center orb */}
      <div className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-[#B600A8]/20 to-[#7621B0]/20 blur-xl pointer-events-none" />
    </div>
  );
};

export default ParticleSphere;
