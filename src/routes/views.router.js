import { Router } from "express";
import { ProductManager } from "../dao/mongo/ProductManager.js";
const router = Router()

router.get("/", async (req, res) => {
    const Productos = await ProductManager.GetAll({})
    res.render('allproducts', ({ Productos }))
})

router.post("/", async (req, res) => {
    const { title, description, price, stock, code, thumbail, } = req.body;
    if (!title || !price || !code) {
        return res.status(400).json({ message: "Faltan datos" })
    }
    if (!stock) {
        delete req.body.stock;
    }
    try {
        const Add = await ProductManager.Add(req.body);
        res
            .status(200)
            .json({ message: "Añadido", product: Add });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});




export default router