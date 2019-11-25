import React from 'react';
import { BrowserRouter as Router, Route, Switch as RouteSwitch } from 'react-router-dom';

import './index.css';

import Pattern from './constants/Pattern';
import Home from './Home';
import DetailsLoader from './loaders/DetailsLoader';

const App = () => {
    return (
        <Router>
            <RouteSwitch>
                <Route exact={true} path='/'><Home /></Route>
                <Route exact={true} path='/badge'><DetailsLoader pattern={Pattern.Badge} /></Route>
                <Route exact={true} path='/breadcrumb'><DetailsLoader pattern={Pattern.Breadcrumb} /></Route>
                <Route exact={true} path='/button-with-icon'><DetailsLoader pattern={Pattern.ButtonWithIcon} /></Route>
                <Route exact={true} path='/card'><DetailsLoader pattern={Pattern.Card} /></Route>
                <Route exact={true} path='/centering'><DetailsLoader pattern={Pattern.Centering} /></Route>
                <Route exact={true} path='/docked-at-corner'><DetailsLoader pattern={Pattern.DockedAtCorner} /></Route>
                <Route exact={true} path='/dot-navigation'><DetailsLoader pattern={Pattern.DotNavigation} /></Route>
                <Route exact={true} path='/feature-list'><DetailsLoader pattern={Pattern.FeatureList} /></Route>
                <Route exact={true} path='/fixed-at-corner'><DetailsLoader pattern={Pattern.FixedAtCorner} /></Route>
                <Route exact={true} path='/holy-grail'><DetailsLoader pattern={Pattern.HolyGrail} /></Route>
                <Route exact={true} path='/input-add-on'><DetailsLoader pattern={Pattern.InputAddOn} /></Route>
                <Route exact={true} path='/media-object'><DetailsLoader pattern={Pattern.MediaObject} /></Route>
                <Route exact={true} path='/menu'><DetailsLoader pattern={Pattern.Menu} /></Route>
                <Route exact={true} path='/modal'><DetailsLoader pattern={Pattern.Modal} /></Route>
                <Route exact={true} path='/notification'><DetailsLoader pattern={Pattern.Notification} /></Route>
                <Route exact={true} path='/pagination'><DetailsLoader pattern={Pattern.Pagination} /></Route>
                <Route exact={true} path='/previous-next-buttons'>
                    <DetailsLoader pattern={Pattern.PreviousNextButtons} />
                </Route>
                <Route exact={true} path='/pricing-table'><DetailsLoader pattern={Pattern.PricingTable} /></Route>
                <Route exact={true} path='/property-list'><DetailsLoader pattern={Pattern.PropertyList} /></Route>
                <Route exact={true} path='/progress-bar'><DetailsLoader pattern={Pattern.PropertyList} /></Route>
                <Route exact={true} path='/questions-and-answers'>
                    <DetailsLoader pattern={Pattern.QuestionsAndAnswers} />
                </Route>
                <Route exact={true} path='/radio-switch'>
                    <DetailsLoader pattern={Pattern.RadioSwitch} />
                </Route>
                <Route exact={true} path='/same-height-columns'>
                    <DetailsLoader pattern={Pattern.SameHeightColumns} />
                </Route>
                <Route exact={true} path='/search-box'><DetailsLoader pattern={Pattern.SearchBox} /></Route>
                <Route exact={true} path='/separator'><DetailsLoader pattern={Pattern.Separator} /></Route>
                <Route exact={true} path='/sidebar'><DetailsLoader pattern={Pattern.Sidebar} /></Route>
                <Route exact={true} path='/simple-grid'><DetailsLoader pattern={Pattern.SimpleGrid} /></Route>
                <Route exact={true} path='/slider'><DetailsLoader pattern={Pattern.Slider} /></Route>
                <Route exact={true} path='/split-navigation'><DetailsLoader pattern={Pattern.SplitNavigation} /></Route>
                <Route exact={true} path='/split-screen'><DetailsLoader pattern={Pattern.SplitScreen} /></Route>
                <Route exact={true} path='/stepper-input'><DetailsLoader pattern={Pattern.StepperInput} /></Route>
                <Route exact={true} path='/sticky-footer'><DetailsLoader pattern={Pattern.StickyFooter} /></Route>
                <Route exact={true} path='/sticky-header'><DetailsLoader pattern={Pattern.StickyHeader} /></Route>
                <Route exact={true} path='/switch'><DetailsLoader pattern={Pattern.Switch} /></Route>
                <Route exact={true} path='/tab'><DetailsLoader pattern={Pattern.Tab} /></Route>
                <Route exact={true} path='/toggle-password-visibility'>
                    <DetailsLoader pattern={Pattern.TogglePasswordVisibility} />
                </Route>
                <Route exact={true} path='/wizard'><DetailsLoader pattern={Pattern.Wizard} /></Route>
            </RouteSwitch>
        </Router>
    );
};

export default App;
