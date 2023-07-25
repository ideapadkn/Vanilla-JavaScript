// const person = {
//   name: 'Kamron',
//   age: 20,
//   greet: function() {
//     console.log('this is greet')
//   }
// }

const person = new Object({
  name: "Kamron",
  age: 20,
  greet: function () {
    console.log("this is greet");
  },
});

Object.prototype.sayHello = function() {
  console.log('sayHello')
}

const lena = Object.create(person)
lena.name = 'Elena'

const str = new String('I am string')
