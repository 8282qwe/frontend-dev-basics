console.log('===[Test: Unnamed Export Module]'); // Unnamed Export Module Import 에서은 반드시 이름을 지정해야 한다.
import myFunction from './mods/ex01.mjs'

console.log(myFunction(10, 20));

console.log('===[Test: Unnamed Export Module I]'); // Named Export 모듈의 다수 객체 Destrcting Import
import {subtract} from './mods/ex02.mjs'

console.log(subtract(10, 20));

console.log('===[Test: Named Export Module II]');

console.log(subtract(10, 20));// Named Export Module은 다수의 객체를 Export 하기 때문에 Import 할 때 특정 이름을 지정할 수 없다. 대신, '* as 이름' 를 사용할 수 있다.
console.log('===[Test: Named + Unamed Export Module]')
import math,{add} from './mods/ex04.mjs'

console.log(math.add(10, 20));
