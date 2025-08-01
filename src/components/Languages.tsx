import React from 'react';
import { motion } from 'framer-motion';

const Languages = () => {
  const languages = [
    { name: 'Hindi', native: 'हिन्दी', code: 'hi', color: 'from-red-400 to-orange-500' },
    { name: 'Telugu', native: 'తెలుగు', code: 'te', color: 'from-blue-400 to-indigo-500' },
    { name: 'Tamil', native: 'தமிழ்', code: 'ta', color: 'from-green-400 to-emerald-500' },
    { name: 'Kannada', native: 'ಕನ್ನಡ', code: 'kn', color: 'from-yellow-400 to-amber-500' },
    { name: 'Malayalam', native: 'മലയാളം', code: 'ml', color: 'from-purple-400 to-violet-500' },
    { name: 'Gujarati', native: 'ગુજરાતી', code: 'gu', color: 'from-pink-400 to-rose-500' },
    { name: 'Odia', native: 'ଓଡ଼ିଆ', code: 'or', color: 'from-cyan-400 to-teal-500' },
    { name: 'Bengali', native: 'বাংলা', code: 'bn', color: 'from-lime-400 to-green-500' },
    { name: 'Punjabi', native: 'ਪੰਜਾਬੀ', code: 'pa', color: 'from-orange-400 to-red-500' },
    { name: 'English', native: 'English', code: 'en', color: 'from-slate-400 to-gray-500' },
  ];

  const examples = [
    {
      language: 'Hindi',
      query: '2024 में भारतीय चुनाव कब हो रहे हैं?',
      answer: '19 अप्रैल 2024 से 1 जून 2024 तक।',
    },
    {
      language: 'Telugu',
      query: '2024లో భారత ఎన్నికలు ఎప్పుడు జరుగుతాయి?',
      answer: '19 ఏప్రిల్ 2024 నుంచి 1 జూన్ 2024 వరకు భారత ఎన్నికలు జరుగుతున్నాయి.',
    },
    {
      language: 'Tamil',
      query: '2024ல் இந்திய தேர்தல் எப்போது நடைபெறும்?',
      answer: '2024 இல் இந்திய தேர்தல் ஏப்ரல் 19 முதல் ஜூன் 1 வரை நடைபெறும்.',
    },
  ];

  return (
    <section id="languages" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Supported <span className="gradient-text">Languages</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Navarasa 2.0 understands and generates content in 10 languages, 
            bridging the gap between AI and India's linguistic diversity.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {languages.map((language, index) => (
            <motion.div
              key={language.code}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${language.color} rounded-full mx-auto mb-3 flex items-center justify-center`}>
                <span className="text-white font-bold text-sm">{language.code.toUpperCase()}</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{language.name}</h3>
              <p className="text-gray-600 text-xs">{language.native}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Language Examples
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {examples.map((example, index) => (
              <motion.div
                key={example.language}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="language-badge mb-4">{example.language}</div>
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-1">Query:</p>
                  <p className="text-gray-800 font-medium">{example.query}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Answer:</p>
                  <p className="text-gray-800">{example.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Languages;