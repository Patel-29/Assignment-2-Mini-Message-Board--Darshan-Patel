const {Router} = require('express');

const indexRouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

indexRouter.get("/", (req, res) => {
    res.render("index", {title: "Mini Message Board", messages})
});

indexRouter.get("/new", (req, res) => {
    res.render("form")
});

indexRouter.post("/new", (req, res) => {
    const author = req.body.author;
    const message = req.body.message;
    messages.push({
        text: message,
        user: author,
        added: new Date()
    })
    res.redirect("/")
});
indexRouter.get("/messages/:id", (req, res) => {
    const id = parseInt(req.params.id,10)
    const message = messages[id]

    res.send(`Message details - ${message.text}`)
})
module.exports = indexRouter;