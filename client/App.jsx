import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Centering from './layouts/Centering';
import StickyFooter from './layouts/StickyFooter';
import StickyHeader from './layouts/StickyHeader';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact={true} path='/'><Home /></Route>
                <Route exact={true} path='/centering'><Centering /></Route>
                <Route exact={true} path='/sticky-footer'><StickyFooter /></Route>
                <Route exact={true} path='/sticky-header'><StickyHeader /></Route>
            </Switch>
        </Router>
    );
};

export default App;
