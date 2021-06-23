

let fs = require("fs")


//async => JS => sync language => async with the help of callbacks


console.log("Before");

let f1KaData = fs.readFile("./f1.txt",function callback(error , data) {
  console.log("Content "+data);
});


let f2KaData = fs.readFile("./f2.txt",function callback(error , data) {
  console.log("Content "+data);
});


let f3KaData = fs.readFile("./f3.txt",function callback(error , data) {
  console.log("Content "+data);
});



// console.log("COntent "+f1KaData.text);




console.log("After");
console.log("After");
console.log("After");
console.log("After");
console.log("After");
console.log("After");
console.log("After");
console.log("After");
