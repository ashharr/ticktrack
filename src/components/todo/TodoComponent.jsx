import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./security/AuthContext";
import { createTodoApi, getTodoApi, updateTodoApi } from "./api/TodoApiService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import moment from "moment/moment";

function TodoComponent() {
  const { id } = useParams();

  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [done, setDone] = useState("");

  const authContext = useAuth();
  const navigate = useNavigate();

  const username = authContext.username;

  useEffect(() => getTodo(), [id]);

  function getTodo() {
    if (id != -1) {
      getTodoApi(username, id)
        .then((response) => {
          setDescription(response.data.description);
          setTargetDate(response.data.targetDate);
          setDone(response.data.done);
        })
        .catch((error) => console.log(error));
    }
  }

  function onSubmit(values) {
    const todo = {
      id: id,
      username: username,
      description: values.description,
      targetDate: values.targetDate,
      done: values.done,
    };
    if (id == -1) {
      createTodoApi(username, todo)
        .then((response) => {
          navigate("/todos");
        })
        .catch((error) => console.log(error));
    } else {
      updateTodoApi(username, id, todo)
        .then((response) => {
          navigate("/todos");
        })
        .catch((error) => console.log(error));
    }
  }

  function validate(values) {
    let errors = {
      // description: 'Enter a valid description',
      // targetDate: 'Enter a valid target date'
    };

    if (values.description.length < 5) {
      errors.description = "Enter atleast 5 characters";
    }

    if (
      values.targetDate == null ||
      values.targetDate == "" ||
      !moment(values.targetDate).isValid()
    ) {
      errors.targetDate = "Enter a target date";
    }

    console.log(values);
    return errors;
  }

  const handleChange = () => {
    setDone(!done);
  };

  return (
    <div className="container">
      <h1>Enter Todo Details </h1>
      <div>
        <Formik
          initialValues={{ description, targetDate, done }}
          enableReinitialize={true}
          onSubmit={onSubmit}
          validate={validate}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {(props) => (
            <Form>
              <ErrorMessage
                name="description"
                component="div"
                className="alert alert-warning"
              />

              <ErrorMessage
                name="targetDate"
                component="div"
                className="alert alert-warning"
              />
              <div className="w-50 mx-auto">
                <fieldset className="form-group">
                  <label className="input-group-text form-check-label">
                    Description   
                    <Field
                      type="text"
                      className="form-control"
                      name="description"
                    />
                  </label>
                </fieldset>
                <fieldset className="form-group">
                  <label className="input-group-text form-check-label">
                    Target Date   
                    <Field
                      type="date"
                      className="form-control"
                      name="targetDate"
                    />
                  </label>
                </fieldset>

                <fieldset className="cform-group">
                  <label className="form-check-label input-group-text" for="flexCheckDefault">
                    {" "}
                    Task Completed?    <input
                    className="form-check-input"
                    id="flexCheckDefault"
                    type="checkbox"
                    checked={done}
                    onChange={handleChange}
                  />
                  </label>
                  {/* <Field type="checkbox" className="form-control" name="done" /> */}
                  
                </fieldset>
                <div></div>
                <button className="btn btn-success m-5" type="submit">
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default TodoComponent;
