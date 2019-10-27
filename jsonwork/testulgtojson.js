'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('sample.ulg');

let jsonfile = {
    fileName: "sample.ulg",
    contents: rawdata
};

let data = JSON.stringify(jsonfile, null, 2);

fs.writeFileSync('test.json', data);

fs.writeFileSync('sampleRegen.ulg', jsonfile.contents)
