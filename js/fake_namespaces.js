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