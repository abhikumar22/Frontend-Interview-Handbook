````
// Queue custom class
class Queue {
    constructor() {
        this.items = [];
    }

    // Adding element to the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Removing element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    // Front element of the queue
    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    }

    // Checking if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Helper function to print the queue
    printQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

function strManipulation(arrStr){
    const queue = new Queue();
    let resultStr = '';

    // iterating str array and adding it to queue
    function addStrToQueue(){
        arrStr.forEach(element => {
            queue.enqueue(element);
        });
    }

    // Executor fn
    function startManipulation(){

        addStrToQueue();

        // loop executed till the quue is empty
        while(!queue.isEmpty()){

            // taking each string by dequeue and slicing first char, and adding aging in queue
            let currStr = queue.dequeue();
            resultStr = resultStr + currStr[0];
            currStr = currStr.slice(1, currStr.length);
            if(currStr){
                queue.enqueue(currStr);
            }
        }
    }

    startManipulation();
    return resultStr;
}


const strArr = ["abhi","johny","kalastar"];
let res = strManipulation(strArr);
console.log("*** res",res) // ajkboahhlinaystar

const strArr2 = ["abhi","kalastar"];
let res2 = strManipulation(strArr2);
console.log("*** res",res2) // akbahliastar
````
