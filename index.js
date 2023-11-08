const express = require("express");
const app = express();
const cors = require("cors")
require("dotenv").config();
const PORT = process.env.PORT || 5500;

const router = require("./lib/Route")

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/",router)


app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
