console.log('start') // 1

setTimeout(() => {
  console.log('setTimeout') // 3
}, 0)

console.log('end') // 2

// 1 call stack
// 2 web apis 
// 3 callback queue