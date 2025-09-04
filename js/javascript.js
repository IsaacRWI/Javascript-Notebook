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