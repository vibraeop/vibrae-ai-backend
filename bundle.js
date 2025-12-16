import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
  const { products, budget } = req.body;

  const outfit = products
    .filter(p => !budget || p.price <= budget)
    .slice(0, 3);

  res.json({
    outfit,
    note: 'People also wore these together'
  });
});

export default router;
