//HOF function
// HIGH Order functions =>
// Functions which takes function as an argument;

//callback functions =>
//function which are passed as a function in another Functions

function getFirstName(name) {

  name = name.split(" ");
  return name[0];
}

function getLastName(name) {
  name = name.split(" ");
  return name[1];
}

function fun(name , funk) {
  let a = funk(name);
  console.log("Says HI "+a);
}

fun("sourabh Tomar",getFirstName);
fun("sourabh Tomar",getLastName);
