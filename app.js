const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home")
});

app.get("/about", (req, res) => {
    res.render("about")
});

app.listen(port, () => console.log(`Deploying Demo app listening on port ${port}!`))