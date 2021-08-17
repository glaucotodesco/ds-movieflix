import { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";
import { makePrivateRequest } from "core/utils/request";
import { Genre } from "core/types/Genre";
import './styles.scss';

type FormState = {
    genres: Genre,
};

type Props = {
    onChangeGenres: any;
    genres: Genre[];
}

const MovieFilter = ({ genres, onChangeGenres }: Props) => {

    const onChange = (val: any) => {
        onChangeGenres(val);
    }

    return (
        <div className="movie-filter card-base">
            <div className="select-item-size" >
                <form>
                    <Select
                        options={genres}
                        getOptionLabel={(option: Genre) => option.name}
                        getOptionValue={(option: Genre) => String(option.id)}
                        classNamePrefix="genre-select"
                        placeholder="Gêneros"
                        onChange={(val) => onChange(val)}
                    />
                </form>
            </div>
        </div>
    )
}

export default MovieFilter;