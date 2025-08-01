import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cpu, Shield, Layers, Rocket } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Code,
      title: 'Fine-tuned Architecture',
      description: 'Built on Google\'s Gemma 7B with LoRA fine-tuning for efficient training and deployment.',
      color: 'text-primary-600',
      bgColor: 'bg-primary-100',
    },
    {
      icon: Database,
      title: 'Rich Training Data',
      description: 'Trained on diverse datasets including Alpaca, GPTeacher, and language-specific instruction datasets.',
      color: 'text-accent-600',
      bgColor: 'bg-accent-100',
    },
    {
      icon: Cpu,
      title: 'Optimized Performance',
      description: 'Efficient inference with support for 4-bit quantization and gradient checkpointing.',
      color: 'text-success-600',
      bgColor: 'bg-success-100',
    },
    {
      icon: Shield,
      title: 'Production Ready',
      description: 'Thoroughly tested across multiple languages with comprehensive evaluation metrics.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
    {
      icon: Layers,
      title: 'RAG Integration',
      description: 'Seamlessly integrates with LlamaIndex and Cohere embeddings for enhanced context retrieval.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: Rocket,
      title: 'Easy Deployment',
      description: 'Simple setup with HuggingFace Transformers and Unsloth for fast inference.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
  ];

  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the advanced capabilities that make Navarasa 2.0 the premier choice 
            for multilingual AI applications in Indian languages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 rounded-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;