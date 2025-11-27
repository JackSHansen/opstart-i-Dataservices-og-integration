import { Router, Request, Response } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send(`
    <h1>Afdelinger</h1>
    <p>Vi har afdelinger i København, Aarhus og Odense.</p>
  `);
});

export default router;
