import express from "express";
const route = express.Router();
import { getJabatan, getJabatanById, updateJabatan, createJabatan, deleteJabatan } from '../controllers/jabatan.js';


route.get('/', getJabatan);

route.get('/:id_jabatan', getJabatanById);

route.post('/', createJabatan);

route.patch('/:id_jabatan', updateJabatan);

route.delete('/:id_jabatan', deleteJabatan)

export default route;
