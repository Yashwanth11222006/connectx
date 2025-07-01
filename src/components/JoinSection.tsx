import React from 'react';
import { motion } from 'framer-motion';
import { Users, Network, Lightbulb, Trophy, Heart, Star, ArrowRight } from 'lucide-react';

const JoinSection = () => {
  const benefits = [
    {
      icon: Users,
      title: "Network with 300+ Students",
      description: "Connect with ambitious peers from top universities",
      color: "text-blue-400"
    },
    {
      icon: Network,
      title: "Meet Startup Founders",
      description: "Direct access to successful entrepreneurs and mentors",
      color: "text-green-400"
    },
    {
      icon: Lightbulb,
      title: "Discover Internship Opportunities",
      description: "Find your dream role at innovative startups",
      color: "text-yellow-400"
    },
    {
      icon: Trophy,
      title: "Learn from Industry Leaders",
      description: "Gain insights from chief guests and speakers",
      color: "text-purple-400"
    },
    {
      icon: Heart,
      title: "Join Exclusive Community",
      description: "Access to WhatsApp groups and ongoing support",
      color: "text-pink-400"
    },
    {
      icon: Star,
      title: "Complete Experience",
      description: "Full day event with lunch included",
      color: "text-cyan-400"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 bg-gradient-to-br from-light via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/6 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
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
            Join ConnectX 2025
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your future with one incredible day of connections, learning, and opportunities
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl text-primary font-bold">
            What You'll Get:
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -5,
                scale: 1.02
              }}
              className="group relative"
            >
              <div className="backdrop-blur-lg bg-white/60 border border-white/40 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 mb-4`}
                >
                  <benefit.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${benefit.color}`} />
                </motion.div>

                <h3 className="text-lg sm:text-xl font-bold text-dark mb-2 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block"
          >
            <div className="backdrop-blur-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/40 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-xl max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark mb-4 sm:mb-6">
                Ready to Transform Your Future?
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Join 300+ ambitious students for a day that could change everything. 
                Limited spots available!
              </p>

              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLScERJR7_Vc9ZIH_V3jAWjBk_dnjRXXD_1F-87kQ5VPKqJwd6g/viewform"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg sm:text-xl lg:text-2xl rounded-full shadow-2xl hover:shadow-primary/30 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Register Now</span>
                <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />
                
                {/* Wave effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>

              <p className="text-sm sm:text-base text-gray-500 mt-4 sm:mt-6">
                Limited seats • July 18, 2025
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinSection;