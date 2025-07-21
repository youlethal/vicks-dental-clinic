"use client"
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, Users, Award, CheckCircle } from 'lucide-react';

export default function Hero() {
  const heroTitle = "Professional Dental Care at Vicks Dental Clinic ";
  const heroSubtitle = "Expert Dental Services";
  const heroDescription = "Maintain your oral health with our comprehensive dental services. Our experienced team uses the latest technology to provide gentle, effective care for the whole family.";
  const ctaPrimary = "Book Appointment";
  const ctaSecondary = "View Services";
  const heroIcon = "🦷";
  const heroStats = [{"value":"20+","label":"Years Experience"},{"value":"5000+","label":"Happy Patients"},{"value":"4.9","label":"Patient Rating"}];
  const heroFeatures = ["Experienced Team","Latest Technology","Gentle Care"];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-16 min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/70">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium">{heroSubtitle}</span>
            </motion.div>
            {/* Main Title */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {heroTitle}
            </motion.h1>
            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {heroDescription}
            </motion.p>
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {heroFeatures.map((feature: string, index: number) => (
                <div key={feature} className="flex items-center gap-2 text-white/80">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </motion.div>
            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection('services')}
                className="bg-accent text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {ctaPrimary}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {ctaSecondary}
              </motion.button>
            </motion.div>
            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {heroStats.map((stat: any, index: number) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center">
                <motion.div
                  className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-6xl">{heroIcon}</span>
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-3">Professional {category}</h3>
                <p className="text-white/80 mb-6">Quality service guaranteed</p>
                {/* Quick Contact */}
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2 text-white/80">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Mon-Fri: 9AM-6PM</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-white/80">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Expert Team</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-white/80">
                    <Award className="w-4 h-4" />
                    <span className="text-sm">Certified Professionals</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
