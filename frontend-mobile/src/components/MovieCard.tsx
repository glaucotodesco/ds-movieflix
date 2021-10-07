import React from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import { Movie } from "../@types/Movie";
import { text, theme } from "../styles";

const MovieCard = (movieProps: Movie) => {
    return (
        <View style={theme.movieCard}>
            <TouchableOpacity >
                <Image source={{uri: movieProps.imgUrl}} style={theme.movieImg} />    
                <View style={theme.movieTextContainer}>
                    <Text style={text.movieTitle}> {movieProps.title}</Text>
                    <Text style={text.movieYear}> {movieProps.year}</Text>
                    <Text style={text.movieSubTitle}> {movieProps.subTitle}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
export default MovieCard;