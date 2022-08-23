const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const client = require("./routes/client")

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
const dotenv = require("dotenv") 
dotenv.config();
app.listen(8800, ()=>{
    console.log("Backend Server is running!");
})
app.use(express.json());
app.use("/api/client",client);