import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getHelloWorldPathVariable } from "./api/HelloWorldBeanService";

function WelcomeComponent() {
  const { username } = useParams();

  const [message, setMessage] = useState(null);

  function callHelloWorldRestApi() {

    getHelloWorldPathVariable("Ashhar")
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("clean-up"));
  }

  function successfulResponse(response) {
    setMessage(response.data.message)
    console.log(response);
  }

  function errorResponse(error) {
    console.log(error);
  }

  return (
    <div className="Welcome">
      <div>
        <h1>Welcome {username}!</h1>
      </div>
      Manage your todos – <Link to="/todos">Click here</Link>
      <div>
      <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
        Call Hello World
      </button>
      <div className="text-info">{message}</div>
      </div>
    </div>
  );
}
export default WelcomeComponent;
