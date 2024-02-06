// import necessory modules
import express from 'express';
import path from 'path';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware.js';
import employeeRouter from './routes/employeeRoutes.js';
import homeRouter from './routes/homeRoutes.js';
import expressEjsLayouts from 'express-ejs-layouts';


// create server
const server = express();


// setup default view engine as ejs
server.use(expressEjsLayouts)
server.set('view engine', 'ejs');
server.set('views', "./views")

// Serve static files from the public directory
server.use(express.static(path.resolve('public')));

// express middleware to parse URL-encoded request
server.use((express.urlencoded({extended:true})))
server.use(express.json())


// Home routes
server.use('/', homeRouter);
server.use('/api/employee', employeeRouter);



// error handler middleware
server.use(errorHandlerMiddleware)

// export default server object instance
export default server;