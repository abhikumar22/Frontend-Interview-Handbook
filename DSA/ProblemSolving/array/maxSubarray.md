
function getMax (arr,k){
    let start = 0;
    let end = k;
    let maxSum = 0;
    let maxSubarray = [];
    let tempSubarry = [];
    let tempSum = 0;
    
    function getSum(){
        let limit=0;
        while(limit<end){
            maxSubarray.push(arr[limit]);
            maxSum = maxSum+arr[limit];
            limit++;
        }
    }
    getSum();
    tempSubarry = [...maxSubarray];
    tempSum = maxSum;
    
    while(end<arr.length){
        let evictedNum = tempSubarry.shift();
        let addedEle = arr[end];
        tempSubarry.push(addedEle);
        tempSum = (tempSum - evictedNum) + addedEle;

        if(maxSum<tempSum){
            maxSubarray = [...tempSubarry];
            maxSum = tempSum;
        }
        end++;
    }
    console.log("***** maxSubarray",{maxSubarray},{maxSum})
}

getMax([2,1,5,1,3,2],3);
getMax([2,3,4,1,5],2);


// TODO time and space complexity