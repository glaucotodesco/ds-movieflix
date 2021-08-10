import { MoviesResponse } from 'core/types/MoviesReponse';
import { makePrivateRequest, makeRequest } from 'core/utils/request';
import Pagination from 'core/components/Pagination';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './styles.scss';
import { Link } from 'react-router-dom';

const Movie = () => {

    const [activePage, setActivePage] = useState(0);
    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const linesPerPage: number = 12;

    useEffect(() => {

        const params = {
            page: activePage,
            linesPerPage: linesPerPage
        };

        console.log(params);
        makePrivateRequest({ url: '/movies', params })
            .then(response => setMoviesResponse(response.data))
    }, [activePage]);

    return (
        <div className="movie-container">
            <h1>Movies</h1>
            <div className="movie-catalog">
                {moviesResponse?.content.map(movie => (

                    
                        <MovieCard movie={movie}  key={movie.id}/>
                    

                ))
                }
            </div>

            {
                moviesResponse &&
                <Pagination
                    totalPages={moviesResponse.totalPages}
                    activePage={activePage}
                    onChange={page => setActivePage(page)}

                />
            }
        </div>
    );
};

export default Movie;