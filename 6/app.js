const initialArray = ['Say', 'hello', 'to', 'world']

function firstLetters(mas) {
 const letters = mas.reduce(function (acc, el) {
  acc.push(el[0])
  return acc
  }, [])
  return letters
}

const result = firstLetters(initialArray) // Реализовать эту функцию

console.log(result) // ['S', 'h', 't', 'w']