// /*
//     Merge two sorted array
//     a = [1, 12, 34, 45, 78]
//     b = [4, 5, 8, 9, 23, 34, 50]
// */
// const a = [1, 12, 34, 45, 78];
// const b = [1, 4, 5, 8, 9, 23, 34, 50];
// const mergedArr = [];
// let pointer1 = 0;
// let pointer2 = 0;
// // condition so that both array is consumed
// while ((pointer1 < a.length) && (pointer2<b.length)){
//     if(a[pointer1]<b[pointer2]){
//         mergedArr.push(a[pointer1++])
//     }else{
//         mergedArr.push(b[pointer2++])
//     }
// }
// console.log(mergedArr);



// /*
//    Two sum
//     a = [1, 12, 34, 45, 78]
//     b = [4, 5, 8, 9, 23, 34, 50]
//     Sol: 
//     1. sort array (insertion sort)
// */
// const a = [12, 1, 6, 34, 78, 9, 45];
// function insertionSort(a) {
//     for (let pointer1 = 1; pointer1 < a.length; pointer1++) {
//         let key = a[pointer1];
//         let temp = pointer1;

//         while (temp > 0 && key < a[temp - 1]) {
//             a[temp] = a[temp - 1];
//             temp = temp - 1;
//         }

//         a[temp] = key;
//     }
// }
// function findTwoSum(arr, target) {
//     let point1 = 0;
//     let point2 = arr.length;
//     let found = -1;
//     while (point1 < point2) {
//         if (arr[point1] + arr[point2] === target) {
//             found = 1;
//             break;
//         }
//         if (arr[point1] + arr[point2] < target) {
//             point1++;
//         } else {
//             point2--;
//         }
//     }
//     if (found === 1) {
//         return [arr[point1], arr[point2]]
//     } else {
//         return found
//     }
// }
// insertionSort(a);
// const res = findTwoSum(a, 10);
// console.log(res); 


// // // binary search
// // const a = [4, 5, 8, 9, 23, 34, 50];

// function binarySearch(arr, target) {
//    console.log(arr);
//     let low = 0;
//     let high = arr.length;
//     let found = -1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//         if (arr[mid] === target) {
//             found = mid;
//             break;
//         }
//         else if (arr[mid] < target) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }
//     return found
// }
// // const res = binarySearch(a, 23);
// // console.log(res);



// [4,5,6,7,1,2,3]
// const arr = [4, 5, 6, 7, 1, 2, 3]

// function pivotElement(ar) {
//     let found = -1;
//     for (let index = 0; index < ar.length; index++) {
//         let element = ar[index];
//         let left = index === 0 ? ar.length - 1 : index - 1
//         let right = index === ar.length - 1 ? 0 : index + 1
//         // console.log(ar[left], ar[element], ar[right]);
//         if (ar[left] < element && ar[right] < element) {
//             found = index;
//             break;
//         }

//     }
//     return found;
// }
// const target = 22;
// const res = pivotElement(arr);
// const isAvailaible = binarySearch(arr.slice(0, res),target) && binarySearch(arr.slice(res, arr.length), target);
// console.log(isAvailaible);


// let array = [4, 5, 6, 7, 7, 8];
// Kala t shirt to dublicate pointer..


// let arr = [4,1,22,34,2,89,9];
// // bubble sort 

// for (let index = 0; index < arr.length; index++) {
//     const element = array[index];

//     for (let index2 = index; index2 < arr.length; index2++) {
//         const element2 = array[index2];
//         if(element<element2){
//             let temp = element;
//             element = ele
//         }
//     }

// }

const nLength = 6;
function fibonacciSeries(dataArr) {
    let index = 0;
    let finalArr = [];
    while (index <= dataArr) {
        if(index===0){
            finalArr.push(0)
        }else if(index===1){
            finalArr.push(1)
        }else{

        }
    }

}

const res = fibonacciSeries(nLength);

