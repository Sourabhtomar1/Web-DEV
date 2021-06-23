//async // promises // parallel

let fs = require("fs");

let f1kapromise = fs.promises.readFile("./f1.txt");

let thenKaPromise = f1kapromise.then(function (data) {
  console.log("data "+data);
}).then(function () {
    let f2kapromise = fs.promises.readFile("./f2.txt");
    return f2kapromise;
}).then(function (data) {
    console.log("COntent "+data);
})
.then(function () {
    let f3kapromise = fs.promises.readFile("./f3.txt");
    return f3kapromise;
})
.then(function (data) {
    console.log("COntent "+data);
})


// f2kapromise.then(function (data) {
//   console.log("data "+data);
// });
//
//
// f3kapromise.then(function (data) {
//   console.log("data "+data);
// });
