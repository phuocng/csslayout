import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Badge from './layouts/Badge';
import Centering from './layouts/Centering';
import Sidebar from './layouts/Sidebar';
import StepperInput from './layouts/StepperInput';
import StickyFooter from './layouts/StickyFooter';
import StickyHeader from './layouts/StickyHeader';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact={true} path='/'><Home /></Route>
                <Route exact={true} path='/badge'><Badge /></Route>
                <Route exact={true} path='/centering'><Centering /></Route>
                <Route exact={true} path='/sidebar'><Sidebar /></Route>
                <Route exact={true} path='/stepper-input'><StepperInput /></Route>
                <Route exact={true} path='/sticky-footer'><StickyFooter /></Route>
                <Route exact={true} path='/sticky-header'><StickyHeader /></Route>
            </Switch>
        </Router>
    );
};

export default App;
