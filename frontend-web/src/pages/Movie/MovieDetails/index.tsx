import { Movie } from 'core/types/Movie';
import { makePrivateRequest} from 'core/utils/request';
import { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReactComponent as Star } from 'core/assets/images/star.svg';
import './styles.scss';
import ReviewForm from './ReviewForm';


type ParamsType = {
    movieId: string;
}


const MovieDetails = () => {

    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();
    
    const fetchReviews = useCallback(() => {
    
        makePrivateRequest({ url: `/movies/${movieId}` })
            .then(
                response => {
                    setMovie(response.data);
                }
            )
    },[movieId]);
   
    useEffect(() => {
        fetchReviews();        
    }, [movieId, fetchReviews]);

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
                <ReviewForm movieId={movieId} parentCallBack={fetchReviews} />
            </div>

            {
                movie?.reviews?.length &&
                <div className="movie-details-card">
                    <div className="movie-reviews">

                        {movie?.reviews.map(review => (
                            <div className="movie-review-card" key={review.id}>
                                <div className="movie-review-user d-flex align-items-center"> <Star className="me-2" /> {review.user.name}</div>
                                <div className="movie-details-text" key={review.id}> {review.text} </div>
                            </div>
                        ))}
                    </div>
                </div>
            }

            <div className="movie-details-card">
            </div>

        </>
    )
}

export default MovieDetails;


