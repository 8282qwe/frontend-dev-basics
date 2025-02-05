console.log("============[01] 일반 함수");

var myFunction = function () {};
myFunction();

console.log("============[02] 생성자 함수");
var MyObject = function (age, name) {
    console.log("MyObject 생성자");
    console.log(age, name);
    this.age = age;
    this.name = name;
};

var o1 = new MyObject(10, '둘리');
console.log(typeof o1, o1 instanceof MyObject);
console.log(o1);

o2 = {
    age: 10,
    name: "둘리"
}