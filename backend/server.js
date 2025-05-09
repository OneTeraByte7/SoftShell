const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const OpenAI = require('openai')

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

app.post('/api/chat', async (req, res) => {
  const { message } = req.body
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }]
    })
    res.json({ reply: response.choices[0].message.content })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to get response' })
  }
})

app.listen(5000, () => console.log('Server running on port 5000'))
