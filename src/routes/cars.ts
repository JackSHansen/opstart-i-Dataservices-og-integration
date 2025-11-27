import { Router, Request, Response } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
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
