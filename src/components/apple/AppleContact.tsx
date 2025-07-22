import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { socialLinks } from '@/data/content';
import { PaperAirplaneIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export function AppleContact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with EmailJS, Resend, or your preferred email service
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section 
      id="contact"
      ref={ref}
      className="py-24 px-4 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-cyan-50/30 dark:from-blue-900/10 dark:via-purple-900/5 dark:to-cyan-900/10" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto max-w-6xl relative z-10"
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-sf-pro-display mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-sf-pro max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's collaborate and create something extraordinary together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact form */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="glass-lg rounded-3xl p-8 lg:p-10"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold font-sf-pro-display mb-6 text-gray-900 dark:text-white">
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium font-sf-pro text-gray-700 dark:text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 glass-sm rounded-2xl font-sf-pro apple-transition
                        focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/50 dark:focus:bg-white/20
                        text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium font-sf-pro text-gray-700 dark:text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 glass-sm rounded-2xl font-sf-pro apple-transition
                        focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/50 dark:focus:bg-white/20
                        text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium font-sf-pro text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 glass-sm rounded-2xl font-sf-pro apple-transition
                      focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/50 dark:focus:bg-white/20
                      text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium font-sf-pro text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 glass-sm rounded-2xl font-sf-pro apple-transition
                      focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/50 dark:focus:bg-white/20
                      text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Let's work together"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium font-sf-pro text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    required
                    className="w-full px-4 py-3 glass-sm rounded-2xl font-sf-pro apple-transition resize-none
                      focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/50 dark:focus:bg-white/20
                      text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white
                    rounded-2xl font-semibold font-sf-pro apple-transition hover:shadow-lg
                    hover:from-blue-700 hover:to-purple-700 disabled:opacity-50"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitted}
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitted ? (
                      <>
                        <CheckCircleIcon className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <PaperAirplaneIcon className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact methods */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-sf-pro-display mb-6 text-gray-900 dark:text-white">
                Other ways to reach me
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <motion.div
                      className="glass-lg rounded-2xl p-6 apple-transition
                        hover:bg-white/40 dark:hover:bg-white/20"
                      whileHover={{ x: 8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                          <link.Component className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold font-sf-pro text-gray-900 dark:text-white
                            group-hover:text-blue-600 dark:group-hover:text-blue-400 apple-transition">
                            {link.label}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 font-sf-pro">
                            {link.platform === 'email' ? 'Send me an email' : 'Follow my work'}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick stats or additional info */}
            <motion.div
              className="glass-lg rounded-2xl p-6"
              whileHover={{ y: -2 }}
            >
              <h4 className="font-semibold font-sf-pro-display text-gray-900 dark:text-white mb-4">
                Response Time
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-gray-700 dark:text-gray-300 font-sf-pro">
                    Email: Usually within 24 hours
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300 font-sf-pro">
                    Projects: 2-3 business days
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}