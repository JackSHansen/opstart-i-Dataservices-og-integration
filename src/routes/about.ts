import { Router, Request, Response } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send(`
    <h1>Om os</h1>
    <p>Vi sælger kvalitetsbiler og tilbyder god service.</p>
  `);
});

export default router;
