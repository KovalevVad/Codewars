const initialArray = [1, 2, 3, 4, 5, 6, 7, 8]

function evenNumbersOnly(mas) {
  let resultArray = []
  for(let i = 0; i < mas.length; i++) {
    if (Number(mas[i]) % 2 === 0) {
      resultArray.push(Number(mas[i]))
    }
  }
  return resultArray
}

const result = evenNumbersOnly(initialArray) // Реализовать эту функцию

console.log(result) // Выводит [2, 4, 6, 8]git