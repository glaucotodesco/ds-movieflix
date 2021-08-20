import Select from "react-select";
import { Genre } from "core/types/Genre";
import './styles.scss';

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
                        isClearable
                    />
                </form>
            </div>
        </div>
    )
}

export default MovieFilter;