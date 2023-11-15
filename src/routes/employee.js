import express from "express";
const route = express.Router();
import { getEmployee, getEmployeeById, createEmployee, updateEmployee, deleteEmployee } from '../controllers/employee.js';

route.get('/', getEmployee);

route.get('/:id_employee', getEmployeeById);

route.post('/', createEmployee);

route.patch('/:id_employee', updateEmployee);

route.delete('/:id_employee', deleteEmployee)

export default route;
