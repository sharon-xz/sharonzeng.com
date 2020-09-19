import React from 'react';
import {
    Link
} from "react-router-dom";
import style from './nav.module.css';

export const Nav = () => {
    const [open, setOpen] = React.useState(false);
    const handleMenuOpen = () => setOpen(!open);

    return (
        <nav className={style.nav}>
            <Link to="/" className={style.logo} />
            <ul className={style.desktop}>
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

            <div className={style.mobile}>
                <span className={style.hamburger} onClick={handleMenuOpen}/>
                {open && <ul>
                    <li>
                        <Link to="/" onClick={handleMenuOpen}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={handleMenuOpen}>About</Link>
                    </li>
                    <li>
                        <Link to="/projects" onClick={handleMenuOpen}>Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={handleMenuOpen}>Contact</Link>
                    </li>
                </ul>}
            </div>
        </nav>

    );
};