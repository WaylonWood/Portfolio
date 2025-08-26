import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects_simple';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ParticleSystem from './components/ParticleSystem';
import './App.css';

function App() {
  return (
    <div className="app">
      <ParticleSystem />
      <Navigation />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
