const initialArray = [
	{ "name": "Viktor", "age": 24 },
	{ "name": "Aboba", "age": 16 },
	{ "name": "Abiba", "age": 35 },
]

function sortByAge(Array) {
  Array.sort((a,b) => b.age - a.age)
  return Array
}
const result = sortByAge(initialArray) // Реализовать эту функцию

console.log(result) // [{ "name": "Abiba", "age": 35 }, { "name": "Viktor", "age": 24 }, { "name": "Aboba", "age": 16 },]