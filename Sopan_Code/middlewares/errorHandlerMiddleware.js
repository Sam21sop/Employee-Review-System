import ErrorHandler from "../utils/errorHandler.js";

export const errorHandlerMiddleware = (err, req, res, next)=>{
    if(res.headersSent){
        return next(err)
    };
    err.message = err.message || "Internal server Error!";
    err.statusCode = err.statusCode || 500;
    res.status(err.statusCode).json({success:false, error:err.message});
};

export const handleUncaughtError = ()=>{
    process.on("uncaughtException", (err)=>{
        console.log(`Error: ${err}`);
        console.log("shutting down server bcz of uncaughtException");
    });
};