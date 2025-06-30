import React from 'react';
import { motion } from 'framer-motion';
import { Star, Calendar, MapPin, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const photos = [
    'https://t-hub.co/wp-content/uploads/2024/04/DSC04418-1-scaled.jpg?auto=compress&cs=tinysrgb&w=400',
    'https://tse3.mm.bing.net/th/id/OIP.THReuiJGhY69eYmuR-L9qwHaEd?rs=1&pid=ImgDetMain&o=7&rm=3?auto=compress&cs=tinysrgb&w=400',
    'https://th.bing.com/th/id/OIP.ACUR2UK6QVY_K8F0WdkGcAHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7?auto=compress&cs=tinysrgb&w=400',
    'https://th.bing.com/th/id/OIP.sH9YOtFlirnhVWJ9lesqEwHaE8?w=241&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3?auto=compress&cs=tinysrgb&w=400',
    'https://th.bing.com/th/id/OIP.yALbYmuv8UWc7XCVAHDYQgHaE8?w=256&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7?auto=compress&cs=tinysrgb&w=400',
    'https://t-hub.co/wp-content/uploads/2024/05/DSC03585-scaled.jpg?auto=compress&cs=tinysrgb&w=400',
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary via-purple-800 to-secondary">
      {/* Enhanced animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Aurora background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(109, 40, 217, 0.2) 0%, transparent 50%, rgba(0, 181, 216, 0.2) 100%)',
              'linear-gradient(135deg, rgba(0, 181, 216, 0.2) 0%, transparent 50%, rgba(109, 40, 217, 0.2) 100%)',
              'linear-gradient(45deg, rgba(109, 40, 217, 0.2) 0%, transparent 50%, rgba(0, 181, 216, 0.2) 100%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex items-center justify-center lg:justify-start gap-3 mb-6 sm:mb-8"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300 fill-current" />
                </motion.div>
                <span className="text-yellow-300 font-semibold text-base sm:text-lg tracking-wide">ConnectX : Ignite Conference 2025</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight"
              >
                Reimagining how{' '}
                <motion.span
                  animate={{
                    color: ['#00B5D8', '#6D28D9', '#00B5D8'],
                    textShadow: [
                      '0 0 30px rgba(0,181,216,0.6)',
                      '0 0 30px rgba(109,40,217,0.6)',
                      '0 0 30px rgba(0,181,216,0.6)'
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block"
                >
                  students
                </motion.span>{' '}
                meet{' '}
                <motion.span
                  animate={{
                    color: ['#6D28D9', '#00B5D8', '#6D28D9'],
                    textShadow: [
                      '0 0 30px rgba(109,40,217,0.6)',
                      '0 0 30px rgba(0,181,216,0.6)',
                      '0 0 30px rgba(109,40,217,0.6)'
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2, ease: "easeInOut" }}
                  className="inline-block"
                >
                  startups
                </motion.span>{' '}
                and{' '}
                <motion.span
                  animate={{
                    color: ['#6D28D9', '#00B5D8', '#6D28D9'],
                    textShadow: [
                      '0 0 30px rgba(109,40,217,0.6)',
                      '0 0 30px rgba(0,181,216,0.6)',
                      '0 0 30px rgba(109,40,217,0.6)'
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2, ease: "easeInOut" }}
                  className="inline-block"
                >
                  Technology
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 max-w-2xl leading-relaxed font-medium"
              >
                Join the most innovative event where ambition meets opportunity.
                Connect with industry leaders, discover your dream internship, and shape the future of technology.
              </motion.p>

              {/* Event details */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-8 sm:mb-10"
              >
                <div className="flex items-center justify-center lg:justify-start gap-3 text-white/90">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" />
                  <span className="font-semibold text-sm sm:text-base lg:text-lg">July 18, 2025</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3 text-white/90">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300" />
                  <span className="font-semibold text-sm sm:text-base lg:text-lg">T-Hub</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start"
              >
                <motion.a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScERJR7_Vc9ZIH_V3jAWjBk_dnjRXXD_1F-87kQ5VPKqJwd6g/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                    boxShadow: '0 20px 40px rgba(0, 181, 216, 0.4)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-secondary to-cyan-400 text-white font-bold text-sm sm:text-base lg:text-lg rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-secondary/30 transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-2 sm:gap-3"
                >
                  <span className="relative z-10">Register Now</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.a>
                <motion.a
                  href="#chief-guests"
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    borderColor: 'rgba(255, 255, 255, 0.6)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-white/10 backdrop-blur-sm text-white font-bold text-sm sm:text-base lg:text-lg rounded-xl sm:rounded-2xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
                >
                  <span>Meet the Guests & Speakers</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Content - Enhanced 3D Photo Grid */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative order-1 lg:order-2"
            >
              <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                {photos.map((photo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 60, rotateY: -15 }}
                    animate={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{
                      delay: 0.8 + index * 0.15,
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: Math.random() * 10 - 5,
                      zIndex: 10,
                      y: -10,
                      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
                    }}
                    className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-sm bg-white/10 border border-white/20 shadow-2xl cursor-pointer group"
                  >
                    <img
                      src={photo}
                      alt={`ConnectX moment ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Glowing orbs */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-1/4 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-2xl"
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-1/4 left-1/4 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-r from-secondary/30 to-purple-500/30 rounded-full blur-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;