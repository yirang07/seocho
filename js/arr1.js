var stack = [];
var queue = [];

stack.push(1);
stack.push(2);
stack.push(3);

stack.unshift(9);

var stackOutput = stack.pop();

queue.push(10);
queue.push(20);
queue.push(30);

// queue pop
var queueOutput = queue.shift(); //  왼쪽으로 unshift

console.log('🚀 ~ stack:', stack, stackOutput);

console.log('🚀 ~ queue:', queue, queueOutput);

const list = ['글3', '글2', '글1'];

const 글2index = list.indexOf('글2');

function addArticle(article) {
  list.unshift(article);
}

function removeOld() {
  list.pop();
}

addArticle('글4');
removeOld();

list.push('글4');

console.log('🚀 ~ list:', list);
console.log(list.indexOf('글4'));
console.log(list.lastIndexOf('글4'));

const hong = { id: 1, name: 'Hong' };
const kim = { id: 2, name: 'Kim' };
const park = { id: 3, name: 'Park' };
const choi = { id: 4, name: 'choi' };

const users = [park, kim, hong, choi];

const id2userindex = users.findIndex((v, i) => v.id == 2);

console.log('🚀 ~ id2userindex:', id2userindex);

for (const user of users) {
  console.log(user.id, user.name);
}
const evenUsers = users.filter((v) => v.id % 2 === 0);
console.log('🚀 ~ evenUsers:', evenUsers);

const end = users[users.length - 1];
// const beforend = users[users.length -2];
const beforend = users.at(-1);

// const arr1 = [1, 2];
// const arr2 = [3, 4];

// const arr3 = [...arr1, ...arr2];
// console.log('🚀 ~ arr3:', arr3);

/// 연습문제

const arr2 = [1, 2, 3, 4, 5];
// 1. [2,3]추출

const ex1 = arr2.slice(1, 3);
console.log('🚀 ~ ex1:', ex1);
// 2. [3] 부터 모두 다 추출

const ex2 = arr2.slice(2);
console.log('🚀 ~ ex2:', ex2);

//3. [2.3.4] 제거하기

arr2.splice(1, 3);
console.log('🚀 ~ ex3:', arr2);

//4. 복원하기

arr2.splice(1, 0, 2, 3, 4);
console.log('🚀 ~ ex4 :', arr2);
