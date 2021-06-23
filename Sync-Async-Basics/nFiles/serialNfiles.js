
const fs = require("fs");


let files = ["../f1.txt","../f2.txt","../f3.txt"];

//Parallely Files read => with for loops

for(let file = 0;file<files.length;file++){
  let data = fs.readFileSync(files[file]);
  console.log("content "+data);
}
