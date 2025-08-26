import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Star, Zap } from 'lucide-react';
import './Projects_simple.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Task Manager Pro",
      description: "A comprehensive task management application with real-time collaboration features.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: "/TaskManager.png",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "Real-time weather application with geolocation and forecast data.",
      tech: ["React", "OpenWeather API", "CSS3"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop&crop=center",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin panel.",
      tech: ["React", "Express", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

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
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="projects-header"
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
              className="projects-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Featured Projects
            </motion.h2>
          </div>
          
          <motion.p 
            className="projects-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A showcase of my recent work and personal projects
          </motion.p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} className="project-link live-link">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.githubUrl} className="project-link github-link">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
