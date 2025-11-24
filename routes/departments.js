import express from 'express';
const router = express.Router();

// Afdelinger
router.get('/', (req, res) => {
    res.send(`
        <h1>Afdelinger</h1>
        <p>Vi har afdelinger i København, Aarhus og Odense.</p>
    `);
});

export default router;
