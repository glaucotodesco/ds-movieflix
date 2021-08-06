import './styles.scss';
import { ReactComponent as Banner } from 'core/assets/images/banner.svg';
import Login from './components/Login';


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
            <Login />
        </div>
    </div>

)

export default Home;