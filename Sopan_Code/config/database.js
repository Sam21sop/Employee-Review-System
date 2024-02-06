import mongoose from "mongoose";
import ErrorHandler from "../utils/errorHandler.js";


// making cconnection with database
const connectDB = async (baseUrl, databaseName = "myDatabase") => {
  try {
    await mongoose.connect(`mongodb://${baseUrl}/${databaseName}`);
    console.log("DataBase connections established.!");
  } catch (error) {
    throw new ErrorHandler(500, error);
  }
};


// exporting database function ref
export default connectDB;