const initialArray = ['Say', 'hello', 'to', 'world']

function firstLetters(Array) {
 const letters = Array.reduce(function (acc, el) {
  acc.push(el[0])
  return acc
  },[])
  return letters
}

const result = firstLetters(initialArray) // Реализовать эту функцию

console.log(result) // ['S', 'h', 't', 'w']