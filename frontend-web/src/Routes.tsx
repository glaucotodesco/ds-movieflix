import Header from 'core/components/Header';
import Home from 'pages/Home';
import Movie from 'pages/Movie';
import MovieDetails from 'pages/Movie/MovieDetails';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from './core/utils/history';

const Routes = () => (
    <Router history={history}>
        <Header />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/movies" exact>
                <Movie />
            </Route>
            <Route path="/movies/:movieId">
                <MovieDetails />
            </Route>
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
)

export default Routes;