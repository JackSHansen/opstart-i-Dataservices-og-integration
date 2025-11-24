// Importer Express-rammeværket for at oprette en webserver
import express from 'express';


// Angiv den port serveren skal lytte på
const port = 4000;
// Opret en Express-app instans
const app = express();

// Simpel middleware til logning af indkommende requests (metode og sti)
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Importer individuelle route-filer
import homeRouter from './routes/home.js';
import carsRouter from './routes/cars.js';
import departmentsRouter from './routes/departments.js';
import aboutRouter from './routes/about.js';
import contactRouter from './routes/contact.js';

// Mount routers
app.use('/', homeRouter); // håndterer '/' (forside)
app.use('/cars', carsRouter); // håndterer '/cars'
app.use('/departments', departmentsRouter); // håndterer '/departments'
app.use('/about', aboutRouter); // håndterer '/about'
app.use('/contact', contactRouter); // håndterer '/contact'

// 404-handler: fanges hvis ingen af ovenstående routes matcher
app.use((req, res) => {
    res.status(404).send(`<h1>404 - Side ikke fundet</h1><p>Sti: ${req.originalUrl}</p>`);
});

// Start serveren og log en besked når den kører
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
