/*
    Array 확장(prototype 기반의 확장)
    
    ex) List 함수 지원하기

*/
Array.prototype.remove = function (index) {
    this.splice(index, 1);
}

// Array.prototype.forEach = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i]);
//     }
// }

Array.prototype.insert = function (index, value) {
    if (value instanceof Array) {
        // for (let i = 0; i < value.length; i++) {
        //     this.splice(index + i, 0, value[i]);
        // }

        // 오류 !!
        // 콜백 함수 안에서의 this는 어휘상의 this와 일치하지 않는다.
        // value.forEach(function (e){
        //     this.splice(index++, 0, e);
        // })

        // 해결방법 1:
        // let _this = this;
        // value.forEach(function (e){
        //     _this.splice(index++, 0, e);
        // })

        // 해결방법 2:
        value.forEach(function (e) {
            this.splice(index++, 0, e);
        }.bind(this));

        // value.forEach((item, i) => {
        //     this.splice(index++, 0, value[i]);
        // });
    } else {
        this.splice(index, 0, value);
    }
}


// List 함수 사용하기
var a = [1, 2, 4];
console.log(a);

a.insert(2, 3);
console.log(a);

a.remove(2);
console.log(a);

a.insert(2, ['a', 'b', 'c']);
console.log(a); // [1, 2, 'a', 'b', 'c', 4]