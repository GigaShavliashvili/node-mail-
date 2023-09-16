const http = require('http');
const { sendMail } = require('./sendMail');
const bodyParser = require("body-parser");
const express = require("express")
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post("/sendMail", sendMail)


const array = [{ id: "1" }, { id: "2" }, {id: "3"}];
let query = "/getUsers?";
array.forEach((el) => {
    query += `${Object.keys(el)[0]}=${el[Object.keys(el)[0]]}&`
 
})
const newQuery = query.slice(0, -1)
console.log(newQuery)

app.get("/recivedMail", async (req, res) => {
    const mail = req.query.mail;
    console.log(req)
    res.status(200).json({ msg: `$${mail} თქვენ წარმატებით გაიარეთ ვერიფიკაცია` })
})

const port = 4000
app.listen(port)