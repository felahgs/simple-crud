import axios from "axios";

// Here we definte the baseURL for our endpoint, the url we use to communicate with the backend server.
// we do that so we don't need to call 'http://localhost:3003/users' everytime we need to fetch users for exemple.
// so now we just need to call '/users'.
export const api = axios.create({
  baseURL: "http://localhost:3003",
});
