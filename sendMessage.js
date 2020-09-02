const sendMessage = (req, res) => {
    console.log(req.body);
    const { message, email } = req.body;
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
}

module.exports = sendMessage;
