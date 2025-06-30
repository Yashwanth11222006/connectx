import React from 'react';
import { motion } from 'framer-motion';

const PartnersScrollSection = () => {
  // Temporary placeholder logos - you can replace these with actual logos later
  const supportedByLogos = [
    { name: "Indobox inc.", logo: "public/assets/indbox inc.jpg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Indobox inc.", logo: "public/assets/indbox inc.jpg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Indobox inc.", logo: "public/assets/indbox inc.jpg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Indobox inc.", logo: "public/assets/indbox inc.jpg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Indobox inc.", logo: "public/assets/indbox inc.jpg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Indobox inc.", logo: "public/assets/indbox inc.jpg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Indobox inc.", logo: "public/assets/indbox inc.jpg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Indobox inc.", logo: "public/assets/indbox inc.jpg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Indobox inc.", logo: "public/assets/indbox inc.jpg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Indobox inc.", logo: "public/assets/indbox inc.jpg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Indobox inc.", logo: "public/assets/indbox inc.jpg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Indobox inc.", logo: "public/assets/indbox inc.jpg?auto=compress&cs=tinysrgb&w=100" },
  ];

  const sponsorsLogos = [
    { name: "Monster", logo: "https://th.bing.com/th/id/OIP.TtGc9lwxCiyRgb1qvTrxBQHaEK?w=287&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3?auto=compress&cs=tinysrgb&w=100" },
    { name: "Enrich", logo: "public/assets/enrich.jpg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Blue Icon", logo: "public/assets/blue icon consultant.jpg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Student Spot", logo: "public/assets/studentspot.jpg?auto=compress&cs=tinysrgb&w=100" },
    { name: "NextGen Nexus", logo: "public/assets/nextgen nexus.jpg?auto=compress&cs=tinysrgb&w=100" },
    { name: "paralok", logo: "public/assets/paralok1.jpeg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Monster", logo: "https://th.bing.com/th/id/OIP.TtGc9lwxCiyRgb1qvTrxBQHaEK?w=287&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3?auto=compress&cs=tinysrgb&w=100" },
    { name: "Enrich", logo: "public/assets/enrich.jpg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Blue Icon", logo: "public/assets/blue icon consultant.jpg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Student Spot", logo: "public/assets/studentspot.jpg?auto=compress&cs=tinysrgb&w=100" },
    { name: "NextGen Nexus", logo: "public/assets/nextgen nexus.jpg?auto=compress&cs=tinysrgb&w=100" },
    { name: "paralok", logo: "public/assets/paralok1.jpeg?auto=compress&cs=tinysrgb&w=100" },
  ];

  const hiringStartupsLogos = [
    { name: "Nirvaha", logo: "public/assets/nirvaha.jpg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Build-Ish", logo: "public/assets/bluish.jpg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Kalki Labs", logo: "public/assets/kalki_labs_logo.jpeg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Nirvaha", logo: "public/assets/nirvaha.jpg?auto=compress&cs=tinysrgb&w=100" },
    { name: "S-Hatch", logo: "public/assets/1736313891504.jpeg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Nirvaha", logo: "public/assets/nirvaha.jpg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Build-Ish", logo: "public/assets/bluish.jpg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Kalki Labs", logo: "public/assets/kalki_labs_logo.jpeg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Nirvaha", logo: "public/assets/nirvaha.jpg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Build-Ish", logo: "public/assets/bluish.jpg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Kalki Labs", logo: "public/assets/kalki_labs_logo.jpeg?auto=compress&cs=tinysrgb&w=100" },
  ];

  const ScrollingRow = ({
    logos,
    title,
    direction = 'left',
    speed = 30
  }: {
    logos: typeof supportedByLogos;
    title: string;
    direction?: 'left' | 'right';
    speed?: number;
  }) => {
    const duplicatedLogos = [...logos, ...logos, ...logos];

    return (
      <div className="py-3 sm:py-4 lg:py-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-6"
        >
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
            {title}
          </h3>
        </motion.div>

        <div className="relative">
          <motion.div
            animate={{
              x: direction === 'left' ? [0, -1920] : [-1920, 0]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: speed,
                ease: "linear",
              },
            }}
            className="flex gap-6 sm:gap-8 lg:gap-12 items-center"
          >
            {duplicatedLogos.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                whileHover={{
                  scale: 1.1,
                  y: -5
                }}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 group-hover:border-primary/30 ${partner.name === 'S-Hatch' ? 'bg-black' : 'bg-white'}`}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                </div>
                <p className="text-center mt-2 sm:mt-3 text-xs sm:text-sm font-semibold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {partner.name}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient overlays for smooth fade effect */}
          {/* Removed gradient overlays for pure logo color */}
        </div>
      </div>
    );
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-gradient-to-br from-light via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-secondary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          <ScrollingRow
            logos={supportedByLogos}
            title="Supported By"
            direction="left"
            speed={25}
          />

          <ScrollingRow
            logos={sponsorsLogos}
            title="Sponsors & Community Partners"
            direction="right"
            speed={30}
          />

          <ScrollingRow
            logos={hiringStartupsLogos}
            title="Hiring Startups"
            direction="left"
            speed={35}
          />
        </div>
      </div>
    </section>
  );
};

export default PartnersScrollSection;