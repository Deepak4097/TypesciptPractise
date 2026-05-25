/* for (let i:number=1;i<=10;i++){
    console.log(i)
} */

//print even 1..10

/* for(let i=2;i<=10;i+=2){        //method 1
console.log(i)
} */

/* for (let j=1;j<=10;j++)  //method 2
{
    if(j%2==0){
        console.log(j)
    }
} */

/* for (let i:number=10;i>=1;i--){
    console.log(i)
}  */

// whem put semicolon in for 

let k:number;

for(k=1;k<=10;k++);
console.log(k)  // print the 11 because it will iterate 10 times and there is no block of statement but condition true so went inc/dec block
                //and after the all iteration of k value is became 11 that we printe on console
                 