import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-movieflix-ds.herokuapp.com"
});

export const TOKEN = "Basic ZHNtb3ZpZWZsaXg6ZHNtb3ZpZWZsaXgxMjM=";