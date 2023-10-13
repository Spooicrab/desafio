import express from "express";
import { __dirname } from "./utils.js";
import ViewsRouter from './routes/views.router.js'
import handlebars from "express-handlebars";
import "./dao/config.js"
import ChatRouter from "./routes/Chat.router.js";
import { Server } from "socket.io";
import { Chat } from "./dao/mongo/Chatmanager.js";

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use('/', ViewsRouter)
app.use('/chat', ChatRouter)

const Port8080 = app.listen(8080, () => {
    console.log("ando")
})

const Sserver = new Server(Port8080)

Sserver.on("connection", (socket) => {
    console.log(`Cliente conectado: ${socket.id}`);
    socket.on("Mensaje", async (obj) => {
        const Mensajes = await Chat.Add(obj)
        const Chats = await Chat.GetAll({})
        socket.emit("OK", Chats)

    })
});
