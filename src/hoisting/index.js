// hoisting

a = 2;
var a;
console.log(a); // 2

// -------------------

nameOfDog('Betty');

function nameOfDog(name) {
  console.log(name);
}

// Betty