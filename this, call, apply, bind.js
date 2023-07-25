function hello() {
  console.log("hhhhh", this);
}

const person = {
  name: "Kamron",
  age: 20,
  sayHello: hello,
  sayHelloWindow: hello.bind(document),
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  },
};

const lena = {
  name: "Elena",
  age: 19,
};
// BINID
person.logInfo.bind(lena, "Fronend", "42986")();
// CALL
person.logInfo.call(lena, "Frontend", "42412");
// APPLY
person.logInfo.apply(lena, ["Frontend", "3218"]); // только два параметра

// =============

const array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//   return arr.map(function(i) {
//     return i * n
//   })
// }

Array.prototype.multBy = function (n) {
  return this.map(function (i) {
    return i * n;
  });
};

console.log(array.multBy(2));
