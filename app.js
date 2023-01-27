const express= require("express")
const session = require('express-session')
const { Guid } = require('js-guid');
const mongoose = require("mongoose");
const redis = require('connect-redis');
const Storage = require("node-storage")
const cors = require("cors")

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
const store = new Storage("./keys/keys.js")

const guid = Guid.newGuid().StringGuid



app.get("/",(req,res) => {
    store.put(req.query.key, guid)
    return res.json({
        "guid": guid,
        "success":true
    })
})

app.post("/pkcs7", (req, res) => {
    
})

app.listen(PORT, () => {
    console.log("Server runing")
});