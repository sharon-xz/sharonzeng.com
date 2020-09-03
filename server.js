const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const handleMessage = require('./sendMessage');

const app = express();
const port = process.env.PORT || 8081;

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

// app.post('/api/message', handleMessage);

app.listen(port, () => console.log(`Listening on port ${port}`));