import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Users, Mic, Coffee, Trophy, Network, Zap, Award, Heart, MapPin, Calendar, Music, Presentation, Handshake, Gift } from 'lucide-react';

const AgendaSection = () => {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);

  const events = [
    {
      time: "9:30",
      period: "AM",
      title: "Opening Ceremony",
      icon: Mic,
      description: "Kickstarting Innovation – Where Dreams Meet Action",
      details: "Join us for an inspiring opening ceremony that sets the tone for an incredible day. Meet fellow attendees, learn about the day's agenda, and get energized for the journey ahead.",
      duration: "60 min",
      location: "Main Auditorium",
      gradient: "from-purple-500 via-purple-600 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      time: "10:30",
      period: "AM",
      title: "Guest Talk 1: India's Startup Ecosystem and Future Skills",
      icon: Trophy,
      description: "Unlocking India's Entrepreneurial Spirit for Tomorrow's Talent",
      details: "Explore India's thriving startup ecosystem and discover the essential skills needed to succeed in tomorrow's entrepreneurial landscape.",
      duration: "30 min",
      location: "Main Auditorium",
      gradient: "from-blue-500 via-blue-600 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      time: "11:00",
      period: "AM",
      title: "Guest Talk 2: AI and Emerging Tech for Young Innovators",
      icon: Zap,
      description: "Fueling Young Minds with the Power of AI and Tomorrow's Tech",
      details: "Dive deep into artificial intelligence and emerging technologies that are shaping the future, specifically tailored for young innovators ready to make their mark.",
      duration: "30 min",
      location: "Tech Theater",
      gradient: "from-yellow-500 via-yellow-600 to-amber-500",
      bgGradient: "from-yellow-50 to-amber-50"
    },
    {
      time: "11:30",
      period: "AM",
      title: "Break",
      icon: Coffee,
      description: "Pause. Reflect. Recharge for the Next Big Ideas.",
      details: "Take a moment to network with fellow attendees, grab some refreshments, and prepare for the exciting sessions ahead.",
      duration: "10 min",
      location: "Networking Lounge",
      gradient: "from-teal-500 via-teal-600 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50"
    },
    {
      time: "11:40",
      period: "AM",
      title: "Guest Talk 3: From Vision to Impact, Making Ideas Count",
      icon: Heart,
      description: "Turning Sparks into Fire – The Journey of Real Impact",
      details: "Learn how to transform your innovative ideas into meaningful impact that creates real change in the world.",
      duration: "30 min",
      location: "Innovation Hall",
      gradient: "from-red-500 via-red-600 to-orange-500",
      bgGradient: "from-red-50 to-orange-50"
    },
    {
      time: "12:10",
      period: "PM",
      title: "Jamming Session 1: Mix of Tech and Non-Tech",
      icon: Users,
      description: "Two Worlds, One Vision – Stories that Inspire and Transform",
      details: "Interactive session featuring founders from both tech and non-tech backgrounds sharing their unique journeys and insights.",
      duration: "40 min",
      location: "Collaboration Pods",
      gradient: "from-green-500 via-green-600 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      time: "12:50",
      period: "PM",
      title: "Lunch",
      icon: Coffee,
      description: "Fuel for the Body, Inspiration for the Mind",
      details: "Enjoy a delicious lunch while continuing conversations with new connections. Network, relax, and recharge for the afternoon sessions.",
      duration: "40 min",
      location: "Garden Terrace",
      gradient: "from-orange-500 via-orange-600 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      time: "1:30",
      period: "PM",
      title: "Jamming Session 2: Fireside Chat & Audience Interactions",
      icon: Network,
      description: "Raw, Real & Relatable – Founder Fireside Unplugged",
      details: "Intimate fireside chat with founders sharing unfiltered stories, challenges, and breakthroughs with direct audience interaction.",
      duration: "40 min",
      location: "Fireside Lounge",
      gradient: "from-indigo-500 via-indigo-600 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50"
    },
    {
      time: "2:10",
      period: "PM",
      title: "Founder Talk 1: Evolution of Edtech with AI",
      icon: Award,
      description: "Reimagining Learning – The Smart Future of Education",
      details: "Discover how AI is revolutionizing education technology and creating new opportunities for learning and skill development.",
      duration: "20 min",
      location: "EdTech Arena",
      gradient: "from-violet-500 via-violet-600 to-purple-500",
      bgGradient: "from-violet-50 to-purple-50"
    },
    {
      time: "2:30",
      period: "PM",
      title: "Founder Talk 2: Building Blockchain and Web3 Applications",
      icon: Zap,
      description: "Code, Crypto & Decentralized Dreams – Building the New Internet",
      details: "Explore the world of blockchain and Web3 technologies, and learn how to build decentralized applications for the future internet.",
      duration: "20 min",
      location: "Blockchain Hub",
      gradient: "from-cyan-500 via-cyan-600 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50"
    },
    {
      time: "2:50",
      period: "PM",
      title: "Founder Talk 3: AI in Healthcare",
      icon: Heart,
      description: "Healing with Intelligence – The AI-Powered Future of Health",
      details: "Learn how artificial intelligence is transforming healthcare, from diagnosis to treatment, and creating new possibilities for medical innovation.",
      duration: "20 min",
      location: "HealthTech Center",
      gradient: "from-pink-500 via-pink-600 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50"
    },
    {
      time: "3:10",
      period: "PM",
      title: "Live Music",
      icon: Music,
      description: "Unwind. Feel the Vibe. Let Music Spark the Mind.",
      details: "Take a creative break with live music performances that inspire and energize. Let the rhythm fuel your innovative thinking.",
      duration: "20 min",
      location: "Music Stage",
      gradient: "from-emerald-500 via-emerald-600 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      time: "3:30",
      period: "PM",
      title: "Product Demos & Audience Voice",
      icon: Presentation,
      description: "Where Ideas Meet Reality – Experience Innovation in Action",
      details: "Witness cutting-edge products in action and share your voice. Interactive demonstrations followed by audience feedback and discussions.",
      duration: "20 min",
      location: "Demo Theater",
      gradient: "from-blue-500 via-blue-600 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      time: "3:50",
      period: "PM",
      title: "Sponsors and Supporters",
      icon: Gift,
      description: "Backing Big Visions – Honoring the Enablers of Change",
      details: "Recognize and celebrate our sponsors and supporters who make innovation possible. Learn about partnership opportunities.",
      duration: "20 min",
      location: "Sponsor Pavilion",
      gradient: "from-purple-500 via-purple-600 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      time: "4:10",
      period: "PM",
      title: "Awards and Closing Remarks",
      icon: Trophy,
      description: "Celebrating Brilliance – The Journey Doesn't End, It Evolves",
      details: "Celebrate outstanding achievements, recognize exceptional participants, and close with inspiration for your continued journey in innovation.",
      duration: "30 min",
      location: "Main Auditorium",
      gradient: "from-amber-500 via-amber-600 to-yellow-500",
      bgGradient: "from-amber-50 to-yellow-50"
    },
    {
      time: "4:40",
      period: "PM",
      title: "Networking and Internship Booth",
      icon: Handshake,
      description: "Connect. Collaborate. Create Opportunities that Matter",
      details: "Final networking opportunity to connect with founders, explore internship opportunities, and build lasting professional relationships.",
      duration: "Open",
      location: "Networking Plaza",
      gradient: "from-green-500 via-green-600 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/6 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-primary/8 to-secondary/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-secondary/8 to-purple-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[700px] sm:h-[700px] lg:w-[800px] lg:h-[800px] bg-gradient-to-r from-primary/4 to-secondary/4 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-block mb-6 sm:mb-8"
          >
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-primary via-secondary to-purple-600 bg-clip-text text-transparent leading-tight tracking-tight">
              Event Timeline
            </span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block ml-2 sm:ml-4"
            >
              <Calendar className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-primary" />
            </motion.div>
          </motion.div>
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            A carefully orchestrated day designed to maximize connections, learning, and opportunities
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Enhanced timeline line with gradient animation */}
            <div className="absolute left-6 sm:left-8 lg:left-12 top-0 bottom-0 w-1 overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-purple-500 rounded-full"
                animate={{
                  background: [
                    'linear-gradient(to bottom, #6D28D9, #00B5D8, #8B5CF6)',
                    'linear-gradient(to bottom, #00B5D8, #8B5CF6, #6D28D9)',
                    'linear-gradient(to bottom, #8B5CF6, #6D28D9, #00B5D8)',
                    'linear-gradient(to bottom, #6D28D9, #00B5D8, #8B5CF6)'
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-purple-500 rounded-full opacity-60"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(109, 40, 217, 0.4)',
                    '0 0 40px rgba(0, 181, 216, 0.6)',
                    '0 0 30px rgba(139, 92, 246, 0.5)',
                    '0 0 20px rgba(109, 40, 217, 0.4)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.9,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="relative pl-20 sm:pl-24 lg:pl-32 pb-12 sm:pb-16 lg:pb-20 last:pb-0"
              >
                {/* Creative time display */}
                <motion.div
                  className="absolute left-0 top-0 flex items-center gap-2 sm:gap-4"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Time circle */}
                  <div className={`relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br ${event.gradient} p-1 shadow-2xl`}>
                    <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center">
                      <span className="text-xs sm:text-sm lg:text-base font-bold text-gray-800 leading-none">
                        {event.time}
                      </span>
                      <span className="text-xs sm:text-xs lg:text-sm font-semibold text-gray-600 leading-none">
                        {event.period}
                      </span>
                    </div>
                    {/* Animated ring */}
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${event.gradient} opacity-30`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>

                {/* Enhanced event card */}
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.01,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
                  }}
                  className={`backdrop-blur-xl bg-gradient-to-br ${event.bgGradient} border border-white/60 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl cursor-pointer transition-all duration-500 hover:border-white/80 group`}
                  onClick={() => setExpandedEvent(expandedEvent === index ? null : index)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 mb-3 sm:mb-4 lg:mb-5">
                        <motion.div
                          whileHover={{ rotate: 15, scale: 1.15 }}
                          className={`p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${event.gradient} text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                        >
                          <event.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                        </motion.div>
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-1 leading-tight">
                            {event.title}
                          </h3>
                          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed font-medium">
                            {event.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-gray-500">
                        {/* Removed duration and location display */}
                      </div>
                    </div>

                    <motion.div
                      animate={{ rotate: expandedEvent === index ? 180 : 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="text-gray-400 text-2xl sm:text-3xl font-bold group-hover:text-gray-600 transition-colors duration-300 ml-2"
                    >
                      ↓
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {expandedEvent === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -30 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -30 }}
                        transition={{
                          duration: 0.6,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                        className="mt-4 sm:mt-6 lg:mt-8 pt-4 sm:pt-6 lg:pt-8 border-t border-gray-200/60"
                      >
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg font-medium">
                          {event.details}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced bottom CTA with Add to Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mt-16 sm:mt-20 lg:mt-24"
        >
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 lg:mb-10 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Ready to be part of this incredible journey?
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLScERJR7_Vc9ZIH_V3jAWjBk_dnjRXXD_1F-87kQ5VPKqJwd6g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                y: -4,
                boxShadow: '0 25px 50px -12px rgba(109, 40, 217, 0.4)'
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 sm:px-10 lg:px-14 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-primary via-secondary to-purple-600 text-white font-bold text-base sm:text-lg lg:text-xl rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-primary/30 transition-all duration-300 relative overflow-hidden flex items-center gap-2 sm:gap-3"
            >
              <span className="relative z-10">Reserve Your Spot</span>
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />
            </motion.a>

            <motion.a
              href="/assets/ConnectX_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                y: -4,
                boxShadow: '0 16px 32px -8px rgba(0, 0, 0, 0.25)'
              }}
              whileTap={{ scale: 0.98 }}
              className="px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl sm:rounded-3xl font-bold text-base sm:text-lg lg:text-xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex items-center gap-2 sm:gap-3"
              download
            >
              <span className="relative z-10">Download Brochure</span>
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgendaSection;