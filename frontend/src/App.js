import { useState } from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import ChatWidget from './components/ChatWidget'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition duration-300 text-white">
        <header className="flex justify-between items-center p-6">
          <h1 className="text-2xl font-bold">SoftSell</h1>
          <button onClick={() => setDarkMode(!darkMode)} className="px-4 py-2 bg-black/20 rounded hover:bg-black/40">
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </header>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
        <ChatWidget />
        <footer className="p-6 text-center text-sm text-white/70">© 2025 SoftSell</footer>
      </div>
    </div>
  )
}

export default App
