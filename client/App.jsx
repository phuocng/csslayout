import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Centering from './layouts/Centering';
import StickyFooter from './layouts/StickyFooter';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact={true} path='/'><Home /></Route>
                <Route exact={true} path='/centering'><Centering /></Route>
                <Route exact={true} path='/sticky-footer'><StickyFooter /></Route>
            </Switch>
        </Router>
    );
};

export default App;
