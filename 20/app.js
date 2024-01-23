const initialArray = [19, 1, 3, 4, 5, 6, 20, 8]

const result = initialArray.filter((el) => initialArray.indexOf(el) % 2===0) // Реализовать эту функцию

console.log(result) // Выводит [19, 3, 5, 20]