const initialArray = [
	{ "name": "Viktor", "age": 24 },
	{ "name": "Aboba", "age": 16 },
  {"name": "Vadim", "age": 35 }
]

let result = initialArray.filter(item => item.age > 18)


console.log(result) // Выведет [{ "name": "Viktor", "age": 24 }]