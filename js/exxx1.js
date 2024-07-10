// user 객체를 받아서 id와 name을 출력하는 함수를 3개의 함수로 작성하시오.
// (Function signature를 3개 이상으로 표현하기)
// 1. function f1(x,y) {..}
// 2. var f2 = function(x,y) {...}
// 3. const f3 = (x,y) => {}  // const f3_3 = ({id,name}) => console.log(id, name);

// const hong = {id: 1, name: 'Hong'};
// const lee = {id: 2, name: 'Lee'};
// f1(hong);  f2
// const user = { id: 1, name: 'Hong', addr: { city: 'Seoul' } };
// function fn(arg1, { id, name }, arg2) {
//   console.log(arg1, id, name, arg2);
// }
// fn(10, user, 20); // ?

const square = (n) => n ** 2;
const sqrt = (n) => Math.sqrt(n);
const cube = (n) => n ** 3;

const arr = [1, 2, 3, 4, 5];

const ret1 = arr
  .map((a) => a ** 2)
  .map((a) => map.Math.sqrt(a))
  .map((a) => a ** 3);
console.log('🚀 ~ ret1:', ret1);

const ret2 = arr.reduce((acc, v) => [...acc, cube(sqrt(square(v)))], []);
console.log('🚀 ~ ret2:', ret2);
