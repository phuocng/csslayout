import React from 'react';
import { BrowserRouter as Router, Route, Switch as RouteSwitch } from 'react-router-dom';

import './index.css';

import Pattern from './constants/Pattern';
import Explore from './Explore';
import Home from './Home';
import DetailsLoader from './loaders/DetailsLoader';

const App = () => {
    return (
        <Router>
            <RouteSwitch>
                <Route exact={true} path='/'><Home /></Route>
                <Route exact={true} path='/patterns'><Explore /></Route>

                <Route exact={true} path='/patterns/badge'><DetailsLoader pattern={Pattern.Badge} /></Route>
                <Route exact={true} path='/patterns/breadcrumb'><DetailsLoader pattern={Pattern.Breadcrumb} /></Route>
                <Route exact={true} path='/patterns/button-with-icon'><DetailsLoader pattern={Pattern.ButtonWithIcon} /></Route>
                <Route exact={true} path='/patterns/card'><DetailsLoader pattern={Pattern.Card} /></Route>
                <Route exact={true} path='/patterns/centering'><DetailsLoader pattern={Pattern.Centering} /></Route>
                <Route exact={true} path='/patterns/docked-at-corner'><DetailsLoader pattern={Pattern.DockedAtCorner} /></Route>
                <Route exact={true} path='/patterns/dot-leader'><DetailsLoader pattern={Pattern.DotLeader} /></Route>
                <Route exact={true} path='/patterns/dot-navigation'><DetailsLoader pattern={Pattern.DotNavigation} /></Route>
                <Route exact={true} path='/patterns/drop-area'><DetailsLoader pattern={Pattern.DropArea} /></Route>
                <Route exact={true} path='/patterns/feature-list'><DetailsLoader pattern={Pattern.FeatureList} /></Route>
                <Route exact={true} path='/patterns/fixed-at-corner'><DetailsLoader pattern={Pattern.FixedAtCorner} /></Route>
                <Route exact={true} path='/patterns/floating-label'><DetailsLoader pattern={Pattern.FloatingLabel} /></Route>
                <Route exact={true} path='/patterns/holy-grail'><DetailsLoader pattern={Pattern.HolyGrail} /></Route>
                <Route exact={true} path='/patterns/input-add-on'><DetailsLoader pattern={Pattern.InputAddOn} /></Route>
                <Route exact={true} path='/patterns/media-object'><DetailsLoader pattern={Pattern.MediaObject} /></Route>
                <Route exact={true} path='/patterns/menu'><DetailsLoader pattern={Pattern.Menu} /></Route>
                <Route exact={true} path='/patterns/modal'><DetailsLoader pattern={Pattern.Modal} /></Route>
                <Route exact={true} path='/patterns/notification'><DetailsLoader pattern={Pattern.Notification} /></Route>
                <Route exact={true} path='/patterns/pagination'><DetailsLoader pattern={Pattern.Pagination} /></Route>
                <Route exact={true} path='/patterns/previous-next-buttons'>
                    <DetailsLoader pattern={Pattern.PreviousNextButtons} />
                </Route>
                <Route exact={true} path='/patterns/pricing-table'><DetailsLoader pattern={Pattern.PricingTable} /></Route>
                <Route exact={true} path='/patterns/property-list'><DetailsLoader pattern={Pattern.PropertyList} /></Route>
                <Route exact={true} path='/patterns/progress-bar'><DetailsLoader pattern={Pattern.ProgressBar} /></Route>
                <Route exact={true} path='/patterns/questions-and-answers'>
                    <DetailsLoader pattern={Pattern.QuestionsAndAnswers} />
                </Route>
                <Route exact={true} path='/patterns/radio-switch'><DetailsLoader pattern={Pattern.RadioSwitch} /></Route>
                <Route exact={true} path='/patterns/rating'><DetailsLoader pattern={Pattern.Rating} /></Route>
                <Route exact={true} path='/patterns/same-height-columns'>
                    <DetailsLoader pattern={Pattern.SameHeightColumns} />
                </Route>
                <Route exact={true} path='/patterns/search-box'><DetailsLoader pattern={Pattern.SearchBox} /></Route>
                <Route exact={true} path='/patterns/separator'><DetailsLoader pattern={Pattern.Separator} /></Route>
                <Route exact={true} path='/patterns/sidebar'><DetailsLoader pattern={Pattern.Sidebar} /></Route>
                <Route exact={true} path='/patterns/simple-grid'><DetailsLoader pattern={Pattern.SimpleGrid} /></Route>
                <Route exact={true} path='/patterns/slider'><DetailsLoader pattern={Pattern.Slider} /></Route>
                <Route exact={true} path='/patterns/spin-button'><DetailsLoader pattern={Pattern.SpinButton} /></Route>
                <Route exact={true} path='/patterns/split-navigation'><DetailsLoader pattern={Pattern.SplitNavigation} /></Route>
                <Route exact={true} path='/patterns/split-screen'><DetailsLoader pattern={Pattern.SplitScreen} /></Route>
                <Route exact={true} path='/patterns/stepper-input'><DetailsLoader pattern={Pattern.StepperInput} /></Route>
                <Route exact={true} path='/patterns/sticky-footer'><DetailsLoader pattern={Pattern.StickyFooter} /></Route>
                <Route exact={true} path='/patterns/sticky-header'><DetailsLoader pattern={Pattern.StickyHeader} /></Route>
                <Route exact={true} path='/patterns/switch'><DetailsLoader pattern={Pattern.Switch} /></Route>
                <Route exact={true} path='/patterns/tab'><DetailsLoader pattern={Pattern.Tab} /></Route>
                <Route exact={true} path='/patterns/toggle-password-visibility'>
                    <DetailsLoader pattern={Pattern.TogglePasswordVisibility} />
                </Route>
                <Route exact={true} path='/patterns/wizard'><DetailsLoader pattern={Pattern.Wizard} /></Route>
            </RouteSwitch>
        </Router>
    );
};

export default App;
