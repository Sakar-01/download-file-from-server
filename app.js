const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
  //__dirname : It will resolve to your project folder.
});
router.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname + "/about.html"));
  //__dirname : It will resolve to your project folder.
});

app.get('/download', function (req, res) {
  const file = `${__dirname}/upload/pscp.exe`;
  res.download(file); // Set disposition and send it.
});

//add the router
app.use("/", router);
app.listen(process.env.port || 5000);

console.log("Running at Port 5000");
