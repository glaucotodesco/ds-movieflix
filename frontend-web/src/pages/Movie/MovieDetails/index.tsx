import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss';


type ParamsType = {
    movieId: string;
}


const MovieDetails = () => {

    const { movieId } = useParams<ParamsType>();


    useEffect(() => {
        
        console.log(movieId);
        
    }, [movieId]);

    return (
        <div >
            Movie Details
        </div>
    )
}

export default MovieDetails;