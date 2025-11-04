const express = require("express");
const app = express();
const docs = require("./docs.json");

const cors = require('cors');
app.use(cors()); // Allow all origins

// ✅ Serve static images from the /images folder
app.use("/images", express.static(__dirname + "/images"));

// ✅ Use your routes
const routes = require("./routes/routes.js");
app.use("/", routes);

// ✅ Docs endpoint
app.get("/docs", (req, res) => {
  return res.status(200).json(docs);
});

// ✅ Dynamic port for Render
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
