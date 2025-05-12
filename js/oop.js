// function Person(name, gender, age) {
//     this.name = name;
//     this.gender = gender;
//     this.age = age
// }

// var personOne = new Person('Omar', 'Male', 22)
// var testPerson = {
//     name: "Ali",
//     gender: "Male",
//     age: 20
// }
// console.log(personOne);
// console.log(testPerson);
//////////////////////////////////////////////////////////////////////////////
class Person {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    showData() {
        return "Hello " + this.name + " Your age is " + this.age
    }
}

// var personOne = new Person('Omar', 'Male', 22)

// console.log(personOne);
// console.log(personOne.showData())


class Student extends Person {
    constructor(name, age, gender, grade) {
        super(name, age, gender);
        this.grade = grade
    }
}

var studentOne = new Student("Malek", "Male", 10, "Five")

console.log(studentOne)
console.log(studentOne.showData())


String.prototype.kimit = (user,course) => {
    return user + course
}

var myName ="Mohamed"

console.log()