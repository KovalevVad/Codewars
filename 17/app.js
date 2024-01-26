const initialArray = [1, 20, 13, 234, 59, 9, 40, 78]

function lessThanAverage(mas) {
  const average = mas.reduce( (acc,el) => acc + el) / mas.length
  return average
}

const result = initialArray.filter(el => el < lessThanAverage(initialArray)) // Реализовать эту функцию

console.log(result) // [1, 20, 13, 9, 40]