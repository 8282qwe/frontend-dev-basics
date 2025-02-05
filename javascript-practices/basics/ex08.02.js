/*
Array 객체 함수: Array.prototype.*
*/

var colors = ['black', 'white', 'yellow'];
var fruits = ['apple', 'mango', 'banana'];



console.log("============[02.01] concat");
console.log("============[02.02] stack 지원");
let color = colors.pop();
console.log(color);

colors.push("red");
console.log(colors);

console.log("============[02.03] join");
let s = fruits.join(':');
console.log(s);

console.log("============[02.04] reverse");
console.log(fruits);
console.log(fruits.reverse());

console.log("============[02.05] shift");
let numbers1 = [1000, 2000, 3000, 4000, 5000];
let number = numbers1.shift();
console.log(number,numbers1);

console.log("============[02.06] slice");
let numbers2 = numbers1.slice(1, 3);
console.log(numbers2);

console.log("============[02.07] splice(index, count)");
fruits.splice(0,2);
console.log(fruits);

console.log("============[02.07] splice(index, count, replace)");
let a1 = [0, 1, 2, 3, 4];
let a2 = a1.splice(0, 3, 10);
console.log(a1);
console.log(a2);

console.log("============[02.07] splice: as a removeAt()");
let a3 = [0, 1, 2, 3, 4];
a3.splice(2, 1); // removeAt (임의의 위치 삭제)
console.log(a3);

console.log("============[02.07] splice: as a insertAt()");
let a4 = [0, 1, 2, 3, 5];
a4.splice(4, 0, 5);
console.log(a4);

console.log("============[02.08] sort");


console.log("============[02.09] unshift");
console.log("============[02.10] indexOf");
console.log("============[02.11] lastIndexOf");
