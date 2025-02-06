/*
    class Rect

*/

console.log('---[class 정의 지원]');

class Rect {
    constructor(w, h, r) {
        this.w = w;
        this.h = h;
    }

    draw() {
        console.log(`Rect(w=${this.w}, h=${this.h}를 그렸습니다.)`);
    }
}

new Rect(10, 20).draw();
new Rect(100, 200).draw();

console.log('---[cf: 생성자 함수(protype 기반)]');
function Circle(w, h, r) {
    this.w = w;
    this.h = h;
    this.r = r;
}

Circle.prototype.draw = function() {
    console.log(`Circle(w=${this.w}, h=${this.h}, r=${this.r})를 그렸습니다.`);
};
new Circle(10, 20, 50).draw();

console.log('---[클래스 상속(extends) 지원]');
class Shape {
    constructor(fillColor, lineColor) {
        this.fillColor = fillColor;
        this.lineColor = lineColor;
    }
    draw() {
        console.log("그릴수 없습니다.");
    }
}

class RectTriangle extends Shape {
    constructor(fillColor, lineColor,w,h) {
        super(fillColor, lineColor);
        this.w = w;
        this.h = h;
    }
    // @Override
    draw() {
        console.log(`RectTriangle(w = ${this.w}, h = ${this.h}, fillColor = ${this.fillColor}, lineColor = ${this.lineColor})`)
    }
}

const shape1 = new RectTriangle('red', 'black', 10, 20);
shape1.draw();