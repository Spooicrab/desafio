import { Router } from "express";
import { ProductManager } from "../../ProductManager.js";
const router = Router()

router.get('/allproducts', async (req, res) => {
    const products = await ProductManager.getProducts({})
    res.render('allproducts', { products })
})

router.get('/RealtimeProducts', async (req, res) => {
    const products = await ProductManager.getProducts({})
    res.render('realtimeproducts', { products })
})

export default router 