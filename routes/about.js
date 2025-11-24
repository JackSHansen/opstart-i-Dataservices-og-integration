import express from 'express';
const router = express.Router();

// Om os
router.get('/', (req, res) => {
    res.send(`
        <h1>Om os</h1>
        <p>Vi sælger kvalitetsbiler og tilbyder god service.</p>
    `);
});

export default router;
