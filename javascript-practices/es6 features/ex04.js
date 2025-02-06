/*
    Arrow Function

*/

// ex1
console.log("\n===============")

// ex2
console.log("\n===============")
// const result = (function (e) {
//     return e * e;
// })(e)

// ex3
// console.log("\n===============")
// nums.forEach(e =>   process.stdout.write(`${e}:${((x) => x * x)(e)}`));

// ex4: this를 어휘상에서 바인딩 할 수 있다.
console.log("\n===============")
const dooly = {
    name: '둘리',
    friends: ['또치', '마이콜', '도우너'],
    // printFriends: function () {
    //     this.friends.forEach(f => console.log(`${f}의 친구 ${this.name}`));
    // }
    printFriends: function () {
        this.friends.forEach(f => console.log(`${f}의 친구 ${this.name}`));
    }
}

dooly.printFriends();