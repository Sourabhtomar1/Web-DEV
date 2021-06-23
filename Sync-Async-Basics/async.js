

let fs = require("fs")


//async => JS => sync language => async with the help of callbacks


console.log("Before");

let f1KaData = fs.readFile("./f1.txt",callback);

// console.log("COntent "+f1KaData.text);


function callback(error , data) {
  console.log("Content "+data);
}

console.log("After");
console.log("After");
console.log("After");
console.log("After");
console.log("After");
console.log("After");
console.log("After");
console.log("After");
