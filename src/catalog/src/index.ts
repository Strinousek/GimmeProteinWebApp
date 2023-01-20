import express from "express";
import cors from "cors";
import products from "./controllers/products";

const app: express.Application = express();

const API_PORT: number = 8005;
const API_PREFIX: string = "/catalog/api/v1";

app.use(cors());
app.use(API_PREFIX, products);

app.listen(API_PORT, () => {
    console.log(`Catalog API - Listening on ${API_PORT}`);
});