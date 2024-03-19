// /*
//     Merge two sorted array
//     a = [1, 12, 34, 45, 78]
//     b = [4, 5, 8, 9, 23, 34, 50]
// */
// const a = [1, 12, 34, 45, 78];
// const b = [1, 4, 5, 8, 9, 23, 34, 50];
// const mergedArr = [];
// let pointer1 = 0;
// let pointer2 = 0;
// // condition so that both array is consumed
// while ((pointer1 < a.length) && (pointer2<b.length)){
//     if(a[pointer1]<b[pointer2]){
//         mergedArr.push(a[pointer1++])
//     }else{
//         mergedArr.push(b[pointer2++])
//     }
// }
// console.log(mergedArr);



// /*
//    Two sum
//     a = [1, 12, 34, 45, 78]
//     b = [4, 5, 8, 9, 23, 34, 50]
//     Sol: 
//     1. sort array (insertion sort)
// */
// const a = [12, 1, 6, 34, 78, 9, 45];
// function insertionSort(a) {
//     for (let pointer1 = 1; pointer1 < a.length; pointer1++) {
//         let key = a[pointer1];
//         let temp = pointer1;

//         while (temp > 0 && key < a[temp - 1]) {
//             a[temp] = a[temp - 1];
//             temp = temp - 1;
//         }

//         a[temp] = key;
//     }
// }
// function findTwoSum(arr, target) {
//     let point1 = 0;
//     let point2 = arr.length;
//     let found = -1;
//     while (point1 < point2) {
//         if (arr[point1] + arr[point2] === target) {
//             found = 1;
//             break;
//         }
//         if (arr[point1] + arr[point2] < target) {
//             point1++;
//         } else {
//             point2--;
//         }
//     }
//     if (found === 1) {
//         return [arr[point1], arr[point2]]
//     } else {
//         return found
//     }
// }
// insertionSort(a);
// const res = findTwoSum(a, 10);
// console.log(res); 


// // // binary search
// // const a = [4, 5, 8, 9, 23, 34, 50];

// function binarySearch(arr, target) {
//    console.log(arr);
//     let low = 0;
//     let high = arr.length;
//     let found = -1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//         if (arr[mid] === target) {
//             found = mid;
//             break;
//         }
//         else if (arr[mid] < target) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }
//     return found
// }
// // const res = binarySearch(a, 23);
// // console.log(res);



// [4,5,6,7,1,2,3]
// const arr = [4, 5, 6, 7, 1, 2, 3]

// function pivotElement(ar) {
//     let found = -1;
//     for (let index = 0; index < ar.length; index++) {
//         let element = ar[index];
//         let left = index === 0 ? ar.length - 1 : index - 1
//         let right = index === ar.length - 1 ? 0 : index + 1
//         // console.log(ar[left], ar[element], ar[right]);
//         if (ar[left] < element && ar[right] < element) {
//             found = index;
//             break;
//         }

//     }
//     return found;
// }
// const target = 22;
// const res = pivotElement(arr);
// const isAvailaible = binarySearch(arr.slice(0, res),target) && binarySearch(arr.slice(res, arr.length), target);
// console.log(isAvailaible);


// let array = [4, 5, 6, 7, 7, 8];
// Kala t shirt to dublicate pointer..


// let arr = [4,1,22,34,2,89,9];
// // bubble sort 

// for (let index = 0; index < arr.length; index++) {
//     const element = array[index];

//     for (let index2 = index; index2 < arr.length; index2++) {
//         const element2 = array[index2];
//         if(element<element2){
//             let temp = element;
//             element = ele
//         }
//     }

// }

// const nLength = 6;
// function fibonacciSeries(dataArr) {
//     let index = 0;
//     let finalArr = [];
//     while (index <= dataArr) {
//         if(index===0){
//             finalArr.push(0)
//         }else if(index===1){
//             finalArr.push(1)
//         }else{

//         }
//     }

// }

// const res = fibonacciSeries(nLength);


// If number present then return Index
// otherwise return the index it should be
// const arr2 = [1, 4, 6, 7, 8, 11]
// const target = 2;

// const getTargetIndex = (arr, targetElement) => {
//     let lower = 0;
//     let higher = arr.length - 1;
//     let finalEle = null;
//     let mid;
//     while (lower <= higher) {
//         mid = Math.floor((lower + higher) / 2);
//         if (arr[mid] === targetElement) {
//             finalEle = mid;
//             break;
//         }
//          if (arr[mid] > target) {
//             higher = mid - 1
//         } else {
//             lower = mid + 1
//         }
//     }
//     if (finalEle === null) {
//         finalEle = mid;
//     }
//     return finalEle;
// };

// const result = getTargetIndex(arr2, target);
// console.log(result);

// Design function compose
// const square = (x) => x * x;
// const sum10 = (x) => x + 10;

// const compose = (...fns)=>{
//     let result = 1;
//     return function(x){
//         fns.forEach((currFn,indx)=>{
//             if(indx===0){
//                 result = currFn(x);
//             }else{
//                 result = currFn(result);
//             }
//         })
//     }
// }

// const composeJS = compose(square,sum10,sum10);
// const res = composeJS(20);


// remove all string and its keys if empty
// sample res = {"a":2,"k":{"a":2,"ap":44,"kk":{"ap":44,"j":{"d":{"kk":68}}}}}
// const objj = {
//     a: 2,
//     k: {
//       ap: 44,
//       kk: {
//         j: {
//           d: {
//             kk: 68,
//             k: 'sttt'
//           }
//         }
//       }
//     }
//   };
//   const massageObj = (obj) => {
//     let finalObj = {};
//     for (const k in obj) {
//       const currentValue = obj[k];
  
//       if (typeof obj[k] === 'number') {
//         finalObj[k] = currentValue;
//       }
  
//       if (typeof obj[k] != 'number'
//         && typeof currentValue === 'object'
//         && !Array.isArray(currentValue)
//       ) {
//         const res = massageObj(currentValue);
//         if (Object.keys(res).length > 0) {
//           finalObj[k] = {
//             ...finalObj,
//             ...massageObj(currentValue)
//           }
//         }
//       }
//     }
//     return finalObj
//   }
  
//   console.log(massageObj(objj))


// Deepclone
// Logic to iterate each element and add if for all cases, like numbers, string etc

// const obj = {
//     a: 123,
//     b: [4, 1, 2],
//     c: {
//       ff: {
//         name: "abhishek",
//         address: {
//           first: "delhi",
//           second: "ckp"
//         }
//       }
//     }
//   };
  
//   const deepclone = (objj) => {
//     let finalObj = {};
//     for (objKey in objj) {
  
//       let currValue = objj[objKey];
//       let typeOfObj = typeof currValue;
  
//       if (typeOfObj === 'object' && !Array.isArray(currValue)) {
//         finalObj[objKey] = deepclone(currValue);
//       }
  
//       if (typeOfObj === 'object' && Array.isArray(currValue)) {
//         finalObj[objKey] = currValue.map((x) => x);
//       }
  
//       if (typeOfObj === 'string' || typeOfObj === 'number') {
//         finalObj[objKey] = currValue;
//       }
  
//     }
//     return finalObj;
//   }
  
//   console.log(deepclone(obj))



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



/**
 * 
 * 
 * 
 * 
 * MAplimit
 * 
 * 
 * 
 * const newArr = [1, 2, 3, 4, 5, 6]
const asycnBatchLimit = 2;
// const newArr2 = [[1, 2], [3, 4], [5, 6]]

const asyncFunction = (x) => {
    // return () => {
    return new Promise((resolve, reject) => {
        console.log("**** start", x);
        setTimeout(() => {
            reject(x * 2)
        }, 2000);
    })
    // }
}


function customMap(arr, asyncLimit, fn, cbc) {
    function createBatch(arrList, limit) {
        let arrayInitial = [...arrList];
        let batches = [];
        let count = 0;
        let temp = [];

        while ((arrayInitial.length > 0) || temp.length > 0) {
            if (count === limit) {
                batches.push(temp)
                temp = [];
                count = 0;
            } else {
                let ele = arrayInitial.shift();
                if (ele) {
                    temp.push(ele);
                }
                count++;
            }
        }

        return batches;

    }
    let result = [];
    let finalArr = createBatch(arr, asyncLimit); // [[1, 2], [3, 4], [5, 6]]



    function executeTask(currBatch) { //[1, 2]
        let count = 0;
        let currBatchResponse = [];
        return new Promise((resolve, reject) => {
            while (count < currBatch.length) {
                fn(currBatch[count]).then((data) => {
                    currBatchResponse.push(data);
                    if (currBatchResponse.length === currBatch.length) {
                        resolve(currBatchResponse);
                    }
                }).catch((err)=>{
                    reject(err);
                })
                count++;
            };
        })
    };

    async function startTask(arrList) {
        let count = 0;
        while (count < arrList.length) {
            let currentBatch = arrList[count];
            let res;
            try {
                res = await executeTask(currentBatch);
            } catch (error) {
                cbc(error);
                return;
            }
            result.push(...res);
            count++;
        }
        cbc(false,result);

    }

    startTask(finalArr);



}

customMap(newArr, asycnBatchLimit, asyncFunction, (err, result) => {
    if (!err) {
        console.log("success", result)
    } else {
        console.log("error", err)
    }
})
 */