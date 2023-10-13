import mongoose from "mongoose";
import { ProductoModel } from "../models/models.js";

class ProductsManager {

    async findAll() {
        try {
            const response = await ProductoModel.find().lean()
            return response;
        } catch (error) {
            return error
        }

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