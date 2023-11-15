import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import middlewareLogRequest from './middleware/logs.js';
import employeeRoute from './routes/employee.js';
import scwRoute from './routes/scw.js';
import mesinRoute from './routes/mesin.js';
import userRoute from './routes/user.js';
import historyRoute from './routes/history.js';
import departemenRoute from './routes/departemen.js';
import jabatanRoute from './routes/jabatan.js';
import lokasiRoute from './routes/lokasi.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/assets', express.static('public/images'))

app.use(middlewareLogRequest);

app.use((req, res, next) => {
    console.log('Api terhubung...');
    next();
})

app.use("/employee", employeeRoute);
app.use("/scw", scwRoute);
app.use("/mesin", mesinRoute);
app.use("/user", userRoute);
app.use("/history", historyRoute);
app.use("/departemen", departemenRoute);
app.use("/jabatan", jabatanRoute);
app.use("/lokasi", lokasiRoute);

app.listen(process.env.APP_PORT, () => {
    console.log("Server is running on Port " + process.env.APP_PORT + "...");
});
