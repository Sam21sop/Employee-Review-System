import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: true
        },
        reviewer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Employee",
            required: true
        },
        reviewed: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Employee',
            required: true
        }
    },
    {
        timestamp: true
    },
);

const reviewModel = mongoose.model("Review", reviewSchema);
export default reviewModel;