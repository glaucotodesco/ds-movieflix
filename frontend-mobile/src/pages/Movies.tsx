import React from 'react';
import { ScrollView, View } from 'react-native';
import { MovieCard } from '../components';
import { theme } from '../styles';
import movieImg from "../assets/movie.png";
import { Movie } from '../@types/Movie';

const movies: Array<Movie> = [
    {
        id: 1,
        title: "Title 1",
        subTitle: "SubTitle  1",
        year: 2001,
        imgUrl: movieImg,
        synoposis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat itaque reprehenderit eveniet amet ullam neque, sint ab praesentium, similique ipsa magni maiores soluta, laudantium corporis maxime vel earum quisquam inventore",
        genreId: 1,
    },
    {
        id: 2,
        title: "Title 2",
        subTitle: "SubTitle  2",
        year: 2002,
        imgUrl: movieImg,
        synoposis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat itaque reprehenderit eveniet amet ullam neque, sint ab praesentium, similique ipsa magni maiores soluta, laudantium corporis maxime vel earum quisquam inventore",
        genreId: 2,
    },
    {
        id: 3,
        title: "Title 3",
        subTitle: "SubTitle  3",
        year: 2003,
        imgUrl: movieImg,
        synoposis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat itaque reprehenderit eveniet amet ullam neque, sint ab praesentium, similique ipsa magni maiores soluta, laudantium corporis maxime vel earum quisquam inventore",
        genreId: 3,
    },
    {
        id: 4,
        title: "Title 4",
        subTitle: "SubTitle  4",
        year: 2004,
        imgUrl: movieImg,
        synoposis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat itaque reprehenderit eveniet amet ullam neque, sint ab praesentium, similique ipsa magni maiores soluta, laudantium corporis maxime vel earum quisquam inventore",
        genreId: 4,
    },
    {
        id: 5,
        title: "Title 5",
        subTitle: "SubTitle  5",
        year: 2005,
        imgUrl: movieImg,
        synoposis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat itaque reprehenderit eveniet amet ullam neque, sint ab praesentium, similique ipsa magni maiores soluta, laudantium corporis maxime vel earum quisquam inventore",
        genreId: 5,
    }

]


export default function Movies() {
    return (
        <ScrollView contentContainerStyle={theme.scrollContainer}>
                {movies.map((movie) => (
                    <MovieCard {...movie} key={movie.id}  />
                ))}
        </ScrollView>
    )
}

