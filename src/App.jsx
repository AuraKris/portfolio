import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow pt-32 md:pt-36">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;