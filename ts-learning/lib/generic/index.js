class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Teacher {
    name;
    subject;
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
}
class Collection {
    collection = new Map();
    static idGenerator = 0;
    constructor(enteries) {
        enteries.map((entry) => {
            this.collection.set(++Collection.idGenerator, entry);
        });
    }
    addItem(item) {
        this.collection.set(++Collection.idGenerator, item);
    }
    getItem(id) {
        return this.collection.get(id);
    }
    getAllItems() {
        return [...this.collection.values()];
    }
}
const student1 = new Student("Zia", 28);
const student2 = new Student("Ali", 30);
const student3 = new Student("Umar", 38);
const student4 = new Student("Zeeshan", 22);
const studentList = [student1, student2, student3, student4];
const studentCollection = new Collection(studentList);
const getStudent = studentCollection.getItem(4);
const teacher1 = new Teacher("Zia", "Mataverse");
const teacher2 = new Teacher("Zeeshan", "Blockchain");
const teacher3 = new Teacher("Ali", "JavaScript");
const teacherCollection = new Collection([
    teacher1,
    teacher2,
    teacher3,
]);
export {};
