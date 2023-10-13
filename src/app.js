import express from "express";
import handlebars from "express-handlebars";
import { __dirname } from "./utils.js";
import ViewsRouter from './routes/views.router.js'
import "./dao/config.js"
import { Server } from "socket.io";

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use('/', ViewsRouter)

const Port8080 = app.listen(8080, () => {
    console.log("ando")
})
// const hhtpserver = app.listen(8080, () => {
//     console.log("escuchando puerto 8080");
// })

const Sserver = new Server(Port8080)

Sserver.on("connection", (socket) => {
    console.log(`Cliente conectado: ${socket.id}`);

    socket.on("AddProduct", async (obj) => {
        const newObj = await ProductManager.Add(obj);
        socket.emit("productAdded", newObj);

    });
});
