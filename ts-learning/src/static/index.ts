class Student {
  name: string;
  age: number;
  _id: number = 0;
  static idGenerator: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this._id = ++Student.idGenerator;
  }

  print() {
    console.log(
      `Student Name ${this.name} , age ${this.age} and id ${this._id}`
    );
  }
}

const student = new Student("Zia", 45);
const student2 = new Student("Ali", 28);
const student3 = new Student("Jahanzaib", 24);
student.print();
student2.print();
student3.print();
