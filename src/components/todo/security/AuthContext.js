// Sharing State accross all components requires use of Context
// State of a variable is lost so to share it accross we need Context provided by React

import { createContext, useState, useContext } from "react";
import { executeJwtAuthenticationService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/apiClient";

//1. Create a Context

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

//2. Share context with all components
export default function AuthProvider({ children }) {
  //3. Define a state to share
  const [number, setNumber] = useState(25);
  // setInterval( () => setNumber(number+1), 10000)

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [username, setUsername] = useState(null);

  const [token, setToken] = useState(null);

  // function login(username, password){
  //     if(username==='ashharr' && password==='spring'){
  //         setIsAuthenticated(true)
  //         setUsername(username)
  //         return true
  //     } else {
  //         setIsAuthenticated(false)
  //         return false
  //     }
  // }

  // I. Basic Auth
  // async function login(username, password){

  //     const baToken = 'Basic ' + window.btoa( username + ":" + password )

  //     try {

  //         const response = await executeBasicAuthenticationService(baToken)

  //         if(response.status==200){
  //             setIsAuthenticated(true)
  //             setUsername(username)
  //             setToken(baToken)
  //             apiClient.interceptors.request.use((config) => {
  //                 console.log('intercepting and adding a token')
  //                     config.headers.Authorization = baToken
  //                     return config
  //             })

  //             return true
  //         } else {
  //             logout()
  //             return false
  //         }
  //     } catch(error) {
  //         logout()
  //         return false
  //     }
  // }

  // II. JWT Auth
  async function login(username, password) {
    try {
      const response = await executeJwtAuthenticationService(
        username,
        password
      );

      if (response.status == 200) {
        const jwtToken = "Bearer " + response.data.token;

        setIsAuthenticated(true);
        setUsername(username);
        setToken(jwtToken);
        apiClient.interceptors.request.use((config) => {
          console.log("intercepting and adding a token");
          config.headers.Authorization = jwtToken;
          return config;
        });

        return true;
      } else {
        logout();
        return false;
      }
    } catch (error) {
      logout();
      return false;
    }
  }

  function logout() {
    setIsAuthenticated(false);
    setToken(null);
  }
  return (
    <AuthContext.Provider
      value={{ number, isAuthenticated, login, logout, username }}
    >
      {children}
    </AuthContext.Provider>
  );
}
