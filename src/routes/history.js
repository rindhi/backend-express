import express from "express";
const route = express.Router();
import { getHistory, getHistoryById, createHistory, updateHistory, deleteHistory } from '../controllers/history.js';


route.get('/', getHistory);

route.get('/:id_kerusakan', getHistoryById);

route.post('/', createHistory);

route.patch('/:id_kerusakan', updateHistory);

route.delete('/:id_kerusakan', deleteHistory)

export default route;
