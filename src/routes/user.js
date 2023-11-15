import express from "express";
const route = express.Router();
import { getUser, getUserById, createUser, updateUser } from '../controllers/user.js';


route.get('/', getUser);

route.get('/:id_user', getUserById);

route.post('/', createUser);

route.patch('/:id_user', updateUser);

export default route;
