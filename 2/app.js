const initialArray = ['Say', 'hello', 'to', 'world', 'javascript', 'students']

const result = initialArray.forEach((item,index,initialArray) => {
  if (item.length < 6) {
    delete initialArray[index]
  }
})// Реализовать эту функцию
console.log(initialArray) // Выведет ['javascript', 'students']