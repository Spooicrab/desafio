import express from "express";
import handlebars from "express-handlebars";
import { __dirname } from "./utils.js";
import ViewsRouter from './routes/views.router.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use('/', ViewsRouter)

app.listen(8080, () => {
    console.log("escuchando puerto 8080");
})