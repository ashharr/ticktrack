import { useEffect, useState } from "react";
import { getTodosByUser } from "./api/TodoApiService";

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

  useEffect(() => refreshTodos(), []);

  function refreshTodos() {
    getTodosByUser("ashharr")
      .then((response) => setTodos(response.data))
      .catch((error) => console.log(error));
  }

  return (
    <div className="container">
      <h1>Things You Want To Do!</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <td>id</td>
              <td>description</td>
              <td>Is Done?</td>
              <td>Target Date</td>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListTodosComponent;
