import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faq = [
  { q: 'license', a: 'You can upload your license using our form and get a free valuation.' },
  { q: 'legal', a: 'Yes, transferring licenses is legal under most vendors if terms are followed.' },
  { q: 'payment', a: 'Payments are processed within 24-48 hours after approval.' },
  { q: 'support', a: 'Our support is available 24/7 through chat and email.' }
]

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! Ask me anything about license resale.' }
  ])

  const getAnswer = (text) => {
    const match = faq.find(f => text.toLowerCase().includes(f.q))
    return match ? match.a : 'Sorry, I could not understand your question.'
  }

  const handleSend = () => {
    if (!input.trim()) return
    const userMsg = { from: 'user', text: input }
    const botMsg = { from: 'bot', text: getAnswer(input) }
    setMessages(prev => [...prev, userMsg, botMsg])
    setInput('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white text-black p-4 rounded shadow-xl w-72 max-h-[400px] flex flex-col"
          >
            <div className="overflow-y-auto flex-1 mb-2 text-sm space-y-2 pr-1">
              {messages.map((m, i) => (
                <div key={i} className={`whitespace-pre-wrap ${m.from === 'user' ? 'text-right' : 'text-left'}`}>
                  <span className="inline-block bg-gray-100 p-2 rounded">{m.text}</span>
                </div>
              ))}
            </div>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              className="w-full p-2 border rounded mb-2 text-sm"
              placeholder="Ask about licenses..."
            />
            <button onClick={handleSend} className="w-full bg-black text-white py-2 rounded text-sm">
              Send
            </button>
            <button onClick={() => setOpen(false)} className="text-xs text-gray-500 mt-2">Close</button>
          </motion.div>
        )}
      </AnimatePresence>
      {!open && (
        <motion.button
          onClick={() => setOpen(true)}
          whileHover={{ scale: 1.1 }}
          className="bg-white text-black p-3 rounded-full shadow-lg"
        >
          Chat
        </motion.button>
      )}
    </div>
  )
}
