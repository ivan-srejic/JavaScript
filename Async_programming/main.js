//Callback function
document.querySelector("#complete").addEventListener("click", (ev) => {
  console.log("Clicked");
});

console.log("Initial code has finished");

setTimeout(() => {
  console.log("Timer finished");
}, 1000);

//fetch vraca Promise, .then je response na success promise, catch hvata error promise
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((todo) => console.log(todo))
  .catch((error) => console.error("Problem with fetching data", error));

console.log("End of block 2");

//Custom Promise
function timer(time) {
  return new Promise((resolve, reject) => {
    if (isNaN(time)) reject("Enter a number");
    let sec = time * 1000;
    setTimeout(() => {
      resolve(time);
    }, sec);
  });
}

timer(5).then((val) => console.log("Success promise", val));

// Promise methods

// Promise.all -> This static method accepts an array of promises and returns a new promise. It is resolved when all the specified promises are resolved
// Promise.allSettled -> This static method accepts an array of promises and returns the status and value/error for each promise
// Promise.race -> This static method accepts an array of promises and returns the first settled promise
// Promise.any -> This static method accepts an array of promises. When one of the promises fulfilled, it returns a single promise
// Promise.resolve -> This static method returns a new Promise object that resolves with the specified value
// Promise.reject -> This static method returns a new Promise object that is rejected with the specified error.

const promise1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 1000, "promise one")
);

const promise2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "promise two")
);

const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 3000, "promise three")
);

const promise4 = new Promise((resolve, reject) =>
  setTimeout(resolve, 500, "promise four")
);

// Promise.all
Promise.all([promise1, promise2, promise3]).then((valueArray) =>
  console.log("Promise all", valueArray)
);

Promise.race([promise1, promise2, promise3, promise4]).then((valueArray) =>
  console.log("Promice race", valueArray)
);

Promise.any([promise1, promise2, promise3, promise4]).then((arrayValue) =>
  console.log("Promise any", arrayValue)
);

// Async and await
// Errors se hvata u catch
async function getTodo(id) {
  try {
    let url = "https://jsonplaceholder.typicode.com/todos/" + id;
    let response = await fetch(url); // await the promise resolve
    let results = await response.json(); // await the promise to resolve
    console.log(results);
  } catch (error) {
    console.error("Problem fetching data", error);
  }
}

getTodo(7);
