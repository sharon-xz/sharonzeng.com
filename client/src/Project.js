import React  from 'react';
import style from './project.module.css';
import profileProjectImage from "./assets/_images/sharonzeng_profile.png";

export const Project = () => {

    return (
        <div className={style.project}>
            <h2 className={style.myProject}>My Projects</h2>
            <div className={style.projectItem}>
                <div className={style.projectImg}>
                    <img src={profileProjectImage} alt="Project"/>
                </div>
                <div className={style.projectDescription}>
                    <div className={style.projectTitle}>
                        www.sharonzeng.com
                    </div>
                    <div className={style.projectTechStack}>
                        Tech Stack:
                        <div className={style.projectTech}>
                            Front-End: React.js, react-router

                        </div>
                        <div className={style.projectTech}>
                            Back-End: Node.js
                        </div>
                    </div>
                    <div className={style.projectLink}>
                        <a href="https://www.sharonzeng.com" target="_blank" rel="noopener noreferrer">Visit Site</a>
                        <a href={null} target="_blank" rel="noopener noreferrer">View Source Code</a>
                    </div>

                </div>
            </div>

            <div className={style.downArrow} />
        </div>
    );
};