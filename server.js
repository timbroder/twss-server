var express = require("express"),
    app = express.createServer(),
    twss = require('twss');

app.get('/', function(req, res) {
    if (req.query.what === undefined) {
        res.send("<h1 style='text-align: center; font-size: 120px;'>THAT'S WHAT SHE SAID</h1>");
    } else {
        res.send( req.query.callback	+ "({ \"response\": " + twss.is(req.query.what) + "});" );
    }
});

app.listen(process.env.PORT || 10000);