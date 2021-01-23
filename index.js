const express = require("express");
const cors = require("cors");
const app = express();
const port = 5500;

app.use(cors());

app.use(express.json());

const credentials = {
  user: "sdtr",
  password: "123",
};

app.get("/api/login", (req, res) => {
  const body = req.body;
  res.send("Hello World!");
});

app.post("/api/login", (req, res) => {
  console.log("body: ", req.body);
  if (
    req.body.user === credentials.user &&
    req.body.password === credentials.password
  ) {
    res.json({ success: true });
  } else {
    res.json({ success: false })
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
