import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Twitter, Linkedin, Instagram, Mail, ExternalLink, Send } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "Connect on LinkedIn" },
    { icon: Instagram, href: "#", label: "Follow our journey" },
    { icon: Mail, href: "mailto:hello@connectx2025.com", label: "Email us" }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-dark via-gray-900 to-dark">
      {/* Constellation background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Aurora effect */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/10 via-secondary/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-t from-purple-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Wave top border */}
      <div className="relative">
        <svg
          className="w-full h-16 sm:h-20 fill-current text-light transform rotate-180"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>

      <div className="relative z-10 px-4 sm:px-6 py-12 sm:py-16">
        <div className="container mx-auto">
          {/* Main footer content */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">ConnectX 2025</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Where ambitious students meet innovative startups. Building the future, one connection at a time.
                </p>
              </div>

              {/* Social links */}
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-primary/20 transition-all duration-300 border border-white/10 hover:border-primary/30"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Newsletter signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12"
          >
            <div className="text-center">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Stay in the Loop</h4>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">Get updates on speakers, agenda changes, and exclusive networking opportunities</p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm sm:text-base"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <span>Subscribe</span>
                  <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="border-t border-white/10 pt-6 sm:pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright with heart */}
              <div className="flex items-center space-x-2 text-gray-300 text-sm sm:text-base">
                <span>Built with</span>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    color: ['#ec4899', '#f59e0b', '#ec4899']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }}
                >
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                </motion.div>
                <span>by students for students</span>
              </div>

              {/* Legal links */}
              <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-400">
                <motion.a
                  href="#privacy"
                  whileHover={{ color: '#00B5D8' }}
                  className="hover:text-secondary transition-colors duration-300"
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#terms"
                  whileHover={{ color: '#00B5D8' }}
                  className="hover:text-secondary transition-colors duration-300"
                >
                  Terms of Service
                </motion.a>
                <span>© 2025 ConnectX</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;