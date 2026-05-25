// if condition

/*
if(condition){

// statements

}
*/

//Example of if 
/* 
let Age:number=20;

if(Age>=18){
    console.log("Eligible for vote")

}
 */
//Example of if...else
/* 
let num:number=21;

if(num%2==0){
    console.log(`${num} Even number`)
}
else{
    console.log(`${num} Odd number`)
} */

//example Nested if else condition
/* 
let Marks:number=60;
if(Marks>=90 && Marks<=100){
console.log(`${Marks} Grade A`);
}
else if(Marks>=75 && Marks<90){
    console.log(`${Marks} Grade B`);
}
else if(Marks>=60 && Marks<75){
    console.log(`${Marks} Grade C`)
}
else{
    console.log(`${Marks} Grade F`)
} */

//Example if ..eles if 

/* let Browser:string='Safari'

if(Browser==="Chrome")
{
    console.log('Broser is chrome')
}
else if(Browser==="firefox")
{
    console.log("Browser is firefox")
}
else if(Browser==="Safari"){
console.log("Browser is Safari")    
}
else{
    console.log("Some other Browser")
} */

//Switch case statement
/*
switch(Exp)
{
 case 1:
    stmt
break;

 case 2:
    stmt
break

 case n:
    stmt
break

defaul :
stmt

}
*/

// Example switch case

/* let day:number=5;

switch (day) {
    case 1:
    console.log("Monday")
        break;

    case 2:
    console.log("Tuesday")
        break;
    
    case 3:
    console.log("Wednesday")
        break;
           
    case 4:
    console.log("Thursday")
        break;
        
    case 5:
    console.log("Friday")
        break;

    case 6:
    console.log("Saturday")
        break;    
    
    case 7:
    console.log("Sunday")
        break;

    default:
    console.log("Not any day")
    
}
 */

let x:number=10 ,y:number=5;

switch(x-y)
{
    case 0:
        console.log("Result is zero");
       break;
    
       case 5:
        console.log("Result is Five");
       break;
       
         case 10:
        console.log("Result is Ten");
       break;
    default: console.log("No match found")
}