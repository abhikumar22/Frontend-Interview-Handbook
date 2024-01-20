// Format object whose number > 0 || positive number

// let objj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: -3,
//         e: {
//             f: {
//                 g: -4
//             }
//         },
//         h: {
//             i: 5,
//             j: -6
//         }
//     }
// }

// function massageObj(objData) {
//     let finalObj = {};
//     const allKeys = Object.keys(objData);
//     const keysLength = allKeys.length;
//     let index = 0;
//     while (index < keysLength) {
//         let currKey = allKeys[index];
//         let currVal = objData[currKey];
//         // logic to check if number is > 0
//         if (typeof currVal === 'number') {
//             if (currVal > 0) {
//                 finalObj[currKey] = currVal;
//             }
//         } else {
//             /* logic to check if the keys of child is non-empty,
//                 if non-empty....then only attach to parent
//             */
//             /*
//                 E.g.
                
//                     b: {
//                         e: {
//                             f: {
//                                 g: -4
//                             }
//                         }
//                         c: 2,
//                     }

//                 output :-


//                     b: {
//                         c: 2,
//                     }

                
//             */
//             const objj = massageObj(currVal)
//             if (Object.keys(objj).length > 0) {
//                 finalObj[currKey] = massageObj(currVal)
//             }
//         }
//         index++;
//     }
//     return finalObj

// }

// const res = massageObj(objj);
// console.log(res);


// {
//     a: 1,
//         b: {
//         c: 2,
//             h: {
//             i: 5,
//         }
//     }
// }



let obj2 = {
    a: 1,
    b: {
        c: 'Hello World',
        d: 2,
        e: {
            f: {
                g: -4,
            },
        },
        h: 'Good Night Moon',
    },
};

function massageObj2(objData) {
    let finalObj = {};
    const allKeys = Object.keys(objData);
    const keysLength = allKeys.length;
    let index = 0;
    while (index < keysLength) {
        let currKey = allKeys[index];
        let currVal = objData[currKey];
        // logic to check if number is > 0
        if (typeof currVal === 'string') {
            finalObj[currKey] = currVal;
        } else {
            /* logic to check if the keys of child is non-empty,
                if non-empty....then only attach to parent
            */
            const objj = massageObj2(currVal)
            if (Object.keys(objj).length > 0) {
                finalObj[currKey] = massageObj2(currVal)
            }
        }
        index++;
    }
    return finalObj
}

const res2 = massageObj2(obj2);
console.log(res2);

// output
// { b: { c: 'Hello World', h: 'Good Night Moon' } }

