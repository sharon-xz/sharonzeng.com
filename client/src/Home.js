import React from 'react';
import style from './home.module.css';


export const Home = () => {

    return (<div className={style.home}>
            <h1>
                <span className={style.headingFirstName}>Sharon </span>
                <span className={style.headingLastName}>Zeng</span>
            </h1>
            <h2 className={style.headingDescription}>A Front-End Web Developer</h2>

            <div className={style.externalLinks}>
                <a href="https://www.linkedin.com/in/sharon-xz" target="_blank" rel="noopener noreferrer" className={style.linkedInBtn} aria-label="Sharon Zeng on LinkedIn" />
                <a href="https://github.com/sharon-xz" target="_blank" rel="noopener noreferrer" className={style.githubBtn} aria-label="Sharon Zeng on GitHub" />
                <span className={style.devtoBtn} aria-hidden="true" />
            </div>

            <div className={style.downArrow} />

        </div>
    );
};
