import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Languages from './components/Languages';
import CodeExamples from './components/CodeExamples';
import RAGDemo from './components/RAGDemo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      <main>
        <Hero />
        <Features />
        <Languages />
        <CodeExamples />
        <RAGDemo />
      </main>
      <Footer />
    </div>
  );
}

export default App;