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