//file folder
//view flat

//file folder 
//let fs  = require("fs");
//let content = fs.readFileSync("gtree.js");
//console.log("content is"+content);

// readFileSync is used for reading the file -- 
// below example

let path = require("path");
let fs = require("fs");

function isFileorNot(dirpath){
    return fs.lstatSync(dirpath).isFile();
}

function listContent(dirpath){
    return fs.readdirSync(dirpath);
}


function viewFlat(dirpath,toPrint){
    //console.log(dirpath);
    let isFile = isFileorNot(dirpath);
    if(isFile==true){
        console.log(toPrint+"*");
    }
    else{
        //console.log(toPrint);
        console.log(toPrint);
        let content = listContent(dirpath);
        // recurison
        //console.log(content);
        for(let i = 0; i<content.length;i++){
            let childPath = dirpath+"\\"+content[i];
            viewFlat(childPath,toPrint  +"\\"+content[i]);
        }
    }
}

function viewTree(dirpath,indent){
    //console.log(dirpath);
    let isFile = isFileorNot(dirpath);
    if(isFile==true){
        //let strArr = dirpath.split("\\");
        //let toPrint = strArr.pop();
        console.log(indent,path.basename(dirpath)+"*");
    }
    else{
        // jugaad ----
        //console.log(toPrint);
        //let strArr = dirpath.split("\\");
        //let toPrint = strArr.pop();
        // main function - path 
        console.log(indent,path.basename(dirpath));
        let content = listContent(dirpath);
        // recurison
        //console.log(content);
        for(let i = 0; i<content.length;i++){
            //let childPath = dirpath+"\\"+content[i];
            let childPath =  path.join(dirpath,content[i]);
            viewTree(childPath,indent+"\t");
        }
    }
}

let input = process.argv.slice(2);
let strArr = input[0].split("\\");
let toPrint = strArr.pop();
//viewFlat(input[0],toPrint);
viewTree(input[0],"")