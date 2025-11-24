import express from 'express';
const router = express.Router();

// Kontakt
router.get('/', (req, res) => {
    res.send(`
        <h1>Kontakt</h1>
        <p>Email: kontakt@eksempel.dk</p>
        <p>Telefon: 12 34 56 78</p>
    `);
});

export default router;
