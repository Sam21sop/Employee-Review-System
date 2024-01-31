import express from 'express';


const server = express();

server.get('/', (req, res)=>{
    res.send("Hello devloper!")
});



// export default server object instance
export default server;