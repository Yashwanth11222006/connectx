import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Star, ArrowRight, Users, Calendar, MapPin } from 'lucide-react';

const PreFooterCTA = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-primary via-purple-800 to-secondary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Gradient orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          {/* Header with animated icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-8 sm:mb-12"
          >
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <motion.div
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Star className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-300 fill-current" />
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
                Don't Miss Out!
              </h2>
              
              <motion.div
                animate={{ 
                  rotate: [0, -15, 15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <Rocket className="w-8 h-8 sm:w-12 sm:h-12 text-cyan-300" />
              </motion.div>
            </div>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Your future starts with one decision. Join ConnectX 2025 and transform your career trajectory forever.
            </motion.p>

            {/* Event highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8 sm:mb-12 text-white/90"
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold text-sm sm:text-base">300+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cyan-300" />
                <span className="font-semibold text-sm sm:text-base">July 18, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-300" />
                <span className="font-semibold text-sm sm:text-base">T-Hub, Hyderabad</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
            className="relative inline-block"
          >
            {/* Glowing background */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-xl"
            />
            
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLScERJR7_Vc9ZIH_V3jAWjBk_dnjRXXD_1F-87kQ5VPKqJwd6g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
              }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center gap-4 sm:gap-6 px-10 sm:px-16 lg:px-20 py-5 sm:py-7 lg:py-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-slate-900 font-black text-xl sm:text-2xl lg:text-3xl xl:text-4xl rounded-full shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">REGISTER NOW</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
              </motion.div>
              
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
            </motion.a>
          </motion.div>

          {/* Urgency text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-6 sm:mt-8"
          >
            <p className="text-yellow-300 font-bold text-base sm:text-lg lg:text-xl mb-2">
              ⚡ Limited Seats Available ⚡
            </p>
            <p className="text-white/80 text-sm sm:text-base">
              Premium experience • Life-changing connections
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PreFooterCTA;