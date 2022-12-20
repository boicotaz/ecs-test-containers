const express = require("express");
const app = express();

const bodyParser = require("body-parser");
//Initialize body-parser
app.use(bodyParser.json());

const server = require("http").createServer(app);
server.listen(process.env.PORT || 8080, process.env.SERVER_IP || '0.0.0.0', () => {
    console.log(`app is now listening to port ${process.env.PORT || 8080} and Ip ${process.env.SERVER_IP || '0.0.0.0'} `);
    console.log(__dirname);
});

require('./api/defaultController')(app);
