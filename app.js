const express = require(`express`);

const app = express();

app.get(`/`, (req, res) => {
    res.sendFile(`${__dirname}/Home.html`);
});

app.get(`/about`, (req, res) => {
    res.sendFile(`${__dirname}/About.html`);
});

app.get(`/contact`, (req, res) => {
    res.sendFile(`${__dirname}/Contact.html`);
});

app.listen((process.env.PORT || 4000), () => console.log("App is listening on port 4000."));