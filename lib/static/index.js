class Student {
    name;
    age;
    _id = 0;
    static idGenerator = 0;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this._id = ++Student.idGenerator;
    }
    print() {
        console.log(`Student Name ${this.name} , age ${this.age} and id ${this._id}`);
    }
}
const student = new Student("Zia", 45);
const student2 = new Student("Ali", 28);
const student3 = new Student("Jahanzaib", 24);
student.print();
student2.print();
student3.print();
export {};
