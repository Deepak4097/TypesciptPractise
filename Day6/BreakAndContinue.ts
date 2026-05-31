// Break

for (let i=1;i<=10;i++){
    if(i==5){
        break  //break the loop when the i==5  
        }
    console.log(i)
}

//contine 
/* for(let m =1; m<=10;m++){
    if(m==5){
        continue;  //skip only when m==5

    }
   console.log(m) 
    } */

console.log("Skipping odd number")
    for(let m =1; m<=10;m++){
    if(m==3 || m==5 ||m==7 ||m==9){
        continue;  //skip only when m==5

    }
   console.log(m) 
    }