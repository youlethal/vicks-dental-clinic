'use client'
import { motion } from 'framer-motion'
import { Users, Award, Clock } from 'lucide-react'

export default function About() {
  const businessName = "Vicks Dental Clinic ";
  const category = "Dentist";
  
  const stats = [
    { icon: Users, value: '100+', label: 'Happy Clients' },
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: Clock, value: '24/7', label: 'Support' },
  ]

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About {businessName}</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a professional {category.toLowerCase()} service provider with years of experience 
              in delivering quality results. Our team is dedicated to providing exceptional service 
              and ensuring customer satisfaction.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With our expertise and attention to detail, we guarantee that every project meets 
              the highest standards of quality and professionalism.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gray-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Team</h3>
                <p className="text-gray-600">Expert professionals at your service</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}