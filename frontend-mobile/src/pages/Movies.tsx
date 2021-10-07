import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Modal, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { MovieCard } from '../components';
import { colors, text, theme } from '../styles';
import { Movie } from '../@types/Movie';
import { Genre } from '../@types/Genre';
import { getGenres, getMovies } from '../services';
import arrow from '../assets/arrow.png';
import close from '../assets/close.png';

export default function Movies() {

    const [loadingMovies, setLoadingMovies] = useState(false);
    const [loadingGenres, setLoadingGenres] = useState(false);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [showGenres, setShowGenres] = useState(false);
    const [genre, setGenre] = useState<Genre>({ id: 0, name: "" });

    async function fillMovies() {
        setLoadingMovies(true);
        const res = await getMovies(genre.id);
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
    }, [genre])

    return (
        <View style={theme.container}>
            {
                loadingMovies || loadingGenres ? (<ActivityIndicator size="large" color={colors.light} />) :


                    <ScrollView>
                        <Modal visible={showGenres}
                            animationType="fade"
                            transparent={true}
                            presentationStyle="overFullScreen"
                        >
                            <View style={theme.modalContainer}>
                                <ScrollView contentContainerStyle={theme.modalContent}>
                                    {genres.map((genre) => (
                                        <TouchableOpacity
                                            style={theme.modalItem}
                                            key={genre.id}
                                            onPress={() => {
                                                setShowGenres(!showGenres);
                                                setGenre(genre);
                                            }}>
                                            <Text style={text.modalItem}>{genre.name}</Text>
                                        </TouchableOpacity>
                                    ))
                                    }
                                </ScrollView>
                            </View>
                        </Modal>

                        <View style={theme.genresCard}>
                            <TouchableOpacity onPress={() => setShowGenres(!showGenres)} style={theme.selectInput}>
                                <View style={theme.selectContainer}>
                                    <Text style={text.modalItem}>
                                        {genre.id === 0 ? "Escolha um gênero" : genre.name}
                                    </Text>
                                    <View style={theme.selectContainer}>
                                        {genre.id !== 0 &&
                                            <TouchableOpacity onPress={() => setGenre({ id: 0, name: "" })}>
                                                <Text style={text.modalClose}> x </Text>
                                            </TouchableOpacity>
                                        }
                                        <View style={theme.selectImageContainer}>
                                            <Image source={arrow} />
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        {movies.map((movie) => (
                            <MovieCard {...movie} key={movie.id} />
                        ))
                        }

                    </ScrollView>

            }
        </View>
    )
}

