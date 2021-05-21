// objects -> key : value pairs

// car -> blueprint (classes) then we create instance (a new car)(object) in java

// car -> prototype (object) -> instance(object) (Javascript)


//object literal

let into = {
    name : "Ruchira",
    lastname : "Gahlaut",
    address : {
        state : "UP",
        city : "Mathura",

    },
    age :20,
    isStudent:true,
    subjects:["computerscience","civil"],
    sayHi(){
        console.log("hi ruchi")
        return "good student ruchi";
    }


};
//console.log("name is ",into.name);
//console.log("your city is ",into.address.city);
//onsole.log("your subject is ",into.subjects[0]);
console.log("your welcome is ",into.sayHi());

//same ->

//et exact_same = into.sayHi();
//console.log("your welcom is ",exact_same);

// now carefully check the order how it is printing the lines in function call
// here first it will print "hi ruchi" then "your welcome is" then "good student ruchi"

console.log(into);

// SET UPDATE
into.subjects = ["os","cn"];
into.isStudent = false;
//delete
console.log("\\\\\\\\\\\\\\\\\\\\");
//console.log(into.key);
// there is not key abc in object so it will give undefiend
console.log(into);

// for in loop
for(let key in into){
    console.log("key :",key,"|| value : ",into[key]);
    //console.log("key :",key,"|| value : ",into.key);
    
}



// IFEE , expression , statement 
