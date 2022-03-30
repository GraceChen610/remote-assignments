// JSON版
let argsJs = {
    "op" : "-",
    "n1" : 3,
    "n2" : 4
}
// console.log(argsJs); // { op: '+', n1: 3, n2: 4 }


// class版
class ArgsClass {
    constructor(op, n1, n2){
        this.op = op,
        this.n1 = n1,
        this.n2 = n2
    }
}
const argsC = new ArgsClass ("+",3,4); //["+","-"] // console.log(Array.isArray(args.op)); 
// console.log(args); //ArgsClass { op: '+', n1: '3', n2: '4' }
// console.log(args.op); // +

function calculate(args){
    let result = 0;
    if(args.op==="+"){
        result=args.n1+args.n2;
    }else if(args.op==="-"){
        result=args.n1-args.n2;
    }else{
        result="Not supported";
    }
    //return result; //result is not defined
    console.log(result)
};
calculate(argsJs);
calculate(argsC);
    // Try to call calculate function correctly
    /*
    For example, if we have an add function like this:
    function add(args){
    return args.n1+args.n2;
    }
    We can call it by passing an object created by JSON literal:
    add({n1:3, n2:4}); // your first way
    You should apply constructor or class as another way to create a proper object.
    add(用類別或建構式產生的物件); // your another way
    */
