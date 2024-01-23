const initialArray = ['Say', 'привет', 'to', 'АБЦ Wold']

function latinAlphabetOnly(array) {
  let a = []
  for(let i = 0; i < array.length; i++) {
    if (array[i].match(/^[a-z]*$/i)) {
      a.push(array[i])
    }
  }
  return a
}
const result = latinAlphabetOnly(initialArray) // Реализовать эту функцию

console.log(result) // ['Say', 'to']