class Base {
    printName() {
        console.log("Hello, " + this.getName());
    }
}
class NewClass extends Base {
    getName() {
        return "Hello";
    }
}
class NewClass2 extends Base {
    getName() {
        return "Hello i am new ClassNew2";
    }
}
const b = new NewClass();
console.log("🚀 ~ file: index.ts:77 ~ b", b.getName());
const c = new NewClass2();
console.log("🚀 ~ file: index.ts:89 ~ c", c.getName());
export {};
