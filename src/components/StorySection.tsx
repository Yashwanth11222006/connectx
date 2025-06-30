import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Lightbulb, Heart } from 'lucide-react';

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const storyPoints = [
    {
      icon: Target,
      title: "The Problem",
      content: "Most career fairs feel like speed dating gone wrong. Students get 30 seconds to pitch themselves while founders check their phones. Real connections? Almost impossible.",
      highlight: "We knew there had to be a better way."
    },
    {
      icon: Lightbulb,
      title: "Our Solution",
      content: "What if networking felt natural? What if you could have real conversations about ideas, not just GPA scores? ConnectX creates spaces where curiosity meets opportunity.",
      highlight: "Quality over quantity, always."
    },
    {
      icon: Heart,
      title: "Our Vision",
      content: "We're building a community where every student feels empowered to chase their boldest dreams, and every founder remembers what it felt like to be hungry for their first break.",
      highlight: "Because everyone deserves their shot."
    }
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 bg-gradient-to-br from-dark via-gray-900 to-dark relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/6 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left side - Story content */}
          <div className="space-y-8 sm:space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Why ConnectX Exists
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                Born from our own frustrating experiences at networking events,
                ConnectX is our love letter to every student who's ever felt overlooked.
              </p>
            </motion.div>

            {storyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.8 }}
                className="group"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary to-secondary text-white"
                  >
                    <point.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>

                  <div className="flex-1">
                    <motion.h3
                      className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 group-hover:text-secondary transition-colors duration-300 leading-tight"
                      style={{
                        textDecoration: 'underline',
                        textDecorationColor: 'transparent',
                        textUnderlineOffset: '8px',
                        transition: 'text-decoration-color 0.3s ease'
                      }}
                      whileHover={{
                        textDecorationColor: '#00B5D8'
                      }}
                    >
                      {point.title}
                    </motion.h3>

                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-3 sm:mb-4">
                      {point.content}
                    </p>

                    <motion.p
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                      className="text-secondary font-semibold italic text-sm sm:text-base"
                    >
                      {point.highlight}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side - Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-lg bg-white/5 border border-white/10 p-6 sm:p-8">
              {/* Video placeholder with overlay */}
              <div className="aspect-video rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                <video
                  src="/assets/ConnectX_Student_Startup_Event.mp4"
                  controls
                  poster="/assets/ConnectX_hero_poster.jpg"
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;