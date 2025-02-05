/*
    string primitive 타입과 String 객체 함수(String.prototype.*) 
*/

// 배열처럼 접근이 가능하다.
let str1 = "Hello World";
for (let i = 0; i < str1.length; i++) {
    console.log(str1[i]);
}

// 문자열 합치기
let str2 = "Hello";
let str3 = "World";
let str4 = str2 + " " + str3;
console.log(str4);

// casting
let str5 = 4 + '4';
console.log(str5);

let str6 = 'boolean:' + true;
console.log(str6);

// 객체 함수
let str7 = "string1 string2 string3";

let index = str7.indexOf("string2");
console.log(index);

index = str7.indexOf("string4");
console.log(index);

let str8 = str7.substring(10 /*firstIndex*/, 13 /*lastIndex*/);
console.log(str8);

let a = str7.split(" ");
console.log(a);

a = str7.split(":");
console.log(a);
