import axios from "axios";

/*apos colocar no back para funcionar muda o endereco baseURL
export const api = axios.create({
  baseURL: "http://localhost:3333"
}); */

export const api = axios.create({
  baseURL: "https://backendmoviesrocket-api.onrender.com"
});