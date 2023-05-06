const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookie = require("cookie-parser");
const PORT = process.env.PORT || 3005;

app.use(bodyParser.urlencoded({extended:true}))
app.get("/editUserView/css/editUserView.css", (req, res) => {
    res.sendFile(__dirname + "/public/css/editUserView.css");
  });

  
app.use("/js", express.static(__dirname + "/public/js"))
app.use("/css", express.static(__dirname + "/public/css"))
app.set("view engine" , "ejs")
app.set("views" , "./views")
app.use(cookie())
app.use(express.json())


app.use("/", require("./routes/pages"));
app.use("/api", require("./controllers/auth")); 
app.listen(PORT);
