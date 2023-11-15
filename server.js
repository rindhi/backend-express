import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import middlewareLogRequest from '../middleware/logs.js';
import departemenRoute from '../routes/departemen.js';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use('/assets', express.static('public/images'))

app.use(middlewareLogRequest);

app.use((req, res, next) => {
    console.log('API terhubung...');
    next();
});

app.use("/departemen", departemenRoute);

const server = app.listen(process.env.TEST_APP_PORT, () => {
    console.log("Test server is running on Port " + process.env.TEST_APP_PORT + "...");
});

export { app, server, prisma };
