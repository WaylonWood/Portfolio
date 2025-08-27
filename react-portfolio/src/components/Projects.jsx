import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Star, Zap } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Task Manager",
      description: "A full-stack task management web app built with Python and Flask, featuring user authentication, project and workspace management, dark mode, and a responsive UI. Uses SQLite with Alembic for database migrations and is easy to deploy on platforms like Vercel.",
      tech: ["Python","SQLite", "Alembic", "HTML", "CSS", "Vercel"],
  image: "/TaskManager.webp",
      liveUrl: "https://wood-task-manager-web.vercel.app",
      githubUrl: "https://github.com/WaylonWood/Task-Manager-Web"
    },
    {
      id: 2,
      title: "My Portfolio",
      description: "My personal portfolio website is a modern, responsive platform built with React, Vite, HTML, and CSS. It’s designed to showcase my projects, skills, and experience in a clean and visually appealing way. With a focus on speed and usability, the site provides an interactive browsing experience while highlighting my work and technical expertise.",
      tech: ["React", "Vite", "HTML", "Tailwind CSS"],
  image: "/MyPortfolio.webp",
      liveUrl: "https://waylonwood.dev",
      githubUrl: "https://github.com/WaylonWood/Portfolio"
    },
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
                <picture>
                  <source srcSet={project.image.replace('.png', '.webp').replace('.jpg', '.webp').replace('.jpeg', '.webp')} type="image/webp" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} className="project-link live-link" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.githubUrl} className="project-link github-link" target="_blank" rel="noopener noreferrer">
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
