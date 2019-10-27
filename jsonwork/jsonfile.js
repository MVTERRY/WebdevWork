'use strict';

const fs = require('fs');
/*
// one way to parse json data. Must read data before executing code
let rawdata = fs.readFileSync('student.json');
let student = JSON.parse(rawdata);
console.log(student);
*/

/*
//works the same as above
let jsonData = require('./student.json');

console.log(jsonData);
*/
let rawdata = fs.readFileSync('student.json');
console.log(rawdata)

//This code starts reading data and also executes the next lines of code simultaniously
fs.readFile('student.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);
});

console.log('This is after the read call');