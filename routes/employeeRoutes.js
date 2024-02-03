import { Router } from "express";
import { employeeSignupForm, employeeLoginForm } from "../controllers/homeControllers.js";
import { authorization, authorizeByAdmin } from "../middlewares/authMiddleware.js";
import { createNewEmployeeController, employeeLoginController } from "../controllers/employeeControllers.js";


const employeeRouter = Router();


// Employee signup Routes
employeeRouter.route('/signup').get(employeeSignupForm)
employeeRouter.route('/signup').post(createNewEmployeeController);

// Employee signin Routes
employeeRouter.route('/login').get(employeeLoginForm);
employeeRouter.route('/login').post(employeeLoginController);

// // Employee Feedback Routes
// employeeRouter.route('/employee/feedback').get(authorization, employeeFeedbackFormController);
// employeeRouter.route('/employee/feedback').post(authorization, employeeFeedbackFormController);

// // Employee GET Routes
// employeeRouter.route("/employee/:id/review").get(auth, );

// // Admin GET Routes
// employeeRouter.route("/admin/all-employee-details").get(auth, authorizeByAdmin("admin"), getAllEmployeeDetailsController);

// // Implement route for updating role of other users
// employeeRouter.route("/admin/update/:id").put(auth, authorizeByAdmin("admin"), updateEmployeeRoleController);


export default employeeRouter;