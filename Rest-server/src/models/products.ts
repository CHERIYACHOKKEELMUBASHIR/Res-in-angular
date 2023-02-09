import mongoose from "mongoose";

const model = mongoose.model;
const schema = mongoose.Schema;

const productSchema = new schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    id: String,
    price: Number,
    rating: Number,
    iconName: String,
    imgurl:String
});

export default model('Product', productSchema);