import ProductSchema from "../schemas/product.schema.js";

export const addProduct = async (req,res) => {
    try {
        const { tags, name, type, colour, price } = req.body.productData;
        // const { userId } = req.body;
        if(!tags || !name || !type || !colour || !price) {
            return res.json({success: false, error: "All fields are required"})
        }
        const newProduct = new ProductSchema({
            tags: tags,
            name: name,
            type: type,
            colour: colour,
            price: price
        });
        await newProduct.save();
        return res.json({success: true, message: "Product Successfully Stored"})
    } catch (error) {
        return res.json({success: false, error})
    }
}