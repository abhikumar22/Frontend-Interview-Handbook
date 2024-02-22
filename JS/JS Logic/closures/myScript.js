// "use strict"
// console.log("obj");
// var k = 2
// function getF(){
//     let k = 1;
//     console.log("getF",this.k)
// }
// getF();
const obj = {
    name: "abhishek",
    getName: function () {
        // const name = "abhi inner"
        console.log("Hi i'm normal function", this)
    },
    getName2: () => {
        // const name = "abhi inner"
        (function num() {
            console.log("Hi i'm arrow function ", this) 
        })()    }
}
obj.getName();
obj.getName2();
// // const kk = obj.getName
// const kk2 = obj.getName2
// // kk();
// kk2();

