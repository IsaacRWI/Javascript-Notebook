var hello = "hello world";
function compare (x, y) {
    return x > y;
}

var x;
x = 5;
if (x == undefined) {  // == checks for value, === means strict equals checks for value and type
    console.log("x is undefined");
}
else {
    console.log(`x is defined ${x}`);
}

if (false || null || undefined || 0 || NaN ||"") {  // || means or
    console.log("This won't be printed");
}
else {
    console.log("All false values are false");  
}

if (true && "hello" && 1 && -1 && "false") {  // && means and 
    console.log("All true values are true");
}

for (var i=0; i<5; i++){  // for loops in javascript same as java
    console.log(i);
}

function chickemWith(something) {
    something = something || "anything";  // parameter defaults to anything  returns first true value
    console.log("chickem with " + something);
}

chickemWith("ketchup");
chickemWith();

var library = new Object();  // objects are somewhat like dictionaries in python
library.name = "cool library";
library.librarian = new Object();
library.librarian.name = "john";
library.librarian.favcolor = "blue";
library["total construction costs"] = 1000000;  // can use strings with spaces if square brackets are used

console.log(library);
console.log(library.librarian.name);
console.log(library["librarian"]["favcolor"]);  // alternate way to access object properties

var facebook = {  // defining objects with object literal  python dictionary
    name: "facebook",
    ceo: {
        firstName: "Mark",
        favColor: "blue"
    },
    "stock of company": 110
};
console.log(facebook);

function multiply(x, y) {
    return x * y;
}
console.log(multiply)  // defaults to toString function
multiply.version = "v.1.0.0";  // functions are objects can add properties to them
console.log(multiply.version);

function makeMultiplier(multiplier) {  // creates function that takes multiplier as parameter
    var myFunc = function(x) {  // creates function that takes x as parameter
        return multiplier * x;  // multiplies the first parameter with the second
    }
    return myFunc;  // returns the function
};

var multiplyby4 = makeMultiplier(4);
console.log(multiplyby4(5));

function doOperationOn(x, operation){
    return operation(x);
};

var result = doOperationOn(6, multiplyby4);
console.log(result);

// pass var by value vs by reference 
var a = 7;
var b = a;  // b is a copy of a
b += 5;
console.log(a, b);  // a is still 7 whilst b changed

var aa  = {x: 7};
var bb = aa;  // bb is a reference to aa
bb.x = 10;
console.log(aa, bb); // both aa and bb are {x:10}

// Function constructor
function Circle (radius) {
    this.radius = radius;  // similar to python self
    };

Circle.prototype.getArea =  // adding method to Circle class  all circle objects will share this method
    function() {
        return Math.PI * Math.pow(this.radius, 2);
};

myCircle = new Circle(10);
console.log(myCircle.getArea());