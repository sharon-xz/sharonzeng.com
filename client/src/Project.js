import React  from 'react';
import style from './project.module.css';
import profileProjectImage from "./assets/_images/sharonzeng_profile.png";
import adminProjectImage from "./assets/_images/adminProjectImage.png";

const parse = require('html-react-parser');

export const Project = () => {
    const projects = [
        {
            title: "www.sharonzeng.com",
            description: `Professional profile for Sharon Zeng.
                        <ul>
                            <li>Web design and coding all by Sharon Zeng.</li>
                            <li>Contains a form which uses the AWS Simple Email Service to send an email to Sharon after form submission.</li>
                        </ul>`,
            image: profileProjectImage,
            frontEnd: "React.js, react-router",
            backEnd: "node.js, express.js, AWS SES",
            hosting: "AWS Beanstalk",
            siteLink: "https://www.sharonzeng.com",
            sourceCode: "https://github.com/sharon-xz/sharonzeng.com"
        },
        {
            title: "Admin Dashboard",
            description: `An admin dashboard for admin users to configure settings, manage users and view statistics.
                        <ul>
                            <li>Constructed an admin panel using React from early stage to stable production.</li>
                            <li>Featured Components such as Lists, Tables, Forms, Code Editor/Diff, Graphs.</li>
                            <li>Heavily used redux, react-router, react-final-form</li>
                        </ul>`,
            image: adminProjectImage,
            frontEnd: "React.js, react-router, redux, react-admin, Material-UI",
            backEnd: "",
            hosting: "",
            siteLink: "",
            sourceCode: ""
        }
    ];

    return (
        <div className={style.project}>
            <h2 className={style.myProject}>My Projects</h2>
            {projects.map((project, index) => <div className={style.projectItem} key={index}>
                    <div className={style.projectItemLeft}>
                        <div className={style.projectTitle}>
                            {project.title}
                        </div>
                        <div className={style.projectDescription}>
                            {parse(project.description)}

                        </div>
                        <div className={style.projectTechStack}>
                            <div className={style.projectTechStackTitle}>Tech Stack:</div>
                            <div>Front-End:
                                <span className={style.projectTech}> {project.frontEnd}</span>
                            </div>
                            {project.backEnd && <div>Back-End:
                                <span className={style.projectTech}> {project.backEnd}</span>
                            </div>
                            }

                            {project.hosting && <div>Hosting:
                                <span className={style.projectTech}> {project.hosting}</span>
                            </div>
                            }

                        </div>

                    </div>

                    <div className={style.projectItemRight}>
                        <div className={style.projectImg}>
                            <img src={project.image} alt={project.title}/>
                        </div>
                        {project.siteLink &&
                        <div className={style.projectLink}>
                            <span className={style.projectLinkIcon}/>
                            <a href={project.siteLink} target="_blank" rel="noopener noreferrer">Visit Site</a>
                        </div>}

                        {project.sourceCode &&
                        <div className={style.projectLink}>
                            <span className={style.projectCodeIcon}/>
                            <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">View
                                Source Code</a>
                        </div>}
                    </div>
                </div>
            )
            }

            <div className={style.downArrow}/>
        </div>
    );
};