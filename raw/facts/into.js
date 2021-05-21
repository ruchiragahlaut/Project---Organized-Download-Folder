//no main
console.log("hello PP:");
//variable
let varName;
//statiscally defined -> variables types => statiscally typed
//int varName
// initialize

// "LET" is a type which allow variable to store different types of data types and overwrite each other 
// and take the last one.
// It is case-sensitive
// convention -> java -> camel casing
// no indentation problem


varName =10;
varName =1.2;
varName ="string";
varName = true;
varName = null;
console.log("i am a",varName);

// 10 days javascript -> (brenden eich) -> netscape browser -> (java syntax , easy to code)
// javascript -> java  -> loops -> conditional -> break return functions arrays classes

let number =23;
let flag = true;
for(let div =2; div*div<=number;div++){
    if(number%div==0){
        flag = false;
        break;
    }
}
if(flag==true){
    console.log(number,"is prime");
}
else{
    console.log(number,"is not prime");
}
