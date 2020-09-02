import React, {useState} from 'react';
import style from "./contact.module.css";

export const Contact = () => {
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        alert([message, email]);

    }

    return (
        <div className={style.contact}>
            <h2 className={style.contactMe}>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className={style.formTitle}>I'm open to freelance opportunities!</div>
                <div className={style.formSubtitle}>If you need help with something or just wanna say hi,
                    feel free to message me:
                </div>
                <div className={style.formInput}>
                    <textarea className={style.message} name="message" rows="5" cols="50" value={message}
                              placeholder="Your Message here..."
                              onChange={e => setMessage(e.target.value)}
                    />
                    <input className={style.email} type="email" name="email" value={email}
                           placeholder="Your Email Address"
                           onChange={e => setEmail(e.target.value)}
                    />
                    <input className={style.submitBtn} type="submit" value="Submit" />
                </div>

            </form>

        </div>
    );
};
