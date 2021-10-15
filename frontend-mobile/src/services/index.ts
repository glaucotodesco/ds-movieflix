import axios from "axios";
import { Review } from "../@types/Review";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TOKEN = "Basic ZHNtb3ZpZWZsaXg6ZHNtb3ZpZWZsaXgxMjM=";

export const api = axios.create({
    //baseURL: "https://api-movieflix-ds.herokuapp.com"
    baseURL: "http://localhost:8080"
});



export async function getMovies(genreId : number = 0) {
    const token = await AsyncStorage.getItem("@token");
    
    const res = api.get(`/movies?genreId=${genreId}`,  {
       headers :{
          Authorization: `Bearer ${token}`
       }
    });
    
    return res;
 }

 export async function getMovieById(id : number = 0) {
   const token = await AsyncStorage.getItem("@token");
   
   const res = api.get(`/movies/${id}`,  {
      headers :{
         Authorization: `Bearer ${token}`
      }
   });
   
   return res;
}

 export async function getGenres() {
    const token = await AsyncStorage.getItem("@token");
    
    const res = api.get('/genres',  {
       headers :{
          Authorization: `Bearer ${token}`
       }
    });
    
    return res;
 }


 export async function saveReview(review : Review) {
   const token = await AsyncStorage.getItem("@token");
   
   const res = api.post('/reviews', review, {
      headers :{
         Authorization: `Bearer ${token}`
      }
   });
   
   return res;
 }