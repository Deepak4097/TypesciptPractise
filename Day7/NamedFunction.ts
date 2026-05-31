/* Types functions

1 named function    --> function with name  parameter is optional
        syntax : function functionName(parameters): returnType{    //declaration of function
                    // block of code
                }

            functionName();  // invoking/ calling of function


2 un named/ananmous function --> function without name
3 arrow function */


// 1 Named function with no parameters and no return type

function display():void{
    console.log("welcome to function concepts !");
}
display();  // invoking the function

// 2 Named function with parameter and return type

function addNumber(X:number,Y:number):number{
    return X+Y;
}
console.log(addNumber(2,5));

// 3 Named function with rest parameter .
// This function don't restrict the number of values that can pass to function

function AdditionNumbers(...nums:number[]){
    let i;
    let sum: number=0;
    for(i=0;i<nums.length;i++){
        sum = sum + nums[i]
    }
    console.log("sum of the number is ",sum)

} 
AdditionNumbers(1,2);
AdditionNumbers(1,2,5,7);
AdditionNumbers(2,4,6,8);
AdditionNumbers(1);


//4 Named function with rest parameter and with multiple data type //no limit for passing parameter and multiple type

function FindElement(...ele:(number | string)[]):number{
return ele.length;
}
console.log(FindElement("smith",3 ,"jack",5, "scott",4));  //o/p ==>6
console.log(FindElement(2858,3 ,4097,5,4));                //o/p ==>5
console.log(FindElement("smith" ,"jack", "scott","abc"));  //o/p ==>4

//5 Named function with Option parameter

function displayDetails(id:number,name:string,email?:string):void{  //? is used make any variable to optional  

    console.log("ID",id);
    console.log("Name",name);
    if(email!=undefined){    //just added condition when email is not passed while calling function so we can't see the as undefined word
    console.log("Email",email);
    }
}
displayDetails(101,"john","email.com")  //o/p ==> 101 john email.com
displayDetails(101,"john")              //o/p ==> 101 john  


//6 Named function with Default parameter 
function calculateDiscount(Price:number,Rate:number=0.5):void{  //passing 0.5 as default value so when we not pass rate in function call it'll take 0.5 by default
let Discount:number = Price*Rate  
console.log("Discount amount is ",Discount)
}
calculateDiscount(1000,0.30)
calculateDiscount(1000)