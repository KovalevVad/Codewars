const initialArray = [1, 20, 13, 234, 59, 9, 40, 78]

function average(initialArrays) {
  return initialArrays.reduce((acc, b) => (acc + b)) / initialArrays.length
}


// const result = initialArray.map( function(el) {
//   if (el > average(initialArray)) return el
// }) // Реализовать эту функцию

// const filter = result.filter(el => el!== undefined)

const filter = initialArray.filter(el => el > average(initialArray)) // Избегаем создание массива с undefined, т.к
// метод filter фильтрует по заданному условию сразу, a undefined не входит в условие :)))

console.log(filter) // [234, 59, 78]