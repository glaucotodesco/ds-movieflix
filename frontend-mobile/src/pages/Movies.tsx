import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Modal, ScrollView, View, Text } from 'react-native';
import { MovieCard } from '../components';
import { colors, theme } from '../styles';
import { Movie } from '../@types/Movie';
import { Genre } from '../@types/Genre';
import { getGenres, getMovies } from '../services';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function Movies() {

    const [loadingMovies, setLoadingMovies] = useState(false);
    const [loadingGenres, setLoadingGenres] = useState(false);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);

    async function fillMovies() {
        setLoadingMovies(true);
        const res = await getMovies();
        setLoadingMovies(false);
        setMovies(res.data.content);
    }

    async function fillGenres() {
        setLoadingGenres(true);
        const res = await getGenres();
        setLoadingGenres(false);
        setGenres(res.data);
        
    }
    useEffect(() => {
        fillGenres();
    }, [])
    useEffect(() => {
        fillMovies();
    }, [])

  


    return (
        <>
            {loadingGenres || loadingMovies ?
                <View style={theme.container}>
                    <ActivityIndicator size="large" color={colors.light} />
                </View>
                :
                <ScrollView contentContainerStyle={theme.scrollContainer}>
                    
                    {genres.map((g) => (
                        <Text>{g.name}</Text>
                    ))
                    }

                    {movies.map((movie) => (
                        <MovieCard {...movie} key={movie.id} />
                    ))
                    }
                </ScrollView>
            }
        </>
    )
}

