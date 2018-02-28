const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mc = require(__dirname + "/controllers/messages_controller");
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public/build")));

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
