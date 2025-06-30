import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, ExternalLink, Crown, Award, Building, Globe, Shield, Briefcase, Star } from 'lucide-react';

const ChiefGuestsSection = () => {
  const [hoveredGuest, setHoveredGuest] = useState<number | null>(null);

  const chiefGuests = [
    {
      name: "Daisuke Tanji",
      title: "Founder & CEO",
      company: "Indobox Inc.",
      image: "public/assets/daisuke tanji.jpeg?auto=compress&cs=tinysrgb&w=400",
      background: "public/assets/daisuke tanji.jpeg?auto=compress&cs=tinysrgb&w=800",
      quote: "Building bridges between India and Japan through innovation and entrepreneurship. The future belongs to those who dare to connect cultures and create global solutions.",
      achievements: [
        { icon: Building, text: "Director, Indobox India", color: "text-blue-400" },
        { icon: Globe, text: "Woxsen Japan Centre", color: "text-green-400" },
        { icon: Star, text: "India-Japan Business", color: "text-yellow-400" }
      ],
      specialization: "Cross-Cultural Innovation",
      experience: "15+ Years",
      linkedin: "https://www.linkedin.com/in/daisuke-tanji/",
      twitter: "#",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      accentColor: "blue"
    },
    /*{
      name: "Chennapa Naidu Darapaneni",
      title: "Venture Partner",
      company: "Factoryal",
      image: "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400",
      background: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      quote: "Every great startup begins with solving a real problem. As students, you have the unique perspective to identify and solve tomorrow's challenges today.",
      achievements: [
        { icon: Briefcase, text: "Founder, MeraEvents", color: "text-emerald-400" },
        { icon: Award, text: "Venture Investment", color: "text-cyan-400" },
        { icon: Building, text: "Events Transformer", color: "text-orange-400" }
      ],
      specialization: "Venture Capital & Events",
      experience: "12+ Years",
      linkedin: "https://www.linkedin.com/in/naidudc/",
      twitter: "#",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      accentColor: "emerald"
    },
    {
      name: "Penumarthi HariKrishna",
      title: "Chairman",
      company: "PHK Group",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400",
      background: "https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg?auto=compress&cs=tinysrgb&w=800",
      quote: "In today's digital world, security and innovation must go hand in hand. Young entrepreneurs have the power to build a safer, more connected future.",
      achievements: [
        { icon: Shield, text: "Cyber Terrorism Expert", color: "text-red-400" },
        { icon: Award, text: "Serial Entrepreneur", color: "text-amber-400" },
        { icon: Building, text: "PHK Group Chairman", color: "text-indigo-400" }
      ],
      specialization: "Cybersecurity & Innovation",
      experience: "20+ Years",
      linkedin: "https://www.linkedin.com/in/phkinfinity/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "#",
      gradient: "from-red-500 via-orange-500 to-amber-500",
      accentColor: "red"
    }*/
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.7, 0.4],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
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
      </div>

      <div className="container mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-block mb-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-yellow-400 via-amber-300 to-orange-400 bg-clip-text text-transparent leading-tight">
              Meet Our Chief Guests
            </h2>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Visionary leaders who have shaped industries and will inspire the next generation of innovators
          </motion.p>
        </motion.div>

        {/* Compact Guest Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto">
          {chiefGuests.map((guest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              onHoverStart={() => setHoveredGuest(index)}
              onHoverEnd={() => setHoveredGuest(null)}
              className="group relative"
            >
              {/* Main Card */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02
                }}
                className="relative h-full backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500"
              >
                {/* Background with overlay */}
                <div className="absolute inset-0">
                  <img
                    src={guest.background}
                    alt={`${guest.company} background`}
                    className="w-full h-full object-cover opacity-20 blur-sm transition-all duration-500 group-hover:opacity-30 group-hover:blur-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${guest.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                </div>

                {/* Content */}
                <div className="relative h-full p-4 sm:p-6 flex flex-col min-h-[420px]">
                  {/* Profile Section */}
                  <div className="text-center mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-3 border-yellow-400/40 mb-3 mx-auto shadow-xl"
                    >
                      <img
                        src={guest.image}
                        alt={guest.name}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${guest.gradient} opacity-20`} />
                    </motion.div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 leading-tight">
                      {guest.name}
                    </h3>
                    <p className="text-yellow-400 font-bold text-sm mb-1">
                      {guest.title}
                    </p>
                    <p className="text-gray-300 font-semibold text-xs sm:text-sm mb-3">
                      {guest.company}
                    </p>

                    {/* Experience & Specialization */}
                    <div className="flex justify-center gap-3 mb-3">
                      <div className="text-center">
                        <p className="text-xs text-gray-400 uppercase tracking-wide">Experience</p>
                        <p className="text-white font-bold text-sm">{guest.experience}</p>
                      </div>
                      <div className="w-px bg-gray-600"></div>
                      <div className="text-center">
                        <p className="text-xs text-gray-400 uppercase tracking-wide">Focus</p>
                        <p className="text-white font-bold text-xs">{guest.specialization}</p>
                      </div>
                    </div>
                  </div>

                  {/* Achievements Section */}
                  <div className="flex-1 mb-4">
                    <h4 className="text-white font-bold text-sm mb-3 text-center">Key Achievements</h4>
                    <div className="space-y-2">
                      {guest.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * idx, duration: 0.4 }}
                          whileHover={{ x: 3, scale: 1.01 }}
                          className="flex items-center gap-2 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                        >
                          <achievement.icon className={`w-4 h-4 ${achievement.color} flex-shrink-0`} />
                          <span className="text-gray-300 text-xs font-medium leading-relaxed">
                            {achievement.text}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className="text-center">
                    <div className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Hover for quote & links
                    </div>
                  </div>
                </div>

                {/* Quote Overlay with Social Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredGuest === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{
                        scale: hoveredGuest === index ? 1 : 0.8
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Crown className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                      <p className="text-white text-sm sm:text-base leading-relaxed italic mb-6 font-medium">
                        "{guest.quote}"
                      </p>
                      <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 mx-auto rounded-full mb-6"></div>

                      {/* Social links - only visible in overlay */}
                      <div className="flex justify-center gap-3">
                        <motion.a
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          href={guest.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-blue-600 rounded-xl text-white hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                        >
                          <Linkedin className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          href={guest.twitter}
                          className="p-3 bg-gray-700 rounded-xl text-white hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-gray-500/25"
                        >
                          <Twitter className="w-5 h-5" />
                        </motion.a>
                        <motion.button
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-yellow-600 rounded-xl text-white hover:bg-yellow-700 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
          {/* Coming Soon Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: [0.8, 1.1, 0.9, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="col-span-full flex flex-col items-center justify-center min-h-[300px] py-12"
          >
            <svg className="animate-spin mb-6" width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="28" stroke="#FBBF24" strokeWidth="8" strokeDasharray="40 40" />
              <circle cx="32" cy="32" r="20" stroke="#FDE68A" strokeWidth="4" opacity="0.5" />
            </svg>
            <span className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">Coming Soon</span>
            <span className="text-gray-400 text-base">Chief Guests will be revealed soon. Stay tuned!</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChiefGuestsSection;