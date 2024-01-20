const debounceFn = function(fn, delay){
    // timer is initialised outside so that closure can be achieved
    let timer;
    return function () {
        // this and arguments both are for the fn(first argument)
        // 
        let context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context,arguments);
        }, delay);
    }
}

// Function that will be called for API
const apiCall = (params) => {
    // here to do the api call
    console.log("hi",params.target.value)
}


/* 
    Variant 1, 
    call through a function
*/ 
// const magicFn =  debounceFn(apiCall, 1000);


/* 
    Variant 2
    Attach directly to event listner by getting the elementId
*/
document.getElementById('search_input').addEventListener('input',debounceFn(apiCall,400))