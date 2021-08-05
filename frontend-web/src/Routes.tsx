import Header from 'core/components/Header';
import Home from 'pages/Home';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from './core/utils/history';

const Routes = () => (
    <Router history={history}>
        <Header/>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
        </Switch>
    </Router>
)

export default Routes;