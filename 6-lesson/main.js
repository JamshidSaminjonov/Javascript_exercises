//1.
//object keylaini toping
// const obj = {
//     id :1,
//     name:'sunnat',
//     surName:'lazizov',
//     "phone number":123456789
// };
// for (let i in obj)

// console.log( i);

//2.
//object valyularini raqamga tenglarini toping

// const obj = {
//     id :1,
//     name:'sunnat',
//     surName:'lazizov',
//     "phone number":123456789
// };
// for (let i in obj){
// if(typeof(obj[`${i}`])=='number'){
//     console.log(obj[`${i}`])
// }
// }
//3
//object valyularining boolen tipidagilanini qaytaring faqat keylari bilan
// const obj = {
//     id :1,
//     name:'sunnat',
//     surName:'lazizov',
//     "phone number":123456789,
//     online:true,
//     ofline:false,
// };
// for (let i in obj){
// if(typeof(obj[`${i}`])=='boolean'){

// }else delete obj[`${i}`];
// }
// console.log(obj);
//4.
//nested object ichidagi barcha age larni qiymatini qoshib berish
// const obj = {
//   age: 145,
//   name: "sunnat",
//   surName: "lazizov",
//   "phone number": 123456789,
//   online: true,
//   ofline: false,

//   child: {
//     age: 45,
//     surName: "lazizov",
//     "phone number": 123456789,
//     online: true,

//     nephew: {
//       age: 25,
//       surName: "lazizov",
//       "phone number": 123456789,
//       online: true,
//     },
//   },
// };

// console.log(obj.age + obj.child.age + obj.child.nephew.age);
//4.
//
// const user={};
// user.name = 'piter'
// user.surName = 'parker'
// user.name = 'sem'
// delete user.name
// console.log(user)
//6.
//
let schedule = {};
const isEmpty = (obj)=>{
return Object.keys(obj).length == 0;
   
};
console.log(isEmpty(schedule))
 schedule.name = 'sattor'
 console.log(isEmpty(schedule))

// console.log(Object.keys(schedule).length == 0)