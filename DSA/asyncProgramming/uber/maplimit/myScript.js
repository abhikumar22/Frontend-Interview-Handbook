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


/**
 * Type New maplimit to run cbc for each ele
 * 
 * const arr = [1, 2, 3, 4, 5]

const asyncFn = (id, cbc) => {
    const randomRequestTime = Math.floor(Math.random() * 100) + 1000;
    setTimeout(() => {
        cbc(`USER..${id}`);
    }, randomRequestTime);
}
const mapLimit = (inputs, limit, iterateeFn, callback) => {
    const subArrays = (orgArr, limit) => {
        let subArr = [];
        let arr = [...orgArr];
        let tmp = [];
        let count = 0;

        while (arr.length > 0 || tmp.length > 0) {
            if (count === limit) {
                subArr.push(tmp);
                tmp = [];
                count = 0;
            } else {
                let ele = arr.shift()
                if (ele) {
                    tmp.push(ele);
                }
                count++;
            }
        }
        return subArr;
    }
    let arr = [...subArrays(inputs, limit)];
    let results = [];


    async function executeTask(currBatch) {
        let count = 0;
        let res = [];
        return new Promise((resolve, reject) => {
            while (count < currBatch.length) {
                iterateeFn(currBatch[count], (data) => {
                    res.push(data);

                    if (res.length === currBatch.length) {
                        results.push(...res);
                        resolve();
                    }
                })
                count++;
            }
        })

    }
    async function startTasks(allTasks) {
        let arrOrg = [...allTasks];
        while (!!(arrOrg.length > 0)) {
            await executeTask(arrOrg.shift());
            console.log("Each batch result ->>", results);
        }
        callback(results);
    }
    startTasks(arr);
    // return arr;

}
let k = mapLimit(arr, 2, asyncFn, (result) => {
    console.log("****** Result final ::", result);
})


// attemp2

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const mapLimit = (arrList, limit, fn) => {
    const massageArr = (arrNum) => {
        let count = 0;
        let counter = 0;

        let resSubArrs = [];
        let temp = [];
        const checkBreach = () => {
            return !!(temp.length === limit)
        }
        while (counter <= arrNum.length) {
            if (checkBreach() || counter === arrNum.length) {
                resSubArrs.push(temp);
                temp = [];
            }
            console.log("*** hio", count);
            if (count <= limit) {
                temp.push(arrNum[counter]);
                count++;
                if (checkBreach()) {
                    resSubArrs.push(temp);
                    temp = []
                    count = 0;
                }
            }
            counter++;
        };
        return resSubArrs;
    };
    let worker = 0;
    let finalArr = [...massageArr(arrList)];
    let finalResults = [];

    return new Promise((resolve2, reject2) => {
        async function executeTask(currBatch) {
            let counter = 0;
            let currResult = [];

            return new Promise((resolve, reject) => {
                while (counter < currBatch.length) {
                    let num = currBatch[counter];
                    fn(num, function (err, num) {
                        currResult.push(num);

                        if(err){
                            reject("Rejected");
                        }

                        if (currResult.length === currBatch.length) {
                            console.log("**** ", { currResult }, { currBatch });
                            finalResults.push(currResult)
                            resolve(currResult);
                        }
                    })
                    counter++;
                }
            })
        }

        async function startTask(batches) {
            let counter = 0;

            while (counter < batches.length) {
                try {
                    await executeTask(batches[counter]); 
                } catch (error) {
                    reject2("Rejected")
                    return
                }
                counter++
                console.log("**** hi");
            }
            resolve2(finalResults)

        }
        startTask(finalArr);
    })
}

mapLimit(arr, 3, function (num, cbc) {
    const randomRequestTime = Math.floor(Math.random() * 100) + 1000;
    setTimeout(function () {
        num = num + 1;
        console.log("* num",num);
        if(num===2){
            cbc(true, num);
        }else{
            cbc(null, num)
        }
    }, randomRequestTime);
}).then((dd) => {
    console.log("****then", dd);
}).catch((dd) => {
    console.log("****dd", dd);
})


 * 
 * 
 * 
 */