const initialArray = [1, 2, 3, 2, 6, 5, 4, 4, 9, 1]

const replays = initialArray.reduce(function(acc, el) {
  acc[el] = (acc[el] || 0) + 1
  return acc
}, {})

const result = Object.keys(replays).filter((key) => replays[key] > 1);

console.log(result) // [1, 2, 4]