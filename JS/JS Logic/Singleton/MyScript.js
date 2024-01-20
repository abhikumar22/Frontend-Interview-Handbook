(function SingleTon() {
    let instance;

    const createInstance = () => {
        const temp = new Object("My Object is here");
        return temp;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})()

const newObj1 = SingleTon().getInstance();
const newObj2 = SingleTon().getInstance();
console.log(newObj1==newObj2)
console.log(newObj1===newObj2)