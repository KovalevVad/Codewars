const initialArray = ['Say', 'привет', 'to', 'АБЦ Wold']

function latinAlphabetOnly(mas) {
  let a = []
  for(let i = 0; i < mas.length; i++) {
    if (mas[i].match(/^[a-z]*$/i)) {
      a.push(mas[i])
    }
  }
  return a
}
const result = latinAlphabetOnly(initialArray) // Реализовать эту функцию

console.log(result) // ['Say', 'to']