//Also called Unamed or nameless function

/*
An Anonymous function is a function that doesn't have name Instead it is assigned to variable,
that variable acts as function name

syntax :
let variable = function(parameters)  //function declaration
{
function body
}

variable();  //function call
*/

//Example 1 : Anonymaous function 

let msg = function():string{
 return "Typescript"   
}

console.log(msg())


//Example 2  : Anonymaous function with parameter and return type 

let multiply = function(a:number ,b:number):number{
 return a *b   
}

console.log(multiply(10,20))