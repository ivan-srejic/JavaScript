// Function declaration

function sum(num1, num2) {
  return num1 + num2;
}

let result = sum(10, 20);
console.log(result);

//First class function

const arr = [10, 20, sum];

let result2 = arr[2](arr[0], arr[1]);
console.log(result2);

//Types of functions

//Named functions -> Standard function declaration. The name is provided after the function keyword

//Anonymous functions -> When a function is defined inside a larger expression, it may not have a name.

//Recursive function -> Recursive function calls itself as a part of the executing block code

//Outer functions -> Function may be nested. The outer function encloses other functions inside its code block

//Inner functions -> Functions may be nested. An inner function contained within the code block of another function

//IIFE (Immediately Invoked Function Expression) -> A function that is invoked at the same time it is defined is termed an IIFE.

//Named function
function fib(num1, num2) {
  //Anonymous function and IIFE function
  let num3 = (function () {
    return num1 + num2;
  })();
  return [num1, num2, num3];
}

const arr2 = fib(0, 1);
console.log(arr2); // 0 1 1

//Function expression
const functionExpression = function () {
  let greet = "Welcome";
  console.log(greet);
};

//Arrow function
const arrowSum = (num1, num2) => num1 + num2; //Return is not necessary if its one liner

const singleParamArrow = (name) => console.log(name);

const noParamsArrow = () => console.log("Ola");

// Traditional functions -> THIS keyword is set to the object that invoked the function. Otherwise, the this keyword defaults to the global object
// Arrow functions -> THIS keyword does not default to the global object. The value of this is determined by the context of where the function is called

//Hoisting -> Function expression doest work. Normal function declaration is working

//Closure
//IMPORTANT
function createScoreFunction() {
  scores = [];
  return function (score) {
    scores.push(score);
    console.log(`Total score: ${scores.length}`);
  };
}

const addScore = createScoreFunction();

//  --- Apply(), call() and Bind() ---

//apply() -> method invokes a function and assigns the object passed in to the keyword "this". Arguments for the function are passed in as an array

//call() -> method invokes a function and assigns the object passed in to the keyword "this". Arguments are passed in as a comma separated list (difference between apply and call)

//bind() -> method returs a new function. The object passed in is assigned to the keyword "this" when that new function is invoked. Arguments may be bound to the new function as well

let objGreet = {
  morningGreet(punct) {
    console.log(`Good morning ${this.firstName}${punct}`);
  },

  eveningGreet(punct) {
    console.log(`Good evening ${this.firstName}${punct}`);
  },
};
//Ovaj this treba da pristupi objektu koji ga poziva zato sto ne postoji firstName unutar objekta objgreet

const user1 = {
  firstName: "Mary",
};

const user2 = {
  firstName: "Sam",
};

objGreet.morningGreet.call(user1, "!"); //Parametri kao comma separated.
objGreet.eveningGreet.apply(user2, ["?"]); //Parametri kao array
objGreet.morningGreet.bind(user1, "...")(); // Vraca funkciju, moramo da je pozovemo

//Generator and Iterator
// Dodaje se * na function*

// --- Object ---

//Object constructor
let userConstructor = new Object();
userConstructor.name = "Ivan";
userConstructor.age = 26;
userConstructor.admin = true;
userConstructor.created = new Date();

//Object literal notation or object initializer
let user11 = {
  firstName: "Ivan",
  lastName: "Srejic",
  age: 26,
  admin: true,
  created: new Date(),
};

//Object.create() method
const user22 = Object.create({});
user22.name = "Ivan";
user22.age = 26;
user22.admin = true;
user22.created = new Date();

//Accessing data from object

console.log(user11.name); //dot notation
console.log(user11["age"]); //bracket notation

delete user22.created; //Brise prop

//List or traverse props of an object

//3 methods for displaying properties of an object

for (let prop in user11) {
  console.log(prop, user11[prop]);
}

console.log(Object.keys(user11));

console.log(Object.getOwnPropertyNames(user11));

//methods inside the object
const objectWithFunction = {
  name: "Ivan",
  greeting() {
    console.log("Greetings from the function");
  },
  //Stari nacin za kreiranje funkcija unutar objekta
  // greeting: function() {
  //   console.log("Greetings")
  // }
  greetingWithProps() {
    console.log(`Greetings mister ${this.name}`); //Ovde postavljamo this keyword da pristupimo prop-u
  },
};

objectWithFunction.greeting();
objectWithFunction.greetingWithProps();

//getter and setters

// const scores = {
//   quiz: "Quiz 1",
//   scores: [10, 20, 30],
//   get avarage() {
//     if (this.scores.length === 0) return 0;
//     return (
//       this.scores.reduce((sum, score) => sum + score, 0) / this.scores.length
//     );
//   },
// };

// const scores2 = {
//   quiz: "Quiz 2",
//   scores: [10, 20, 30],
//   set score(score) {
//     if (score >= 0) this.score.push(score);
//   },
// };

// scores2.score = 90;
// scores2.score = 80;

//Objects are passed by reference

function passPrimitive(name) {
  name = "Jerry";
}
let person = "Tom";

passPrimitive(person);
console.log(person); //Ispisuje TOM zato sto je passed by value

function passObject(settings) {
  settings.on = true;
}

const conf = {
  device: "Microwave",
  on: false,
};
passObject(conf);
console.log(conf); //Ovde ce se "on" property promeniti, zato sto je passed by reference

//Object class methods

//assign() -> Static method is used to copy all the enumerable own properties from one or more source objects to a target object

function cloneObject(obj) {
  return Object.assign({}, obj);
}

//entries() -> This static method can be used to get an array of all the key-value pairs of an objects own enumerable string properties

console.log("Entries function", Object.entries(user11));

//values() -> This static method can be used to get an array of all the values of an object own enumerable string properties

//defineProperties() -> This static method can be used to define new od modify existing properties of an object. Also, defineProperty() can be used to work on a single property

//freeze() -> this static method freezes an object such that changes can no longer be made to it

//preventExtensions() -> This static method prevents the addition of a new properties to a specified object

//seal() -> This static method prevents new properties from being added as well as changes from being ma to descriptors

//is() -> This static method can be used to determine whether two values are the value

//hasOwnProperty() -> This instance method is used to determine whether an object contains the specified property as a direct property

//isPrototypeOf() -> This instance method is used to determine whether an object is in the prototype chain of the specified object.

//toString() -> This instance method is used to get the string representation of the specified object

//valueOf() -> This instance method is used to get the primitive value of the specified object

//Da bi klonirali objekat, koristimo assign, zato sto se objekat prosledjuje po referenci

// --- CLASS ---

//The basic syntax of a class declaration is as follows:
class ClassName {
  constructor() {}
  method1() {
    console.log("Method 1");
  }
  method2() {
    console.log("Method 2");
  }
}

//The basic syntax of a class expression is as follows:
let ClassName2 = class OptionalName {
  constructor() {}
  method1() {
    console.log("Method 1");
  }
  method2() {
    console.log("Method 2");
  }
};

//
class MeetingRoom {
  constructor(available) {
    if (available) this.res = true;
  }
}

let boardRoom = new MeetingRoom(true);
console.lof(boardRoom);

//Getters and setters
class MeetingRoom2 {
  constructor(capacity) {
    this.capacity = capacity;
    this.canReserve = false;
  }

  set reservable(val) {
    this.canReserve = val;
  }

  get reservable() {
    return this.canReserve;
  }
}

let boardRoom2 = new MeetingRoom(20);
boardRoom.reservable = true;
console.log(boardRoom.reservable);

//Static methods
class User {
  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }

  static isUser(obj) {
    return obj instanceof User;
  }
}

let userObject = new User("Ivan", "Srejic");
console.log(User.isUser(userObject));

//Inheritance
class UserKlasa {
  constructor() {
    this.validUser = true;
  }
  isUser() {
    return true;
  }
}

class Employee extends User {
  isEmployee() {
    return true;
  }
}

//super() calls parent constructor
//If you want to use this keyword, you need to call super()

//Modules

export function exportFunction() {
  console.log("Exported function");
}

//We can only export one default from one module
// export default defaultFunction() {
//   console.log("Exported default")
// }

//Import
// import {someModule} from '.file'
// import {someModule as renamedModule} from '.file'

// export {exportFunction as renamedFunction}; // We can rename on export also
// import defaultModule from './file'

//Importing module only when needed

function loadModule() {
  import("file").then((module) => {
    module.nesto();
  });
}

// Decorators
// Expanding the functionality of a function. Takes fn as a param
function displayName(name) {
  console.log(name);
}

function displayNameDecorator(fn) {
  return function (name) {
    const str = `Welcome ${name}`;
    fn(str);
  };
}

const customerName = displayNameDecorator(displayName);
customerName("Ivan Srejic");

//Decorator function
function methodLogger(target, name, descriptor) {
  console.log(`[Class=${target.constructor.name}] [Method=${name}]`);
  let fn = descriptor.value;
  descriptor.value = () => {
    console.log(`${name} function started`);
    return fn();
  };
}

class Human {
  constructor(name) {
    this.name = name;
  }

  //decorated class method
  @methodLogger
  save(name) {
    localStorage.setItem("name", name);
    return "Success";
  }
}

let human = new Human("Ivan");
console.log(human.save());
