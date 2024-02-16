"use strict"
console.log("obj");
function getF(){
    let k = 1;
    console.log("getF",)
}
getF();
const obj = {
    name: "abhishek",
    getName: function () {
        // const name = "abhi inner"
        console.log("Hi i'm ", this)
    },
    getName2: () => {
        // const name = "abhi inner"
        console.log("Hi i'm ", this)
    }
}
// obj.getName();
obj.getName2();
// const kk = obj.getName
const kk2 = obj.getName2
// kk();
kk2();

