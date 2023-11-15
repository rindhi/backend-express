import express from "express";
const route = express.Router();
import { getMesin, getMesinById, createMesin, updateMesin, deleteMesin } from '../controllers/mesin.js';


route.get('/', getMesin);

route.get('/:id_mesin', getMesinById);

route.post('/', createMesin);

route.patch('/:id_mesin', updateMesin);

route.delete('/:id_mesin', deleteMesin)

export default route;
