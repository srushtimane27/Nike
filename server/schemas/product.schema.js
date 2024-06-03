import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    tags: String,
    name: String,
    type: String,
    colour: String,
    price: Number 
});

const ProductSchema = mongoose.model("Product", productSchema);

export default ProductSchema;