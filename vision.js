import express from 'express';
import OpenAI from 'openai';

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

router.post('/', async (req, res) => {
  try {
    const { image } = req.body;

    const response = await openai.chat.completions.create({
      model: 'gpt-4.1-mini',
      messages: [{
        role: 'user',
        content: [
          { type: 'text', text: 'Identify clothing items, style, fit, color' },
          { type: 'image_url', image_url: { url: image } }
        ]
      }]
    });

    res.json({ result: response.choices[0].message.content });
  } catch {
    res.status(500).json({ error: 'Vision failed' });
  }
});

export default router;
