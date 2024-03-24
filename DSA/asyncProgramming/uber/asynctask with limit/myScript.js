

// Execute N task in series with K limit
// Todo to do cleanup and return once only

// const delayFn = (delay) => {
//     return function() {
//       console.log("start ", delay)
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve(delay)
//         }, delay)
//       })
//     }
//   }
//   const allTasks = [
//     delayFn(2000),
//     delayFn(2000),
  
//     delayFn(3000),
//     delayFn(3000),
  
//     delayFn(4000),
//     delayFn(4000),
//   ]
//   const executeInParallel = (allTasks, limit) => {
//     let taskArr = [...allTasks];
//     let count = 0;
//     let results = [];
//     let queueTask = [];
//     let taskExecuting = 0;
  
//     function executeTasks(eachTasks, res) {
//       eachTasks()
//         .then((data) => {
//           taskArr.shift();
//           results.push(data);
//           taskExecuting--;
//           if (results.length < allTasks.length) {

//             // type 1 (get All pending task and push again)
//             let pendingTask = [...queueTask];
//             queueTask = [];
//             startTask(pendingTask)

//             // type2 (take one task and add in queue)
//             // if(!(queueTask && queueTask.length<=0)){
//             //     console.log("******queueTask before",{queueTask});
//             //     let pendingTask = queueTask.shift();
//             //     console.log("******queueTask after",{queueTask},{pendingTask});
//             //     startTask([pendingTask])
//             // }
//           } else {
//             console.log("**** finallyyyyyyyyyyy",{time:new Date()}, {results});
//             res(6);
//             return;
//           }
//         })
//       // .catch((err) => {
//       // })
//       // .finally(() => {
//       // })
//     }
//     function startTask(taskToExecute) {
//       return new Promise((resolve, reject) => {
//         taskToExecute.forEach(element => {
//           if (taskExecuting < limit) {
//             // count = count + 1;
//             taskExecuting++;
//             executeTasks(element, resolve);
//           }
//           else {
//             queueTask.push(element);
//           }
//         });
//       })
//     }
//     console.log("**** Start", new Date())
//     startTask(taskArr);
//   }
  
//   executeInParallel(allTasks, 3)
//     .then((data) => {
//       console.log("**** then ", data)
//     })
//     .catch((error) => {
//       console.log("**** error ", error)
//     })



// version with promise type 1

// Execute N task in series with K limit
// Todo to do cleanup and return once only

// maplimit function to execute async task

// const delayFn = (delay) => {
//     return function () {
//         console.log("start ", delay)
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(delay)
//             }, delay)
//         })
//     }
// }
// const allTasks = [
//     delayFn(3000),
//     delayFn(3000),

//     delayFn(1000),
//     delayFn(1000),

//     delayFn(2000),
//     delayFn(2000),
// ];

// const executeInParallel = (allTasks, limit) => {
//     let taskArr = [...allTasks];
//     let results = [];
//     let queueTask = [];
//     let taskExecuting = 0;

//     return new Promise((resolve, reject) => {
//         function executeTasks(eachTasks, res) {
//             eachTasks()
//                 .then((data) => {
//                     taskArr.shift();
//                     results.push(data);
//                     taskExecuting--;
//                     if (results.length < allTasks.length) {
//                         let pendingTask = [...queueTask];
//                         queueTask = [];
//                         startTask(pendingTask)
//                     } else {
//                         console.log("**** finallyyyyyyyyyyy", { time: new Date() }, { results });
//                         resolve(results);
//                         return;
//                     }
//                 })
//         }
//         function startTask(taskToExecute) {
//             // return new Promise((resolve, reject) => {
//             taskToExecute.forEach(element => {
//                 if (taskExecuting < limit) {
//                     taskExecuting++;
//                     executeTasks(element);
//                 }
//                 else {
//                     queueTask.push(element);
//                 }
//             });
//             // })
//         }
//         console.log("**** Start", new Date())
//         startTask(taskArr);
//     })
// }

// executeInParallel(allTasks, 2)
//     .then((data) => {
//         console.log("**** then ", data)
//     })
//     .catch((error) => {
//         console.log("**** error ", error)
//     })


// version with promise type 2
/*

// Execute N task in series with K limit
// Todo to do cleanup and return once only

// maplimit function to execute async task

const delayFn = (delay) => {
    return function () {
        console.log("start ", delay)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(delay)
            }, delay)
        })
    }
}
const allTasks = [
    delayFn(3000),
    delayFn(3000),

    delayFn(1000),
    delayFn(1000),

    delayFn(2000),
    delayFn(2000),
];

const executeInParallel = (allTasks, limit) => {
    let taskArr = [...allTasks];
    let results = [];
    let queueTask = [];
    let taskExecuting = 0;

    function executeTasks(eachTasks, resolve) {
        eachTasks()
            .then((data) => {
                taskArr.shift();
                results.push(data);
                taskExecuting--;
                if (results.length < allTasks.length) {
                    let pendingTask = [...queueTask];
                    queueTask = [];
                    startTask(pendingTask, resolve)
                } else {
                    console.log("**** finallyyyyyyyyyyy", { time: new Date() }, { results });
                    resolve(results);
                    return;
                }
            })
    }
    function startTask(taskToExecute, resolve) {
        // return new Promise((resolve, reject) => {
        taskToExecute.forEach(element => {
            if (taskExecuting < limit) {
                taskExecuting++;
                executeTasks(element, resolve);
            }
            else {
                queueTask.push(element);
            }
        });
        // })
    }

    return new Promise((resolve, reject) => {
        startTask(taskArr, resolve);
    })
}

executeInParallel(allTasks, 2)
    .then((data) => {
        console.log("**** then ", data)
    })
    .catch((error) => {
        console.log("**** error ", error)
    })
*/






