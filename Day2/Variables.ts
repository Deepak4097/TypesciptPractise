// Variables : A container which store /holds data

// 3 Types of variable
/* 1) var  ==>we don't use this in modern js/ts .Avoid var because of it has functional scope and can lead unexpected
 2) let    ==>use let when you need a variable that can change
  3) const ==>use const when the variable should not change
  */


  // syntax : Keyword variableName : data Type (optional)= value

// Ex1 var age : number =30
// Ex 2 var age =30

/* var age =30
console.log(age);
 */
// Ts have 2 scope

//1) functional scope --> area of funtion()
//2) Block Scope  ==> block of {}


//Ex1
/* 
function Varscope(){//functional
    if(true){  //block
        var msg ="hello"
        console.log(msg);
    }
            console.log(msg);
}

Varscope()
 */

// EX2 
/* 
function Blockscope(){//functional
    if(true){  //block
        let msg ="hello"
        const greet ="Goodbye"
        console.log(msg);
        console.log(greet);
    }
     //       console.log(msg); ==> can not access because we are accessing out of the block
      //      console.log(greet);
}

Blockscope() */


// Ex3

/* function scopeDiff(){
    if(true)
    {
        var num =10;
        let num2 =20;
        const num3 =30;

       // console.log(num);
          //      console.log(num2;
            //            console.log(num3);


    }

     console.log(num);
               // console.log(num2;  ==> can not access because out of the block we are accessig
                 //       console.log(num3);
}
scopeDiff();
 */


/*                                        var                              letv                                            const
1)scope of variable              
2)Declaration /Assignment 
3)ReDeclaration
4)Reassignment
5)Hoisting

2)Declaration /Assignment :
Example ==> var can be declared without initialization
var x;   => declartion
console.log(x)  => gives undefined 
x=30
console.log(x)  ==>gives 30 because of initialization 


Example of let
let y;
console.log(y)  => gives undefined 
y= 10
console.log(y)  =>gives 10 because of initialization

Example of const ==> const must be initialize at the time of declaration
const z=; ==> gives complite time error
console.log(z)  => gives runtime error  
const a= 10
console.log(y)  =>gives 10 because of initialization


*/

const a=10;
console.log(a)  
//y= 30
//console.log(y)