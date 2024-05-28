// let array = [4, 2, 6, 22, 222, 1, 32];

// outer lopp ele vs inner loop ele

// const selectionSort = (data) => {
//      for (let index = 0; index < data.length; index++) {
//           const element = array[index];
//           for (let j = index + 1; j < data.length; j++) {
//                const element2 = array[j];
//                if (element2 < element) {
//                     let temp = array[index];
//                     array[index] = array[j];
//                     array[j] = temp;
//                }
//           }
//      }
//      return data
// }

// const res = selectionSort(array);
// console.log("**** res", res);
// console.log("**** arr", array);





// let arr = [2, 6, 22, 222, 1, 32, 4, 5];
// inner loop ele vs inner -1 loop ele
// big element is at the last after each pass

// const BubbleSort = (data) => {
//      for (let index = 0; index <= data.length - 1; index++) {
//           for (let j = 0; j <= data.length - 1 - index; j++) {
//                if (data[j - 1] > data[j]) {
//                     let temp = data[j - 1];
//                     data[j - 1] = data[j];
//                     data[j] = temp;
//                }
//           }
//      }
//      return data
// }

// const res = BubbleSort(arr);
// console.log("**** res", res);
// console.log("**** arr", arr);


// quick sort

// const partition = (arr, low, high) => {
//      let pivot = arr[high];
//      let i = low - 1;

//      for (let j = low; j < high; j++) {
//           const element = arr[j];
//           if (element <= pivot) {
//                i = i + 1;
//                [arr[i], arr[j]] = [arr[j], arr[i]]
//           }

//      }
//      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
//      return i + 1


// }

// const quicksort = (arr, low = 0, high = null) => {
//      if (high === null) {
//           high = arr.length;
//      }
//      if (low < high) {
//           pivotEleIndx = partition(arr, low, high);
//           quicksort(arr, low, pivotEleIndx - 1)
//           quicksort(arr, pivotEleIndx + 1, high)
//      }

// }


// let array = [4, 2, 6, 22, 222, 1, 32];
// console.log("**** n", array);

// quicksort(array, 0, array.length - 1);
// console.log("**** n", array);



// Merge Sort

const mergeSort = (arr, low, high) => {
     if (low >= high) return;

     const mid = Math.floor((low + high) / 2); // Correct calculation of mid

     mergeSort(arr, low, mid);
     mergeSort(arr, mid + 1, high);
     merge(arr, low, mid, high);
}

const merge = (arr, low, mid, high) => {
     let left = low;
     let right = mid + 1;
     let newArr = [];
     let index = 0;

     // Merge the two halves into newArr
     while (left <= mid && right <= high) {
          if (arr[left] <= arr[right]) {
               newArr[index++] = arr[left++];
          } else {
               newArr[index++] = arr[right++];
          }
     }

     // Copy any remaining elements of the left half
     while (left <= mid) {
          newArr[index++] = arr[left++];
     }

     // Copy any remaining elements of the right half
     while (right <= high) {
          newArr[index++] = arr[right++];
     }

     // Copy the merged elements back into the original array
     for (let i = 0; i < newArr.length; i++) {
          arr[low + i] = newArr[i];
     }
}

let array = [4, 2, 6, 22, 222, 1, 32];
console.log("**** before", array);

let ress = mergeSort(array, 0, array.length - 1);
console.log("**** after", array);