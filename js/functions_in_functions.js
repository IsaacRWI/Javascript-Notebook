function make_multiplier (multiplier) {  // creates a function with multiplier as the parameter
    return (
        function (x) {  // main function returns another function with parameter x
            return multiplier * x;  // nested function returns x mutiplied with the multiplier inputted in the big function
        }
    );
}

var double = make_multiplier(2);  // double is the new function created by the main function, passing 2 as the parameter
console.log(double(15));  // double is called on with the parameter 15 
console.log("hello")