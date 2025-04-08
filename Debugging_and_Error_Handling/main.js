// Postoje 8 tipa Error-a

// Error -> Represent a runtime error. This can be used to create a custom error
// ReferenceError -> Represents an invalid reference such as an undeclared variable
// SyntaxError -> Represent an error caused by incorrect syntax in the code
// TypeError -> Represent an error caused by a parameter or variable of an invalid type
// EvalError -> Represent an error regarding the eval() function
// InternalError -> Represent an internal error in the JavaScript engine. For example, if there is excessive recursion.
// RangeError -> Represents an error that occurs when a numeric variable is outside its valid range.
// URIError -> Represent an error when encoding or decoding invalid URI

// Exception -> Syntax error: missing )
function totalSocres(scores) {
  return scores.reduce((tot, (num) => tot + num, 0));
}

// For handling errors, a try...catch statement can be used.
// Try -> If an error occurs in the try block, code execution in the block ceases and the catch block is executed
// Catch -> The catch block receives an object with information about the error. Its value is only available in the scope of the catch block.

function getDayOfTheWeek(date) {
  try {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  } catch (err) {
    return null;
  }
}

// There is TypeError. But since its in try...catch, we dont get an error
const theDay = getDayOfTheWeek("2015-10-10");
console.log(theDay);

//Custom error using throw

const finalScore = [100, 40, 65, 95, -70, 90];
function checkScoresArray(scores) {
  scores.forEach((element) => {
    if (element === "") throw "Array contains an empty score";
    if (isNaN(element)) throw "Array contains a score that is not a number";
    if (element < 0) throw "Array contains score that is less than zero";
  });
}

try {
  checkScoresArray(finalScore);
} catch (error) {
  console.error(error);
}

// Different console statements

console.log("Starting timer ... ");
console.group("Timer group");
console.time("Timer");
console.log("Loggin timer...");
console.timeLog("Timer");
console.log("Ending timer...");
console.timeEnd("Timer");
console.groupEnd("Timer Group");
