const initialArray1 = [1, 2, 3]
const initialArray2 = [4, 5, 6]


//1
//const result = initialArray1.concat(initialArray2)

//2
// function combine(array1,array2){
//   array2.map(item => array1.push(item))
//   return array1
// }
// const result = combine(initialArray1, initialArray2)

//3
const result = [...initialArray1, ...initialArray2]

console.log(result) // [1, 2, 3, 4, 5, 6]