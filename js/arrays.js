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