import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Globe, Zap, ArrowRight } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-accent-100 px-4 py-2 rounded-full text-primary-800 font-medium text-sm mb-6">
              <Zap size={16} className="text-primary-600" />
              <span>Powered by Gemma 7B Architecture</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">Indic Gemma 7B</span>
              <br />
              <span className="text-gray-700">Navarasa 2.0</span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            A powerful multilingual AI model fine-tuned on 9 Indian languages plus English. 
            Experience the future of Indic language processing with state-of-the-art performance 
            across diverse linguistic tasks.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          >
            <motion.a
              href="#examples"
              className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Try Examples</span>
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="https://github.com/Telugu-LLM-Labs/Indic-gemma-7b-Navarasa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-primary-600 hover:text-primary-600 transition-colors duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View on GitHub</span>
              <Globe size={20} />
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="glass-card p-6 rounded-xl">
              <Brain className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced AI</h3>
              <p className="text-gray-600">Built on Gemma 7B architecture with LoRA fine-tuning for optimal performance</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <Globe className="w-12 h-12 text-accent-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">10 Languages</h3>
              <p className="text-gray-600">Supports Hindi, Telugu, Tamil, Kannada, Malayalam, Gujarati, Odia, Bengali, Punjabi & English</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <Zap className="w-12 h-12 text-success-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">RAG Ready</h3>
              <p className="text-gray-600">Optimized for Retrieval Augmented Generation with multilingual embedding support</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;