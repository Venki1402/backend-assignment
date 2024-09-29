const express = require("express");
const bodyParser = require("body-parser");
const requestRoutes = require("./routes/requestRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/requests", requestRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
