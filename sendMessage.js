const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

const email_recipient = process.env.MAILER_RECIPIENT;
const email_sender = process.env.MAILER_SENDER;

const sendMessage = ({message, email}) => {

    const params = {
        Destination: {
            ToAddresses: [
                email_recipient
            ]
        },
        Message: {
            Body: {
                Text: {
                    Charset: "UTF-8",
                    Data: `
                    Someone sent you the following message from sharonzeng.com.
                    Message: ${message}
                    From: ${email}
                    `
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: `[Hi]${email} just sent you a message! sharonzeng.com message`
            }
        },
        Source: email_sender,
        ReplyToAddresses: [
            email_sender
        ],
    };

    return new AWS.SES().sendEmail(params).promise();
}

module.exports = sendMessage;
