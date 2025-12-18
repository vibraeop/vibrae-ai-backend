import express from 'express';
import cors from 'cors';
import vision from './vision.js';
import bundle from './bundle.js';
import size from './size.js';

const app = express();
app.use(express.json());

app.post("/chat", (req, res) => {
  const userMessage = req.body.message || "";

  res.json({
    reply:
      "Hi 👋 I’m Vibrae AI. I can help you find outfits, suggest bundles, explain sizes and prices. You said: " +
      userMessage
  });
});app.get("/", (req, res) => {
  res.send("Vibrae AI backend is live 🚀");
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "Vibrae AI Backend",
    time: new Date().toISOString()
  });
});app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.use('/ai/vision', vision);
app.use('/ai/bundle', bundle);
app.use('/ai/size', size);

app.listen(3000, () => console.log('Vibrae AI backend running'));
