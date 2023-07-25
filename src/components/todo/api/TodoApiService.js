import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:8086'
})

export const getTodosByUser = (username) =>
apiClient.get(`/users/${username}/todos`);
