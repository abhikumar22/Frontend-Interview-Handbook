/* Variant 1: Iterative Solution */
let arr = [1, [34], [12, 3, [5, 6, [88]], [4]], [77]];


const flattenArray = (orgArr) => {
    const res = [];


    for (let index = 0; index < orgArr.length; index++) {
        const currEle = orgArr[index];

        if (Array.isArray(currEle)) {
            res.push(...flattenArray(currEle));
        } else {
            res.push(currEle)
        }
    }

    return res;
}

// let res = flattenArray(arr);
// console.log(flattenArray(arr))


/* Variant 2: Non-Iterative solution */

let arr2 = [1, [34], [12, 3, [5, 6, [88]], [4]], [77]];

function flatten(value) {
    const res = [];
    const copy = value.slice();
    let k = 0;
    while (copy.length) {
        const item = copy.shift();
        if (Array.isArray(item)) {
            copy.unshift(...item);
        } else {
            res.push(item);
        }
        k++;
    }
    return res;
}

const response = flatten(arr2);
console.log(response)
