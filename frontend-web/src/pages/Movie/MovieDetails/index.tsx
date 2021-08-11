import { Movie } from 'core/types/Movie';
import { makePrivateRequest, makeRequest } from 'core/utils/request';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReactComponent as Star } from 'core/assets/images/star.svg';
import './styles.scss';


type ParamsType = {
    movieId: string;
}


const MovieDetails = () => {

    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        makePrivateRequest({ url: `/movies/${movieId}` })
            .then(response => setMovie(response.data))
    }, [movieId]);

    return (
        <>
            <div className="movie-details-card">
                <div className="movie-details card-base d-flex" >
                    <div className="col-6">
                        <img src={movie?.imgUrl} alt={movie?.title} className="movie-details-img" />
                    </div>
                    <div className="movie-details-info col-6">
                        <div className="movie-details-title">
                            {movie?.title}
                        </div>
                        <div className="movie-details-year">
                            {movie?.year}
                        </div>
                        <div className="movie-details-subtitle">
                            {movie?.subTitle}
                        </div>
                        <div className="movie-details-text">
                            {movie?.synoposis}
                        </div>
                    </div>

                </div>
            </div>

            <div className="movie-details-card">
                <div className="movie-avaliation">
                    <input className="form-control input-avaliation input-base"></input>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary button-base btn-salvar-avaliation">
                            SALVAR AVALIAÇÃO
                        </button>
                    </div>
                </div>
            </div>

            <div className="movie-details-card">
                <div className="movie-reviews">

                    {movie?.reviews.map(review => (
                        <div className="movie-review-card">
                            <div className="movie-review-user d-flex align-items-center"> <Star className="me-2" /> {review.user.name}</div>
                            <div className="movie-details-text" key={review.id}> {review.text} </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="movie-details-card">
                
            </div>
        </>
    )
}

export default MovieDetails;