const http = require("http");
const port = 3000;

//Use http.createServer() to create a new instance of http.Server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Welcome!");
});

server.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

//FileSystem

const fs = require("fs");

const content = '{"name":"Ivan", "lastName":"Srejic"}';

fs.readFile("./user.json", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  fs.writeFile("./user.json", content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
});

//Event module

const EventEmitter = require("events");
const object = new EventEmitter();

//add Event listener
object.addListener("spark", () => {
  console.log("Let there be light");
});

//emit the event
console.log("Emitting the event ...");
object.emit("spark");
