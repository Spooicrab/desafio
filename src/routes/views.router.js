// import { Router } from "express";
// import { ProductManager } from "../../ProductManager.js";
// const router = Router()

// router.get('/allproducts', async (req, res) => {
//     const products = await ProductManager.getProducts()
//     res.render('allproducts', { products })
// })

// router.get('/realtimeproducts', async (req, res) => {
//     const products = await ProductManager.getProducts()
//     res.render('realtimeproducts', { products })
// })

// export default router 

// import { ProductManager } from "../ProductManager.js";
import { Router } from "express";
import "../dao/config.js"
import { ProductManager } from "../dao/mongo/ProductManager.js";
const router = Router()

router.get("/", async (req, res) => {
    const Productos = await ProductManager.findAll()
    res.json(Productos)
})

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const Producto = await ProductManager.findOne(id)
    res.json(Producto)
})

router.post("/", async (req, res) => {
    const AddProduct = await ProductManager.Add(req.body)
    res.json(AddProduct)
})

//65287afd5f7228bb88d14907

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const ProductoEliminado = ProductManager.Delete(id)
    res.json(ProductoEliminado)
});

export default router