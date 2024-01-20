function infiniteCurr(a) {
    return function (b) {
        if (!b) {
            return a;
        }
        return infiniteCurr(a * b)
    }
};
console.log(infiniteCurr(2)(3)(5)())