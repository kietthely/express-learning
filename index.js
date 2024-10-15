import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";

import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
// goals: create a form that takes in a full name
// and a submit button
// when the submit button is clicked, the full name will be displayed on the page

const app = express();
const port = 3000;
// without this, the website won't be able to process the data passed over to the server.
app.use(bodyParser.urlencoded({ extended: true }));

// because getting the website knows dir path is tricky, so we need to use dir to track the directory of the website

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req, res) => {
  res.send(
    "Your name is: " + req.body.name + " and your age is: " + req.body.age
  );
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
