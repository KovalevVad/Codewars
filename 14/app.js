const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const array2 = [1, 3, 4, 5, 7, 8, 9, 10, 20, 30, 40]



function compare(arrayA, arrayB) {
  return arrayA.filter((item) => arrayB.indexOf(item) === -1)
}


const result = compare(array1, array2)
console.log(result) // [2, 6]