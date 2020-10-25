import React, {useState} from 'react';
import style from "./contact.module.css";
import ReactGA from 'react-ga';

export const Contact = () => {
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState(null);


    const handleSubmit = e => {
        e.preventDefault();

        if (!message || !email) {
            setFeedback("Please enter both your message and your email");
            return
        }

        fetch('/api/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({message, email}),
        })
            .then(response => response.json())
            .then(resp => {
                if (resp.status && resp.status === "ok") {
                    setFeedback("Thank you for your message! I'll reach out to you shortly.");

                    ReactGA.event({
                        category: 'Contact',
                        action: 'submit_email_form',
                        label: 'Submit Email Form',
                        value: 1
                    });

                } else {
                    const error = resp.error || "Something went wrong, please try again later.";
                    setFeedback(error);
                }
            })
            .catch((e) => {
                console.log("send message error", e);
                setFeedback("Something went wrong, please try again later.");
            })
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
                              required
                              placeholder="Your Message here..."
                              onChange={e => setMessage(e.target.value)}
                    />
                    <input className={style.email} type="email" name="email" value={email}
                           required
                           placeholder="Your Email Address"
                           onChange={e => setEmail(e.target.value)}
                    />
                    <input className={style.submitBtn} type="submit" value="Submit" />
                </div>
                <div>{feedback}</div>
            </form>

        </div>
    );
};
