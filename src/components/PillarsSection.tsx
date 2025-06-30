import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, Handshake } from 'lucide-react';

const PillarsSection = () => {
  const pillars = [
    {
      icon: MessageSquare,
      title: "Real Conversations",
      description: "No fluff, just real conversations with founders who've been where you are. Hear their failures, breakthroughs, and the advice they wish they had as students.",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.2
    },
    {
      icon: Zap,
      title: "Innovation Showcase",
      description: "Touch, feel, and experience the latest innovations. From AI breakthroughs to sustainable tech, see tomorrow's solutions being built today.",
      gradient: "from-cyan-500 to-blue-500",
      delay: 0.4
    },
    {
      icon: Handshake,
      title: "Career Connections",
      description: "Skip the cold emails. Meet hiring managers face-to-face, showcase your skills, and land opportunities that launch your career into orbit.",
      gradient: "from-emerald-500 to-teal-500",
      delay: 0.6
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 bg-gradient-to-br from-light via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-4 sm:mb-6 leading-tight">
            Why Stay? It's Simple.
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Three experiences that transform how you think about your future in tech
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: pillar.delay, duration: 0.8 }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                scale: 1.02
              }}
              className="group relative"
            >
              {/* Glass card */}
              <div className="relative p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-lg bg-white/40 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon with animation */}
                <motion.div
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10
                  }}
                  className={`inline-flex p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-r ${pillar.gradient} text-white mb-4 sm:mb-6 shadow-lg`}
                >
                  <pillar.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                </motion.div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-dark mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {pillar.title}
                </h3>

                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;