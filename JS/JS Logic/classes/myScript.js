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
const PROMISE_STATE = {
    PENDING: 'Pending',
    FULFILLED: 'Fulfilled',
    REJECTED: 'Rejected',
    RESOLVED: 'Resolved'
}

class CustomPromise {
    constructor(executor) {
        this.state = PROMISE_STATE.PENDING;
        this.value = null;
        this.reason = null;
        this.thenCB;
        this.catchCB;
        this.finallyCB;
        const res = dataValue => {
            if (this.thenCB) {
                this.state = PROMISE_STATE.FULFILLED;
                this.thenCB(dataValue);
            } else {
                this.value = dataValue;
            }
            if (this.finallyCB) {
                this.finallyCB()
            }
        }
        const rej = errorValue => {
            if (this.catchCB) {
                this.state = PROMISE_STATE.REJECTED
                this.catchCB(errorValue);
            } else {
                this.reason = errorValue;
            }
            if (this.finallyCB) {
                this.finallyCB()
            }
        }
        try {
            executor(rej, res);
        } catch (err) {
            rej(err)
        }
    }
    then = (cb) => {
        if (this.state === PROMISE_STATE.PENDING && this.value) {
            this.state = PROMISE_STATE.FULFILLED;

        }

    }
}
const x = 12;
const myres = new Promise((resolve, reject) => {
    if (x > 10) {
        resolve(true);
    } else {
        reject(false)
    }
})
myres.then((data) => {
    console.log("**** data", data);
})