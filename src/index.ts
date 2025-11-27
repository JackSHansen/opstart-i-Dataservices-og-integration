import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();

const port = Number(process.env.SERVERPORT) || 4000;
const app = express();

// Simple logger middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Route imports
import homeRouter from "./routes/home";
import carsRouter from "./routes/cars";
import departmentsRouter from "./routes/departments";
import aboutRouter from "./routes/about";
import contactRouter from "./routes/contact";

// Mount routers
app.use("/", homeRouter);
app.use("/cars", carsRouter);
app.use("/departments", departmentsRouter);
app.use("/about", aboutRouter);
app.use("/contact", contactRouter);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).send(`<h1>404 - Side ikke fundet</h1><p>Sti: ${req.originalUrl}</p>`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
