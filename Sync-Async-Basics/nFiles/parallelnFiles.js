
const fs = require("fs");


let files = ["../f1.txt","../f2.txt","../f3.txt"];

//Parallely Files read => with for loops

for(let file = 0;file<files.length;file++){
  fs.readFile(files[file],function callback(error,data) {
    console.log("Data "+data);
  });
}
