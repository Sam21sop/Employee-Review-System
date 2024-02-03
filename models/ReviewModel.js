import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        feedback: {
            type: String,
            required: true
        },
        participants: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Employee',
        }
    },
    {
        timestamp: true
    },
);

const reviewModel = mongoose.model("Review", reviewSchema);
export default reviewModel;