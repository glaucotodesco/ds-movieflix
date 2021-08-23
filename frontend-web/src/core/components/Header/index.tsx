import { getAccessTokenDecoded, logout } from 'core/utils/auth';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './styles.scss';

const Header = () => {

    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();

    useEffect(() => {
        const currentUserData = getAccessTokenDecoded();
        setCurrentUser(currentUserData.user_name);
    }, [location]);

    const handleLogout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }

    return (
        <div className="header-main">

            <div className="header-title">
                MovieFlix
            </div>

            {currentUser && (
                <button className="btn btn-secondary home-btn-sair" onClick={handleLogout} >
                    SAIR
                </button>
            )}
        </div>
    )
}

export default Header;