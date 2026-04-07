import express from 'express';
// Routes
import productsRoutes from './routes/products.routes.js';

const app = express();
const host = process.env.HOST || '127.0.0.1' ;
const port = process.env.PORT || 8080;

app.use((error, req, res, next) => {
console.error(error); // Log the error for debugging´(optional)
const statusCode = error.statusCode || 500;
 res.status(status).json({
description: error.message || "Internal server error",
 ...(error.errors && {errors: error.errors })
 });
});

app.use(express.json());
// Routing
app.use('/products', productsRoutes);

app.listen(port, host, () => {
    console.log(`App listening at http://${host}:${port}/`);
});