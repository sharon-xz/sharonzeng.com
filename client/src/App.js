import React from 'react';
import {Home} from './Home';
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

export const App = () => (
    <Router>
        <Nav/>
        <div>
            <Switch>
                <Route path="/about">
                    <About/>
                    <Footer/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                    <Footer/>
                </Route>
                <Route path="/projects">
                    <Project/>
                    <Footer/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                    <Footer/>
                </Route>
                <Route path="/">
                    <Home/>
                    <About/>
                    <Project/>
                    <Contact/>
                    <Footer/>
                </Route>
            </Switch>
        </div>
    </Router>

);

export default App;
