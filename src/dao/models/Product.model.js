import mongoose from "mongoose";

const ProductoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnail: { type: String },
    code: { type: Number, required: true },
    stock: { type: Number }
});

export const ProductoModel = mongoose.model('prductos', ProductoSchema);
