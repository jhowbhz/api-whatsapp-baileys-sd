const express = require("express");
const app = express()

const httpServer = require("http").createServer(app);
const options = { /* ... */ };
const io = require("socket.io")(httpServer, options);

const cors = require("cors");
const morgan = require("morgan");
const fs = require('fs')
const swaggerUI = require("swagger-ui-express");
const docs = require('./Docs');

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs));
app.set('view engine', 'ejs');
app.set('views','./Views')
app.use(express.static('./Views'));
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.json());
app.use(morgan('dev',{
    stream: fs.createWriteStream('Logs/access.log', {flags: 'a'})
}));
app.use(express.Router())

const Instance = require("./Routes/Instance")
const sendMessage = require("./Routes/sendMessage")
const getMessages = require("./Routes/getMessages")
const group = require("./Routes/group")

app.use(Instance);
app.use(group);
app.use(getMessages);
app.use(sendMessage);

app.get('/', (req, res) => {

    io.on("connection", socket => { "ok" });
    //io.emit("connection", socket => { "ok" });

    res.status(200)
    .send("Whatsapp API <br><a href='/api-docs'> /api-docs </a>")
})

app.get('*',(req, res) => {
    res.status(404).send({
        error: true,
        message: "404 page not found"
    });
})

const server = app.listen(process.env.PORT || 9190, () => {
    console.log(`📗: Listening on PORT => http://localhost:${server.address().port}`)
})


