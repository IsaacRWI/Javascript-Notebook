// immediately invoked function expressions

(function (name) {  // function defining as normal but in brackets
    console.log("hello", name);
})("john");  // last () calls on the function immediately after its invoked
// function will log hello john