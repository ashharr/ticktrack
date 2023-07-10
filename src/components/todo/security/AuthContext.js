
// Sharing State accross all components requires use of Context
// State of a variable is lost so to share it accross we need Context provided by React

import { createContext, useState, useContext } from "react";

//1. Create a Context

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext)



//2. Share context with all components
export default function AuthProvider({children}){

    //3. Define a state to share
    const [ number, setNumber] = useState(25);
    // setInterval( () => setNumber(number+1), 10000)

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function login(username, password){
        if(username==='ashharr' && password==='spring'){
            setIsAuthenticated(true)
            return true            
        } else {
            setIsAuthenticated(false)
            return false
        } 
    }
    function logout() {
        setIsAuthenticated(false)
    }
    return (
        <AuthContext.Provider value={{number, isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
