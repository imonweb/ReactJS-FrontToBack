// const and let
let name = 'John';

name = 'Jack'

const person = {
  name: 'John',
  age: 18
}

person.name = 'Jack'
// console.log(person)

// console.log(name);

const nums = [1,2,3,4,5];
nums.push(5);

// console.log(nums)

// Arrow functions

// function sayHello(){
//   console.log('hello');
// }

const sayHello = () => {
  // console.log('Hello');
}
sayHello();

const fruits = ['apples', 'oranges', 'grapes'];
// Foreach
fruits.forEach((fruit, index)=>{
  // console.log(fruit);
})

// Map
const singleFruit = fruits.map((fruit) => fruit.slice(0,-1).toUpperCase() );
// console.log(singleFruit);

// Filter
const people = [
  {id: 1, name: 'Jake'},
  {id: 2, name: 'Esmael'},
  {id: 3, name: 'Ryan'}
];

const people2 = people.filter(person => person.id !== 2);

// console.log(people2)

// Spread
const arr = [1,2,3];
const arr2 = [...arr, 4];
const arr3 = [...arr.filter(num => num !== 2)];

// console.log(arr3);

const person1 = {
  name: 'Jonis',
  age: 15
}

const person2 = {
  ...person1,
  email: 'jonu@gmail.com'
}

// console.log(person2);

// Destructuring
const profile = {
  nameDes: 'John Doe',
  address: {
    street: '10 Downing St.',
    city: 'London'
  },
  hobbies: ['movies', 'music']
}

const { nameDes, address, hobbies } = profile;

// console.log(nameDes, address, hobbies[0]);
const { street } = profile.address;
// console.log(street);

 

// Classes
class Person {
  constructor(nameA, ageA) {
    this.nameA = nameA;
    this.ageA = ageA;
  }

  greet(){
    return `Hello, my name is ${this.nameA} and I am ${this.ageA}`;
  }
}

const personA = new Person('Josh', 12);
const personB = new Person('Sonya', 14);

console.log(personA.nameA);
console.log(personB.greet());

// Subclasses
class Customer extends Person {
  constructor(nameA, ageA, balance){
    super(nameA, ageA);
    this.balance = balance;
  }

  info(){
    return `${this.nameA} owes £${this.balance}.00`;
  }
}

const customer1 = new Customer('Kevin', 18, 600);

console.log(customer1.nameA);
console.log(customer1.info());

// Modules

