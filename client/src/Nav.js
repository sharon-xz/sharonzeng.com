import React from 'react';
import {
    Link
} from "react-router-dom";
import style from './nav.module.css';

export const Nav = () => {

    return (<nav className={style.nav}>
            <div className={style.logo}></div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};