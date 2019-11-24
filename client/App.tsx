import React from 'react';
import { BrowserRouter as Router, Route, Switch as RouteSwitch } from 'react-router-dom';

import './index.css';

import Home from './Home';
import DetailsLoader from './loaders/DetailsLoader';

const App = () => {
    return (
        <Router>
            <RouteSwitch>
                <Route exact={true} path='/'><Home /></Route>
                <Route exact={true} path='/badge'><DetailsLoader pattern="Badge" /></Route>
                <Route exact={true} path='/breadcrumb'><DetailsLoader pattern="Breadcrumb" /></Route>
                <Route exact={true} path='/button-with-icon'><DetailsLoader pattern="Button with icon" /></Route>
                <Route exact={true} path='/card'><DetailsLoader pattern="Card" /></Route>
                <Route exact={true} path='/centering'><DetailsLoader pattern="Centering" /></Route>
                <Route exact={true} path='/docked-at-corner'><DetailsLoader pattern="Docked at corner" /></Route>
                <Route exact={true} path='/dot-navigation'><DetailsLoader pattern="Dot navigation" /></Route>
                <Route exact={true} path='/feature-list'><DetailsLoader pattern="Feature list" /></Route>
                <Route exact={true} path='/fixed-at-corner'><DetailsLoader pattern="Fixed at corner" /></Route>
                <Route exact={true} path='/holy-grail'><DetailsLoader pattern="Holy grail" /></Route>
                <Route exact={true} path='/input-add-on'><DetailsLoader pattern="Input add-on" /></Route>
                <Route exact={true} path='/media-object'><DetailsLoader pattern="Media object" /></Route>
                <Route exact={true} path='/menu'><DetailsLoader pattern="Menu" /></Route>
                <Route exact={true} path='/modal'><DetailsLoader pattern="Modal" /></Route>
                <Route exact={true} path='/notification'><DetailsLoader pattern="Notification" /></Route>
                <Route exact={true} path='/pagination'><DetailsLoader pattern="Pagination" /></Route>
                <Route exact={true} path='/previous-next-buttons'>
                    <DetailsLoader pattern="Previous next buttons" />
                </Route>
                <Route exact={true} path='/pricing-table'><DetailsLoader pattern="Pricing table" /></Route>
                <Route exact={true} path='/progress-bar'><DetailsLoader pattern="Progress bar" /></Route>
                <Route exact={true} path='/questions-and-answers'>
                    <DetailsLoader pattern="Questions and answers" />
                </Route>
                <Route exact={true} path='/radio-switch'><DetailsLoader pattern="Radio switch" /></Route>
                <Route exact={true} path='/same-height-columns'><DetailsLoader pattern="Same height columns" /></Route>
                <Route exact={true} path='/search-box'><DetailsLoader pattern="Search box" /></Route>
                <Route exact={true} path='/separator'><DetailsLoader pattern="Separator" /></Route>
                <Route exact={true} path='/sidebar'><DetailsLoader pattern="Sidebar" /></Route>
                <Route exact={true} path='/simple-grid'><DetailsLoader pattern="Simple grid" /></Route>
                <Route exact={true} path='/slider'><DetailsLoader pattern="Slider" /></Route>
                <Route exact={true} path='/split-navigation'><DetailsLoader pattern="Split navigation" /></Route>
                <Route exact={true} path='/split-screen'><DetailsLoader pattern="Split screen" /></Route>
                <Route exact={true} path='/stepper-input'><DetailsLoader pattern="Stepper input" /></Route>
                <Route exact={true} path='/sticky-footer'><DetailsLoader pattern="Sticky footer" /></Route>
                <Route exact={true} path='/sticky-header'><DetailsLoader pattern="Sticky header" /></Route>
                <Route exact={true} path='/switch'><DetailsLoader pattern="Switch" /></Route>
                <Route exact={true} path='/tab'><DetailsLoader pattern="Tab" /></Route>
                <Route exact={true} path='/toggle-password-visibility'><DetailsLoader pattern="Toggle password visibility" /></Route>
                <Route exact={true} path='/wizard'><DetailsLoader pattern="Wizard" /></Route>
            </RouteSwitch>
        </Router>
    );
};

export default App;
