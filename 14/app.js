const Array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const Array2 = [1, 3, 4, 5, 7, 8, 9, 10, 20, 30, 40]


const result = Array1.forEach(function(el){
  if (Array2.find(el) === undefined) return el
})
// Реализовать эту функцию

console.log(result) // [2, 6]