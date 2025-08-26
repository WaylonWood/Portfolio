import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-content"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="profile-image-container"
          >
            <motion.img
              src="https://res.cloudinary.com/dohzdhybo/image/upload/v1740688408/IMG_6345_zrjyzp.png"
              alt="Waylon Wood"
              className="profile-image"
              whileHover={{ 
                scale: 1.1, 
                filter: "brightness(1.2)"
              }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* Name and Title */}
          <motion.div variants={itemVariants} className="hero-text">
            <h1 className="hero-name">Waylon Wood</h1>
            <p className="hero-title">Full Stack Developer & USMC Veteran</p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="hero-description"
          >
            Crafting exceptional digital experiences with cutting-edge technologies.
            Combining military precision with innovative coding solutions to build the future.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="hero-buttons"
          >
            <motion.a
              href="#projects"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 50px rgba(0, 217, 255, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
            >
              View My Work
            </motion.a>
            
            <motion.a
              href="#"
              whileHover={{ 
                scale: 1.05,
                borderColor: "var(--primary-glow)"
              }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-secondary"
            >
              <Download size={18} />
              Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="social-links"
          >
            {[
              { icon: Github, href: "https://github.com/WaylonWood", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/waylonwood", label: "LinkedIn" },
              { icon: Mail, href: "mailto:wwoodrvms@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2, 
                  y: -8,
                  boxShadow: "0 10px 25px rgba(0, 217, 255, 0.3)"
                }}
                className="social-link"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
