import React from 'react';
import {HomePage} from './HomePage';
import {Project} from './Project';
import {Contact} from './Contact';
import {About} from './About';
import {Nav} from './Nav';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Footer} from "./Footer";
import withTracker from './withTracker';

export const App = () => (
    <Router>
        <Nav/>
        <div>
            <Switch>
                <Route path="/about" component={withTracker(About)} />
                <Route path="/contact" component={withTracker(Contact)} />
                <Route path="/projects" component={withTracker(Project)} />
                <Route path="/" component={withTracker(HomePage)} />
            </Switch>
        </div>
        <Footer/>
    </Router>

);

export default App;
