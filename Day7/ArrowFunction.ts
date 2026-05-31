// Arrow function is also know as lambda function 
// Arrow /lambda funtion refers to anonymous function in programming language
//Arrow functions are consice mechanism to represent anonymous function
// function keyword is itself optional or not required in arrow function

/* syntax of arrow function
let variable = (parameters) => {

//function body /block of code
}
variable();  //function call

// 3 types of Arrow / lambda function

/* 1) Parameters
2) The fat arrow notation (=>)
3) statement 
 */

// Example 1 : Arrow function without parameter and return type 

let greet = (): void => {
    console.log("Welcome to Typescript")
}
greet();

// Example 2 : Arrow function with parameter and return type

let addNum = (a: number, b: number): number => {
    return a + b;
}
console.log(addNum(10,20));

//Example 3 : Arrow function with implicit return   
// when you have single statement in function body then you can remove the curly braces and return keyword

let multiplyNum = (a: number, b: number) => a * b;
let divideNum = (a: number, b: number) => a / b;
console.log(multiplyNum(10,20));
console.log(divideNum(10,20));

//Example 4 : Arrow function with optional parameter
// when you make first parameter is optional then you have next all parameter also optional otherwise you will get error
let printDetails = (name: string, age?: number,email?: string) :void => {
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    if (age !== undefined) {
        console.log(`Age: ${age}`);
    }
};
printDetails("Alice", 25, "alice@example.com");
printDetails("Bob");

//Example 5 : Arrow function with Defau parameter

let calculateDiscount = (price: number, rate: number = 10): void => {
    let discount :number=price*rate
    console.log('Discount:', discount);
}   
calculateDiscount(100); // Uses default discount of 10
calculateDiscount(100, 20); // Uses provided discount of 20

// Example 6 : Arrow function with rest parameter

let addNums=(...nums:number[])=>{
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
    }       
    console.log("Sum of the numbers is ",sum)
}
addNums(1,2,3,4,5);

//Examplet 7 : Arrow function with multiple data type and rest parameter

let countElements =(...elements: (string | number)[])=>{
    console.log("Total number of elements is ",elements.length)
}
countElements("apple", 42, "banana", 3.14, "cherry", 100);
countElements(1, 2, 3, "orange", "james");