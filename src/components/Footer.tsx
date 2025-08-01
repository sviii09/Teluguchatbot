import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const teamMembers = [
    {
      name: 'Ravi Theja',
      twitter: 'https://twitter.com/ravithejads',
      linkedin: 'https://www.linkedin.com/in/ravidesetty/',
    },
    {
      name: 'Ramsri Gautham',
      twitter: 'https://twitter.com/ramsri_goutham',
      linkedin: 'https://www.linkedin.com/in/ramsrig',
    },
  ];

  const links = [
    {
      title: 'Resources',
      items: [
        { name: 'HuggingFace Models', href: 'https://huggingface.co/Telugu-LLM-Labs' },
        { name: 'GitHub Repository', href: 'https://github.com/Telugu-LLM-Labs/Indic-gemma-7b-Navarasa' },
        { name: 'Training Notebooks', href: '#examples' },
        { name: 'Documentation', href: '#features' },
      ],
    },
    {
      title: 'Community',
      items: [
        { name: 'Telugu LLM Labs', href: 'https://huggingface.co/Telugu-LLM-Labs' },
        { name: 'Discussions', href: 'https://github.com/Telugu-LLM-Labs/Indic-gemma-7b-Navarasa/discussions' },
        { name: 'Issues', href: 'https://github.com/Telugu-LLM-Labs/Indic-gemma-7b-Navarasa/issues' },
        { name: 'Contributions', href: 'https://github.com/Telugu-LLM-Labs/Indic-gemma-7b-Navarasa/blob/main/CONTRIBUTING.md' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">N</span>
                </div>
                <span className="text-2xl font-bold">Navarasa 2.0</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Advancing multilingual AI for Indian languages. Built with ❤️ by the 
                Telugu LLM Labs community for researchers, developers, and language enthusiasts.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/Telugu-LLM-Labs/Indic-gemma-7b-Navarasa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://huggingface.co/Telugu-LLM-Labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {links.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-1"
                    >
                      <span>{item.name}</span>
                      {item.href.startsWith('http') && <ExternalLink size={12} />}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 mt-12"
        >
          <h3 className="text-lg font-semibold mb-6 text-center">Meet the Team</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex items-center space-x-4">
                <div className="text-center">
                  <p className="font-medium text-white">{member.name}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      <Twitter size={16} />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                    >
                      <Linkedin size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 pt-8 mt-8 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© 2024 Telugu LLM Labs. Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>for the Indic AI community.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;