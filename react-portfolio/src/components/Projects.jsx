import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = React.useState('All');
  
  const projects = [
    {
      title: "Task Manager Pro",
      description: "A sophisticated task management application featuring real-time collaboration, advanced filtering, and intuitive drag-and-drop functionality. Built with modern React patterns and a robust backend architecture.",
      image: "/TaskManager.png",
      tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "Full Stack"
    },
    {
      title: "Cyberpunk Portfolio",
      description: "An immersive, responsive portfolio website with futuristic design elements, smooth animations, and cutting-edge UI/UX. Features custom particle systems and advanced motion graphics.",
      image: "https://res.cloudinary.com/dohzdhybo/image/upload/v1740688519/Screenshot_2025-02-23_at_12.54.44_PM_cqhgbi.png",
      tech: ["React", "Framer Motion", "CSS3", "Vite", "Lucide"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    },
    {
      title: "E-Commerce Revolution",
      description: "Next-generation e-commerce platform with AI-powered recommendations, real-time inventory management, and seamless payment processing. Features admin dashboard and analytics.",
      image: "https://via.placeholder.com/600x400/1a1a2e/00d9ff?text=E-Commerce",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack"
    },
    {
      title: "API Gateway",
      description: "High-performance microservices API gateway with rate limiting, authentication, and monitoring. Handles millions of requests with sub-millisecond latency.",
      image: "https://via.placeholder.com/600x400/1a1a2e/8b5cf6?text=API+Gateway",
      tech: ["Node.js", "Docker", "Kubernetes", "Redis", "GraphQL"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Backend"
    },
    {
      title: "Data Visualization Studio",
      description: "Interactive data visualization platform with real-time analytics, custom chart builders, and collaborative features. Transform complex data into stunning insights.",
      image: "https://via.placeholder.com/600x400/1a1a2e/ec4899?text=Data+Viz",
      tech: ["React", "D3.js", "Python", "FastAPI", "WebSockets"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    },
    {
      title: "AI Chat Assistant",
      description: "Intelligent conversational AI assistant with natural language processing, context awareness, and multi-platform integration. Powered by advanced machine learning models.",
      image: "https://via.placeholder.com/600x400/1a1a2e/00ff87?text=AI+Chat",
      tech: ["Python", "TensorFlow", "React", "FastAPI", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#",
      category: "AI/ML"
    }
  ];
  
  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'AI/ML'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
    <section id="projects" className="projects-section">
      {/* Floating background elements */}
      <div className="projects-float-1"></div>
      <div className="projects-float-2"></div>
      <div className="projects-float-3"></div>
      
      <div className="projects-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            variants={itemVariants}
            className="projects-title"
          >
            Featured Projects
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="projects-subtitle"
          >
            Innovative solutions crafted with cutting-edge technologies
          </motion.p>

          {/* Project Filter */}
          <motion.div 
            variants={itemVariants}
            className="project-filters"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="projects-grid"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                }}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-image-overlay"></div>
                </div>
                
                <div className="project-content">
                  <div className="project-header">
                    <div className="project-title-section">
                      <h3 className="project-title">{project.title}</h3>
                      <span className="project-category">{project.category}</span>
                    </div>
                    <div className="project-links">
                      <motion.a
                        href={project.liveUrl}
                        className="project-link live-link"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Live Demo"
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className="project-link github-link"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Source Code"
                      >
                        <Github size={18} />
                      </motion.a>
                    </div>
                  </div>
                  
                  <p className="project-description">
                    {project.description}
                  </p>
                  
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="tech-tag"
                        whileHover={{ scale: 1.05, y: -2 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: techIndex * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
