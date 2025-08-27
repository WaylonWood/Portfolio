// removed duplicate React import
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import React, { Suspense, lazy } from 'react';
import { Analytics } from '@vercel/analytics/react';
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
import ParticleSystem from './components/ParticleSystem';
import './App.css';

function App() {
  return (
    <div className="app">
      <ParticleSystem />
      <Navigation />
      <main className="main-content">
        <Hero />
  <Suspense fallback={<div className="loading">Loading...</div>}>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
    </Suspense>
    <Analytics />
      </main>
    </div>
  );
}

export default App;
