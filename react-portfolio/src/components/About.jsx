import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Zap } from 'lucide-react';
import './About.css';

const About = () => {
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

  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="title-container">
            <motion.div
              variants={sparkleVariants}
              animate="animate"
              className="title-sparkle sparkle-1"
            >
              <Sparkles size={24} />
            </motion.div>
            <motion.div
              variants={sparkleVariants}
              animate="animate"
              className="title-sparkle sparkle-2"
              style={{ animationDelay: '1s' }}
            >
              <Star size={20} />
            </motion.div>
            <motion.div
              variants={sparkleVariants}
              animate="animate"
              className="title-sparkle sparkle-3"
              style={{ animationDelay: '2s' }}
            >
              <Zap size={22} />
            </motion.div>
            
            <motion.h2 
              className="about-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Me
            </motion.h2>
          </div>
          
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="about-description">
              I'm a dedicated Junior Developer with a strong foundation in coding and problem-solving. 
              As a Marine Corps veteran, I've developed discipline, teamwork, and resilience 
              that I bring to every project I work on.
            </p>
            
            <p className="about-description">
              Currently pursuing my degree in Computer Science, I combine my passion for technology 
              with the valuable skills I honed in the military to approach challenges with a unique perspective.
            </p>
            
            <p className="about-description">
              I am experienced with the MERN stack, and I'm always eager to learn and grow. Whether 
              working on a collaborative team or tackling independent projects, I thrive in environments 
              that push me to innovate and think outside the box.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
