import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Users, Code, Laptop, Sparkles, Star, Zap } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Freelance Projects",
      location: "Remote",
      period: "2025 - Present",
      type: "Development",
      icon: <Code size={24} />,
      description: "Developing modern web applications using React, Node.js, and cloud technologies. Focus on beautiful, responsive designs and custom user experiences.",
      achievements: [
        "Building full-stack applications with modern tech stacks",
        "Implementing responsive designs for optimal user experience",
        "Integrating third-party APIs and database management",
        "Deploying applications using cloud platforms and CI/CD"
      ],
      skills: ["React", "Node.js", "JavaScript", "MongoDB", "Git"]
    },
    {
      id: 2,
      title: "Software Engineering Apprentice",
      company: "Creating Coding Careers",
      location: "Remote",
      period: "August 2025 - Present",
      type: "Education",
      icon: <Laptop size={24} />,
      description: "Software development apprenticeship program focusing on full-stack web development, combining theoretical learning with hands-on project experience and industry mentorship.",
      achievements: [
        "Learning full-stack development fundamentals and advanced concepts",
        "Completed multiple comprehensive projects demonstrating practical skills",
        "Collaborated on team projects using Agile and Scrum methodologies",
        "Maintained exceptional performance throughout intensive curriculum",
        "Developed expertise in modern web technologies and frameworks"
      ],
      skills: ["Data Structures", "Algorithms", "Problem Solving", "Team Collaboration", "Agile Development"]
    },
    {
      id: 3,
      title: "Satellite Communications SME",
      company: "US Marine Corps - 9th Communication Battalion",
      location: "Marine Corps Base Camp Pendleton, CA",
      period: "2021 - Present",
      type: "Military",
      icon: <Award size={24} />,
      description: "Served with distinction in the United States Marine Corps, progressing through specialized technical roles in electronic systems maintenance, satellite communications, and microminiature repair operations. Led teams of up to 22 technicians while ensuring operational readiness of critical military communication systems.",
      achievements: [
        "🎖️ Led 22 electronic technicians in maintenance and repair of sophisticated electronic systems",
        "🔧 Developed and implemented updated quality control processes improving product delivery",
        "📡 Managed satellite communication systems ensuring reliable connectivity in operational environments",
        "🔬 Specialized in microminiature repair of advanced electronic components and assemblies",
        "📊 Analyzed performance metrics and implemented process improvements enhancing repair turnaround times",
        "👥 Conducted comprehensive training sessions for junior technicians fostering skill development",
        "📋 Maintained detailed technical documentation including service reports and compliance records",
        "⚙️ Coordinated system upgrades and installations ensuring timely completion within budget",
        "🔍 Performed advanced troubleshooting techniques minimizing system downtime",
        "🤝 Collaborated with joint-service teams integrating electronic systems into operational frameworks"
      ],
      roles: [
        {
          position: "Lead Technician",
          duration: "10/2023 - Present",
          responsibilities: "Oversee 22 electronic technicians, ensure operational readiness, implement quality control processes, manage project coordination for system upgrades"
        },
        {
          position: "IMA Operations Chief", 
          duration: "12/2023 - Present",
          responsibilities: "Lead 4 technicians in microminiature repair, develop maintenance procedures, collaborate with engineering teams, analyze performance metrics"
        },
        {
          position: "Satellite Communications Technician",
          duration: "03/2021 - Present",
          responsibilities: "Install and maintain satellite communication systems, troubleshoot equipment, provide technical support and training, coordinate logistics operations"
        }
      ],
      skills: ["Electronic Systems Maintenance", "Satellite Communications", "Microminiature Repair", "Team Leadership", "Quality Control", "Technical Documentation", "Advanced Troubleshooting", "Project Management", "Training & Development", "Military Standards Compliance", "Inventory Management", "Process Improvement"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
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
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="experience-header"
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
              className="experience-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Professional Experience
            </motion.h2>
          </div>
          
          <motion.p 
            className="experience-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            From military service to software development - a journey of continuous growth and dedication
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="experience-timeline"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`experience-item ${exp.type.toLowerCase()}`}
            >
              <div className="experience-icon">
                {exp.icon}
              </div>
              
              <div className="experience-content">
                <div className="experience-meta">
                  <div className="experience-period">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                  <div className="experience-location">
                    <MapPin size={16} />
                    {exp.location}
                  </div>
                </div>
                
                <h3 className="experience-role">{exp.title}</h3>
                <h4 className="experience-company">{exp.company}</h4>
                
                <p className="experience-description">{exp.description}</p>
                
                {exp.roles && (
                  <div className="experience-roles">
                    <h5>Military Roles & Progression:</h5>
                    <div className="roles-grid">
                      {exp.roles.map((role, idx) => (
                        <div key={idx} className="role-card">
                          <div className="role-position">{role.position}</div>
                          <div className="role-duration">{role.duration}</div>
                          <div className="role-responsibilities">{role.responsibilities}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="experience-achievements">
                  <h5>Key Achievements:</h5>
                  <ul>
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="experience-skills">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
