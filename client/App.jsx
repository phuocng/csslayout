import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Badge from './layouts/badge/Details';
import ButtonWithIcon from './layouts/button-with-icon/Details';
import Centering from './layouts/centering/Details';
import HolyGrail from './layouts/holy-grail/Details';
import InputAddon from './layouts/input-add-on/Details';
import MediaObject from './layouts/media-object/Details';
import Sidebar from './layouts/sidebar/Details';
import StepperInput from './layouts/stepper-input/Details';
import StickyFooter from './layouts/sticky-footer/Details';
import StickyHeader from './layouts/sticky-header/Details';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact={true} path='/'><Home /></Route>
                <Route exact={true} path='/badge'><Badge /></Route>
                <Route exact={true} path='/button-with-icon'><ButtonWithIcon /></Route>
                <Route exact={true} path='/centering'><Centering /></Route>
                <Route exact={true} path='/holy-grail'><HolyGrail /></Route>
                <Route exact={true} path='/input-add-on'><InputAddon /></Route>
                <Route exact={true} path='/media-object'><MediaObject /></Route>
                <Route exact={true} path='/sidebar'><Sidebar /></Route>
                <Route exact={true} path='/stepper-input'><StepperInput /></Route>
                <Route exact={true} path='/sticky-footer'><StickyFooter /></Route>
                <Route exact={true} path='/sticky-header'><StickyHeader /></Route>
            </Switch>
        </Router>
    );
};

export default App;
