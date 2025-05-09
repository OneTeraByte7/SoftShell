import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', type: '', message: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    if (Object.values(form).some(f => f === '')) return alert('Please fill all fields')
    alert('Submitted (Demo)')
  }

  return (
    <section className="py-20 px-4">
      <h3 className="text-3xl font-bold text-center mb-10">Contact Us</h3>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-6 bg-white/10 p-6 rounded-xl backdrop-blur-md">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="p-3 rounded bg-white/20" />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="p-3 rounded bg-white/20" />
        <input name="company" placeholder="Company" value={form.company} onChange={handleChange} className="p-3 rounded bg-white/20" />
        <select name="type" value={form.type} onChange={handleChange} className="p-3 rounded bg-white/20">
          <option value="">Select License Type</option>
          <option value="Windows">Windows</option>
          <option value="Adobe">Adobe</option>
          <option value="Office">Office</option>
        </select>
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} className="p-3 rounded bg-white/20" />
        <button type="submit" className="bg-white text-black py-2 rounded font-semibold hover:bg-gray-200 transition">Submit</button>
      </form>
    </section>
  )
}
