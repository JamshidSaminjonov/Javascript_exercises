//**********SHART OPERATORI*************/
//1.
//3ta sonni nechtasi juft ekanligini topish
// let a = prompt(),
//   b = prompt(),
//   c = prompt(),
//   counter = 0;
// a % 2 == 0
//   ? counter++
//   : b % 2 == 0
//   ? counter++
//   : c % 2 == 0
//   ? counter++
//   : console.log("Hammmasi toq");
// console.log("juft sonlar soni: " + counter);\
//2.
// a va b sonlar o'zaro teng bulsa  0 chiqarsin , aks holda teskarisini chiqarsin
// let a = +prompt(),
//   b = +prompt();
//   if(a!=b){
//     a= a+b;
//     b=a;
//      console.log("a:"+a,'b:'+b);
//   }else console.log('0');
//   455
// 3.
//sonlarni 1-999 gacha "2xonali juft son",'uch xonali toq son' deb yozish
let a = +prompt(),
  counter = 0;
 
if (a < 10) {
    if(a % 2==0){
        console.log('Bir xonali juft son')
    }else console.log('Bir xonali toq son');
} else if (a<100) {
    if(a % 2==0){
        console.log('Ikki xonali juft son')
    }else console.log('Ikki xonali toq son');
} else if (a <1000) {
    if(a % 2==0){
        console.log('Uch xonali juft son')
    }else console.log('Uch xonali toq son');
} else console.log("Bu son 999dan katta!");
