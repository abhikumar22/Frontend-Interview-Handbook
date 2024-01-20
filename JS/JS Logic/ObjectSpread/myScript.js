// object spread
let obj = {
    name: "abhi",
    address: {
        add1: "add1",
        add2: "add2",
    },
    cities: {
        city1: ""
    },
    add5: "add1",
    add8: "add2",
};
function objSpread(custObj, bulk = '') {
    let finalObj = {};
    let keyys = Object.keys(custObj); // name, address, cities
    let index = 0;
    while (index < keyys.length) {
        let currKey = keyys[index];
        if (typeof custObj[currKey] != 'object') {
            finalObj[`${(bulk && `${bulk}_`)}${currKey}`] = custObj[currKey];
        } else {
            finalObj = {
                ...finalObj,
                ...objSpread(custObj[currKey], currKey),
            }
        }
        index++;
    }
    return finalObj;
}
const kk = objSpread(obj);
// Result
kk = {
    "name": "abhi",
    "address_add1": "add1",
    "address_add2": "add2",
    "cities_city1": "",
    "add5": "add1",
    "add8": "add2"
  }