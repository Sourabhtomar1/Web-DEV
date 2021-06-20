// fs module => file system => file system

const cheerio = require('cheerio');
const fs = require('fs');

let filekadata = fs.readFileSync("./file.txt" , "utf-8");

console.log(filekadata);

let htmlkadata = fs.readFileSync("./index.html");

let ch = cheerio.load(htmlkadata);

let h1kadata = ch("h1").text();

console.log(h1kadata[0]);
