import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Zap } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const technologies = [
    { 
      name: "React", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB"
    },
    { 
      name: "JavaScript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E"
    },
    { 
      name: "Python", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "#3776AB"
    },
    { 
      name: "Node.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933"
    },
    { 
      name: "MongoDB", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "#47A248"
    },
    { 
      name: "HTML5", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#E34F26"
    },
    { 
      name: "CSS3", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#1572B6"
    },
    { 
      name: "Git", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "#F05032"
    },
    { 
      name: "Express", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      color: "#000000"
    },
    { 
      name: "PostgreSQL", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      color: "#336791"
    },
    { 
      name: "Docker", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "#2496ED"
    },
    { 
      name: "AWS", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      color: "#FF9900"
    }
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "HTML5", "CSS3", "JavaScript ES6+", "Responsive Design", "Framer Motion"],
      icon: "💻"
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Python", "RESTful APIs", "GraphQL", "MongoDB", "PostgreSQL"],
      icon: "⚙️"
    },
    {
      title: "Tools & DevOps", 
      skills: ["Git/GitHub", "Docker", "AWS", "CI/CD", "Linux", "Vite", "Webpack"],
      icon: "🛠️"
    }
  ];

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
    <section id="skills" className="skills-section">
      {/* Floating Background Icons */}
      <div className="floating-bg-icons">
        {technologies.map((tech, index) => (
          <div
            key={`bg-${tech.name}`}
            className="floating-bg-icon"
            style={{
              '--tech-color': tech.color,
              '--delay': `${index * 2}s`,
              '--duration': `${15 + (index % 5) * 3}s`
            }}
          >
            <img 
              src={tech.icon} 
              alt=""
              className="floating-bg-icon-img"
            />
          </div>
        ))}
      </div>
      
      <div className="skills-container">
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
              className="skills-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Skills & Technologies
            </motion.h2>
          </div>
          
          <motion.p
            className="skills-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Cutting-edge technologies and frameworks I use to build exceptional digital experiences
          </motion.p>

          {/* Technology Carousel */}
          <motion.div 
            variants={itemVariants}
            className="tech-carousel-simple"
          >
            <div className="tech-track">
              {/* First set of technologies */}
              {technologies.map((tech, index) => (
                <div
                  key={`${tech.name}-1`}
                  className="tech-item-simple"
                  style={{ '--tech-color': tech.color }}
                >
                  <img 
                    src={tech.icon} 
                    alt={tech.name}
                    className="tech-icon-simple"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {technologies.map((tech, index) => (
                <div
                  key={`${tech.name}-2`}
                  className="tech-item-simple"
                  style={{ '--tech-color': tech.color }}
                >
                  <img 
                    src={tech.icon} 
                    alt={tech.name}
                    className="tech-icon-simple"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            variants={containerVariants}
            className="skills-grid"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="skill-category"
                whileHover={{ 
                  scale: 1.02,
                  y: -5
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3 className="skill-category-title">{category.title}</h3>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="skill-item"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(0, 217, 255, 0.1)"
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: (index * 0.1) + (skillIndex * 0.05),
                        duration: 0.4
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
