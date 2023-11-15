import express from "express";
const route = express.Router();
import { getLokasi, getLokasiById, updateLokasi, createLokasi, deleteLokasi } from '../controllers/lokasi.js';


route.get('/', getLokasi);

route.get('/:id_lokasi', getLokasiById);

route.post('/', createLokasi);

route.patch('/:id_lokasi', updateLokasi);

route.delete('/:id_lokasi', deleteLokasi)

export default route;
