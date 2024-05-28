/* DSA LOGIC

// flatten array
// flatten object

// Second largest no or kth largest elemnt..... heap
// -> using two vairble
// -> sort and get 2nd element-> time-> sort(Onlogn)

// reverse word in sentence
// reverse a linked list
// binary search (rotated sorted array search)
// -> [1,2,3,4,5,6,7] 
// -> [4,5,6,7,1,2,3] -> need to find out elemt is present and the index
// sol-> 
// - need to find the pivot element (a...x...b) a nd b sholub be greater than x
// - [7,8,9,1,2,3,4,5,6] -> mid - 2... since 2 is smaller then 7 then goto Left
// - [4,5,6,7,1,2,3] -> mid - 7.. since 7 is greater than 4 then goto right
// - 2 binary search, if two search return -1 then return -1
// - Olog(n)+Olog(n) = 2(Olog(n)) = Olog(n)

// insertion sort
// selection sort
// bubble sort


// find missing integer in non-repeating array
// arr = [1,2,3,4,5,6,8,9] -> this is sorted, then check index
// [5, 3, 6, 1, 8, 4, 2, 9, 7] 
// -> sum(1..n) = n*n+1/2 = 45
// [5, 3, 6, 1, 8, 2, 9, 7] = 41
// now 45-41=4-> anser

// Variant 2 -> [5, 3, 6, 1, 8, 3, 2, 9, 7] = 
// 45 -44 = 1
//  missing and repetating integer

[1000, 5000, 2000] -> sol 1
[2, 1, 9] -> 3

traverse -> operation should be on (x< Array.length)


// two sum
[4,6,2,33,65,1] -> 35
sol:-
- sort array, ascending 
[1,2,4,6,33,65] -> 35

low=0..high=5
1+65 -> 66>35....high=high-1 = 4 (if we increse low then sum will be more greater)
same for <


// three sum


// merge 2 sorted LL or array

LOGIC Ends


*/


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

// const nLength = 6;
// function fibonacciSeries(dataArr) {
//     let index = 0;
//     let finalArr = [];
//     while (index <= dataArr) {
//         if(index===0){
//             finalArr.push(0)
//         }else if(index===1){
//             finalArr.push(1)
//         }else{

//         }
//     }

// }

// const res = fibonacciSeries(nLength);


// If number present then return Index
// otherwise return the index it should be
// const arr2 = [1, 4, 6, 7, 8, 11]
// const target = 2;

// const getTargetIndex = (arr, targetElement) => {
//     let lower = 0;
//     let higher = arr.length - 1;
//     let finalEle = null;
//     let mid;
//     while (lower <= higher) {
//         mid = Math.floor((lower + higher) / 2);
//         if (arr[mid] === targetElement) {
//             finalEle = mid;
//             break;
//         }
//          if (arr[mid] > target) {
//             higher = mid - 1
//         } else {
//             lower = mid + 1
//         }
//     }
//     if (finalEle === null) {
//         finalEle = mid;
//     }
//     return finalEle;
// };

// const result = getTargetIndex(arr2, target);
// console.log(result);

// Design function compose
// const square = (x) => x * x;
// const sum10 = (x) => x + 10;

// const compose = (...fns)=>{
//     let result = 1;
//     return function(x){
//         fns.forEach((currFn,indx)=>{
//             if(indx===0){
//                 result = currFn(x);
//             }else{
//                 result = currFn(result);
//             }
//         })
//     }
// }

// const composeJS = compose(square,sum10,sum10);
// const res = composeJS(20);


// remove all string and its keys if empty
// sample res = {"a":2,"k":{"a":2,"ap":44,"kk":{"ap":44,"j":{"d":{"kk":68}}}}}
// const objj = {
//     a: 2,
//     k: {
//       ap: 44,
//       kk: {
//         j: {
//           d: {
//             kk: 68,
//             k: 'sttt'
//           }
//         }
//       }
//     }
//   };
//   const massageObj = (obj) => {
//     let finalObj = {};
//     for (const k in obj) {
//       const currentValue = obj[k];
  
//       if (typeof obj[k] === 'number') {
//         finalObj[k] = currentValue;
//       }
  
//       if (typeof obj[k] != 'number'
//         && typeof currentValue === 'object'
//         && !Array.isArray(currentValue)
//       ) {
//         const res = massageObj(currentValue);
//         if (Object.keys(res).length > 0) {
//           finalObj[k] = {
//             ...finalObj,
//             ...massageObj(currentValue)
//           }
//         }
//       }
//     }
//     return finalObj
//   }
  
//   console.log(massageObj(objj))


// Deepclone
// Logic to iterate each element and add if for all cases, like numbers, string etc

// const obj = {
//     a: 123,
//     b: [4, 1, 2],
//     c: {
//       ff: {
//         name: "abhishek",
//         address: {
//           first: "delhi",
//           second: "ckp"
//         }
//       }
//     }
//   };
  
//   const deepclone = (objj) => {
//     let finalObj = {};
//     for (objKey in objj) {
  
//       let currValue = objj[objKey];
//       let typeOfObj = typeof currValue;
  
//       if (typeOfObj === 'object' && !Array.isArray(currValue)) {
//         finalObj[objKey] = deepclone(currValue);
//       }
  
//       if (typeOfObj === 'object' && Array.isArray(currValue)) {
//         finalObj[objKey] = currValue.map((x) => x);
//       }
  
//       if (typeOfObj === 'string' || typeOfObj === 'number') {
//         finalObj[objKey] = currValue;
//       }
  
//     }
//     return finalObj;
//   }
  
//   console.log(deepclone(obj))



/*

             0 1  2 3  4 5 6 7
int[] arr = [4,2,-5,5,-1,2,3,4,1]


for(int i = 0; i < arr.length ; i++){
     int idx = Math.abs(arr[i]);
     ar[idx] = -arr[idx];  
}

------------------
1....Find first missing integer
------------------

 [5,7,2,1,3,4,6]
 
 
 [1,2,hh3,4,5,6,7]
 
brute force
sort - O(nlogn)  merge sort ya randomised quick sort  
iteratuon and check difference of i & i+1...if greater than 1 then return that no i.,e...2

- iterate,,,,match with index and get the number

Find missing number 1-n
                 0.  1.   2   3. 4   5.  6
 Input: arr[] = {-1, -2, -4, -6, 3, -7, -8} , N = 8
 
 O(n) + O(n) = 2O(n) = O(n)

So in first iteration, make all index-1 number as negative.
in second iteration, find positive number and check the index+1, that will be missing, as that number is not been -ve in the first iteration
    
 
 
 for(int i = 0; i < arr.length ; i++){
     int idx = Math.abs(arr[i]);
     ar[idx] = -arr[idx];  
}

 |||||| If Space complexity (we need check index) |||||| 


 0.  1.  2.  3   4. 5  6
[-7, 4, 11, -6, 10, 5, 9] - 8
high = 11
low = 4



+++++++++++++++++++
[3, 1, 5, 2, 6, 4]
10 


[1, 2, 3, 4, 5, 6]

low = 3
high = 5

nlogn
if space is allow, then use hashmap and chekc the difference

+++++++++++++++++++

sliding window
,
abhisghjkhek

ish








*/