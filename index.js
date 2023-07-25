// function createCalcFunction(n) {
//   return function() {
//     console.log(1000 * n)
//   }
// }

// const calc = createCalcFunction(42)
// calc()

/*
function createIncrementor(n) {
  return function(num) {
    return n + num
  }
}

const addOne = createIncrementor(1)
const addTen = createIncrementor(10)

console.log(addOne(4))
console.log(addOne(8))

console.log(addTen(4))
console.log(addTen(8))
*/


// function urlGenerator(domain) {
//   return function(url) {
//     return `https://${url}.${domain}`
//   }
// }

// const comUrl = urlGenerator('com')
// const ruUrl = urlGenerator('ru')

// console.log(comUrl('netflix'))
// console.log(ruUrl('russia'))



function bind(context, fn) {
  return  function(...args) {
    fn.apply(context, args)
  }
}

function logPerson() {
  console.log(`Person: ${this.name}, Age: ${this.age}, Job: ${this.job}`)
}

const person1 = { name: 'Kamron', age: 20, job: 'Frontend' }
const person2 = { name: 'Fatima', age: 19, job: 'Злить меня!' }

bind(person1, logPerson)()
bind(person2, logPerson)()






