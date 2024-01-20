// Array.prototype.doSomething = function(){
//    console.log("hello")
//  }


// Array.prototype.myMap = function(cbc){
//     let finalRes = [];
//     for (let index = 0; index < this.length; index++) {
//         const element = this[index];
//         finalRes.push(cbc(element))
//     }
//     return finalRes;
// }

// const doubleNum = [1,2,3].myMap(x=>x*2);
// console.log(doubleNum);



// Array.prototype.myFilter = function(cbc){
//     let finalRes = [];
//     for (let index = 0; index < this.length; index++) {
//         const element = this[index];
//         if(cbc(element)){
//             finalRes.push(element);
//         }

//     }
//     return finalRes;
// }

// const greater = [1,2,3].myFilter(x=>x>2);
// console.log(greater);


Array.prototype.myReduce = function (cbc, initial) {
    let finalValue = initial;
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        finalValue = finalValue + cbc(element, finalValue);
    }
    return finalValue;
}

const redd = [1, 2, 3].myReduce((curr, accu) => curr + accu, 0);
console.log("***redd", redd);
// console.log([1,2,3].reduce((curr,accu)=>curr+accu,0));