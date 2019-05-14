const express = require(`express`);

const app = express();

const baseUrl = `C:\\Users\\Travy\\WebstormProjects\\comp-2069-js-blog-project\\`;

app.get(`/`, (req, res) => {
    res.sendFile(`${baseUrl}Home.html`);
});

app.get(`/about`, (req, res) => {
    res.sendFile(`${baseUrl}About.html`);
});

app.get(`/contact`, (req, res) => {
    res.sendFile(`${baseUrl}Contact.html`);
});

app.listen(4000, () => console.log("App is listening on port 4000."));