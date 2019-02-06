const express = require("express")
// const cors = require('cors')
// const bodyParser = require("body-parser")

// init modules, env , port
let app = express()
let PORT = process.env.PORT || 3015;

// Static files
// Handle Production

var path = require('path');
var serveStatic = require('serve-static');

app.use(serveStatic(__dirname + "/dist"));


// app.use(cors());

// middle ware use
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


// const data = require("./routes/api/data")
// app.use("/api/data", data)


app.listen(PORT, function () {
    console.log('App starting on port', PORT)
  });

  