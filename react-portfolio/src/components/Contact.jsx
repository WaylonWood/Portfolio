import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, User, AtSign, Sparkles, Zap, Star } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const controls = useAnimation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      text: "wwoodrvms@gmail.com",
      link: "mailto:wwoodrvms@gmail.com",
      description: "Reach out to me anytime",
      color: "#00d9ff",
      gradient: "linear-gradient(135deg, #00d9ff, #0099cc)"
    },
    {
      icon: Phone,
      title: "Phone",
      text: "+1 (707) 291-1611",
      link: "tel:+17072911611",
      description: "Let's talk about opportunities",
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6, #6d28d9)"
    },
    {
      icon: MapPin,
      title: "Location",
      text: "Available in the Bay Area, CA / Remote",
      link: null,
      description: "Ready for new adventures",
      color: "#ec4899",
      gradient: "linear-gradient(135deg, #ec4899, #be185d)"
    }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/WaylonWood", 
      label: "GitHub",
      color: "#00d9ff",
      description: "Explore my repositories",
      count: "My Projects"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/in/waylonwood", 
      label: "LinkedIn",
      color: "#8b5cf6",
      description: "Professional network",
      count: "Connect with me!"
    },
    { 
      icon: Mail, 
      href: "mailto:wwoodrvms@gmail.com", 
      label: "Email",
      color: "#ec4899",
      description: "Instant communication",
      count: "Quick Response"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { 
        duration: 1.0, 
        ease: "easeOut"
      }
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
    <section id="contact" className="contact-section">
      {/* Dynamic Mouse-Following Background */}
      {/* Animated Particles */}
      <div className="contact-particles">
        {[...Array(20)].map((_, i) => (
          <motion.div 
            key={i} 
            className={`particle particle-${i + 1}`}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Geometric Background Pattern */}
      <div className="contact-geometric-bg">
        <div className="geometric-shape shape-1"></div>
        <div className="geometric-shape shape-2"></div>
        <div className="geometric-shape shape-3"></div>
        <div className="geometric-shape shape-4"></div>
      </div>
      
      <div className="contact-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="contact-content-wrapper"
        >
          {/* Spectacular Header */}
          <motion.div 
            variants={itemVariants}
            className="contact-header"
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
              
              <h2 className="contact-title">
                <motion.span 
                  className="title-line-1"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Let's Build the
                </motion.span>
                <motion.span 
                  className="title-line-2"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  Future Together
                </motion.span>
              </h2>
            </div>
            
            <motion.p 
              className="contact-subtitle"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              Ready to transform ideas into digital reality? I'm passionate about creating innovative solutions that make a difference. Let's collaborate and build something extraordinary.
            </motion.p>
          </motion.div>

          <div className="contact-main-content">
            {/* Ultra-Enhanced Contact Cards */}
            <motion.div 
              variants={containerVariants}
              className="contact-info-grid"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  variants={cardVariants}
                  className="contact-info-card"
                  whileHover={{ 
                    scale: 1.08,
                    rotateY: 10,
                    z: 100,
                    transition: { duration: 0.3 }
                  }}
                  style={{ "--card-color": info.color, "--card-gradient": info.gradient }}
                >
                  <div className="card-glow"></div>
                  <div className="card-border-animation"></div>
                  <div className="card-content">
                    <div className="contact-icon-container">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <info.icon className="contact-card-icon" size={32} />
                      </motion.div>
                    </div>
                    <h3 className="contact-card-title">{info.title}</h3>
                    <p className="contact-card-description">{info.description}</p>
                    {info.link ? (
                      <motion.a 
                        href={info.link} 
                        className="contact-card-link"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {info.text}
                      </motion.a>
                    ) : (
                      <p className="contact-card-text">{info.text}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Next-Level Contact Form */}
            <motion.div 
              variants={itemVariants}
              className="contact-card"
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              {/* No blue glow or animated border for the form card */}
              <div className="form-content">
                <h3 className="form-title">
                  <Sparkles className="form-title-icon" size={24} />
                  Start a Conversation
                </h3>
                <form onSubmit={handleSubmit} className="contact-form" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" name={`contact-form-${Date.now()}`}> 
                  {/* Honeypot fields to confuse autocomplete */}
                  <input type="text" name="username" autoComplete="username" style={{display: 'none'}} tabIndex="-1" />
                  <input type="email" name="email" autoComplete="email" style={{display: 'none'}} tabIndex="-1" />
                  <input type="password" name="password" autoComplete="current-password" style={{display: 'none'}} tabIndex="-1" />
                  <div className="form-row">
                    <motion.div 
                      className="form-group"
                    >
                      <label htmlFor="field-xc7z9p" className="form-label">
                          Your Name
                      </label>
                      <input
                        type="text"
                        id="field-xc7z9p"
                        name="field-xc7z9p"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="form-input"
                        placeholder="John Doe"
                        autoComplete="new-password"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        data-form-type="other"
                        data-lpignore="true"
                        role="textbox"
                        aria-autocomplete="none"
                        required
                      />
                      <div className="input-glow"></div>
                    </motion.div>

                    <motion.div 
                      className="form-group"
                    >
                      <label htmlFor="field-m9k4np" className="form-label">
                          Email Address
                      </label>
                      <input
                        type="text"
                        id="field-m9k4np"
                        name="field-m9k4np"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="form-input"
                        placeholder="john@example.com"
                        autoComplete="new-password"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        data-form-type="other"
                        data-lpignore="true"
                        role="textbox"
                        aria-autocomplete="none"
                        required
                      />
                      <div className="input-glow"></div>
                    </motion.div>
                  </div>

                  <motion.div 
                    className="form-group"
                  >
                    <label htmlFor="field-q8w3rx" className="form-label">
                        Your Message
                    </label>
                    <textarea
                      id="field-q8w3rx"
                      name="field-q8w3rx"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="form-textarea"
                      placeholder="Tell me about your project, ideas, or just say hello! I'm excited to hear from you and explore how we can work together to bring your vision to life."
                      autoComplete="new-password"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      data-form-type="other"
                      data-lpignore="true"
                      role="textbox"
                      aria-autocomplete="none"
                      required
                    />
                    <div className="input-glow"></div>
                  </motion.div>

                  <motion.button
                    type="submit"
                    className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 25px 50px rgba(0, 217, 255, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="button-content">
                      {isSubmitting ? (
                        <>
                          <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="loading-spinner"
                          />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={22} />
                          <span>Send Message</span>
                        </>
                      )}
                    </div>
                    <div className="button-waves">
                      <div className="wave wave-1"></div>
                      <div className="wave wave-2"></div>
                      <div className="wave wave-3"></div>
                    </div>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Revolutionary Social Links */}
          <motion.div 
            variants={containerVariants}
            className="social-section"
          >
            <motion.h3 
              className="social-title"
              variants={itemVariants}
            >
              Connect & Collaborate
            </motion.h3>
            <div className="social-links-constellation">
              {socialLinks.map(({ icon: Icon, href, label, color, description, count }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-constellation-link"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -15,
                    rotateZ: index % 2 === 0 ? 5 : -5,
                    transition: { duration: 0.3 }
                  }}
                  style={{ "--social-color": color }}
                >
                  <div className="social-orbital">
                    <div className="social-planet">
                      <Icon size={28} />
                    </div>
                    <div className="social-ring"></div>
                  </div>
                  <div className="social-info">
                    <span className="social-label">{label}</span>
                    <span className="social-description">{description}</span>
                    <span className="social-count">{count}</span>
                  </div>
                  <div className="social-particles">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className={`social-particle particle-${i + 1}`}></div>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
