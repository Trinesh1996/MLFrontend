const express = require("express")
const serveStatic = require("serve-static")
var path = require('path');
// init modules, env , port
let app = express()
let PORT = process.env.PORT || 3015;

// Static files
app.use("/", serveStatic(path.join(__dirname, "/dist")));


app.listen(PORT, function () {
    console.log('App starting on port', PORT)
  });

  