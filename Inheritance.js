class Parent{
    constructor(){
        this.fatherName = "alauddin";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("shoharab");
const baby2 = new Child("shohan");
console.log(baby.getFullName());
console.log(baby2.getFullName());
console.log(baby, baby2);