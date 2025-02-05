var o = {
    name: "둘리",
    age: 10
};

var f = function() {
    console.log("Hello World");
};

console.log("============object 타입의 확장");
o.another = {
    age: 20,
    name: "마이콜",
    print: function () {
        console.log(this);
    },
}
console.log(o.another);
o.another.print();
console.log("============function 타입의 확장");
console.log("============기본 타입(primitive type)은 확장되지 않는다");
