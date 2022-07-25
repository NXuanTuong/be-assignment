import mongoose, {Schema} from "mongoose";

const CategoryModels = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 5
    },
    status: {
        type: Number
    }
}, {timestamps : true})


export default mongoose.model("Category", CategoryModels)