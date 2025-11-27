import { Router, Request, Response } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send(`
    <h1>Kontakt</h1>
    <p>Email: kontakt@eksempel.dk</p>
    <p>Telefon: 12 34 56 78</p>
  `);
});

export default router;
