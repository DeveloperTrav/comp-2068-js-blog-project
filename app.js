const express = require(`express`);

const app = express();

app.get(`/`, (req, res) => {
    res.sendFile(`Home.html`);
});

app.get(`/about`, (req, res) => {
    res.sendFile(`About.html`);
});

app.get(`/contact`, (req, res) => {
    res.sendFile(`Contact.html`);
});

app.listen((process.env.PORT || 4000), () => console.log("App is listening on port 4000."));