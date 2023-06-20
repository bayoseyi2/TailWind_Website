const express = require("express");
const app = express();
const path = require("path");

app.listen(process.env.PORT || 8000, () => {
  console.log("SERVER LISTENING!");
});

const OPTIONS = {
  dotfiles: "ignore",
  etag: false,
  extensions: ["htm", "html", "css", "js", "ico", "jpg", "jpeg", "png", "svg"],
  index: ["index.html"],
  maxAge: "1m",
  redirect: false
};
app.use(express.static("build", OPTIONS));
// app.use(express.static(path.join(__dirname, "./build")));


// app.get("/*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./build", "index.html"));
//   });