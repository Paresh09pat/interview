	
// Q.1) First Class Functions

// First Class Function : It is also called first class citizen function, there are three points
// to remember are below:

// 1. Function can be assigned to a variables.
let myFunction = function(){
    console.log('This is function that is assigned to a variable');
    }
    myFunction();

// 2. Function can be passed as an argument to other function.
function printHello() {
    console.log("Hi I am function passed as an argument so I am a first class Function");
  }
  function executeFn(functionAsArgument) {
    functionAsArgument();
  }
  executeFn(printHello); // passing printHi function as an argument

// 3.Function can be returned from other function
function getFunction() {
    return function(){
      console.log("I am function returned from another function so i am a first-class function")
    }
  }
  let fn = getFunction();
  fn(); // this will call the returned function


// Q.2) Explain call(), apply() and, bind() methods. Give an example of call(), apply(), bind()	

// These are just different ways of invoking or calling a function
//  When you are calling a function using any of these 3 then you dont have to define in the function that it will be taking obj as a parameter
// It will assume that the first argument which is coming while calling the function will be an object only.
//creating an object for the reference
 let user = {
    name : "Shubham",
    age : 23,
    salary : 50000,
    city : "Ahmedabad"
}
let user2 = {
    name : "Vishnu",
    age : 21,
    salary : 60000,
    city : "Kashmir"
}
// creating a function which will be using this object
// When using call bind or apply
function UserDetails (company, designation) {
    // console.log("Hello inside function", this);
    console.log(this.name + " is " + this.age + " years old. ", company, " ", designation);
 }

//  Call : In case of call each and every argument which is required to be passed to the function will be passed individually.
// UserDetails.call(user2, "Google", "Backend Developer");

//  Apply : In case of apply each and every argument which is required to be passed to the function will be passed inside an array .
// UserDetails.apply(user2, ["Amazon", " Full Stack Developer"]);

// Bind : In case of bind, it will return you a new function. And this new function you can use anytime anywhere.
// const newFunction = UserDetails.bind(user);
// newFunction("Flipkart", "Data Scientist")


// Q.3) What are objects in javascript?

// Objects are the non-primitive datatypes and are use to store multiple data in the form of key value pairs
const ObjName = {
   name : 'Rahul',
   age : 22,
}
console.log('I am ' + ObjName.age + 'years old ')


// Q.4) What are function constructors?	

// Function constructor is kind of regular function to create multiple objects at a time. When creating function constructor, it is good practice to keep the first letter of the name, capital.
//  new keyword is mandatory to be used with function constructor.

function Person(name, salary){
    this.name = name,
    this.salary = salary
}

const personOne = new Person('sanjay', 50000);
console.log(personOne.name);


// Q.5) Explain prototypes	
//What is prototype and Prototype chaining?

function Person(name, age){
    this.name = name;
    this.age=age;
    this.salary = 100000;
 }
 let person1 = new Person("Anwar",23);
 let person2 = new Person("Shanth",45);
 console.log(person1);
 console.log(person2);

// in case, if you want to add other properties by using function constructor.
person1.salary = 50000;
console.log(person1);

// in case when you want to add properties inside the function constructor.
Person.prototype.Nationality = "India";
person1.Nationality = "American";
console.log(person1.Nationality);


// Q.6) What is prototype chain	


// Q.7) Give an example of inheritance using function constructor

function Animal(name, color){
    this.name = name;
    this.color = color;
}

function AnimalDescription(name, color, age, sound){
    Animal.call(this, 'Bruno', 'Dark');
    this.age = age;
    this.sound = sound;
}

let Animal1 = new AnimalDescription('Bruno', 'Dark', 2, 'Barks')
// console.log(Animal.prototype);
console.log(Animal1);


// Q.8) What are callbacks?

// CALL BACK: function which is passed as argument to another function.
function output(callback){
    console.log("out");
    callback()
};
function input(){
    console.log("in")
};
output(input);

//Why do we use it? ---The callbacks are needed because javascript is an event driven language. That means instead of waiting for a response javascript will keep executing while listening for other events.
// Let's take an example with the first function invoking an API call(simulated by setTimeout) and the next function which logs the message.

function firstFunction() {
    // Simulate a code delay
    setTimeout(function () {
      console.log("First function called");
    }, 1000);
  }
  function secondFunction() {
    console.log("Second function called");
  }
  firstFunction();
  secondFunction();


// Q.9) What is the use of setTimeout	

// The setTimeout() method is used to call a function or evaluate an expression 'after' a specified number of milliseconds. 
// For example, let's log a message after 2 seconds using setTimeout method,

setTimeout(function () {
  console.log("Good Afternoon");
}, 2000);


// Q.10) What is an event loop and call stack	

// Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
// The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.
// The event loop allows us to use callbacks and promises.
// The event loop executes the tasks starting from the oldest first.


// The JavaScript execution contexts (Global execution context and function execution context) are executed via the JavaScript engine. 
// In order to manage these execution contexts, the JS engine uses the call stack. 
// So, the JS call stack is a data structure that keeps track information of the functions being called and executed. 
// Thus, if the user invokes a function for execution, the specified function gets pushed/added in the call stack, and when the user returns from a function,
// it means the function is popped out from the call stack. 
// Thus, call stack is a normal stack data structure that follows the stack order principal, i.e., LIFO (Last In First Out).









