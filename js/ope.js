// let a = 1, b = 2;
let a = 1;
let b = 2;

let c = (a++, b++);
console.log('c=', c, a, b);

let d = (a--, b + a);
console.log('d=' , d, a, b);

d = void (c = a + b);
console.log(a, b, c, d);

console.log('-----------------------');
const first = ''
const last = 'Bob'
if (first){
    console.log(first);
}
console.log(last);

let fullName = first ? first + ' ' : '';
fullName = fullName + last;
console.log('fullName=', fullName);

console.log(`${first}${first ? ' ' : ''}${last}`);
console.log('-----------------------');

const bi = 0b101;
const oct = 0o101;
const hex = 0x101;
console.log("🚀 ~ bi:", bi, oct, hex)
console.log(parseInt('101',36))

let g = 0b1010, h = 0b1100;
console.log(g & h, g | h, g ^ h, ~g);

console.log(-Infinity);
console.log(isNaN(Infinity));
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

const num = 123.456;
console.log(Number(num.toFixed(2)) +9);
console.log(Math.trunc(Number(num.toFixed(2))) +9);

const three = 0.1 + 0.2;
console.log(three);
console.log(0.3+0.2);
console.log(0.1+0.7);
const ep = Math.abs(three - 0.3) < Number.EPSILON; //끝에 값 쓰레기값인가 확인
console.log("🚀 ~ ep:", ep);
console.log(Math.trunc((0.1 + 0.2) * 10) / 10); // 쓰레기 수 없애기
console.log();
for(let i = 0.1; i < 1; i = i + 0.1) console.log(i);
console.log('-----------------------');


// x가 1이면 one, 2면 two, 3이면 three, 그 외 etc
const x = 2;

// 1. if 문
if (x === 1) {
    console.lof('one');
}
else if (x === 2){
    console.log('two');
}
else if (x === 3){
    console.log('three');
}
else {
    console.log('etc');
}

let outStr = 'etc';
if (x ===1){
    outStr = 'one'
}
else if (x === 2){
    outStr = 'two'
}
else if (x === 3){
    outStr = 'three'
}
console.log(outStr)

// 2. switch 문 컴파일되면 if문된다
switch(x){
case 1:
    console.log('one');
    break;
case 2:
    console.log('two');
break;
case 3:
    console.log('three');
    break;
default:
    console.log('etc');
}
// 3. 3항 연산자
outStr = x === 1 ? 'one' : x === 2 ? 'two' : x === 3 ? 'three': 'etc';
console.log('outStr=',outStr);


//4/|(OR) 연산자   */
outStr =
(x === 1 ? 'one' : '') || 
(x === 2 ? 'two':'') ||
(x === 3 ? 'three' : 'etc');
console.log("🚀 ~ outStr:", outStr);

console.log('===============================')
let i = 5;
while (i >0) {
console.log("🚀 ~ i:", i);
i=i-1;
}

i = 5;
while (i-- > 0) console.log("🚀 ~ i:", i);

console.log('--------------')
i = 5;
do {
    console.log("🚀 ~ i:", i);
} while (i-- > 1);
    
function add(... k){
    return k.reduce();
}

i = 1;
do {
    console.log(i);
 } while (i++ < 100);

// 1~100 더하기

// 1. while
 i = 0;
let sum = 0;
while (i<100){
    i = i + 1;
    sum = sum+i;
}
console.log("🚀 ~ sum:", sum);

// 2. for
sum = 0;
for (let i = 0; i <= 100; i++) {
    sum = sum + i;
}
console.log("🚀 ~ sum:", sum)
for (let j = 1; j <=  5; j++) {
    console.log('j=',j);
}

for (let j = 5; j > 0; j--){
    console.log('j=',j);
}


i = 1;
do {
    console.log(i, ' ', Math.sqrt(i).toFixed(3))
} while (i++ < 10);

for(let i = 0.1; i < 1; i = i + 0.1) console.log(Number(i.toFixed(1)));

const WEEK_NAMES = new Date();
// console.log("🚀 ~ WEEK_NAMES", WEEK_NAMES, WEEK_NAMES.getDay());
let dt = WEEK_NAMES.getDay()

switch(dt){
case 0:
dt = '일';
break;
case 1:
dt = '월';
break;
case 2:
dt = '화';
break;
case 3:
dt = '수';
break;
case 4:
dt = '목';
break;
case 5:
dt = '금';
break;
case 6:
dt = '토';
break;
}
console.log('오늘은', dt, '요일입니다.');

arrWeek=['일','월','화','수','목','금','토'];
console.log('오늘은',arrWeek[WEEK_NAMES.getDay()], '요일입니다.');

'use strict'

f = 1;
NaN = 1;
Infinity = 0;
function f(a, a) { console.log('outer f'); }
delete f; // error
{
  f(100);
  function f(a) { console.log('block f'); }
}
f(200);




