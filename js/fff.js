console.log(Infinity);
console.log(-Infinity);
console.log(isNaN(Infinity));
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(9007199254740993 === 9007199254740992);

const three = 0.1 + 0.2;
const ep = Math.abs(three - 0.3) < Number.EPSILON;
console.log(ep, Number.EPSILON);
console.log(2.5 % 1);

const user = { id: 1, name: 'hong' };
for (const p in user) {
  console.log('🚀 ~ p:', p);
}

const WEEK_NAMES = '일월화수목금토';
for (const w of WEEK_NAMES) {
  console.log('🚀 ~ w:', w);
}
