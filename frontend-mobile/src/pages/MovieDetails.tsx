import React, {useState, useEffect} from 'react';
import {Image, View, Text, ActivityIndicator } from 'react-native';
import { Movie } from '../@types/Movie';
import { api, getMovieById } from '../services';
import { colors, text, theme } from '../styles';


interface MovieDetailsProps {
    route: any;
}

export default function MovieDetailts( { route : { params : {id}}} : MovieDetailsProps)
{

    const [movie, setMovie] = useState<Movie>();
    const [loading, setLoading] = useState(false);

    async function loadMovieData() {
      setLoading(true);
      const res = await getMovieById(id);
      setMovie(res.data);
      setLoading(false);
    }
  
    useEffect(() => {
      loadMovieData();
    }, []);

    return (
        <View>
              {loading ? 
              ( <ActivityIndicator size="large" color={colors.light}/>) : 
              (
                <View style={theme.movieDetails}>
                    <Image source={{uri: movie?.imgUrl}} style={theme.movieImg} />    
                    <View style={theme.movieTextContainer}>
                        <Text style={text.movieTitle}> {movie?.title}</Text>
                        <Text style={text.movieYear}> {movie?.year}</Text>
                        <Text style={text.movieSubTitle}> {movie?.subTitle}</Text>
                        <View style={theme.synoposisCard}>
                            <Text style={text.movieSynoposis}> {movie?.synoposis}</Text>
                        </View>
                    </View>
                
            </View>
              )}
        </View>
    )
}

