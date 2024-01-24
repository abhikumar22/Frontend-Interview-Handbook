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