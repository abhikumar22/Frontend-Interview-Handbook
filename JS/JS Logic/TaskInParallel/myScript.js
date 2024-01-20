// // const asyncTask = [
// //     () => {setTimeout(() => {
// //         Promise.resolve('first')
// //     }, 1000)},
// //     () => Promise.resolve('second'),
// //     () => Promise.resolve('third'),
// //     () => {setTimeout(() => {
// //         Promise.resolve('fourth')
// //     }, 1000)},
// // ];

// // const solver = async (task) => {
// //     if (!task) {
// //         console.log('')
// //     }
// //     let i = 0;
// //     while (i < task.length) {
// //         console.log("* task[i]",task[i]);
// //         task[i].then((d)=>{
// //             console.log(d)
// //         })
// //         i++;
// //     }
// // }
// // solver(asyncTask);


// const orgObj = {
//     name: "abhishek",
//     phone: {
//         first: 1234,
//         second: 1122,
//         third: 5555
//     },
//     address: {
//         home: "ckp",
//         work: {
//             delhi: {
//                 first: 'saket',
//                 second: 'dwarka'
//             }
//         }
//     }
// };
// const ObjMassager = (obj,key = '') => {
//     const objKeys = Object.keys(obj);
//     let res = {};
//     for (let index = 0; index < objKeys.length; index++) {
//         const element = objKeys[index];
//         if( typeof obj[element] !=='object'){
//             let temp = {};
//             temp[key?`${key}.${element}`:element] = obj[element];
//             res = {
//                 ...temp,
//                 ...res,
//             }
//         }else{
//             res = {
//                 ...res,
//                 ...ObjMassager(obj[element],element),
//             }
//         }

//     }
//     return res;
// }
// console.log(ObjMassager(orgObj))

const first = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("first"); 
        }, 200);
    })
}
const second = () => {
    return new Promise((resolve, reject) => {
        resolve("second");
    })
}
const third = () => {
    return new Promise((resolve, reject) => {
        resolve("third");
    })
}

function parallel(promises) {
    let res = [];
    let count = 0;
    return new Promise((resolve, reject) => {
        promises.map((currPromise,indx)=>{
            currPromise.then((data)=>{
                res.push(data)
                count++
                if(count===promises.length) resolve(res)
            }).catch((err)=>{
                res.push(data)
                count++
                if(count===promises.length) resolve(res)
            })
        })
    })
}
parallel([first(),second(),third()]).then((res)=>{
    console.log("res",res)
})
