import React from 'react';
import {HomePage} from './HomePage';
import {Project} from './Project';
import {Contact} from './Contact';
import {About} from './About';
import {Nav} from './Nav';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import {Footer} from "./Footer";

export const App = () => (
    <Router>
        <Nav/>
        <div>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
        <Footer/>
    </Router>

);

export default App;
