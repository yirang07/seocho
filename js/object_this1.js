globalThis.name = 'GLOBAL'
this.name = 'MODULE'

const obj = {
    name: 'OBJ',
    f1: function () {
        console.log('f1=', this.name);
        },
    f2: () => {
        console.log('f2=', this.name);
    },
    f3 () {
        // method
        console.log('f3=', this.name);
    },
};
obj.f1();
obj.f2();
obj.f3();

const nm = obj.name;
console.log("---------------------------", nm);
const f1 = obj.f1;
const f2 = obj.f2;
const f3 = obj.f3;

f1();
f2();
f3();

class Dog {
    f1() {
        console.log('Dog.f1', this.name);
    }
}

Dog.prototype.f1();