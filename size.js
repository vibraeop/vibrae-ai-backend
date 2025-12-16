import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
  const { height, weight, fit } = req.body;

  let recommendedSize = 'M';
  if (fit === 'oversized') recommendedSize = 'L';
  if (height > 180 || weight > 90) recommendedSize = 'XL';

  res.json({ recommendedSize });
});

export default router;
