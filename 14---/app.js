const Array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const Array2 = [1, 3, 4, 5, 7, 8, 9, 10, 20, 30, 40]



function compare(){
  let a = []
  for(let i = 0; i < Array1.length;i++){
    for(let j = 0; j < Array2.length;j++){
      if(Array1[i] === Array2[j]){
        a.push(Array1[i])
      }
    }
  }
  return a
}

const result = compare()
console.log(result) // [2, 6]