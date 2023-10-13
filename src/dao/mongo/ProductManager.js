import { ProductoModel } from "../models/Product.model.js";

class ProductsManager {
    // 
    async GetAll() {
        const response = await ProductoModel.find().lean();
        return response;
    }
    // 
    async GetById(id) {
        const response = await ProductoModel.findById(id);
        return response;
    }
    // 
    async Add(obj) {
        const response = await ProductoModel.create(obj)
        return response;
    }
    // 
    async Delete(id) {
        const response = await ProductoModel.findByIdAndDelete(id)
        return response;
    }
    // 
}

export const ProductManager = new ProductsManager;