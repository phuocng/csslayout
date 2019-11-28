import React from 'react';
import { BrowserRouter as Router, Route, Switch as RouteSwitch } from 'react-router-dom';

import './index.css';

import Explore from './Explore';
import Home from './Home';
import PatternPage from './PatternPage';

const App = () => {
    return (
        <Router>
            <RouteSwitch>
                <Route exact={true} path='/'><Home /></Route>
                <Route exact={true} path='/patterns'><Explore /></Route>

                <Route
                    path='/patterns/:pattern'
                    render={(props) => <PatternPage pattern={props.match.params.pattern as string} />} // tslint:disable-line
                />
            </RouteSwitch>
        </Router>
    );
};

export default App;
