import React from 'react';
import { BrowserRouter as Router, Route, Switch as RouteSwitch } from 'react-router-dom';

import './index.css';

import ExplorePage from './pages/ExplorePage';
import HomePage from './pages/HomePage';
import PatternPage from './pages/PatternPage';

const App = () => {
    return (
        <Router>
            <RouteSwitch>
                <Route exact={true} path='/'><HomePage /></Route>
                <Route exact={true} path='/patterns'><ExplorePage /></Route>
                <Route
                    path='/patterns/:pattern'
                    render={(props) => <PatternPage pattern={props.match.params.pattern as string} />} // tslint:disable-line
                />
            </RouteSwitch>
        </Router>
    );
};

export default App;
