const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

const db = require("./db")
const moduleRouter = require("./routes/module");

var cors = require('cors');

const app = express();
app.use(cors({origin: '*'}));
const PORT = process.env.PORT || 3000

app.use(express.json())
const directory = path.join(__dirname, './images');
app.use("/images", express.static(directory));
//Put your angular dist folder here
app.use(express.static(path.join(__dirname, '../dist/app-misc')));

// app.use("/", express.static(path.join(__dirname, 'angular')));

app.use("/api/module", moduleRouter);


app.get('/api/test', (req, res) => {
    res.send('Hello World!!!')
  })

// app.use((req,res,next)=>{
//     res.sendFile(path.join(__dirname,"angular","index.html"))
// });
app.listen(PORT, (req,res) => {
    
    console.log(`app is listening to PORT ${PORT}`)
})


// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//    extended: false
// }));
// app.use(cors());

// const PORT = process.env.PORT || 3000
// app.use("/api/posts", postRouter)
// app.listen(PORT, (req, res) => {
//     console.log(`app is listening to PORT ${PORT}`)
// });