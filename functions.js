const Person = {
    name: 'Paul',
    age: '25',
    skills: function () {
        console.log(this.name + '  can read');
    }
}
Person.skills;
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' hey i can speak');
    }
}
class Dog extends Animal {
    #color = 'brown';
    constructor(name) {
        super(name);
    }

    eat() {
        console.log("Bruno" + "Bark" + " " + this.#color);

    }


}
let myDog = new Dog("Bruno");
console.log(myDog.speak());
