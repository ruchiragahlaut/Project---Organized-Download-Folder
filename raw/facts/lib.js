// if i want code of one file in another file that is called structring.
// we can export variables and function not whole file 
//module.export can help in exporting.


let a =10;
function fn (){
    console.log("Hello");
}

function fnn (){
    console.log("byee");
}
// node js given this fucntionality
module.exports ={

    val : a,
    func: fn
}