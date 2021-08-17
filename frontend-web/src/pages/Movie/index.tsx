import { MoviesResponse } from 'core/types/MoviesReponse';
import { makePrivateRequest } from 'core/utils/request';
import Pagination from 'core/components/Pagination';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './styles.scss';
import { Link, useParams } from 'react-router-dom';
import MovieFilter from './MovieFilter';
import { Genre } from 'core/types/Genre';

const Movie = () => {

    const [activePage, setActivePage] = useState(0);
    const [genreId, setGenreId] = useState(0);
    const [genres, setGenres] = useState<Genre []>([]);
    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [numberOfElements, setNumberOfElements] = useState<number>();
    const linesPerPage: number = 4;

    useEffect(() => {
        const params = {
            page: activePage,
            linesPerPage: linesPerPage,
            genreId : genreId
        };

        makePrivateRequest({ url: '/movies', params })
            .then(response => {
                setMoviesResponse(response.data)
                setNumberOfElements(response.data.numberOfElements);
                }
            )
    }, [activePage,genreId]);

    useEffect(() => {
        makePrivateRequest({ url: '/genres' })
            .then(
                response => {
                    const merged = [
                        ...[{"id": 0, "name": "TODOS"}],
                        ...response.data
                    ]
                    setGenres(merged);
                }
            )
    }, []);


    const onChangeGenre = (genre: Genre) => {
        setGenreId(genre.id);
    }

    return (
        <>
            <div className="movie-filter-container">
                <MovieFilter onChangeGenres={onChangeGenre} genres={genres} />
            </div>

            <div className="movie-container">
                <div className= { numberOfElements === 4 ? "movie-catalog-between": "movie-catalog-evenly"} >
                    {moviesResponse?.content.map(movie => (
                        <Link to={`/movies/${movie.id}`} key={movie.id}>
                            <MovieCard movie={movie} key={movie.id} />
                        </Link>
                    ))
                    }
                </div>
            </div>
            <div className="movie-container">
                {
                    moviesResponse &&
                    <Pagination
                        totalPages={moviesResponse.totalPages}
                        activePage={activePage}
                        onChange={page => setActivePage(page)}
                   />
                }
            </div>
        </>
    );
};

export default Movie;