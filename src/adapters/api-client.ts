import axios from "axios";

export const apiClient = axios.create({
  baseURL: 'https://sut-sp-backend.herokuapp.com/api/'
});