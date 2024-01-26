const initialArray = ['Say', 'hello', 'to', 'World',1]

const result = initialArray.reduce(function(acc,el) {
  if (typeof(el) === 'string' && el[0] === el[0].toUpperCase()) acc.push(el[0])
  return acc
}, []) // Реализовать эту функцию

console.log(result) // ['S', 'W']