"use strict"
// this works differently in JS
// woks diff in Striict and non-strict mode
// it is depends on how the function is called







// Type 1
console.log(this) // this is global space
// it will be Window in browser
// nodejs -> value is GLOBAL
// every environemnt/runtime will have different scope, depending upon where you are running this.







// Type 2
function x(){
    // in strict -> undefined
    // non-strict -> window
    console.log(this);
}
x(); // undefined
window.x(); // window(left side obj ref)

// output will be different in both strict and non-strict mode
// this keyword inside the function (depends on strict and non-strict mode)

// only in non-strict mode
// this substitution
// if the value(this) is undefined/null 
// then this will be replaced with GLOBAL object

// if the function is called without the reference, then undefined
// if ref is there in left then it will be that only(Line - 22)



// Type 3
// this inside object method
const obj = {
    a: 10,
    x: function (){
        // 1st case - ref of obj ... {a: 10, x: ƒ}
        // 2nd case - undefined
        console.log(this)
        // 1st case - 10
        // 2nd case - undefined
        console.log(this.a) 
    }
}
// obj.x(); // ref of obj ... {a: 10, x: ƒ}
// let k = obj.x;
// k(); // undefined as left side no ref is there

// call, apply, bind
// able to share methods between objects

const student = {
    name: "abhishek",
    printName: function(){
        console.log(this);
    }
};
const student2 = {
    name: "john"
}
// want to use printName with student2
// it will call printname with obj as student2
// so value of this is student2
student.printName.call(student2); 



// Type 4
// this inside in Arrow function
// don't have this binding associated with them
// but they have value of ****enclosing lexical content*** (outer env | where the code is present)

const objj = {
    a: 10,
    x: () => {
        console.log(this); 
    },
};
objj.x(); // window as lexical scope is window and arrow fn doesn't have own this






// Type 5
// nested functions

const objj2 = {
    a: 10,
    x: function() {
        // Enclosing lexical context
        const y = ()=>{
            console.log(this)
        };
        y(); // obj2 object - {a: 10, x: ƒ}
    },
};
objj2.x(); 
// as y() is called in the lexical scope of x function which has the scope of objj2







// Type 6
// inside dom

// value of this is....reference to HTMLElement

{/* <button onClick="alert(this)"></button> -> it will return button element */}

// example
const objr = {
    outerFunction: function() {
      console.log("* 1st",this); // Refers to obj
  
      setTimeout(function() {
        // Refers to the global object (window or global)
        // bcz regular function have their own this
        console.log("* 2nd",this); 
      }, 1000);
  
      // To maintain the reference to the outer object, use arrow function
      // it takes ref of this from outer environment
      setTimeout(() => {
        console.log("* 3rd",this); // Refers to obj
      }, 2000);
    }
  };
  
  objr.outerFunction();