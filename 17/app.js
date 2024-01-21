const initialArray = [1, 20, 13, 234, 59, 9, 40, 78]

function lessThanAverage(array){
  const average = array.reduce( (acc,el) => acc + el) / array.length
  return average
}

const result = initialArray.filter(el => el<lessThanAverage(initialArray)) // Реализовать эту функцию

console.log(result) // [1, 20, 13, 9, 40]