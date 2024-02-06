import processEnvVar from "./processEnvVar.js";


// json web token save in cookie
const sendToken = async (user, res, statusCode)=>{
    const token = user.getJWTToken();
    const cookieOption = {
        expires: new Date(Date.now() + processEnvVar.COOKIE_EXPIRE_IN * 24 * 60 * 60 * 1000),
        httpOnly:true
    };

    res.status(statusCode).cookie("token", token, cookieOption).render('login');
    // res.status(statusCode).cookie("token", token, cookieOption).json({success:true, user, token})
};

// export default reference of function
export default sendToken;