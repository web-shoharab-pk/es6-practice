class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "KRNI"; // this is a default value for all class
    }
}
const student1 = new Student(15281, "shoharab");
const student2 = new Student(35456, " shohan");
console.log(student1.name, student2);