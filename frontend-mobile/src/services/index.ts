import axios from "axios";
import { userToken } from "./auth";

export const api = axios.create({
    baseURL: "https://api-movieflix-ds.herokuapp.com"
});

export const TOKEN = "Basic ZHNtb3ZpZWZsaXg6ZHNtb3ZpZWZsaXgxMjM=";

export async function getMovies(genreId : number = 0) {
    const token = await userToken();
    
    const res = api.get(`/movies?genreId=${genreId}`,  {
       headers :{
          Authorization: `Bearer ${token}`
       }
    });
    
    return res;
    
 }


 export async function getGenres() {
    const token = await userToken();
    
    const res = api.get('/genres',  {
       headers :{
          Authorization: `Bearer ${token}`
       }
    });
    
    return res;
    
 }