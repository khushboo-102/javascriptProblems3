//  obj = {
//     a:1,
//     b:let2,
// }
// console.log(obj["b"])

function toArray(obj){
    let arr = [];
    for(const key in obj){
        let inarr = [];
        inarr.push(key);
        inarr.push(obj[key])
        arr.push(inarr)
    }
    return arr   
}
console.log(toArray({a:1,b:2}))