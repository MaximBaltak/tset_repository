function randomArr(length){
     return Array.from({length},()=>Math.floor(Math.random()*10))
}
console.log(randomArr(10))