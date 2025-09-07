var array = new Array();
array[0] = "monke";
array[1] = function (name) {
    console.log("hello", name);
};
array[2] = {key: "value"};

console.log(array);
console.log(array[0]);
array[1](array[0]);

// short hand array creation
short_array = ["monke", "pickle", "snake"];
console.log(short_array);
short_array[100] = "100th name"

for (var i = 0; i < short_array.length; i++) {
    console.log ("hello", short_array[i]);
}

// object property retrieval
var newobject = {
    name: "monke",
    age : 2,
    food : "cheese"
};

for (var j in newobject) {
    console.log(`${j}: ${newobject[j]} `);
};

short_array.hello = "hello"
for (var i in short_array) {  // loops over all properties in objects, including things we dont want
    console.log(short_array[i])
};