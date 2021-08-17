import { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";

import { makePrivateRequest } from "core/utils/request";
import { Genre } from "core/types/Genre";
import './styles.scss';



const MovieFilter = () => {

    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
        makePrivateRequest({ url: '/genres' })
            .then(
                response => {
                    setGenres(response.data);
                }
            )
    }, []);

    return (
        <div className="movie-filter card-base">
            <div className="select-item-size" >
                <Select options={genres} 
                        getOptionLabel={ (option: Genre) => option.name}
                        getOptionValue={ (option: Genre) => String(option.id)}
                        classNamePrefix="category-select" />
            </div>
        </div>
    )
}

export default MovieFilter;