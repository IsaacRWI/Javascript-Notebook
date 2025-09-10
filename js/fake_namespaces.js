// instead of
var firstname = "name";  // var name can be overwritten in scripts called afterwards
function hello () {
    console.log("hello", firstname);  
};

// use
var greeter = {};  // declares the thing as an object
greeter.name = "name";  // variables unique to the object
greeter.hello = function () {  // functions unique to the object
    console.log("hello", greeter.name);
};

// when calling on the object function use
// object.function()

// iife can be used with these objects
(function (window) {  // function declaring windows as its parameter
    var greeter = {};
    greeter.name = "name";
    greeter.hello = function () {
        console.log("hello", greeter.name);
    };
    window.greeter = greeter  // exposes the object to global scope
})(window); // the function being executed with the window inputted as the window
