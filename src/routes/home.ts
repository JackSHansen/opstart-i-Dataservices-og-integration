import { Router, Request, Response } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("<h1>Forside</h1><p>Velkommen til vores hjemmeside.</p>");
});

export default router;
