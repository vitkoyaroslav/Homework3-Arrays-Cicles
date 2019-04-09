'use strict';

 const x =  prompt('Введите X');
 const massLength = prompt('Введите длину массива');
 for(let massLength = 0; i < numbersOld.length; i++) {
    numbersOld[i] = 5;

 let mass = mass[mass.length] =  prompt('Введите длину массива');

 console.log (massive);
 const array = new Array(10);
for (let i = 0; i < array.length; i++){
    array[i] = 5;
 }
 console.log(array);

//Task 10
const arr=[];
arr.length =  prompt('Введите длину массива');
const str = 'x';

for(var i = 0; i<=arr.length; i++){
    arr.push(str);
    const str += 'x';
}

console.log(arr);


// только положительные числа
 const arr = [1,2,3,-3,-2,-1];

 function isPositive(num){
     if (num >=0){
         return true;
    } else {
         return false;
     }
}

 const newArr = [];
 for(var i=0; i<=arr.length; i++){
     if(isPositive(arr[i])){
         newArr.push(arr[i]);
     }
 }

 console.log(newArr);

//Task 13
 const arr = [1,333,78,45,34,789,234,];
 const reverse = [];
     for (var i = arr.length - 1; i >= 0; i--) {
     reverse.push(arr[i]);
 }
 console.log(reverse);

//Task 14
 const arr = [1,3,4,5,7,8,9,10,23,45,56,78,34,56,7,8,12,456];

 function isNumbers(num){
     if (num > 0 && num < 10){
         return true;
     } else {
         return false;
     }
 }

 const newArr = [];
     for(var i = 0; i<=arr.length; i++){
         if(isNumber(arr[i])){
             newArr.push(arr[i]);
         }
     }

 console.log(newArr);

//Task 15
 const arr = [1,333,78,45,34,789,234,3456,2,4,7,6,9,11,34,890,65,43,876,56,55,98,99,345];

 function numbers(num){
     if(num % 2 === 0){
         return true;
     } else {
         return false;
     }
 }

 const newArr = [];
     for(var i = 0; i<=arr.length; i++){
        if(numbers(arr[i])){
             newArr.push(arr[i]);
         }
    }

 console.log(newArr);

// Task 16
 const numbers = [1, 2, 3, 4, 5, 6];
 numbers.splice(3, 2);
 numbers.splice(1, 1, 4)
 numbers.push(5);
 numbers.unshift(2);
 console.log(numbers);

// Task 17
const numbers = [1, 2, 3, 4, 5, 6];
numbers.splice(0, 2, 5, 6);
 numbers.splice(4, 2, 1, 2);
console.log(numbers);

//Task 12
 const arr = [1,333,78,45,34,789,234,3456,2,4,7,6,9,11,34,890,65,43,876,56,55,98,99,345];

function someFunc(num) {
    const sum = 0;
     for (var i = 0; i <= arr.length; i++) {
         sum += arr[i];
         if (sum > 10) {
             return i + 1;
        }
     }
}

console.log(someFunc([1, 2, 3, 4, 5, 6, 7, 8, 9]));



