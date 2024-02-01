// import necessory modules
import express from 'express';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware.js';
import employeeRouter from './routes/employeeRoutes.js';


// create server
const server = express();

// setup default view engine

// express middleware to parse URL-encoded request
server.use((express.urlencoded({extended:true})))
server.use(express.json())


// routes
server.use('/api/employee', employeeRouter)

server.get('/', (req, res)=>{
    res.send("Hello devloper!")
});


// error handler middleware
server.use(errorHandlerMiddleware)

// export default server object instance
export default server;