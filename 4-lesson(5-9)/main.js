// 1.
// minimalni topuvchi function ikkita son orasida
const min=(a,b)=>{
    if(a>b)return a
    else return b;
}
   console.log( min(15,-85))

// 2.
// powni hisoblovchi function
const pow=(a,b)=>{
    let calcPow = 1;
    for(i=1; i<=b;i++){
        
        calcPow *=a;
    }
    return calcPow;
}
 console.log(pow(3,3));
//  3.
// tub sonni topuvchi foor
 let counter=0;
for(i=2; i<=100; i++){
    for(j=2;j<=i;j++){
        
        if (i%j==0){
            counter++;
        }
    }
    if(counter==1){
        console.log('tub son:'+i)
    }
}