import { useEffect, useRef } from 'react';

export default function GlitchHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const config = {
      gridSize: 40,
      backgroundColor: '#0f172a',
      gridColor: '#334155',
      particleCount: 50,
      particleColors: ['rgba(255,255,255,1)', 'rgba(100,116,139,1)', 'rgba(148,163,184,1)'],
      particleSpeedMin: 0.5,
      particleSpeedMax: 5,
      trailLength: 100,
      rippleDuration: 2000,
      rippleMaxRadius: 200,
    };

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':,./<>?";
    const occupiedLines = { horizontal: new Set<number>(), vertical: new Set<number>() };

    class Particle {
      x = 0;
      y = 0;
      direction = 'horizontal';
      color = '';
      speed = 1;
      active = false;
      trail: { x: number; y: number }[] = [];

      constructor() {
        this.color = config.particleColors[Math.floor(Math.random() * config.particleColors.length)];
        this.speed = Math.random() * (config.particleSpeedMax - config.particleSpeedMin) + config.particleSpeedMin;
        this.reset();
      }

      reset() {
        const maxAttempts = 100;
        for (let i = 0; i < maxAttempts; i++) {
          if (Math.random() > 0.5) {
            const y = Math.round(Math.random() * canvas.height / config.gridSize) * config.gridSize;
            if (!occupiedLines.horizontal.has(y)) {
              this.direction = 'horizontal';
              this.x = 0;
              this.y = y;
              occupiedLines.horizontal.add(y);
              this.active = true;
              return;
            }
          } else {
            const x = Math.round(Math.random() * canvas.width / config.gridSize) * config.gridSize;
            if (!occupiedLines.vertical.has(x)) {
              this.direction = 'vertical';
              this.x = x;
              this.y = 0;
              occupiedLines.vertical.add(x);
              this.active = true;
              return;
            }
          }
        }
        this.active = false;
      }

      update() {
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > config.trailLength) this.trail.shift();

        if (this.active) {
          if (this.direction === 'horizontal') {
            this.x += this.speed;
            if (this.x > canvas.width) {
              this.active = false;
              occupiedLines.horizontal.delete(this.y);
            }
          } else {
            this.y += this.speed;
            if (this.y > canvas.height) {
              this.active = false;
              occupiedLines.vertical.delete(this.x);
            }
          }
        } else {
          if (
            this.trail.every(p =>
              this.direction === 'horizontal' ? p.x > canvas.width : p.y > canvas.height
            )
          ) {
            this.reset();
          }
        }
      }

      draw() {
        for (let i = 0; i < this.trail.length; i++) {
          const point = this.trail[i];
          const alpha = i / this.trail.length;
          ctx.fillStyle = this.color.replace('1)', `${alpha})`);
          ctx.beginPath();
          ctx.arc(point.x, point.y, 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    class Ripple {
      x: number;
      y: number;
      radius = 0;
      startTime = Date.now();

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
      }

      update() {
        const elapsed = Date.now() - this.startTime;
        this.radius = (elapsed / config.rippleDuration) * config.rippleMaxRadius;
      }

      draw() {
        const alpha = 1 - this.radius / config.rippleMaxRadius;
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();

        if (Math.random() < 0.3) {
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.font = '16px monospace';
          const char = characters[Math.floor(Math.random() * characters.length)];
          ctx.fillText(
            char,
            this.x + (Math.random() - 0.5) * this.radius * 2,
            this.y + (Math.random() - 0.5) * this.radius * 2
          );
        }
      }

      isDone() {
        return this.radius >= config.rippleMaxRadius;
      }
    }

    const particles = Array.from({ length: config.particleCount }, () => new Particle());
    let ripples: Ripple[] = [];

    function drawGrid() {
      ctx.fillStyle = config.backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, config.gridColor);
      gradient.addColorStop(1, 'rgba(51,65,85,0)');
      ctx.strokeStyle = gradient;

      for (let y = 0; y < canvas.height; y += config.gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      for (let x = 0; x < canvas.width; x += config.gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
    }

    const animate = () => {
      drawGrid();
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      ripples = ripples.filter(r => !r.isDone());
      ripples.forEach(r => {
        r.update();
        r.draw();
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      occupiedLines.horizontal.clear();
      occupiedLines.vertical.clear();
      particles.forEach(p => p.reset());
    });

    canvas.addEventListener('click', e => {
      ripples.push(new Ripple(e.clientX, e.clientY));
    });

    animate();
  }, []);

  return (
<div className="relative w-full h-[100vh] overflow-hidden text-white">
<canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
      <section className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none">
        <h1 className="text-4xl md:text-6xl mb-4 tracking-widest uppercase">Trade Crypto Instantly</h1>
        <p className="text-lg mb-6 pointer-events-auto  max-w-xl">
          Empower your financial future with real-time market access, lightning-fast execution, and secure crypto trading at your fingertips.
        </p>
        <a
          href="#"
          className="pointer-events-auto"
        >
          <button className="border-2 border-cyan-500 text-cyan-500 px-6 py-3  relative overflow-hidden hover:text-white transition-all duration-300">
            <span className="absolute left-0 top-0 w-full h-full bg-cyan-500 opacity-20 transform -translate-x-full hover:translate-x-full transition-all duration-300" />
            Launch Exchange
          </button>
        </a>
      </section>
    </div>
  );
}
 