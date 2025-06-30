import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ExternalLink, Mic, Award, Building, Code, Lightbulb, Rocket, Star, Users } from 'lucide-react';

const SpeakersSection = () => {
  const [hoveredSpeaker, setHoveredSpeaker] = useState<number | null>(null);

  const speakers = [
    /*{
      name: "Harshadha Chaganti",
      title: "Tech Entrepreneur",
      company: "Innovation Leader",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      background: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
      quote: "The future belongs to those who combine technical excellence with entrepreneurial vision. Every line of code you write today shapes tomorrow's innovations.",
      achievements: [
        { icon: Code, text: "Full-Stack Innovation", color: "text-blue-400" },
        { icon: Rocket, text: "Startup Mentor", color: "text-green-400" },
        { icon: Award, text: "Tech Leadership", color: "text-purple-400" }
      ],
      specialization: "Tech Innovation",
      experience: "8+ Years",
      linkedin: "https://www.linkedin.com/in/harshadhachaganti/",
      twitter: "#",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      accentColor: "blue"
    },
    {
      name: "Praharsha Kanaparthi",
      title: "Product Strategist",
      company: "Growth Expert",
      image: "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=400",
      background: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      quote: "Great products aren't just built, they're crafted with deep understanding of user needs. Start with empathy, scale with data, and never stop iterating.",
      achievements: [
        { icon: Lightbulb, text: "Product Innovation", color: "text-yellow-400" },
        { icon: Users, text: "User Experience", color: "text-cyan-400" },
        { icon: Building, text: "Scale Strategy", color: "text-emerald-400" }
      ],
      specialization: "Product & Growth",
      experience: "10+ Years",
      linkedin: "https://www.linkedin.com/in/praharsha--kanaparthi/",
      twitter: "#",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      accentColor: "emerald"
    },
    {
      name: "E SAI ESHWAR",
      title: "Technology Innovator",
      company: "Digital Transformation",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400",
      background: "https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg?auto=compress&cs=tinysrgb&w=800",
      quote: "Technology is not just about solving problems, it's about reimagining possibilities. The next breakthrough is waiting for someone brave enough to think differently.",
      achievements: [
        { icon: Code, text: "Digital Innovation", color: "text-orange-400" },
        { icon: Star, text: "Tech Excellence", color: "text-red-400" },
        { icon: Rocket, text: "Future Tech", color: "text-indigo-400" }
      ],
      specialization: "Digital Innovation",
      experience: "12+ Years",
      linkedin: "https://www.linkedin.com/in/esaieshwar/",
      twitter: "#",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      accentColor: "orange"
    },
    {
      name: "Siv Ram Shastri Jonnalagadda",
      title: "Business Strategist",
      company: "Enterprise Solutions",
      image: "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400",
      background: "https://images.pexels.com/photos/3861787/pexels-photo-3861787.jpeg?auto=compress&cs=tinysrgb&w=800",
      quote: "Success in business comes from understanding that every challenge is an opportunity in disguise. Build solutions that matter, and success will follow.",
      achievements: [
        { icon: Building, text: "Business Strategy", color: "text-indigo-400" },
        { icon: Award, text: "Enterprise Growth", color: "text-purple-400" },
        { icon: Users, text: "Team Leadership", color: "text-teal-400" }
      ],
      specialization: "Business Strategy",
      experience: "15+ Years",
      linkedin: "https://www.linkedin.com/in/sivramshastri/",
      twitter: "#",
      gradient: "from-indigo-500 via-purple-500 to-violet-500",
      accentColor: "indigo"
    }*/
    {
      name: "Harshith Sai Tunuguntla",
      title: "Influencer",
      company: "",
      image: "/assets/harshith.jpeg?auto=compress&cs=tinysrgb&w=400",
      background: "/assets/harshith.jpeg?auto=compress&cs=tinysrgb&w=800",
      quote: "Building secure financial systems isn't just about code-it's about trust, impact, and empowering the next generation to shape the digital economy.",
      achievements: [
        { icon: Code, text: "Backend Developer Specializing in Fintech Solutions, UPI Ecosystem", color: "text-blue-400" },
        { icon: Mic, text: "Public Speaker", color: "text-cyan-400" },
        { icon: Rocket, text: "Student Mentor", color: "text-green-400" },
        { icon: Award, text: "Event Organiser", color: "text-purple-400" }
      ],
      specialization: "Tech Innovation",
      linkedin: "https://www.linkedin.com/in/harshithtunuguntla/",
      twitter: "#",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      accentColor: "blue"
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"
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
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-300/30 rounded-full"
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Meet Our Speakers & Founders
            </h2>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Learn from innovators who've walked the path from student to startup success
          </motion.p>
        </motion.div>

        {/* Compact Speaker Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              onHoverStart={() => setHoveredSpeaker(index)}
              onHoverEnd={() => setHoveredSpeaker(null)}
              className="group relative"
            >
              {/* Main Card */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02
                }}
                className="relative h-full backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hover:shadow-cyan-400/20 transition-all duration-500"
              >
                {/* Background with overlay */}
                <div className="absolute inset-0">
                  <img
                    src={speaker.background}
                    alt={`${speaker.company} background`}
                    className="w-full h-full object-cover opacity-20 blur-sm transition-all duration-500 group-hover:opacity-30 group-hover:blur-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${speaker.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                </div>

                {/* Content */}
                <div className="relative h-full p-4 sm:p-6 flex flex-col min-h-[420px]">
                  {/* Profile Section */}
                  <div className="text-center mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-3 border-cyan-400/40 mb-3 mx-auto shadow-xl"
                    >
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${speaker.gradient} opacity-20`} />
                    </motion.div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 leading-tight">
                      {speaker.name}
                    </h3>
                    <p className="text-cyan-400 font-bold text-sm mb-1">
                      {speaker.title}
                    </p>
                    <p className="text-gray-300 font-semibold text-xs sm:text-sm mb-3">
                      {speaker.company}
                    </p>
                  </div>

                  {/* Achievements Section */}
                  <div className="flex-1 mb-4">
                    <h4 className="text-white font-bold text-sm mb-3 text-center">Expertise Areas</h4>
                    <div className="space-y-2">
                      {speaker.achievements.map((achievement, idx) => (
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
                    opacity: hoveredSpeaker === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{
                        scale: hoveredSpeaker === index ? 1 : 0.8
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Mic className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                      <p className="text-white text-sm sm:text-base leading-relaxed italic mb-6 font-medium">
                        "{speaker.quote}"
                      </p>
                      <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mb-6"></div>

                      {/* Social links - only visible in overlay */}
                      <div className="flex justify-center gap-3">
                        <motion.a
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          href={speaker.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-blue-600 rounded-xl text-white hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                        >
                          <Linkedin className="w-5 h-5" />
                        </motion.a>
                        <motion.button
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-cyan-600 rounded-xl text-white hover:bg-cyan-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
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
              <circle cx="32" cy="32" r="28" stroke="#38BDF8" strokeWidth="8" strokeDasharray="40 40" />
              <circle cx="32" cy="32" r="20" stroke="#A5F3FC" strokeWidth="4" opacity="0.5" />
            </svg>
            <span className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">Coming Soon</span>
            <span className="text-gray-400 text-base">More speakers will be revealed soon. Stay tuned!</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;