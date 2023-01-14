class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Teacher {
  name: string;
  subject: string;
  constructor(name: string, subject: string) {
    this.name = name;
    this.subject = subject;
  }
}

class Collection<T> {
  collection = new Map<number, T>();
  static idGenerator: number = 0;

  constructor(enteries: T[]) {
    enteries.map((entry) => {
      this.collection.set(++Collection.idGenerator, entry);
    });
  }

  addItem(item: T) {
    this.collection.set(++Collection.idGenerator, item);
  }

  getItem(id: number): T | undefined {
    return this.collection.get(id);
  }

  getAllItems(): T[] {
    return [...this.collection.values()];
  }
}

const student1 = new Student("Zia", 28);
const student2 = new Student("Ali", 30);
const student3 = new Student("Umar", 38);
const student4 = new Student("Zeeshan", 22);

const studentList = [student1, student2, student3, student4];
const studentCollection = new Collection<Student>(studentList);
const getStudent = studentCollection.getItem(4);

const teacher1 = new Teacher("Zia", "Mataverse");
const teacher2 = new Teacher("Zeeshan", "Blockchain");
const teacher3 = new Teacher("Ali", "JavaScript");

const teacherCollection = new Collection<Teacher>([
  teacher1,
  teacher2,
  teacher3,
]);
