const express = require("express");
const morgan = require("morgan");

// Express App
const app = express();

// Register View Engine
app.set("view engine", "ejs");

// Listen for requests
app.listen(3000);

// Middleware & Static Files
app.use(express.static("public"));

app.use(morgan("dev"));

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat Bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

// 404 Page (Must be at bottom of code)
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
