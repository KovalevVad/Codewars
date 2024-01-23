const initialArray = ['js', 'world', 'viktor', 'awdjsdc', 'javes']

/*
function contains(){
  let a = []
  initialArray.map(function(item){
    for(let i = 0; i < item.length; i++){
      for(let j = 1; j < item.length+1; j++){
        if (item.substring(i,j) === "js"){
          a.push(item)
        }
      }
    }
  })
  b = [...new Set(a)]//используем spred для создание массива из коллекции
  return b
}
const result = contains(initialArray)
*/

/*
function contains(){
  let a = []
  initialArray.map(function(item){
    if (item.includes('js')){
      a.push(item)
    }
  })
  return a
}
const result = contains(initialArray)
*/
const result = initialArray.reduce(function(acc,el) {
  if (el.includes('js') === true) {
    acc.push(el)
    return acc
  } else {
    return acc
  }
},[])

//const result = contains(initialArray) // Реализовать эту функцию

console.log(result) // ['js', 'awdjsdc']