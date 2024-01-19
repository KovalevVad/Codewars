const initialArray = ['Say', 'hello', 'to', 'world', 'javascript', 'students']

initialArray.forEach((item,index,initialArray) => {
  if (item.length < 6) {
    delete initialArray[index]
  }
})
const result = initialArray.filter(( element ) => element !== undefined)
console.log(result) // Выведет ['javascript', 'students']