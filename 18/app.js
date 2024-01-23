const initialArray1 = [
	{ "name": "Viktor", "age": 24 },
	{ "name": "Abiba", "age": 35 },
	{ "name": "Viktor", "age": 35 },
	{ "name": "Abiba", "age": 35 },
]

const initialArray2 = [
	{ "name": "Viktor", "age": 24 },
	{ "name": "Aboba", "age": 16 },
	{ "name": "Abiba", "age": 35 },
]

function unique(array1,array2) {
  let a = []
  for (let i = 0; i < array1.length;i++) {
    for(let j = 0; j < array2.length; j++) {
      if (array2[j].name === array1[i].name && array2[j].age === array1[i].age ) {
        a.push(array1[i])
      }
    }
  }
  return a
}

const result = unique(initialArray1, initialArray2)
for (let i = 0; i < result.length;i++) {
  let count = 0
  for (let j = 0; j < result.length;j++){
    if(JSON.stringify(result[i]) === JSON.stringify(result[j])) {
      count += 1
      index = result.indexOf(result[j])
    }
  }
  if (count > 1) {
    delete result[index]
    count = 0
  }
}
let res = result.filter(( element ) => element !== undefined)
console.log(res) // [{ "name": "Viktor", "age": 24 }, { "name": "Abiba", "age": 35 }]