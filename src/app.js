import express from "express";
import handlebars from "express-handlebars";
import { __dirname } from "./utils.js";
import ViewsRouter from './routes/views.router.js'
import { Server } from "socket.io";
import { ProductManager } from "../ProductManager.js";

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use('/', ViewsRouter)

const hhtpserver = app.listen(8080, () => {
    console.log("escuchando puerto 8080");
})

const Sserver = new Server(hhtpserver)

Sserver.on("connection", (socket) => {
    console.log(`Cliente conectado: ${socket.id}`);

    socket.on("Addproduct", async (obj) => {
        const newObj = await ProductManager.addProduct(obj);
        socket.emit("productAdded", newObj);
    });
});
