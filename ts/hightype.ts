interface User {
  id: number;
  name: string; //
}

interface Dept {
  id: number;
  dname: string; //
  captain: string; //
}

// interface Ud2 {
//   [k: string]: string | number;
//   id: number;
//   addr: string;
// }

type Ud2 = (User | Dept) & { addr: string };

// 다음 코드가 오류가 없으면 통과!
const ud2: Ud2 = { id: 1, name: 'HH', addr: 'Seoul' };
const ud3: Ud2 = { id: 1, dname: 'HH', captain: 'HH', addr: 'Seoul' };

// ---------------- class
interface Animal {
  move(): void;
  // move: () => void;
}

class Pet implements Animal {
  protected name;
  protected age?: number;
  readonly explicit: string = 'Hello, Typescript';
  readonly implicit = 'Hello, Typescript'; // Literal Type!
  constructor(name: string) {
    this.name = name;
  }

  setAge(xage: number) {
    this.age = xage * 12;
  }

  getAge() {
    return (this.age ?? 0) / 12;
  }

  move(): void {
    console.log('Pet is moving!!');
  }

  // getter
  getName() {
    return this.name;
  }
}

class Dog extends Pet {
  constructor(name: string, age: number) {
    super(name);
    this.setAge(age);
  }
  bark() {
    console.log('멍멍!', this.name);
  }
  howling() {
    console.log('아~오~', this.name);
  }
  move() {
    console.log('어슬렁 어슬렁', this.name);
  }
}

class Cat extends Pet {
  kukuki() {
    kk();
  }

  bark() {
    barkOfCat.bind(this)();
  }
}

const lucy: Dog = new Dog('Lucy', 10);
lucy.bark();
lucy.move();
const maxx = new Dog('Max', 12);
maxx.howling();
console.log('🚀  maxx:', maxx.getName(), maxx.getAge());

const happy = new Cat('Happy');
happy.setAge(5);
happy.bark();
happy.kukuki();

interface ICat extends Animal {
  kukuki(): void;
}

class CatDog extends Dog implements ICat {
  kukuki() {
    kk();
  }
  bark() {
    barkOfCat.bind(this)();
  }
}

function kk() {
  console.log('꾹!꾹!');
}

function barkOfCat(this: Cat) {
  console.log('야옹!', this.name);
}


interface AgeIsANumber {
    age: number;
    m(): void;  // OK
}
interface AgeIsNotANumber{
    age: number;
    m(n: number): void;
}

class AsNumber implements AgeIsANumber, AgeIsNotANumber {
    age = 0;
    // Error : Property 'age' in type 'AsNumber' is not assignable to the same property in base type 'AgeIsNotANumber'.
    // Type 'number' is not assignable to type '() => string'.
}

class NotAsNumber implements AgeIsANumber, AgeIsNotANumber{
    age() { return ''; }
    // Error : Property 'age' in type 'NotAsNumber' is not assignable to the same property in base type 'AgeIsANumber'.
    // Type '() => string' is not assignable to type 'number'.