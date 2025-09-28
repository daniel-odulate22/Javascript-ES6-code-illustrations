//example of classes in javascript
class a_person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, I’m ${this.name}`)
  }
}
class student extends a_person {
  study() {
    console.log(`${this.name} is studying`);
  }
}
const s = new student("Daniel");
s.greet() 
s.study()
