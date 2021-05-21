// here we will export the functions and variables of other file which is lib.js

// nodejs has given this functionality that we will see 

let libfileObj = require("./lib.js");
console.log(libfileObj.val);
libfileObj.func();