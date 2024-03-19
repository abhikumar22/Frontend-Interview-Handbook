// Write a function which converts string input into an object
// stringToObject("a.b.c", "someValue");
// output -> {a: {b: {c: "someValue"}}}

function stringToObject(str, finalValue) {
    const strArr = str.split('.');["a,", "b", "c"];
    function depthFn(arr, indx, objRef) {
        // when the length reached then return string
        if (indx === arr.length) {
            return "finalValue"
        }
        // otherwise return object with key as currKey and value as recursive key
        return { [arr[indx]]: depthFn(arr, indx + 1, objRef) };
    }
    return depthFn(strArr, 0, {});
}

const strr = "a.b.c.d";
const finalValuee = "someValue";
const res = stringToObject(strr, finalValuee)
console.log(res)


// TODO do recursive approve to sort and cache it

// "use strict"
const abc = {
    1:{
        name:"abhishek",
        class:'zero'
    },
    2:{
        name:"abhi",
        class:'zero'
    }
};
const xyz = {
    2:{
        class:'zero',
        name:"abhi",
    },
    1:{
        class:'zero',
        name:"abhishek",
    }
};

// const k = [12,3,4,5]
// const k2 = [12,3,4,5]



function getKey(newObj) {
    const kk = {}
    // let str = JSON.stringify(newObj);
    // console.log('****** str',Object.entries(newObj).sort());
    for (const [key, value] of Object.entries(newObj).sort()) {
        kk[key] = value;
      }
    console.log("***** ",JSON.stringify(kk));
}
getKey(abc)
getKey(xyz)
