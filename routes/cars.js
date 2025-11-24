import express from 'express';
const router = express.Router();

// Liste over biler til salg
router.get('/', (req, res) => {
    res.send(`
        <h1>Biler til salg</h1>
        <ul>
            <li>VW Golf - 2018</li>
            <li>Toyota Corolla - 2020</li>
            <li>Ford Fiesta - 2017</li>
        </ul>
    `);
});

export default router;
