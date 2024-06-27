// Task 1: Using concat()
// Objective: Merge two arrays into one.\



// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6]; // [1, 2, 3, 4, 5, 6]

// let arr1=[1,2,3];
// let arr2=[3,4,5];
// let arr3=arr1.concat(arr2);
// console.log(arr3)

// Task 2: Using flat()
// Objective: Flatten a nested array up to a specific depth.
// const nestedArray = [1, [2, [3, [4]]]]; // [1, 2, 3, [4]]


// let arr = [1, [2, [3, [4]]]];
// let k = arr.flat(2);
// console.log(k);

// Task 3: Using splice()
// Objective: Remove elements from an array and optionally insert new elements.

// // const array = [1, 2, 3, 4, 5]; // [1, 2, 'a', 'b', 5]
// // console.log(); // [3, 4]

// let array = [1, 2, 3, 4, 5];
// let removed= array.splice(2, 2, 'a', 'b');

// console.log(array); // [1, 2, 'a', 'b', 5]
// console.log(removed); // [3, 4]

// Task 4: Using slice()
// Objective: Extract a portion of an array into a new array.

// const array = [1, 2, 3, 4, 5]; // [2, 3, 4]

// const array = [1, 2, 3, 4, 5];
// const newArray = array.slice(1, 4);
// console.log(newArray); // [2, 3, 4]

// Task 5: Using toSpliced()
// Objective: Create a new array with some elements replaced, without modifying the original array.


// // const array = [1, 2, 3, 4, 5];// [1, 'a', 'b', 4, 5]
// // console.log(array); // [1, 2, 3, 4, 5]


// const array = [1, 2, 3, 4, 5];
// const newArray = array.toSpliced(1, 2, 'a', 'b');
// console.log(array); 
// console.log(newArray); 


// Task 6: Using copyWithin()
// Objective: Copy part of an array to another location in the same array.

// const array = [1, 2, 3, 4, 5];
// array.copyWithin(0, 3, 5); 
const array = [1, 2, 3, 4, 5];
array.copyWithin(0, 3, 5);
console.log(array); 


