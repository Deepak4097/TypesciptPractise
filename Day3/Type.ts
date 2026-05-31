/*
Data type

1) Primitive (Builtin)
    A)Number
    B)String
    C)undefined
    D)Null
    E)union of
    F)Any
    G)void
2)Non primitive(object)
    A) class
    B) Array
    C) interface
    D) Tuples
    E) Functions

*/

// 1)  Numbers ==> for both int and float and big nums
/* 
let age:number=30;
let salary=3000.15
let big=12342645345435645624878

console.log("Age",age);
console.log("SALARY",salary);    
console.log("BIG",big);

console.log(typeof age)
console.log(typeof salary)
console.log(typeof big) */

// 2) Strings ==> group/sequence of char can be respresent  1) '' 2) "" 3)`` ==>for paramerterized value

/* let fname:string="Smith"
let lname:string='jack'
let mname:string=`Holaa,${fname} ${lname}`  //${varname}=> used to access the variable 

console.log(fname)
console.log(lname)
console.log(mname) */

// 3 )Boolean ==> To represent true or false

/* let isStudent :Boolean= true;
let hasJob:Boolean= false;

console.log("is student ?",isStudent)
console.log("Has job ?",hasJob)
console.log(typeof hasJob)
 */
// 4) Null & undefined ==> special types for absence of data 

let emptyValue :null =null

//emptyValue =10; //only allowed null 

let notAssigned :undefined=undefined
//notAssigned=20   //only allowed Undefined

let price :number

console.log(notAssigned)
//console.log(price)  //this will print as undefined 
console.log(emptyValue)

// 7)ANY ==> it has capability to voilet the rule of typesafety use carefully (superset of all datatype which can hold all type of data)

let value :any="Welcome"
value=352
console.log(value)

// Union Type
let id:number | string |boolean 
/* 
id ="Afgh434"
console.log(id) */


/* id ="Boolean"
console.log(id) */


id ="23454"
console.log(id)

// 8) void ==> used for functions not for variable it's use optional and used for the function which doesn't any value

function sum():void //here in this function we are not returning anything
{
console.log("Hello") 
}
sum()

function showsum(x:number ,y:number):void
{
    console.log(x+y)
}
showsum(1,2)