import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Database, Brain, ArrowRight, Sparkles } from 'lucide-react';

const RAGDemo = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('hindi');

  const languages = [
    { id: 'hindi', name: 'Hindi', native: 'हिन्दी' },
    { id: 'telugu', name: 'Telugu', native: 'తెలుగు' },
    { id: 'tamil', name: 'Tamil', native: 'தமிழ்' },
    { id: 'marathi', name: 'Marathi', native: 'मराठी' },
    { id: 'urdu', name: 'Urdu', native: 'اردو' },
  ];

  const demoData = {
    hindi: {
      query: '2024 में भारतीय चुनाव कब हो रहे हैं?',
      answer: '19 अप्रैल 2024 से 1 जून 2024 तक।',
      context: 'भारतीय आम चुनाव 2024 सात चरणों में आयोजित किए जा रहे हैं...',
    },
    telugu: {
      query: '2024లో భారత ఎన్నికలు ఎప్పుడు జరుగుతాయి?',
      answer: '19 ఏప్రిల్ 2024 నుంచి 1 జూన్ 2024 వరకు భారత ఎన్నికలు జరుగుతున్నాయి.',
      context: '2024 భారత సార్వత్రిక ఎన్నికలు ఏడు దశల్లో నిర్వహించబడుతున్నాయి...',
    },
    tamil: {
      query: '2024ல் இந்திய தேர்தல் எப்போது நடைபெறும்?',
      answer: '2024 இல் இந்திய தேர்தல் ஏப்ரல் 19 முதல் ஜூன் 1 வரை நடைபெறும்.',
      context: '2024 இந்திய பொதுத் தேர்தல் ஏழு கட்டங்களில் நடத்தப்படுகிறது...',
    },
    marathi: {
      query: '2024 मध्ये भारतीय निवडणुका कधी होणार आहेत?',
      answer: '2024 मध्ये भारतीय निवडणुका 19 एप्रिल ते 1 जून दरम्यान होणार आहेत.',
      context: '2024 च्या भारतीय सार्वत्रिक निवडणुका सात टप्प्यांत घेतल्या जात आहेत...',
    },
    urdu: {
      query: '2024 میں بھارتی انتخابات کب ہوں گے؟',
      answer: '2024 میں ہندوستانی عام انتخابات 19 اپریل سے 1 جون تک ہوں گے۔',
      context: '2024 کے بھارتی عام انتخابات سات مراحل میں منعقد کیے جا رہے ہیں...',
    },
  };

  const steps = [
    {
      icon: Search,
      title: 'Query Processing',
      description: 'User query is processed and embedded using multilingual models',
      color: 'text-primary-600',
      bgColor: 'bg-primary-100',
    },
    {
      icon: Database,
      title: 'Context Retrieval',
      description: 'Relevant documents are retrieved from the vector database',
      color: 'text-accent-600',
      bgColor: 'bg-accent-100',
    },
    {
      icon: Brain,
      title: 'Response Generation',
      description: 'Navarasa 2.0 generates contextually accurate responses',
      color: 'text-success-600',
      bgColor: 'bg-success-100',
    },
  ];

  return (
    <section id="rag-demo" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-accent-100 px-4 py-2 rounded-full text-primary-800 font-medium text-sm mb-6">
            <Sparkles size={16} className="text-primary-600" />
            <span>RAG Implementation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Retrieval Augmented <span className="gradient-text">Generation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Navarasa 2.0 combines retrieval and generation for accurate, 
            contextual responses across multiple Indian languages.
          </p>
        </motion.div>

        {/* RAG Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl text-center"
                >
                  <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card rounded-2xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">Interactive RAG Demo</h3>
            <p className="opacity-90">
              Experience multilingual question answering with contextual retrieval
            </p>
          </div>

          <div className="p-6">
            {/* Language Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Language:
              </label>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.id}
                    onClick={() => setSelectedLanguage(lang.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedLanguage === lang.id
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {lang.name} ({lang.native})
                  </button>
                ))}
              </div>
            </div>

            {/* Demo Content */}
            <motion.div
              key={selectedLanguage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Query */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Search className="w-4 h-4 mr-2 text-blue-600" />
                  User Query
                </h4>
                <p className="text-gray-800 font-medium">
                  {demoData[selectedLanguage as keyof typeof demoData].query}
                </p>
              </div>

              {/* Retrieved Context */}
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Database className="w-4 h-4 mr-2 text-purple-600" />
                  Retrieved Context
                </h4>
                <p className="text-gray-700 text-sm">
                  {demoData[selectedLanguage as keyof typeof demoData].context}
                </p>
              </div>

              {/* Generated Answer */}
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Brain className="w-4 h-4 mr-2 text-green-600" />
                  Generated Answer
                </h4>
                <p className="text-gray-800 font-medium">
                  {demoData[selectedLanguage as keyof typeof demoData].answer}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Technical Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Stack</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700">LlamaIndex for RAG orchestration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                <span className="text-gray-700">Cohere multilingual embeddings</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                <span className="text-gray-700">Vector similarity search</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">Contextual response generation</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Up-to-date information retrieval</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Reduced hallucination</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Multilingual context understanding</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-700">Scalable knowledge base</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RAGDemo;