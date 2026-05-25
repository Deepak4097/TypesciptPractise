/*

*/
/* 
let a :number =10
let b: number =20 
 */
let a: number =10 ,b:number=30  //one liner to declare 2 let in 1 stmt
//Arithmatic operator

/* console.log(a+b);//addition
console.log(b-a); //subtraction
console.log(a*b);//multiplication
console.log(a/b); //divison =return quetioent 
console.log(a%b); //moduleo = return remainder
console.log(5**5);  //exponential */

//Assignment operator =

/* a=10 ;
b=5;
console.log(a=a+b) //initial value of a =10 b =5 first we adding a+b and result adding to a 10+5 reassigned to a
console.log(a+=b); //above statement can be like this format as well now a =value 15 b value 5 

console.log(a+=b);//addition
console.log(a-=b); //subtraction
console.log(a*=b);//multiplication
console.log(a/=b); //divison =return quetioent 
console.log(a%=b); //moduleo = return remainder
console.log(5**5);  //exponential  */

//Relationaltional operater == return boolean value 
a=10 ; b=5;

/* console.log(a<b);// false
console.log(a>b); // True
console.log(a<=b);// False
console.log(a>=b); // true
console.log(a==b); // false ==Assignmeent /camparion operator
console.log(a!=b) //True
 */
/* let num1 :any=10; //typeof = number
let num2 :string="10" //typeof = string
console.log(num1==num2)// true -->only compare the values ignore the datatypes
console.log(num1===num2);  // false -->compare the values along with datatypes
 */
//Lgical operators && || ! -> return boolean values //work between boolean variables

let b1 :boolean =true,b2:boolean=false

console.log(b1 && b2)  //false
console.log(b1 || b2 ) //true
console.log(!b1) //false
console.log(!b2); //true        
 

//combination of logical and Relational operators

console.log(20>10 && 10>5);// 20>10-->true 10 >5 -->true so both true using && then o/p True
console.log(10<20 || 5>10); //10<20 -->true 5>10 false so one of them is true usig || o/p True