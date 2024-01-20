

// custom promise
/*
this.data = ? bears data of each promise chain
this.state = pending|fulfilled|rejected
executor(resolve,reject)
resolve
// exec all then handlers
reject
// exec all reject handlers
then
catch
finally
// always executed


*/



const first = () => {
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
            reject("First")
        // }, 4000);
    })
}

const second = () => {
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
        //     resolve("33")
        // }, 3000);
        reject("33")
    })
}

const third = () => {
    return new Promise((resolve, reject) => {
        resolve("Third")
    })
}


// PRomise All settled always gives all the result even if any promise is rejected
/* custom Promise.allsettled without using async await
*/
function customPromiseAllSettled(promises) {
    const res = [];
    let count = 0;
    function checkIfCompleted() {
        return count === promises.length;
    }
    return new Promise((resolve, reject) => {
        promises.forEach((currPromise, indx) => {
            currPromise.then((data) => {
                res[indx] = {
                    status: "Fulfilled",
                    value: data
                };
                count++
                if (checkIfCompleted()) {
                    resolve(res)
                }
            })
                .catch((err) => {
                    res[indx] = {
                        status: "Rejected",
                        value: err
                    };
                    count++
                    if (checkIfCompleted()) {
                        resolve(res)
                    }
                })
        });
    })
}
// Promise.allSettled([first(),second(),third()]).then((res)=>{
// console.log("res",res)
// })
customPromiseAllSettled([first(), second(), third()]).then((dd) => {
    console.log(dd)
})

// /* custom Promise.allsettled without using async await
// */





// /* custom Promise.allsettled with using aysnc await
// */

// function customPromiseAllSettled(promises) {
//     let count = 0;
//     let res = [];

//     return new Promise((resolve, reject) => {
//         promises.forEach(async(currPromise, indx) => {
//             try {
//                 let result = await currPromise;
//                 res[indx] = {
//                     status: "Fulfilled",
//                     value: result
//                 };
//                 count++;
//             } catch (error) {
//                 res[indx] = {
//                     status: "Rejected",
//                     value: error
//                 };
//                 count++;
//             }
//             if(count===promises.length){
//                 resolve(res);
//             }
//         });
//     })
// }

// customPromiseAllSettled([first(), second(), third()]).then((dd) => {
//     console.log(dd)
// })


// /* custom Promise.allsettled with using aysnc await
// */






// /* Custom Promise.all */
// PRomise All
// - all res if all is success
// - give rected promise if any one is not resolved


// function customPromiseAll(promises) {
//     let count = 0;
//     let res = [];

//     return new Promise((resolve, reject) => {
//         promises.forEach((currEle, indx) => {
//             currEle
//                 .then((data) => {
//                     res[indx] = data;
//                     count++;
//                     if(count===promises.length){
//                         resolve(res); 
//                     }
//                 }).catch((data) => {
//                     count++;
//                     reject(data);
//                 })
//         });
//     })

// }
// customPromiseAll([first(),second(),third()])
// .then((data)=>{
// console.log("data",data)
// }).catch((error)=>{
//     console.log("error",error)
// })
// /* Custom Promise.all */




// // /* Custom Promise.race */
// // Returns a single promise that resolves 
// // when all promises in the iterable have resolved or rejects
// //  when any promise in the iterable is rejected.

// function customPromiseRace(promises) {
//     return new Promise((resolve, reject) => {
//         promises.forEach(currPromise => {
//             currPromise
//                 .then((data) => {
//                     resolve(data)
//                 }).catch((err) => {
//                     reject(err)
//                 })
//         });
//     })
// }

// customPromiseRace([first(),second(),third()])
// .then((data)=>{
// console.log("data",data)
// }).catch((error)=>{
//     console.log("error",error)
// })

// // /* Custom Promise.race */




// /* Custom Promise.any */
// Returns a single promise that resolves 
// when at least one promise in the iterable resolves.
//  It rejects only if all promises in the iterable reject.

// function customPromiseAny(promises) {
//     let count = 0;
//     let res = [];
//     return new Promise((resolve, reject) => {
//         promises.forEach(currPromise => {
//             currPromise
//                 .then((data) => {
//                     resolve(data)
//                 }).catch((err) => {
//                     count++;
//                     if(count===promises.length){
//                         reject("new Agg promise");
//                     }
//                 })
//         });
//     })
// }
// customPromiseAny([first(),second(),third()]).then((data)=>{
// console.log("data",data)
// }).catch((err)=>{
//     console.log("err",err)

// })

