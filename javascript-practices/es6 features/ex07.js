/*
    Array's Iteration Methods

    - forEach
    - map
    - filter
    - every
    - some
    - reduce
    - reduceRight
*/

const a = [1, 2, 3, 4, 5]

// Array 함수 - forEach
a.forEach((e, i) => process.stdout.write(`${i}:${e}\t`))
console.log();

// Array 함수 - map
const a2 = a.map((e) => e * e);
console.log(a2);

// Array 함수 - filter
const a3 = a.filter((e) => e % 2 !== 0);
console.log(a3);

// Array 함수 - find
const number = a.find((e) => e % 2 === 0);
console.log(number);

// Array 함수 - findIndex
const index = a.findIndex((e) => e === 4);
console.log(index);

// Array 함수 - every
const result = a.every((e) => e < 10);
console.log(result);

// Array 함수 - some
const result1 = a.some((e) => e > 10);
console.log(result1);

// Array 함수 - reduce
const sum = a.reduce((acc, x) => acc + x, 0);
console.log(sum);

const a4 = a.reduce((acc, e) => acc.concat(e * e), []);
console.log(a4);

// Array 함수 - reduceRight
const a5 = a.reduceRight((acc, e) => acc.concat(e*e), []);
console.log(a5);

