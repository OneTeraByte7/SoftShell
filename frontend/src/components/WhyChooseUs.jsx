import { motion } from 'framer-motion'

export default function WhyChooseUs() {
  const reasons = [
    'Best Market Prices',
    'Fast Payment System',
    'Trusted by 10K+ Clients',
    '24/7 Support',
  ]

  return (
    <section className="py-20 px-4">
      <h3 className="text-3xl font-bold text-center mb-10">Why Choose Us</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {reasons.map((reason, index) => (
          <motion.div 
            key={index} 
            initial={{ x: -50, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-white/20 rounded-lg backdrop-blur-md"
          >
            <p className="text-lg font-medium">{reason}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
