// Creating a Person instance
const person = new Person("John", 25);
console.log(person.name);  // Output: John

person.age = 30;           // Using the setter
console.log(person.age);   // Output: 30

// Creating a Student instance
const student = new Student("Alice", 22);
student.study();           // Output: Alice is studying

// Creating a Teacher instance
const teacher = new Teacher("Bob", 40);
teacher.teach();           // Output: Bob is teaching
