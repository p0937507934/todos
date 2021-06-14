import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState();
  const [data, setData] = useState();
  const [newData, setNewData] = useState();
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("127.0.0.1:3001/todos");
      setTodos(res.data);
    }
    fetchData();
  }, [todos]);
  const handleCreate = async () => {
    const res = await axios.post("127.0.0.1:3001/todos", { data: data });
    alert("新增成功!");
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setData(value);
  };
  const handleUpdate = async(id) => {
    const res = await axios.put("127.0.0.1:3001/todos",{id:id,data:newData})
    alert("修改成功!")
  };
  const handleDelete = async(id) => {
    const res = await axios.delete("127.0.0.1:3001/todos",{ data: { id:id }})
    alert("刪除成功!")
  };
  const handleNewData = (e) => {
    const { value } = e.target;
    setNewData(value);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="input">
          <div>備忘錄</div>
          <input type="text" onChange={handleChange} />
          <Button variant="primary" onClick={handleCreate}>
            Add
          </Button>
        </div>
        <ListGroup>
          {todos ? (
            todos.todos.map((todo) => (
              <div className="listItem">
                <ListGroup.Item>{todo.todo}</ListGroup.Item>
                <input type="text" onChange={handleNewData} />
                <Button variant="primary" onClick={() => handleUpdate(todo.id)}>
                  Update
                </Button>
                <Button variant="danger" onClick={() => handleDelete(todo.id)}>
                  Delete
                </Button>
              </div>
            ))
          ) : (
            <h1>"data loading"</h1>
          )}
        </ListGroup>
      </div>
    </div>
  );
}

export default App;
