var x = 10;
function foo() {
  console.log(x);
}
foo();
//10
var x = 10;
function foo() {
  var x = 20;
  console.log(x);
}
foo();
//undifened

var x = 10;
function foo() {
  console.log(x);
  var x = 20;
}
foo();
//undifened
var x = 10;
function foo() {
  console.log(x);
}
var x = 20;
foo();
//20
function foo() {
    console.log(x);
  }
  var x = 10;
  foo();
//10
function foo() {
    console.log(x);
  }
  foo();
  var x = 10;
  //10

