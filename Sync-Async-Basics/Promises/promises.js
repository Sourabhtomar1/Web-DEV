

let fs = require("fs");

let pendingPromise = fs.promises.readFile("./f1.txt");

console.log(pendingPromise);

//Success cALLBACK
pendingPromise.then(function functionName(data) {
  console.log("COntent "+data);
});

//Filed callback
pendingPromise.catch(function functionName(error) {
  console.log("Error "+error);
});
