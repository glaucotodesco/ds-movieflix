import { Movie } from 'core/types/Movie';
import './styles.scss';

type Props = {
    movie: Movie;
}

const MovieCard = ( {movie}: Props) => (
    <div className="card-base movie-card">
        <img src={movie.imgUrl} alt={movie.title} className="movie-card-img"/>
        <div className="movie-card-data">
            <div className="movie-card-title">
                {movie.title}
            </div>
            <div className="movie-card-year">
                {movie.year}
            </div>
            <div className="movie-card-description">
                {movie.subTitle}
            </div>
        </div>
    </div>
)

export default MovieCard;