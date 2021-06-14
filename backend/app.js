const express = require("express");
const bodyparser = require("body-parser")
const cors = require("cors")
const path = require("path");

const TodosRouter = require("./router/todos")

const app = express();
app.use(bodyparser.json())
app.use(cors())
app.use(express.static("views/build"));
app.use("/",TodosRouter)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views","build", "index.html"));
   });
app.listen("3001",()=>{
    console.log(`server is running on ${3001}`);
})
