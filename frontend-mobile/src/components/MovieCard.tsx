import React from "react";
import {Text, ImageSourcePropType, TouchableOpacity, Image, View } from "react-native";
import { Movie } from "../@types/Movie";
import { text, theme } from "../styles";

interface MovieProps extends Movie{
    imgUrl:ImageSourcePropType
}


const MovieCard = (movieProps:MovieProps) => {
    return (
      <View style={theme.movieCard}>
        <TouchableOpacity >
            <Text> {movieProps.title}</Text>
            <Image source={movieProps.imgUrl}  style={theme.movieImg}/>
        </TouchableOpacity>
     </View>  
    );
}
export default MovieCard;