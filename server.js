const express = require("express");

const app = express();

const port = 1337;

const handlebars = require("express-handlebars").create({ defaultLayout: "main" });

// Set up the Handlebars view engine
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

// Static files 
app.use(express.static("public"));
app.use(express.static("public/data"));
app.use(express.static("public/images"));
app.use(express.static("public/scripts"));
app.use(express.static("public/styles"));

// Render
app.get("/", (request, response) => {
    response.render("index");
});

app.get("/index", (request, response) => {
    response.render("index");
});

app.get("/about", (request, response) => {
    response.render("about");
});

app.get("/booking", (request, response) => {
    response.render("booking");
});

app.get("/contact", (request, response) => {
    response.render("contact");
});

app.get("/portfolio", (request, response) => {
    response.render("portfolio");
});

// 404 
app.use((request, response) => {
    response.status(404);
    response.render("404");
});

// Custom 500 page
app.use((error, request, response, next) => {
    console.error(error.stack);
    response.status(500);
    response.render("500");
});

app.listen(port, () => {
    console.log(`Server is Started at port : ${port} (http://localhost:${port})`);
});
