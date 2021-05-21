//view
    //flat
    //tree
//organize
//help

let input = process.argv.slice(2);
//console.log(input);

let viewfinObj = require("./commands/view");
let helpfinobj = require("./commands/help");
let input = process.argv.slice(2);

let cmd = input[0]
switch(cmd){
    case "view":
        // view as tree
        // view as flat
        viewfinObj.viewfn(input[1],input[2])
        break;
    case "organize":
        console.log("orgaize command exeucted");
        break;
    case "help" :
        helpfinobj.helpfn();
        break;
    default :
        console.log("Wrong command . Type help to see the command list");
}
