const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { read } = require("./db");
const  {modifier } = require("./db_modifier")

const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send(read());
});

app.post("/", (req, res) => {

    res.send(modifier());
   
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    console.log("Current db:\n", read());
});