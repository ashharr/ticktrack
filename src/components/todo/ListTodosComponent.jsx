import { useEffect, useState } from "react";
import {
  getTodosByUserApi,
  deleteTodoApi,
  getTodoApi,
} from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

function ListTodosComponent() {
  //   const today = new Date();

  //   const targetDate = new Date(
  //     today.getFullYear() + 12,
  //     today.getMonth(),
  //     today.getDay()
  //   );

  // const todos = [{id:1, description: "Learn Java", done: false, targetDate:targetDate},
  //                 {id:2, description: "Learn Azure", done: false, targetDate:targetDate},
  //                 {id:3, description: "Learn Spring Boot", done: false, targetDate:targetDate}];

  const [todos, setTodos] = useState([]);

  const [message, setMessage] = useState(null);

  const navigate = useNavigate();

  useEffect(() => refreshTodos(), []);

  const authContext = useAuth();
  const username = authContext.username;

  function refreshTodos() {
    getTodosByUserApi(username)
      .then((response) => setTodos(response.data))
      .catch((error) => console.log(error));
  }
  function deleteTodo(id) {
    console.log(`clicked ${id}`);
    deleteTodoApi(username, id)
      .then(() => {
        setMessage(`Delete of todo with id = ${id} successful`);
        refreshTodos();
      })
      .catch((error) => console.log(error));
  }

  function updateTodo(id) {
    console.log(`update clicked ${id}`);
    navigate(`/todo/${id}`);
  }

  function addNewTodo() {
    navigate(`/todo/-1`);
  }

  return (
    <div className="container">
      <h1>Things You Want To Do!</h1>
      {message && <div className="alert alert-warning">{message}</div>}

      <div>
        <table className="table">
          <thead>
            <tr>
              <td>id</td>
              <td>description</td>
              <td>Is Done?</td>
              <td>Target Date</td>
              <td>Delete</td>
              <td>Update</td>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toString()}</td>
                <td>
                  <div>
                    {" "}
                    <button
                      className="btn btn-warning"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
                <td>
                  <div>
                    {" "}
                    <button
                      className="btn btn-success"
                      onClick={() => updateTodo(todo.id)}
                    >
                      Update
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="btn btn-success m-5" onClick={addNewTodo}>
        Add New Todo
      </div>
    </div>
  );
}

export default ListTodosComponent;
