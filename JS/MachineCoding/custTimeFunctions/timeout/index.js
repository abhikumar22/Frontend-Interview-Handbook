function timeoutHandler() {
    let time1;
    function setTimeoutTime(cbc, limit) {
        time1 = new Date();
        function recursiveWork() {
            if (!time1) {
                return;
            }
            let time2 = new Date();
            let diff = time2.getTime() - time1.getTime();
            if (Math.floor(diff / limit) === 1) {
                return cbc();
            } else {
                window.requestIdleCallback(() => {
                    recursiveWork()
                })
            }
        }
        window.requestIdleCallback(() => {
            recursiveWork()
        })
    }
    setTimeoutTime.clearCustTimeout = function () {
        time1 = null;
        return;
    }
    return setTimeoutTime;
}

let setTimeoutTime = timeoutHandler();
setTimeoutTime(() => {
    console.log("hello")
}, 4000)

// clearing timeout after 2 sec.
// so, callback will not be triggered after 4 sec
setTimeout(() => {
    setTimeoutTime.clearCustTimeout()
}, 2000);