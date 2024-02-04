import { Router } from "express";
import { authorization, authorizeByAdmin } from "../middlewares/authMiddleware.js";




const reviewRouter = Router();

// get all performance review
reviewRouter.route('/employee/:id').get(authorization, );
reviewRouter.route('/emplyee/:id/admin/all-review').get(authorization, authorizeByAdmin('admin'))
// add performance rview 

// update performace review

