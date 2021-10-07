import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { MovieCard } from '../components';
import { theme } from '../styles';
import { Movie } from '../@types/Movie';
import { getMovies } from '../services';

export default function Movies() {
    
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState<Movie[]>([]);

    async function fillMovies() {
        setLoading(false);
        const res = await getMovies();
        setLoading(true);
        setMovies(res.data.content);
    }

    useEffect(() => {
        fillMovies();
    },[])

    return (
        <ScrollView contentContainerStyle={theme.scrollContainer}>
                {movies.map((movie) => (
                    <MovieCard {...movie} key={movie.id}  />
                ))}
        </ScrollView>
    )
}

