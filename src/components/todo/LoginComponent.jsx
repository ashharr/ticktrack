import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./security/AuthContext";

function LoginComponent(){
    
    const [username, setUsername]= useState('ashharr');
    const [password, setPassword]= useState('');
    const [showErrorMessage, setShowErrorMessage]= useState(false);

    
    // To navigate user to welcome page
    const navigate = useNavigate();

    const authContext = useAuth();

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit(event) {
        if(authContext.login(username, password)){
            navigate(`/welcome/${username}`)
        } else {
            setShowErrorMessage(true);
        }
    }

    return(
        <div className="Login">
            <div>
                <h1>Please Login to Continue!</h1>
            </div>
        <div className="LoginForm">
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

export default LoginComponent