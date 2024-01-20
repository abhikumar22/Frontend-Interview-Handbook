function memoize(func) {

    // creating a local cache object to store the results
  
    let localCache = {};
  
    /* creating a function which will help
  
     to cache and compute result
  
    */
  
    function cacheHandler(...args) {
  
      // creating a string with the args passed to make unique cache key
  
      let allArgs;
  
      // creating different logic for object as deepcheck required
  
      if (typeof args[0] === 'object') {
  
        // sorting keys so that to create unique key for currentKEy
  
        const keys = Object.keys(args[0]).sort().join('');
  
        const values = Object.values(args[0]).sort().join('');
  
        allArgs = `${keys}_${values}`;
  
      } else {
  
        allArgs = JSON.stringify(args);
  
      }
  
  
  
      // checking if the result is there in the cache
  
      const cacheRes = localCache[allArgs];
  
  
  
      // if cache have the result then return the result
  
      if (localCache.hasOwnProperty(allArgs)) {
  
        console.log("// from cache")
  
        return cacheRes
  
      } else {
  
        // otherwise compute the result and update the cache and return
  
        console.log("// from computation")
  
        const result = func(...args);
  
        // clearing local cache as only recent cache is memoized
  
        localCache = {};
  
        localCache[allArgs] = result;
  
        return result;
  
      }
  
    }
  
  
  
    /* 
  
      Attaching a function clear to existing function cacheHandler
  
      this will help to clear the local cache object
  
    */
  
    cacheHandler.clear = function () {
  
      localCache = {};
  
    }
  
  
  
    return cacheHandler;
  
  
  
  }
  
  
  
  // ==============================
  
  // Test suite #1 - Only most recent result is memoized
  
  
  
  function square(x) {
  
    // console.log(`computing ${x} * ${x}`);
  
    return x * x;
  
  }
  
  
  
  const memoizedSquare = memoize(square);
  
  
  
  memoizedSquare(1); // from computation
  
  memoizedSquare(1); // from cache
  
  memoizedSquare(2); // from computation
  
  memoizedSquare(2); // from cache
  
  memoizedSquare(1); // from computation
  
  
  
  
  
  // ==============================
  
  // Test suite #2 - Can clear memoized result
  
  // 2. Can clear memoized result
  
  
  
  memoizedSquare(3); // from computation
  
  memoizedSquare(3); // from cache
  
  memoizedSquare.clear();
  
  memoizedSquare(3); // from computation
  
  
  
  
  
  // ==============================
  
  // Test suite #3 - Works with arbitrary number of arguments (4 in this example)
  
  
  
  function sum(a, b, c, d) {
  
    // console.log(`computing ${a} + ${b} + ${c} + ${d}`);
  
    return a + b + c + d;
  
  }
  
  
  
  const memoizedSum = memoize(sum);
  
  
  
  memoizedSum(1, 2, 3, 4); // from computation
  
  memoizedSum(1, 2, 3, 4); // from cache
  
  memoizedSum(2, 1, 3, 4); // from computation
  
  
  
  // ==============================
  
  // Test suite #4 - Non-primitive arguments are compared by deep equality
  
  
  
  function compare(obj) {
  
    // console.log(`comparing ${obj.a} and ${obj.b}`);
  
    return obj.a > obj.b;
  
  }
  
  
  
  const memoizedCompare = memoize(compare);
  
  
  
  memoizedCompare({ a: 1, b: 2 }); // from computation
  
  memoizedCompare({ a: 1, b: 2 }); // from cache
  
  memoizedCompare({ b: 2, a: 1 }); // from cache
  
  memoizedCompare({ b: 3, a: 1 }); // from computation