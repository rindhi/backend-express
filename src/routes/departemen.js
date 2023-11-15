import express from "express";
const route = express.Router();
import { getDepartemen, getDepartemenById, updateDepartemen, createDepartemen, deleteDepartemen } from '../controllers/departemen.js';


route.get('/', getDepartemen);

route.get('/:id_department', getDepartemenById);

route.post('/', createDepartemen);

route.patch('/:id_department', updateDepartemen);

route.delete('/:id_department', deleteDepartemen)

export default route;
