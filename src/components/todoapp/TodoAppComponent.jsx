import { useState } from "react";
import "./TodoApp.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useNavigate, useParams, Link } from "react-router-dom";



export default function TodoAppComponent(){
    return(
        <div className="TodoApp">
            {/* <LoginComponent/> */}
            <HeaderComponent/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent/>}/>
                    <Route path="/login" element={<LoginComponent/>}/>
                    <Route path="/welcome/:username" element={<WelcomeComponent/>}/>
                    <Route path="/todos" element={<ListTodosComponent/>}/>
                    <Route path="/logout" element={<LogoutComponent/>}/>

                    <Route path="/*" element={<ErrorComponent/>}/>
                </Routes>
            </BrowserRouter>
            <FooterComponent/>
        </div>
    )
}

function LoginComponent(){
    
    const [username, setUsername]= useState('ashharr');
    const [password, setPassword]= useState('');
    const [showSuccessMessage, setShowSuccessMessage]= useState(false);
    const [showErrorMessage, setShowErrorMessage]= useState(false);

    
    // To navigate user to welcome page
    const navigate = useNavigate();

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit(event) {
        if(username === 'ashharr' && password === 'spring'){
            console.log('Success');
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
            navigate(`/welcome/${username}`)
        } else {
            console.log('Failed');
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
        }
    }

    return(
        <div className="Login">
            <div>
                <h1>Please Login to Continue!</h1>
            </div>
        <div className="LoginForm">
        {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
        {showErrorMessage && <div className="errorMessage">Authentication Failed. 
                                                        Please check your credentials.</div>}
            <div>
                <label>Username:</label>
                <input type="text" name="username"  value={username} onChange={handleUsernameChange}/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
            </div>
            <div>
                <button type="button" name="login" onClick={handleSubmit}>Login</button>
            </div>
        </div>
    </div>
    )
}

function WelcomeComponent(){

    const {username} = useParams();

    return(
        <div className="Welcome">
            <div>
                <h1>Welcome {username}!</h1>
            </div>
            Manage your todos –<Link to="/todos">Click here</Link>
        </div>
    )
}

function ErrorComponent(){
    return (
        <div className="ErrorComponent">
            <h1>Sorry! Page not found...</h1>
            <div>
                Error 404 – Reach out to us at 1800-ABC-EFGH
            </div>
        </div>
    )
}

function ListTodosComponent(){

    const today = new Date();

    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const todos = [{id:1, description: "Learn Java", done: false, targetDate:targetDate},
                    {id:2, description: "Learn Azure", done: false, targetDate:targetDate},
                    {id:3, description: "Learn Spring Boot", done: false, targetDate:targetDate}];

    return(
        <div className="container">
            <h1>Things You Want To Do!</h1>
            <div >
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
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toDateString()}</td>
                                </tr>
                            )
                        )
                    }

                    </tbody>

                </table>
            </div>
        </div>
    )
}

function HeaderComponent() {
    return (
        <div className="header">
            Header <hr/>
        </div>
    )
}

function FooterComponent() {
    return (
        <div className="footer">
            <hr/> Footer 
        </div>
    )
}

function LogoutComponent() {
    return (
        <div className="LogoutComponent">
            <h1>You are logged out!</h1>
            <div>
                Thank you for using our App. Come back soon!
            </div>
        </div>
    )
}
