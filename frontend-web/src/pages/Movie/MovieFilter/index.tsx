import Select from "react-select";
import './styles.scss';


const options = [
        {value: 'Terror1', label:'Terror1' },
        {value: 'Terror2', label:'Terror2' },
        {value: 'Terror3', label:'Terror3' }
]



const MovieFilter = ( ) => (
    <div className="movie-filter card-base">
       <div className="select-item-size" >
            <Select options={options} classNamePrefix="movie-filter"/>
       </div>  
    </div>
)

export default MovieFilter;