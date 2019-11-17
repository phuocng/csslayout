import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Badge from './layouts/badge/Details';
import ButtonWithIcon from './layouts/button-with-icon/Details';
import Card from './layouts/card/Details';
import Centering from './layouts/centering/Details';
import FixedAtCorner from './layouts/fixed-at-corner/Details';
import HolyGrail from './layouts/holy-grail/Details';
import InputAddon from './layouts/input-add-on/Details';
import MediaObject from './layouts/media-object/Details';
import Menu from './layouts/menu/Details';
import Notification from './layouts/notification/Details';
import Pagination from './layouts/pagination/Details';
import PreviousNextButtons from './layouts/previous-next-buttons/Details';
import ProgressBar from './layouts/progress-bar/Details';
import SameHeightColumns from './layouts/same-height-columns/Details';
import Sidebar from './layouts/sidebar/Details';
import SplitScreen from './layouts/split-screen/Details';
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
                <Route exact={true} path='/card'><Card /></Route>
                <Route exact={true} path='/centering'><Centering /></Route>
                <Route exact={true} path='/fixed-at-corner'><FixedAtCorner /></Route>
                <Route exact={true} path='/holy-grail'><HolyGrail /></Route>
                <Route exact={true} path='/input-add-on'><InputAddon /></Route>
                <Route exact={true} path='/media-object'><MediaObject /></Route>
                <Route exact={true} path='/menu'><Menu /></Route>
                <Route exact={true} path='/notification'><Notification /></Route>
                <Route exact={true} path='/pagination'><Pagination /></Route>
                <Route exact={true} path='/previous-next-buttons'><PreviousNextButtons /></Route>
                <Route exact={true} path='/progress-bar'><ProgressBar /></Route>
                <Route exact={true} path='/same-height-columns'><SameHeightColumns /></Route>
                <Route exact={true} path='/sidebar'><Sidebar /></Route>
                <Route exact={true} path='/split-screen'><SplitScreen /></Route>
                <Route exact={true} path='/stepper-input'><StepperInput /></Route>
                <Route exact={true} path='/sticky-footer'><StickyFooter /></Route>
                <Route exact={true} path='/sticky-header'><StickyHeader /></Route>
            </Switch>
        </Router>
    );
};

export default App;
