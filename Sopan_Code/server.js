import processEnvVar from "./utils/processEnvVar.js";
import server from "./index.js";
import connectDB from "./config/database.js";

const PORT = processEnvVar.PORT || 3000;
const BASE_URL = processEnvVar.DB_BASE_URL || '127.0.0.1:28017';
const DATABASE_NAME = processEnvVar.DATABASE_NAME;


// server listening on specifi port
server.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
    connectDB(BASE_URL, DATABASE_NAME);
});