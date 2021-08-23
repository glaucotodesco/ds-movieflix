import './styles.scss';
import { ReactComponent as Banner } from 'core/assets/images/banner.svg';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAccessTokenDecoded } from 'core/utils/auth';
import Logged from './components/Logged';


const Home = () => {

    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();

    useEffect(() => {
        const currentUserData = getAccessTokenDecoded();
        setCurrentUser(currentUserData.user_name);
    }, [location]);

    return (
        <div className="home-container">
            
            <div className="home-logo">
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



            {!currentUser &&
                <div className="row">
                    <Login />
                </div>
            }

            {currentUser &&
                <div className="">
                    <Logged />
                </div>
            }

        </div>

    )
}

export default Home;