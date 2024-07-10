const myname = 'Lani';
// myname = 'efg'; // Syntex Error
let s: string | number = 'abc';
s = 123;
console.log('hello, World!');
console.log(`hello, ${myname}!`);

let x: null | undefined;
let y: any;
y = 123;
y = 'abc';

function add(a: number, b: number) {
  return a + b;
}
console.log(add(1, 2));

let rocker;
rocker = 'Alice';
console.log(rocker.toUpperCase());

rocker = 123.45;
console.log(rocker.toPrecision(1));

let firstname: string | undefined | boolean;
firstname = 'abc';
firstname?.toUpperCase();
firstname = false;
console.log('🚀 ~ firstname:', firstname);

const str: string = 'abc';
type User = { id: number; name: string; addr?: string };
const user: User = { id: 1, name: 'hong' };
user.addr = 'Seoul';
type Emp = { id: number; name: string; dept: string | number };
const emp: Emp = {
  id: 1,
  name: 'kim',
  dept: 'Sales',
};
emp.dept = 12;

// const Y = 'y';
// let Z: 'x' | 'y' | 'z' = 'x'; //리터럴타입
// z = 'y';
// z = Y;

type Member = {
  name: string;
  addr: string;
  discountRate: number;
};
type Guest = {
  name: string;
  age: number;
};

const member: Member = {
  name: '홍길동',
  addr: '용산구',
  discountRate: 0.1,
};
const guest: Guest = {
  name: '김길동',
  age: 28,
};
const who = Math.random() > 0.5 ? member : guest;
// who.name = 'Lee';
// if ('discountRate' who)

//  console.log(who.discountRate);

let gildong = Math.random() > 0.5 && 'HongGilDong';

if (gildong) {
  gildong.toUpperCase(); // string
} else {
  gildong; // false | string
}

function mul(a: number, b: number): number;
function mul(a: number, b: number, c: number): number;

function mul(a: number, b: number, c?: number) {
  if (typeof c === 'number') return a * b * c;
  return true;
}
console.log(mul(1, 2));
console.log(mul(1, 2, 3));

let getNames: () => string[];

const SIZE = [
  { id: 'XS', price: 8000 },
  { id: 'S', price: 10000 },
  { id: 'M', price: 12000 },
  { id: 'L', price: 14000 },
  { id: 'XL', price: 15000 },
] as const;

const sizeOption = { XS: 1, S: 5, M: 2, L: 2, XL: 4 };

const totalPrice = SIZE.reduce(
  (currPrice, size) => currPrice + sizeOption[size.id] * size.price,
  0
);

const counts: { apple: number; banana: number } = {};

counts.apple = 3;
counts.banana = 5;
