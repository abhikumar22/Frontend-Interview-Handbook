function throttlefn (fn, delay) {
    // setting inital isbusy to false
    let isBusy = false;
    return function () {
        let context = this,
            args = arguments;
        // checking if the function call free then only call the below code
        if (!isBusy) {
            isBusy = true;
            setTimeout(() => {
                fn.apply(context, arguments);
                isBusy = false;
            }, delay);
        }

    }

}

const isClickedafterDelay = () => {
    console.log("yesssss!!!!!");
}


const magicFn = throttlefn(isClickedafterDelay, 2000);