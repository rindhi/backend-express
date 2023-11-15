import express from "express";
const route = express.Router();
import { getScw, getScwById, createScw, updateScw, deleteScw } from '../controllers/scw.js';


route.get('/', getScw);

route.get('/:id_scw', getScwById);

route.post('/', createScw);

route.patch('/:id_scw', updateScw);

route.delete('/:id_scw', deleteScw)

export default route;
