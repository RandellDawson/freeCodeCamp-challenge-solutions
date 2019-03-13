/*
Algorithms: Implement Insertion Sort
The next sorting method we'll look at is insertion sort. This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.

Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

Note:
We are calling this function from behind the scenes; the test array we are using is commented out in the editor. Try logging array to see your sorting algorithm in action!
*/

function insertionSort(arr) {
  for (let i=1; i < arr.length; i++) {
    let tempVal = arr[i];
    let tempIndex = i;
    while (tempIndex > 0 && tempVal < arr[tempIndex-1]) {
      arr[tempIndex] = arr[tempIndex -1];
      tempIndex--;
    }
    arr[tempIndex] = tempVal
  }
  return arr;
}
