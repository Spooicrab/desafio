import { ProductoModel } from "../models/models.js";

class ProductsManager {

    async findAll() {
        const response = await ProductoModel.find()
        return response;
    }

    async findOne(id) {
        const response = await ProductoModel.findById(id);
        return response
    }

    async Add(obj) {
        const response = await ProductoModel.create(obj)
        return response
    }

    async Delete(id) {
        const response = await ProductoModel.findByIdAndDelete(id)
    }

}

export const ProductManager = new ProductsManager;