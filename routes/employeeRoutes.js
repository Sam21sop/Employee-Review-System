import { Router } from "express";
import { createNewEmployeeController, employeeLoginController } from "../controllers/adminControllers.js";

const employeeRouter = Router();


// all Employee signup/signin Routes
employeeRouter.route('/signup').post(createNewEmployeeController);
employeeRouter.route('/login').post(employeeLoginController);

// Admin Routes



export default employeeRouter;