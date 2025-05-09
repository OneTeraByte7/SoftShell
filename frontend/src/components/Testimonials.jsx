import { motion } from 'framer-motion'

export default function Testimonials() {
  const reviews = [
    { name: 'Alice Smith', role: 'CTO', company: 'TechWare' },
    { name: 'John Doe', role: 'Manager', company: 'SoftBridge' },
  ]

  return (
    <section className="py-20 px-4">
      <h3 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h3>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {reviews.map((review, index) => (
          <motion.div 
            key={index} 
            initial={{ y: 20, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ delay: index * 0.2 }}
            className="p-6 bg-white/20 rounded-lg backdrop-blur-md max-w-sm"
          >
            <p>"Amazing service and fast payouts!"</p>
            <p className="mt-4 text-sm">{review.name}, {review.role} at {review.company}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
