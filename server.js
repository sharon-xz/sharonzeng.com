require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sendMessage = require('./sendMessage');

const app = express();
const port = process.env.PORT || 8081;

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.send({express: 'Hello From Express'});
});

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

// body: {message: "test message", email: "test@test.test"}
app.post('/api/message', (req, res) => {
    const body = req.body;
    if (!body.message || !body.email) {
        console.error("Missing message or email");
        res.status(400).send({
            error: "Invalid Request"
        });

    } else {
        sendMessage(body).then(
            function (data) {
                console.log("Message Successfully Sent", data.MessageId);
                res.send({
                    status: "ok",
                    data: "Thank you for your message! I'll reach out to you shortly."
                });
            }).catch(
            function (err) {
                console.error("send message error", err, err.stack);
                res.status(500).send(
                    {
                        error: `Something went wrong. Please contact me by email ${process.env.MAILER_RECIPIENT || "."}`
                    }
                );
            });
    }
});

app.listen(port, () => console.log(`Listening on port ${port}`));