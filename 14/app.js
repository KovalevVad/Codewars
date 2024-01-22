const Array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const Array2 = [1, 3, 4, 5, 7, 8, 9, 10, 20, 30, 40]



function compare(ArrayA, ArrayB){
  return ArrayA.filter((item) => ArrayB.indexOf(item) === -1)
}


const result = compare(Array1, Array2)
console.log(result) // [2, 6]