import { useEffect } from "react";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import Select from "react-select";

import { makePrivateRequest } from "core/utils/request";
import { Genre } from "core/types/Genre";
import './styles.scss';

type FormState = {
    genres: Genre,
};


const MovieFilter = () => {

    const [genres, setGenres] = useState<Genre[]>();
    const [genre, setGenre] = useState<Genre>();

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

    const onSubmit = (val: any) => {
        console.log(val);
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
                        onChange={(val) => onSubmit(val)}
                    />
                </form>
            </div>
        </div>
    )
}

export default MovieFilter;