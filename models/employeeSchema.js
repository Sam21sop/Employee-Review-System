import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import processEnvVar from "../utils/processEnvVar.js";
import ErrorHandler from "../utils/errorHandler.js";

const employeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "user name required"],
    maxlength: [25, "user cant exceed 25 character"],
    minlength: [3, "user should have atleast 3 characters"],
  },
  email: {
    type: String,
    required: [true, "Email required."],
    unique: true,
    validate: [validator.isEmail, "Enter valid Email."],
  },
  password: {
    type: String,
    required: [true, "Password required."],
    minlength: [6, "Password should have min 6 length"],
    maxlength: [16, "Password should have max 16 length"],
    select: false,
  },
  role: {
    type: String,
    default: "employee",
    enum: ["employee", "admin"],
  },
});


// save encrypted password in the database
employeeSchema.pre("save", async function (next) {
  try {
    if (
      !this.isModified("password") ||
      (this.isModified("password") && typeof this.password === "string")
    ) {
      // generate encrypted password
      const hashedPassword = await bcrypt.hash(this.password, 12);
      this.password = hashedPassword;
    }
  } catch (error) {
    return next(new ErrorHandler(400, error));
  }
});


// create token for every employee schema
employeeSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, processEnvVar.JWT_SECRETE, {
    expiresIn: processEnvVar.JWT_EXPIRE_IN,
  });
};


// compare password using bcrypt
employeeSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};


const employeeModel = mongoose.model("Employee", employeeSchema);
export default employeeModel;
