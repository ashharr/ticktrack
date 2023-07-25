import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:8086'
})

export const getHelloWorldBean = () =>
apiClient.get("/hello-world-bean");

export const getHelloWorldPathVariable = (username) =>
apiClient.get(`http://localhost:8086/hello-world/path-variable/${username}`);
