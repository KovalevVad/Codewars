const initialArray = [1, 2, 3, 2, 6, 5, 4, 4, 9, 1]

function uniqueOnly(array) {
  let a = []
  for(let i = 0; i < initialArray.length; i++) {
    k = 0
    for (let j = 0; j < initialArray.length; j++) {
      if (array[i] === array[j]){
        k += 1
      }
    }
    if (k > 1){
      k = 0
    } else{
      a.push(array[i])
    }
  }
  return a
}
const result = uniqueOnly(initialArray) // Реализовать эту функцию

console.log(result) // [3, 5, 6, 9]