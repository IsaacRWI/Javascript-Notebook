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
short_array = [1, 2, 3];
console.log(short_array);