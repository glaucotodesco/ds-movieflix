import { Link } from "react-router-dom";


const Logged = () => (
    <div className="card-base home-card card-base-center">
        <Link className="btn btn-primary button-base" to="/movies">Veja os nossos filmes!</Link>
    </div>
)

export default Logged;