// microtask
// - ProcessingInstruction.nextTick()
// - Promise callback
// - async functions
// - queueMicrotask

// Macrotask
// - setTimeout()
// - setInterval()
// - setImmediate()

/* Ques 1 */
if (false) {
    async function waiting() {
        console.log("****** waiting before");
        await check();
        console.log("**** after check in wait");
        setTimeout(() => {
            console.log("**** await callback timoeut");

        }, 1000);
        console.log("**** after check in wait - 2");

    }

    function check() {
        console.log("*** check before");

        setTimeout(() => {
            console.log("*** check timeout");
        }, 1000)
        console.log("*** check after");

    }

    console.log("**** start");
    waiting()

    setTimeout(() => {
        console.log("**** timeout 1");
    }, 1000);

    new Promise((resolve, reject) => {
        console.log("*** resolve before")
        setTimeout(() => {
            console.log("**** timeout 1ddd");
        }, 1000);
        setTimeout(() => {
            console.log("**** timeout resolve before");
            resolve(5)
            console.log("**** timeout resolve after");
        }, 2000);
        console.log("*** resolve after")
    }).then((dd) => {
        console.log("**** then bef");
        setTimeout(() => {
            console.log("**** timeout then");
        }, 1000);
        console.log("**** then", dd);

    })
    console.log("**** end");
}





// **** start
// scr.js:2 ****** waiting before
// scr.js:14 *** check before
// scr.js:19 *** check after
// scr.js:31 *** resolve before
// scr.js:40 *** resolve after
// scr.js:49 **** end
// scr.js:4 **** after check in wait
// scr.js:9 **** after check in wait - 2
// scr.js:17 *** check timeout
// scr.js:27 **** timeout 1
// scr.js:33 **** timeout 1ddd
// scr.js:6 **** await callback timoeut
// scr.js:36 **** timeout resolve before
// scr.js:38 **** timeout resolve after
// scr.js:42 **** then bef
// scr.js:46 **** then 5
// scr.js:44 **** timeout then

/* 
    whenever Added async Await
    - it will run the next right of await first in GEC and prints console.
    - It will hold the after code of await and 
      , it will execute if only after GEC is clear to execute the global line of code 
      , (i.e here it is end...console and other code i.e globally declared)
    - All settimeouts written in GEC are registered and timers of that is running
      , once the GEC is free, it will print one by one the consoles of it

    - .then will only executed, when the promise is resolved 
      , and timeouts inside .then will executed after the time



      */



      // Ques 2
setTimeout(() => {
    console.log("**** Timeout 0")
}, 0);

console.log("**** start");

Promise.resolve().then(()=>{
    console.log("*** then")
})

setTimeout(() => {
    console.log("**** Timeout 1")
}, 0);

console.log("**** end");


/*
start
end
then
Timeout 0
Timeout 1

solutioning :-
because at the same time GEC is free and 
callbackque have Timeout 0 & Timeout 1
Priority Queue / microtask queue will have then
so then cbc is first logged then timeout 0 and 1 in series
*/



/*

Start
end
First timeout
Promise resolved
First promise then
Second timeout
Second promise resolved
Second promise then


console.log("Start");

setTimeout(function() {
  console.log("First timeout");
}, 500);

new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log("Promise resolved");
    resolve();
  }, 1000);
}).then(function() {
  console.log("First promise then");
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log("Second promise resolved");
      resolve();
    }, 500);
  });
}).then(function() {
  console.log("Second promise then");
});

setTimeout(function() {
  console.log("Second timeout");
}, 1500);

console.log("End");




*/