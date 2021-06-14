const express = require("express");
const router = express.Router();
const {createTodos,getTodos,deleteTodos,updateTodos} = require("../controller/todos")



router.post("/todos",createTodos)
router.get("/todos",getTodos)
router.put("/todos",updateTodos)
router.delete("/todos",deleteTodos)

module.exports = router