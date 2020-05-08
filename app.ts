const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());

const PUBLIC_FOLDER = process.env.FOLDER || '/var/lib/gallery/';

app.use(express.static(PUBLIC_FOLDER));

app.get('/', function (req, res) {
    console.debug(req.protocol + '://' + req.get('host') + req.originalUrl);
    res.header('Access-Control-Allow-Origin', '*');

    let dir = req.query.path ? path.join(PUBLIC_FOLDER, 'original', req.query.path) : path.join(PUBLIC_FOLDER, 'original');
    res.send(fs.readdirSync(dir));
});

const port = process.env.PORT || 80;
app.listen(port);

console.debug(`start application on port:${port}`);
