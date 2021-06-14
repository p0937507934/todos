const fs = require("fs");
const path = require("path");
let db = require("../model/todos.json");

const createTodos = async (req, res, next) => {
  const { data } = req.body;

  const obj = {
    id: db.todos.length + 1,
    todo: data,
  };
  db.todos.push(obj);
  fs.writeFile(
    "E:/todos/backend/model/todos.json",
    JSON.stringify(db),
    (err) => {
      console.log("writing");
    }
  );
  res.json({ msg: "ok" });
};

const getTodos = async (req, res, next) => {
  res.json(db);
};

const updateTodos = async (req, res, next) => {
  const { id, data } = req.body;
  console.log(data, id);
  db.todos.forEach((todo) => {
    if (todo.id == id) {
      todo.todo = data;
    }
  });
  fs.writeFile(
    "E:/todos/backend/model/todos.json",
    JSON.stringify(db),
    (err) => {
      console.log("writing");
    }
  );
  res.json({ msg: "ok" });
};
const deleteTodos = async (req, res, next) => {
  const { id } = req.body;
  
  let newDb = db.todos.filter((todo) => {
    return todo.id != id;
  });
  newDb = {
      todos:newDb
  }
  
  fs.writeFile(
    "E:/todos/backend/model/todos.json",
    JSON.stringify(newDb),
    (err) => {
      console.log("writing");
    }
  );
  res.json({ msg: "ok" });
};

module.exports = {
  createTodos,
  getTodos,
  updateTodos,
  deleteTodos,
};
