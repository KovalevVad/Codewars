const initialArray = [
	{ "name": "Viktor", "age": 24 },
	{ "name": "Aboba", "age": 40 },
	{ "name": "Abiba", "age": 15 },
]

function sortByAge(Array) {
  Array.sort((a,b) => a.age - b.age)
  return Array
}
const result = sortByAge(initialArray) // Реализовать эту функцию

console.log(result) // [{ "name": "Aboba", "age": 16 }, { "name": "Viktor", "age": 24 }, { "name": "Abiba", "age": 35 },]