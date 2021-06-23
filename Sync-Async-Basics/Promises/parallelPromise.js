//async // promises // parallel

let fs = require("fs");

let f1kapromise = fs.promises.readFile("./f1.txt");


let f2kapromise = fs.promises.readFile("./f2.txt");


let f3kapromise = fs.promises.readFile("./f3.txt");

f1kapromise.then(function (data) {
  console.log("data "+data);
});

f1kapromise.catch(function (error) {
  console.log("error "+error);

});

f2kapromise.then(function (data) {
  console.log("data "+data);
});

f2kapromise.catch(function (error) {
  console.log("error "+error);

});

f3kapromise.then(function (data) {
  console.log("data "+data);
});

f3kapromise.catch(function (error) {
  console.log("error "+error);

});
