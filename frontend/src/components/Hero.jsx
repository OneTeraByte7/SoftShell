import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="text-center py-20 px-4">
      <motion.h2 
        initial={{ opacity: 0, y: -40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-4"
      >
        Sell Unused Software Licenses Easily
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.3, duration: 0.6 }} 
        className="text-xl mb-8"
      >
        Convert unused software into money in minutes
      </motion.p>
      <motion.button 
        whileHover={{ scale: 1.05 }} 
        className="bg-white text-black px-6 py-3 rounded-full font-semibold"
      >
        Get a Quote
      </motion.button>
    </section>
  )
}
