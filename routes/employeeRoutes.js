import { Router } from "express";
import { createNewEmployeeController, employeeLoginController } from "../controllers/adminControllers.js";
import { employeeSignupForm, employeeLoginForm } from "../controllers/homeControllers.js";


const employeeRouter = Router();


// all Employee signup/signin Routes
employeeRouter.route('/signup').get(employeeSignupForm)
employeeRouter.route('/signup').post(createNewEmployeeController);

employeeRouter.route('/login').get(employeeLoginForm);
employeeRouter.route('/login').post(employeeLoginController);

// Admin Routes



export default employeeRouter;