import express from 'express';
const router = express.Router();

// Forside
router.get('/', (req, res) => {
    res.send('<h1>Forside</h1><p>Velkommen til vores hjemmeside.</p>');
});

export default router;
