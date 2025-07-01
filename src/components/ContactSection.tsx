import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, MessageCircle, Mail, Phone, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      info: "T-Hub",
      detail: "Hyderabad, India",
      gradient: "from-red-400 to-pink-500"
    },
    {
      icon: Calendar,
      title: "Event Date",
      info: "July 18, 2025",
      detail: "9:00 AM - 6:00 PM IST",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: MessageCircle,
      title: "Community",
      info: "Join our WhatsApp",
      detail: "500+ active members",
      gradient: "from-green-400 to-emerald-500",
      link: "https://chat.whatsapp.com/IyYRVOMFckvAX1HJdw8Ecz"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 bg-gradient-to-br from-light via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/6 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
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
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Questions? Ideas? Just want to chat? We're here for you.
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-secondary mt-2 font-semibold">
            Talk to a real human
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Info & Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="grid gap-4 sm:gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="backdrop-blur-lg bg-white/60 border border-white/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${item.gradient} text-white shadow-lg`}
                    >
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-dark text-base sm:text-lg">{item.title}</h3>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold underline text-sm sm:text-base">{item.info}</a>
                      ) : (
                        <p className="text-gray-600 font-semibold text-sm sm:text-base">{item.info}</p>
                      )}
                      <p className="text-gray-500 text-xs sm:text-sm">{item.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Direct contact options */}
            <div className="backdrop-blur-lg bg-white/60 border border-white/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
              <h3 className="font-bold text-dark text-lg sm:text-xl mb-3 sm:mb-4">Reach Out Directly</h3>
              <div className="space-y-3 sm:space-y-4">
                <motion.a
                  whileHover={{ scale: 1.02, x: 5 }}
                  href="mailto:guidebazaar2@gmail.com"
                  className="flex items-center space-x-3 text-gray-600 hover:text-primary transition-colors duration-300 text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>guidebazaar2@gmail.com</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02, x: 5 }}
                  href="tel:7780754541"
                  className="flex items-center space-x-3 text-gray-600 hover:text-secondary transition-colors duration-300 text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>7780754541</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02, x: 5 }}
                  href="https://wa.me/917780754541?text=Hi%20ConnectX%20Team%2C%20I%20need%20some%20help!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm sm:text-base"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5"><path d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.69.97.99-3.59-.23-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.26-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" /></svg>
                  <span>WhatsApp Instant Help</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Instant Help */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="backdrop-blur-lg bg-white/60 border border-white/40 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-6">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }}
                >
                  <MessageCircle className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-dark">Instant Help</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Get quick answers to your questions</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-white/80 backdrop-blur-sm text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300 bg-white/80 backdrop-blur-sm text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                >
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                    I am a...
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-white/80 backdrop-blur-sm text-sm sm:text-base"
                  >
                    <option value="">Select your role</option>
                    <option value="student">Student</option>
                    <option value="founder">Founder</option>
                    <option value="sponsor">Potential Sponsor</option>
                    <option value="speaker">Interested Speaker</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                >
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none text-sm sm:text-base"
                    placeholder="Tell us what's on your mind..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;