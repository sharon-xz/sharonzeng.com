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
                <a href="https://www.linkedin.com/in/sharon-xz" target="_blank" rel="noopener noreferrer" className={style.linkedInBtn} />
                <a href="https://github.com/sharon-xz" target="_blank" rel="noopener noreferrer" className={style.githubBtn} />
                <a href={null} className={style.devtoBtn} />
            </div>

            <div className={style.downArrow} />

        </div>
    );
};
