const assert = require('assert');

// 1) 배열의 각 원소를 String으로 변환하시오.
const arr = [1, 2, 3, true];
const ret1 = arr.map((a) => a.toString());
console.log('🚀>>  ret1:', ret1);
assert.deepStrictEqual(ret1, ['1', '2', '3', 'true']);

// 2) 다음과 같이 작동하는 classNames 함수를 작성하시오.
// const classNames = (...args) => args.join(' '); // 공백 문제!
const classNames = (...args) => args.filter((a) => !!a.trim()).join(' ');
// ['', 'a b  c ', 'd', ' ', 'e'].filter
const ret2 = classNames('', 'a b c', 'd', ' ', 'e');
console.log('🚀>>  ret2:', ret2);
assert.strictEqual(ret2, 'a b c d e');

// args: ['', ' a b  c ', ' d', ' ', 'e ']
function classNames2(...args) {
  return args
    .join(' ') // '  a b  c  d  e '
    .trim() // 'a b  c  d  e'
    .split(' ') // ['a', 'b', ' ', 'c',  'd', ' ', 'e']
    .filter((a) => !!a.trim()) //['a', 'b', 'c', 'd', 'e']
    .join(' '); // 'a b c d e'
}
const ret3 = classNames2('', ' a b  c ', ' d', ' ', 'e ');
console.log('🚀>>  ret3:', ret3);
assert.strictEqual(ret3, 'a b c d e');

const arr2 = [1, 2, 3, 4, 5];
arr2.map((a) => a ** 2);
console.log('🚀 ~ arr2:', arr2);

const map1 = new Map();
map1.set('A', 65);
map1.set('B', 66);
console.log('🚀 ~ map1:', map1);
console.log('🚀 ~ map1:', map1);

const map2 = new Map([
  [1, 11],
  [2, 22],
]);
console.log('🚀 ~ map2:', map2);

const arr3 = [1, 2, 1, 2, 3, 5];
const s3 = new Set(arr3);
console.log('🚀 ~ s3:', s3);

const ret = [...s3];
console.log('🚀 ~ ret:', ret);
