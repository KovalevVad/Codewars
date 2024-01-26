const initialArray = [1, 2, 3, 2, 6, 5, 4, 4, 9, 1]

function uniqueOnly(mas) {
  let a = []
  for(let i = 0; i < mas.length; i++) {
    k = 0
    for (let j = 0; j < mas.length; j++) {
      if (mas[i] === mas[j]) {
        k += 1
      }
    }
    if (k > 1) {
      k = 0
    } else {
      a.push(mas[i])
    }
  }
  return a
}
const result = uniqueOnly(initialArray) // Реализовать эту функцию

console.log(result) // [3, 5, 6, 9]