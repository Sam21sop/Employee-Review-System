import ErrorHandler from "../utils/errorHandler.js";
import { createNewEmployeeRepo, findEmployeeRepo } from "../repository/employeeRepository.js";
import sendToken from "../utils/sendTokenToCookie.js";



export const createNewEmployeeController = async (req, res, next) => {
    // get email from req body
    const { email } = req.body;

    try {
        const user = await findEmployeeRepo({ email });
        // check employee alredy present in the database
        if (!user) {
            // create new employee
            const newEmployee = await createNewEmployeeRepo(req.body);

            // send json web token
            await sendToken(newEmployee, res, 200);
            next();
        } else {
            res.redirect('login')
        }
        // return next(new ErrorHandler(400, "Email already registered!"));
    } catch (error) {
        console.log(error);
        next();
        // return next(new ErrorHandler(500, error));
    }
};



export const employeeLoginController = async (req, res, next) => {
    // get required data from body 
    const { email, password } = req.body;
    try {
        if (!email) {
            // if email is empty or undefined
            res.redirect('login')
            // return next(new ErrorHandler(400, "Please Enter Email."));
        };
        if (!password) {
            // if password is empty or undefined
            res.redirect('login')
            // return next(new ErrorHandler(400, "Please Enter Password."));
        };

        // find the employee in the database
        const employee = await findEmployeeRepo({ email }, true);
        if (!employee) {
            // if user not found
            res.redirect('login');
            next(new ErrorHandler(404, "Invalid credentials. Please try again.!"))
        };

        // compare password
        const isValidPassword = await employee.comparePassword(password);
        if (!isValidPassword) {
            res.redirect('login')
            // return next(new ErrorHandler(401, "invalid password!"))
        };

        // everuthing is okay render dashboard
        res.render('dashboard', { employee })
    } catch (error) {
        next(new ErrorHandler(400, error));
        res.redirect('home')
        // next();
    }
};


export const employeeLogoutController = async (req, res, next) => {
    res.status(200).cookie("token", null, { expire: new Date(Date.now()), httpOnly: true }).json({ success: true });
};