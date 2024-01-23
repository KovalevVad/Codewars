const initialArray = [1, 2, 3, 4, 5, 6, 7, 8]

function evenNumbersOnly(initialArray) {
  let resultArray = []
  for(let i = 0; i < initialArray.length; i++) {
    if (Number(initialArray[i]) % 2 === 0) {
      resultArray.push(Number(initialArray[i]))
    }
  }
  return resultArray
}

const result = evenNumbersOnly(initialArray) // Реализовать эту функцию

console.log(result) // Выводит [2, 4, 6, 8]git