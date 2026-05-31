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

/* let msg = function():string{
 return "Typescript"   
}

console.log(msg()) */


//Example 2  : Anonymaous function with parameter and return type 

/* let multiply = function(a:number ,b:number):number{
 return a *b   
}

console.log(multiply(10,20)) */

//Example 3 : Anonymaous function with rest parameter .

/* let AddNumbers = function(...nums:number[]){
    let i;
    let sum: number=0;
    for(i=0;i<nums.length;i++){
        sum = sum + nums[i]
    }
    console.log("sum of the number is ",sum)
    return sum;
} 
console.log(AddNumbers(1,2,5,7));
console.log(AddNumbers(2,4,6,8));
console.log(AddNumbers(1));
 */
// Example 4 : Anonymaous function with rest parameter and with multiple data type //no limit for passing parameter and multiple type

/* let Findelement= function(...ele:(number | string)[]):number{
return ele.length;
}
console.log(Findelement("smith",3 ,"jack",5, "scott",4));  //o/p ==>6
console.log(Findelement(2858,3 ,4097,5,4));                //o/p ==>5
console.log(Findelement("smith" ,"jack", "scott","abc"));  //o/p ==>4 */


// Example 5 : Anonymaous function with Option parameter

/*  let showDetails = function(id:number,name:string,email?:string):void{   //? is used make any variable to optional
    console.log("ID",id);
    console.log("Name",name);
    if(email !== undefined){
        console.log("Email",email);
    }
}  

showDetails(101,"smith")              //o/p ==> 101 smith   
showDetails(101,"smith","email.com")  //o/p ==> 101 smith email.com
showDetails(101,"smith")       */        //o/p ==> 101 smith   

// Example 6 : Anonymaous function with default parameter

let calculateArea = function(radius:number,pi:number=3.14):number{  //default value of pi is 3.14
    return pi * radius * radius;
}

console.log(calculateArea(5))        //o/p ==> 78.5
console.log(calculateArea(6,3.14)) //o/p ==> 78.54