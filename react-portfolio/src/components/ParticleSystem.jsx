import React, { useEffect, useState } from 'react';

const ParticleSystem = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const createParticle = () => {
      const colors = ['blue', 'purple', 'pink', 'green'];
      const sizes = ['small', 'medium', 'large'];
      const particle = {
        id: Math.random(),
        color: colors[Math.floor(Math.random() * colors.length)],
        size: sizes[Math.floor(Math.random() * sizes.length)],
        left: Math.random() * 100 + '%',
        animationDuration: (Math.random() * 20 + 15) + 's', // 15-35 seconds
        drift: (Math.random() - 0.5) * 200 + 'px', // -100px to 100px drift
        delay: Math.random() * 5 + 's'
      };
      return particle;
    };

    // Create initial particles
    const initialParticles = Array.from({ length: 25 }, createParticle);
    setParticles(initialParticles);

    // Add new particles periodically
    const interval = setInterval(() => {
      setParticles(prev => {
        // Remove old particles and add new ones
        const newParticles = prev.slice(-20); // Keep only last 20
        return [...newParticles, createParticle()];
      });
    }, 1500); // New particle every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-particles">
      {particles.map(particle => (
        <div
          key={particle.id}
          className={`particle ${particle.color} ${particle.size}`}
          style={{
            left: particle.left,
            animationDuration: particle.animationDuration,
            animationDelay: particle.delay,
            '--drift': particle.drift
          }}
        />
      ))}
    </div>
  );
};

export default ParticleSystem;
