import React from 'react';
import style from "./contact.module.css";

const EMAIL = "contact@sharonzeng.com";

export const Contact = () => {
    return (
        <div className={style.contact}>
            <h2 className={style.contactMe}>Contact Me</h2>
            <p className={style.subtitle}>
                If you need help with something or just wanna say hi, feel free to message me:
            </p>
            <a className={style.email} href={`mailto:${EMAIL}`}>
                {EMAIL}
            </a>
        </div>
    );
};
