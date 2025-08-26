import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = this.getRandomColor();
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      getRandomColor() {
        const colors = [
          'rgba(0, 217, 255, ', // Primary glow
          'rgba(255, 0, 128, ', // Secondary glow  
          'rgba(57, 255, 20, ', // Accent glow
          'rgba(255, 255, 255, ' // White
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        // Pulse effect
        this.pulsePhase += this.pulseSpeed;
        this.currentOpacity = this.opacity * (0.5 + 0.5 * Math.sin(this.pulsePhase));
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.currentOpacity;
        
        // Create gradient for glow effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 3
        );
        gradient.addColorStop(0, this.color + '0.8)');
        gradient.addColorStop(0.5, this.color + '0.4)');
        gradient.addColorStop(1, this.color + '0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Inner bright core
        ctx.fillStyle = this.color + '1)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    // Connection line class
    class Connection {
      constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
        this.opacity = 0;
      }

      update() {
        const dx = this.p1.x - this.p2.x;
        const dy = this.p1.y - this.p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          this.opacity = (150 - distance) / 150 * 0.3;
        } else {
          this.opacity = 0;
        }
      }

      draw() {
        if (this.opacity > 0) {
          ctx.save();
          ctx.globalAlpha = this.opacity;
          
          const gradient = ctx.createLinearGradient(
            this.p1.x, this.p1.y,
            this.p2.x, this.p2.y
          );
          gradient.addColorStop(0, 'rgba(0, 217, 255, 0.5)');
          gradient.addColorStop(0.5, 'rgba(255, 0, 128, 0.5)');
          gradient.addColorStop(1, 'rgba(57, 255, 20, 0.5)');

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(this.p1.x, this.p1.y);
          ctx.lineTo(this.p2.x, this.p2.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    // Create particles
    const particles = [];
    const particleCount = Math.min(80, Math.floor(canvas.width * canvas.height / 15000));
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Mouse interaction
    let mouse = { x: null, y: null, radius: 100 };
    
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();

        // Mouse interaction
        if (mouse.x && mouse.y) {
          const dx = particle.x - mouse.x;
          const dy = particle.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            particle.x += dx * force * 0.02;
            particle.y += dy * force * 0.02;
            particle.currentOpacity = Math.min(1, particle.opacity + force * 0.5);
          }
        }

        particle.draw();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const connection = new Connection(particles[i], particles[j]);
          connection.update();
          connection.draw();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          pointerEvents: 'auto',
        }}
      />
      
      {/* Additional floating elements */}
      <div className="glow-effect glow-1"></div>
      <div className="glow-effect glow-2"></div>
      <div className="glow-effect glow-3"></div>
    </>
  );
};

export default ParticleBackground;
