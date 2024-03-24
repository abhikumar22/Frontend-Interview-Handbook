const task = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const limit = 2;

const throttleFunction = (task, limit, fn) => {
    let count = 0;
    let taskPool = [...task];
    let isBusy = false
    return function () {
        if (!isBusy) {
            isBusy = true;
            if (count === 0) {
                fn(taskPool.splice(0, limit));
                isBusy = false;
                count++;
            } else {
                setTimeout(() => {
                    fn(taskPool.splice(0, limit));
                    isBusy = false;
                    count++;
                }, 2000);
            }
        }
    }
}
const apiCall = (data) => {
    console.log("***** taskPool", data);
}

const betterFunction = throttleFunction(task, limit, apiCall);