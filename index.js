const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const router = require("./routes/route")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/",router)


app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
