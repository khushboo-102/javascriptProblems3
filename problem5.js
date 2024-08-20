function makePlusFunction(n){
    return (num) => (num + n)
}
const abc= makePlusFunction(9)
const newNum = makePlusFunction(5)
console.log(abc(10))
console.log(newNum(2))
