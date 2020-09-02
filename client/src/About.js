import React from 'react';
import style from './about.module.css';

export const About = () => {
    return (
        <div className={style.about}>
            <h2 className={style.aboutMe}>About Me</h2>
            <div className={style.intro}>My name is Sharon Zeng.</div>
            <div className={style.introItem}>
                <div className={style.introTitle}>
                    I'm a front-end web developer,
                </div>
                <div className={style.introDescription}>
                    Specializing in React, vanilla JavaScript and jQuery. Also had experience with NodeJs, PHP and Python.
                </div>
            </div>

            <div className={style.introItem}>
                <div className={style.introTitle}>
                    and a digital ad tech,
                </div>
                <div className={style.introDescription}>
                    Experience in programmatic advertising implementation and creating ad creative in various formats.
                    Familiar with GAM, Google Ads, Header Biddding and various tracking tools.
                </div>
            </div>

            <div className={style.introItem}>
                <div className={style.introTitle}>
                    as well as a graphic designer.
                </div>
                <div className={style.introDescription}>
                    Hiring a graphic designer for my projects was too expensive, so I became one myself.
                </div>
            </div>

            <div className={style.downArrow}></div>

        </div>
    );
};
