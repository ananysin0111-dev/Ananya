import React, { useEffect, useRef } from 'react';

export default function VaporCanvas({ reducedMotion }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Automatically detect prefers-reduced-motion if not explicitly passed
    const isMotionReduced = reducedMotion !== undefined 
      ? reducedMotion 
      : window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isMotionReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle types: Restrained green chemical vapor + subtle warm desert dust
    const particles = [];
    const particleCount = Math.min(35, Math.floor(window.innerWidth / 35));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 70 + 35,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -Math.random() * 0.4 - 0.1,
        alpha: Math.random() * 0.06 + 0.015,
        color: Math.random() > 0.4 ? '16, 185, 129' : '245, 158, 11', // green or amber
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.y + p.radius < 0) {
          p.y = height + p.radius;
          p.x = Math.random() * width;
        }
        if (p.x - p.radius > width) p.x = -p.radius;
        if (p.x + p.radius < 0) p.x = width + p.radius;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        gradient.addColorStop(0, `rgba(${p.color}, ${p.alpha * 1.4})`);
        gradient.addColorStop(0.5, `rgba(${p.color}, ${p.alpha * 0.4})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-10 opacity-60"
      />
      {/* Subtle green ambient laboratory vignette lighting */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          background: 'radial-gradient(circle 800px at 10% 10%, rgba(16, 185, 129, 0.08), transparent 70%), radial-gradient(circle 700px at 90% 90%, rgba(245, 158, 11, 0.06), transparent 70%)'
        }}
      />
    </>
  );
}
