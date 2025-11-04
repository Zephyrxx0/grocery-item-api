const express = require("express");
const app = express();
const docs = require("./docs.json");

app.use("/images", express.static("images"));

const routes = require("./routes/routes.js");
app.use("/", routes);

app.use(express.static(__dirname + '/images'));

app.get("/docs", (req, res) => {
    return res.status(200).json(docs);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
