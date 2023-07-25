import { apiClient } from "./apiClient";

export const executeBasicAuthenticationService = (token) =>
apiClient.get(`/basicauth`, {headers: {
    Authorization: token
}});

export const executeJwtAuthenticationService = (username,password) =>
apiClient.post(`/authenticate`, {username, password});
