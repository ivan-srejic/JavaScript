//let and const are block scoped
let deaprtment = "Sales";

const pi = 3.14;

var pageSize = 100;

department = "HR";

pageSize = 90;

var fontFamily;
let fontSize;

//We have to assign a value to const variable
// const fontKerning;

//hoisting var
function printName() {
  console.log("Current character is " + fname);
}
printName();

var fname;

let amount = 521.3222;

console.log(amount.toFixed(2));

//null value is assigned by user
//undefined value is when variable is declared but it has no value

//Object

//1
var animal = {
  type: "Dog",
  sound: function () {
    console.log("Av av");
  },
};

animal.sound();

//2
var animal = new Object();
animal.type = "dog";
animal.sound = function () {
  console.log("Avav");
};

//Array

var brand = ["BMW,MERCEDES,AUDI"];

var model = new Array("M1", "M2", "M3");

//String
const str1 = "String 1";
const str2 = new String("String 2 kreiran preko konstruktora");

//String methods:

function greeting(greet, name) {
  let punct = ".";
  if (greet.toLowerCase().includes("good morning")) {
    punct = "!";
  }
  return greet.concat(" ", name, punct);
}

// //Coercion
String(5); //'5'
String(-10.15); //'-10.15'
String(true); //'true'
String(false); //'false'
String(null); //'null'
String(undefined); //'undefined'
String(Symbol("name")); //'Symbol(name)'

//These examples show the resykt if converting various non-primitive values to string using String()
String([]); //''
String([5, 10, 15]); //'5,10,15'
String({}); // '[object Object]'
String({ a: 10, b: 15 }); //'[object Object]'

Boolean(""); //false
Boolean(0); //false
Boolean(-0); //false
Boolean(NaN); //false
Boolean(null); //false
Boolean(undefined); //false
Boolean(false); //false

Boolean("Joe"); //true
Boolean(5); //true
Boolean({}); //true
Boolean([]); //true
Boolean(Symbol()); //true

Number(true); // 1
Number(false); // 0
Number(null); // 0
Number(undefined); // NaN
Number(Symbol()); // A TypeError will be thrown as symbols cannot be converted to numbers

Number(""); // 0
Number(" 15 "); // 15
Number("-14.55"); // -14.55
Number("\t"); //0
Number("5x"); // NaN

//Truthy and falsy values

const account = null;
const contact = {};

//This will return false
if (account) {
  console.log("true", account);
} else {
  console.error("false", account);
}

//This will return true
if (contact) {
  console.log("true", contact);
} else {
  console.error("false", contact);
}

//Boolean constructor
Boolean("1"); //true
Boolean([1]); //true
Boolean(1); //true
Boolean({}); //true
Boolean([]); //true

Boolean(""); //false
Boolean(0); //false
Boolean(null); //false
Boolean(undefined); //false
Boolean(NaN); //false

//instead of Boolean constructor we can use ' !! '
!!"1"; //true
!![1]; //true
!!1; //true
!!{}; //true
!![]; //true

!!""; //false
!!0; //false
!!null; //false
!!undefined; //false
!!NaN; //false

//The loose equality operator (==) converts one or both sides and then performs the final equality comparison. For example, if operand A is a string and operand B is a number, then A == B converts A to a number before the comparison.

// Coercions may result in one operand or both operands being converted, depending on the data types involved.
"1" == 1; // true  ('1' is converted to a number)
1 == ["1"]; // true  (['1'] is converted to its primitive value)
1 == [1]; // true  ([1] is converted to its primitive value)
(1 == (1)[1]) == // true
  [1]; // false (the two arrays are not the same instances)
//{} == {};                   // false (the two objects are not the same instances)
0 == "0"; // true  ('0' is converted to a number)
0 == ""; // true  ('' is converted to a number. Number('') == 0)
"" == "0"; // false
false == "false"; // false (false and 'false' are converted to numbers. Number(false) == 0. Number('false') == NaN.)
false == "0"; // true  (Number(false) == 0. Number('0') == 0.)
false == undefined; // false
false == null; // false
null == undefined; // true  (null and undefined are loosely equal to each other, and vice versa.)
" \t\r\n " == 0; // true  (' \t\r\n ' is converted to a number. Number(' \t\r\n ') == 0.)
new String("tim") == "tim"; // true  (object is converted to its primitive value)

//ARRAY
const products = ["1", "2", "3", "4", "5"];
const products2 = new Array("1", "2", "3", "4", "5");

//Iterating over elements of an array
const customers = [
  "Jan Ward",
  "Carrol Fox",
  "Natalia Wyatt",
  "Justin Sampson",
  "Alyson Macdonald",
  "Ana Salas",
];

//Displaying each customer
for (let index in customers) {
  console.log(customers[index]);
}

for (let customer of customers) {
  console.log(customer);
}

customers.forEach((customer) => {
  console.log("Foreach", customer);
});

// -- Adding Array elements --

// push -> dodaje na kraj niza
// unshift -> dodaje na pocetak niza
// splice -> dodaje na odredjenu poziciju

// -- Removing array elements --

//pop -> Izbacuje poslednji element
//shift -> izbacuje prvi element
//splice -> izbacuje sa odredjene pozicije?

//SPLICE
// array.splice(startIndex, deleteCount, item1, item2, ..., itemN);
// Ako je deleteCount == 0, nista se ne izbacuje

let niz = ["jabuka", "banana", "kruska", "nar"];
let uklonjeno = niz.splice(2, 1, "ananas", "jagoda");

console.log(niz); // ["jabuka", "banana", "ananas", "jagoda", "nar"]
console.log(uklonjeno); // ["kruska"]

// Copy an array from index 1 to 2.
// Copied array will not contain element at index 3.
let copiedInvoiceIds = invoiceIds.slice(1, 3);
console.log("Copied array..."); // Print each element.
console.log(copiedInvoiceIds);

//Finding index or element. -> Pictures in Notion with code examples

//JSON

//Serialization and Deserialization

//In order to transmit JavaScript object data to a server, it needs to be serialized or converted into a string. In order to access the JSON data that is received from a server, it needs to be deserialized or converted into a JavaScript object

// JavaScript → JSON = Serialization
// JSON → JavaScript = Deserialization

//Serialization
var jsonString = JSON.stringify(jsObject);

//Deserialization
var desJsObject = JSON.parse(jsonString);
