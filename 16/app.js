const initialArray = [
	{ "name": "Viktor", "age": 24 },
	{ "name": "Aboba", "age": 16 },
	{ "name": "Abiba", "age": 35 },
	{ "name": "Viktor", "age": 35 },
	{ "name": "Abiba", "age": 35 },
]

function unique(array) {
  let a = []
  array.map(function(item){
    let nam = item.name
    let k = 0
    for(let i = 0; i < array.length; i++) {
      if (array[i].name === nam){
        k += 1
      }
    }
    if (k === 1){
      a.push(item)
      k = 0
    } else{
      k = 0
    }
  })
  return a
}
const result = unique(initialArray) // Реализовать эту функцию

console.log(result) // [{ "name": "Aboba", "age": 16 }]