'use strict';
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

export  default function convert(path) {
    const result = excelToJson({
        source: fs.readFileSync(path) // fs.readFileSync return a Buffer
    });
    return result
}
