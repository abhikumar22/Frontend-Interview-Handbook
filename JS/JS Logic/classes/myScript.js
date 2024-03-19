// /* Basics */

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     getName() {
//         console.log("Name of the animal: ", this.name);
//     }
// }

// class Lion extends Animal {
//     // calling parent Class contructor and initializing with LION
//     constructor() {
//         super('LION')
//     }
// }

// const lion = new Animal('LION');
// // print lion
// lion.getName();

// const L_ion = new Lion();
// // print lion as due to inheritance
// L_ion.getName();

// /* Basics */

// /* Stack using Classes */

// class CustomStack {
//     constructor() {
//         this.valueList = []
//     }
//     pop() {
//         let temp = this.valueList.splice(-1);
//         console.log("Popped Element is ::", temp);
//     }
//     push(val) {
//         this.valueList[this.valueList.length] = val;
//     }
//     traverse() {
//        for (let index = this.valueList.length-1; index >= 0; index--) {
//         const element = this.valueList[index];
//         console.log(`${index+1} Stack Element ::`, element);
//        }
//     }
//     checkIsEmpty() {
//         if (this.valueList.length <= 0) {
//             return true;
//         } else {
//             false
//         }
//     }
// }

// let myStack = new CustomStack();
// myStack.push(1);
// myStack.push(21);
// myStack.push(2);
// myStack.traverse();
// myStack.pop();
// myStack.traverse();

/* Stack using Classes */
const STATE = {
    FULFILLED: "FULFILLED",
    REJECTED: "REJECTED",
    PENDING: "PENDING"
}

class MyPromise {
    constructor(executor) {
        let result = null;
        let currState = STATE.PENDING;
        let successHandlers = [];
        let rejectHandlers = [];


        function resolve(data) {
            if (currState !== STATE.PENDING) return;
            result = data;
            currState = STATE.FULFILLED;
            // console.log("**** resolve", {data}, {successHandlers});
            successHandlers.forEach((curr) => {
                curr(result);
            });
        }
        function reject(data) {
            if (currState !== STATE.PENDING) return;

            result = data;
            currState = STATE.REJECTED;

            rejectHandlers.forEach((curr) => {
                curr(result);
            });
        }

        this.then = function (cbc) {
            if (currState === STATE.FULFILLED) {
                cbc(result);
            } else {
                successHandlers.push(cbc);
            }
        };
        this.catch = function (cbc) {
            if (currState === STATE.REJECTED) {
                cbc(result);
            } else {
                rejectHandlers.push(cbc);
            }
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            console.log("**** error", error);
        }

    }
}
const res = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(5)
    }, 2000);
}).then((data) => {
    console.log("*** then", data);
}).then((data) => {
    console.log("*** then", data);
})
// .catch((data)=>{
//     console.log("*** err", data);
// })