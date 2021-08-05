import './styles.scss';
import { ReactComponent as Banner } from 'core/assets/images/banner.svg';


const Home = () => (
    <div className="home-container">
        <div className="row col-3">
            <div className="home-title">
                Avalie Filmes
            </div>
            <div className="home-text">
                Diga o que você achou do seu <br />
                filme favorito
            </div>
            <div>
                <Banner className="home-banner" />
            </div>
        </div>
        <div className="row">
            <div className="card-base home-login">
                <div className="home-login-text">
                    LOGIN
                </div>
                <input className="form-control input-base" placeholder="Email" />
                <input className="form-control input-base" placeholder="Senha" />
                <button className="btn btn-primary button-base btn-login">
                    FAZER LOGIN
                </button>
            </div>

        </div>
    </div>

)

export default Home;