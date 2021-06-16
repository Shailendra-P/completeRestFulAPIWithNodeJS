const express = require("express");
require("../src/db/conn");
const mensRanking = require("../src/models/mens")
const menRouter = require("./routers/men");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Register Router
app.use(menRouter);




app.listen(port , () => {
    console.log(`connection estb ${port}`);
});