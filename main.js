const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  return res.json({ message: "hello i am in node container" });
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:/${PORT}`);
});
