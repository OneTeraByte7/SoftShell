import { motion } from 'framer-motion'

export default function HowItWorks() {
  const steps = [
    { title: 'Upload License', icon: '📤' },
    { title: 'Get Valuation', icon: '💰' },
    { title: 'Get Paid', icon: '🏦' },
  ]

  return (
    <section className="py-20 px-4">
      <h3 className="text-3xl font-bold text-center mb-10">How It Works</h3>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-center">
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.8 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ delay: index * 0.2 }}
            className="bg-white/20 p-6 rounded-xl backdrop-blur-md w-60"
          >
            <div className="text-5xl mb-4">{step.icon}</div>
            <h4 className="text-lg font-semibold">{step.title}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
