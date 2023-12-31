const express = require("express");
const cors = require("cors");
const guestRoute = require("./routes/guestRoute")


const app = express();

app.get("/", (req,res) => {
  res.send("Hello World")
})

const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json())



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  
});

