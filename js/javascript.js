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