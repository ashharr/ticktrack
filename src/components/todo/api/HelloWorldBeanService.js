import { apiClient } from "./apiClient";


export const getHelloWorldBean = () =>
apiClient.get("/hello-world-bean");

